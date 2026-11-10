import { tools, type ToolId, type TopicId } from '../config/focus';

/** Tool ids whose aliases match any of the given tags (project tags, a stack list, a skill label...). */
export function toolsFrom(texts: readonly string[]): ToolId[] {
  const found = new Set<ToolId>();
  for (const raw of texts) {
    const text = raw.trim().toLowerCase();
    for (const tool of tools) {
      const hit = tool.match.some((m) => (m.startsWith('=') ? text === m.slice(1) : text.includes(m)));
      if (hit) found.add(tool.id);
    }
  }
  return [...found];
}

export type FocusKind = 'kpi' | 'story' | 'projects' | 'more' | 'experience' | 'skills' | 'credentials';

interface FocusInput {
  kind: FocusKind;
  topics: readonly TopicId[];
  /** Tags, stack entries or labels to derive tools from. */
  from?: readonly string[];
  /** Explicit tool ids, used instead of `from`. */
  tools?: readonly ToolId[];
  /** Project type, so the type chips can filter it. */
  type?: string;
  /** Never hidden by the filter (for example, education). */
  always?: boolean;
}

/** The data attributes the filter script reads. Spread them onto the element: <li {...focusAttrs({...})}>. */
export function focusAttrs(i: FocusInput) {
  const toolIds = i.tools ?? toolsFrom(i.from ?? []);
  return {
    'data-f-item': '',
    'data-f-kind': i.kind,
    'data-f-topics': i.topics.join(' '),
    'data-f-tools': toolIds.join(' '),
    ...(i.type ? { 'data-f-type': i.type } : {}),
    ...(i.always ? { 'data-f-always': '' } : {}),
  };
}
