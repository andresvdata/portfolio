/**
 * Astro's file() loader returns entries sorted by id. This returns the ids in the order they are written in
 * the YAML file, so "the order in the file is the order on the page".
 */
export function fileOrder(rawYaml: string): Map<string, number> {
  const ids = [...rawYaml.matchAll(/^- id:\s*["']?([^"'\s#]+)/gm)].map((m) => m[1]);
  return new Map(ids.map((id, i) => [id, i]));
}
