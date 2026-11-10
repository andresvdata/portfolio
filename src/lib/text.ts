export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Escapes text and turns "[NEED DETAIL: ...]" markers into a highlighted <mark>
 * so unfinished spots are impossible to miss in the draft.
 */
export function rich(text: string): string {
  return escapeHtml(text.trim()).replace(
    /\[NEED DETAIL:([^\]]*)\]/g,
    (_m, body: string) => `<mark class="need"><span class="need-tag">Need detail</span>${body.trim()}</mark>`,
  );
}

export const hasPlaceholder = (text: string): boolean => /\[NEED DETAIL:/.test(text);

export function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const typeLabel = {
  professional: 'Professional',
  academic: 'Academic / research',
  personal: 'Personal',
} as const;

export type ProjectType = keyof typeof typeLabel;

/** Join a path onto Astro's BASE_URL without doubling slashes. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
