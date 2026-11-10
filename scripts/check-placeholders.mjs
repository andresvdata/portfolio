#!/usr/bin/env node
/**
 * Lists every "[NEED DETAIL: ...]" marker left in the content and config.
 * Exit code is 0 unless --strict is passed, so it never blocks a deploy by default.
 *
 *   npm run check:placeholders
 *   npm run check:placeholders -- --strict
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const strict = process.argv.includes('--strict');
const roots = ['src/content', 'src/config'];
const found = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(md|ya?ml|ts)$/.test(name)) scan(p);
  }
}

function scan(file) {
  const text = readFileSync(file, 'utf8');
  const draft = /^draft:\s*true/m.test(text);
  // Placeholders can wrap over several lines inside YAML ">-" blocks, so scan the whole file.
  const re = /\[NEED DETAIL:?([^\]]*)\]/g;
  let m;
  while ((m = re.exec(text))) {
    const line = text.slice(0, m.index).split('\n').length;
    const lineText = text.split('\n')[line - 1].trim();
    if (lineText.startsWith('#')) continue; // template comments
    found.push({ file: relative(root, file), line, note: m[1].replace(/\s+/g, ' ').trim(), draft });
  }
}

roots.forEach((r) => walk(join(root, r)));
// An empty resume link is also an open item.
const site = readFileSync(join(root, 'src/config/site.ts'), 'utf8');
if (/resumeUrl:\s*''/.test(site)) {
  found.push({ file: 'src/config/site.ts', line: 0, note: 'Paste your Google Drive resume link into resumeUrl.', draft: false });
}

if (found.length === 0) {
  console.log('No open [NEED DETAIL] markers.');
  process.exit(0);
}
let lastFile = '';
for (const f of found) {
  if (f.file !== lastFile) {
    console.log(`\n${f.file}${f.draft ? '  (draft, not published)' : ''}`);
    lastFile = f.file;
  }
  console.log(`  line ${f.line}: ${f.note || '(no description)'}`);
}
const live = found.filter((f) => !f.draft).length;
console.log(`\n${found.length} open item(s), ${live} on published pages.`);
process.exit(strict && live > 0 ? 1 : 0);
