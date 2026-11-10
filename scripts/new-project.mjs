#!/usr/bin/env node
/**
 * Creates a new case study from the template, with the next free `order` number.
 *
 *   npm run new:project -- "Sales forecasting dashboard"
 *   npm run new:project -- "Sales forecasting dashboard" --type personal
 *
 * The new file starts with `draft: true`, so it is hidden from the published site until you remove that line.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/content/projects');
const types = ['professional', 'academic', 'personal'];

const args = process.argv.slice(2);
const typeIdx = args.indexOf('--type');
const type = typeIdx >= 0 ? args[typeIdx + 1] : 'personal';
const title = args.filter((a, i) => !a.startsWith('--') && i !== typeIdx + 1).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new:project -- "Project title" [--type professional|academic|personal]');
  process.exit(1);
}
if (!types.includes(type)) {
  console.error(`--type must be one of: ${types.join(', ')}`);
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/&/g, ' and ')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
const target = join(dir, `${slug}.md`);
if (existsSync(target)) {
  console.error(`Already exists: src/content/projects/${slug}.md`);
  process.exit(1);
}

const orders = readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => Number(/^order:\s*(\d+)/m.exec(readFileSync(join(dir, f), 'utf8'))?.[1] ?? 0));
const order = Math.max(0, ...orders) + 1;

const template = readFileSync(join(root, 'docs/templates/project.md'), 'utf8')
  .replaceAll('{{TITLE}}', title.replaceAll('"', '\\"'))
  .replaceAll('{{TYPE}}', type)
  .replaceAll('{{ORDER}}', String(order));

writeFileSync(target, template);
console.log(`Created src/content/projects/${slug}.md (order ${order}, draft).`);
console.log('Fill it in, then delete the "draft: true" line. Run `npm run dev` to preview it.');
