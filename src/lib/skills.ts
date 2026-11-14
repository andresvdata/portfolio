import { getCollection } from 'astro:content';

/**
 * Every skill label and evidence line credited to one column of the skills table (a job id such as "bcspca").
 * Jobs and story chapters use it so the filter finds them by any tool the skills table credits to them.
 */
export async function skillTextsFor(columnId: string): Promise<string[]> {
  const rows = (await getCollection('skills')).filter((r) => !r.data.hidden && r.data.roles[columnId]);
  return rows.flatMap((r) => [r.data.label, r.data.roles[columnId]]);
}
