// Verifies WCAG contrast for the design tokens in src/styles/tokens.css.
// Usage: npm run check:contrast
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

function readBlock(selectorStart) {
  const start = css.indexOf(selectorStart);
  const open = css.indexOf('{', start);
  const close = css.indexOf('\n}', open);
  const body = css.slice(open + 1, close);
  const out = {};
  for (const m of body.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) out[m[1]] = m[2];
  return out;
}

const light = readBlock(':root {');

const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// [foreground token, background token, minimum ratio, what it is]
const pairs = [
  ['text', 'bg', 4.5, 'body text on page'],
  ['text', 'panel', 4.5, 'body text on panel'],
  ['text', 'panel-2', 4.5, 'body text on raised panel'],
  ['text-muted', 'bg', 4.5, 'muted text on page'],
  ['text-muted', 'panel', 4.5, 'muted text on panel'],
  ['text-muted', 'panel-2', 4.5, 'muted text on raised panel'],
  ['accent', 'bg', 4.5, 'accent text/links on page'],
  ['accent', 'panel', 4.5, 'accent text/links on panel'],
  ['on-accent', 'accent', 4.5, 'text on primary button'],
  ['need-text', 'need-bg', 4.5, 'placeholder text'],
  ['focus', 'bg', 3, 'focus ring on page'],
  ['focus', 'panel', 3, 'focus ring on panel'],
  ['border-strong', 'panel', 3, 'control borders on panel'],
  ['c-bi', 'panel', 3, 'category: BI (graphics)'],
  ['c-research', 'panel', 3, 'category: research (graphics)'],
  ['c-eng', 'panel', 3, 'category: engineering (graphics)'],
  ['c-edu', 'panel', 3, 'category: education (graphics)'],
  ['c-pub', 'panel', 3, 'category: publication (graphics)'],
  ['type-professional', 'panel', 3, 'type: professional (graphics)'],
  ['type-academic', 'panel', 3, 'type: academic (graphics)'],
  ['type-personal', 'panel', 3, 'type: personal (graphics)'],
  ['map-arc', 'map-sea', 3, 'map arc on sea'],
  ['c-research', 'map-sea', 3, 'remote arc and data pin on sea'],
  ['c-research', 'panel', 3, 'data pin outline and remote-project accent on panel'],
  ['map-land', 'map-sea', 1.2, 'land vs sea (decorative)'],
];

let failures = 0;
for (const [name, theme] of [['light', light]]) {
  console.log(`\n${name.toUpperCase()} THEME`);
  for (const [fg, bg, min, what] of pairs) {
    if (!theme[fg] || !theme[bg]) { console.log(`  ?? missing token for ${fg}/${bg}`); failures++; continue; }
    const r = ratio(theme[fg], theme[bg]);
    const ok = r >= min;
    if (!ok) failures++;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${what}  [${fg} ${theme[fg]} on ${bg} ${theme[bg]}]`);
  }
}
console.log(failures ? `\n${failures} pair(s) below target.` : '\nAll pairs meet their targets.');
process.exit(failures ? 1 : 0);
