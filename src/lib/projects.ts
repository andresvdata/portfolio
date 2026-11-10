import { getCollection } from 'astro:content';

/**
 * All case studies, in display order.
 * Projects with `draft: true` are hidden from the built site but still appear under `npm run dev`,
 * so you can preview a page while you are still writing it.
 */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
