import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { topicIds, toolIds } from './config/focus';

/**
 * Every factual claim carries a `source` so the portfolio stays traceable.
 * If you add a claim without one, `npm run build` fails on purpose.
 *
 * Source codes (see docs/SOURCE_MAP.md):
 *   RES  = Master.docx (master resume)
 *   LI   = Profile.pdf (LinkedIn export)
 *   OLD  = the previous portfolio (used as a source only; this site never links to it)
 *   GH   = a public repository on github.com/andresvdata (README, files)
 *   ABS  = published abstract (DOI)
 *   POSTER = SmartEnerx team datafolio poster
 *   ASK  = confirmed by Andres in a review session
 */
const source = z.string().min(3, 'Add a source, e.g. "RES · BC SPCA bullet 2".');

const textWithSource = z.object({ text: z.string(), source });

const projectType = z.enum(['professional', 'academic', 'personal']);

/** What kinds of work an item shows. Drives the focus filter on the home page (see src/config/focus.ts). */
const topics = z.array(z.enum(topicIds)).min(1).max(4);
/** Tool ids for items that have no tag list to derive tools from. */
const toolList = z.array(z.enum(toolIds)).default([]);

const evidence = z.object({
  kind: z.enum(['image', 'link', 'note']),
  label: z.string(),
  href: z.url().optional(),
  src: z.string().optional(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

const flowStage = z.object({ label: z.string(), nodes: z.array(z.string()).min(1) });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: projectType,
    org: z.string(),
    /** Free text, e.g. "2024 – 2025". Numbers such as 2024 are accepted too. */
    period: z.coerce.string(),
    /** Lower numbers appear first. `npm run new:project` fills in the next free number. */
    order: z.number(),
    /** Set to true to hide a project while you are still writing it (it still shows in `npm run dev`). */
    draft: z.boolean().default(false),
    summary: z.string(),
    tags: z.array(z.string()).min(1),
    /** Which kinds of work this shows; the home-page filter uses it. See src/config/focus.ts. */
    topics,
    /** Optional headline number for the card and the result section. */
    metric: z.object({ value: z.string(), label: z.string(), source }).optional(),

    situation: z.string(),
    challenge: z.string(),
    role: z.object({
      owned: z.array(z.string()).default([]),
      /** Leave out for solo work; the page then shows only "What I owned". */
      team: z.array(z.string()).default([]),
    }),
    approach: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
    result: z.object({
      summary: z.string(),
      points: z.array(textWithSource).default([]),
    }),
    /** Optional data-flow diagram. Omit it and the section is skipped. */
    flow: z
      .object({
        title: z.string(),
        stages: z.array(flowStage).min(2),
        foundation: z.array(flowStage).optional(),
        note: z.string().optional(),
      })
      .optional(),
    /** Screenshots, links and notes. Omit it and the section says why nothing is shown. */
    evidence: z.array(evidence).default([]),
    reflection: z.string().optional(),

    /** Where each part of the story comes from. */
    sources: z.array(source).min(1),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    org: z.string(),
    location: z.string(),
    /** true = keep the file but do not show this job. */
    hidden: z.boolean().default(false),
    domain: z.enum(['bi', 'research', 'engineering']),
    order: z.number(),
    topics,
    phases: z
      .array(
        z.object({
          role: z.string(),
          kind: z.string(),
          start: z.string().regex(/^\d{4}-\d{2}$/),
          end: z.string().regex(/^(\d{4}-\d{2}|present)$/),
          /** Text shown instead of exact months when sources disagree. */
          display: z.string().optional(),
        }),
      )
      .min(1),
    /** One line only. The full detail lives in the resume and on LinkedIn. */
    summary: z.string(),
    summarySource: source,
    stack: z.array(z.string()).min(1),
    project: z.string().optional(),
    sourceNote: source,
  }),
});

const highlights = defineCollection({
  loader: file('./src/content/data/highlights.yaml'),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    context: z.string(),
    topics,
    tools: toolList,
    bar: z.object({ kind: z.enum(['fill', 'remaining']), value: z.number() }).optional(),
    source,
  }),
});

const story = defineCollection({
  loader: file('./src/content/data/story.yaml'),
  schema: z.object({
    order: z.number(),
    period: z.string(),
    org: z.string(),
    title: z.string(),
    text: z.string(),
    topics,
    tools: toolList,
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    source,
  }),
});

/** Columns of the skills table (one per job, plus "Projects and training"). Order = file order. */
const skillColumns = defineCollection({
  loader: file('./src/content/data/skill-columns.yaml'),
  schema: z.object({
    label: z.string(),
    /** Shorter name used on phones. Defaults to the label. */
    short: z.string().optional(),
    years: z.string().default(''),
    hidden: z.boolean().default(false),
  }),
});

const skills = defineCollection({
  loader: file('./src/content/data/skills.yaml'),
  schema: z.object({
    /** Optional. Rows are shown in file order; set `order` only to override it. */
    order: z.number().optional(),
    group: z.string(),
    label: z.string(),
    topics,
    /** Column id (from skill-columns.yaml) → evidence text. Leave a column out when there is no evidence. */
    roles: z.record(z.string(), z.string()),
    /** true = keep the row in the file but do not show it. */
    hidden: z.boolean().default(false),
    source,
  }),
});

const pins = defineCollection({
  loader: file('./src/content/data/pins.yaml'),
  schema: z.object({
    /** base = where I lived, worked or studied. data = where a remote project's data came from. */
    kind: z.enum(['base', 'data']),
    label: z.string(),
    /** true = keep the place in the file but do not show it on the map. */
    hidden: z.boolean().default(false),
    lon: z.number(),
    lat: z.number(),
    /** Lines drawn from this pin to another pin. */
    arcs: z.array(z.object({ to: z.string(), kind: z.enum(['move', 'remote']) })).default([]),
    entries: z
      .array(
        z.object({
          /** A layer id from src/config/map.ts (work, education, projects by default). */
          layer: z.string(),
          /** true = keep the entry in the file but do not show it. */
          hidden: z.boolean().default(false),
          text: z.string(),
          /** Short name; when set, the entry is also listed in the remote-projects strip. */
          title: z.string().optional(),
          /** A case-study id, or "more:<id>" to jump to a row in the smaller-projects list. */
          project: z.string().optional(),
        }),
      )
      .min(1),
    source,
  }),
});

const credentials = defineCollection({
  loader: file('./src/content/data/credentials.yaml'),
  schema: z.object({
    kind: z.enum(['publication', 'education', 'certificate', 'accomplishment']),
    order: z.number(),
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.string(),
    note: z.string().optional(),
    href: z.url().optional(),
    hrefLabel: z.string().optional(),
    /** Leave empty for items that should always show (education, accomplishments). */
    topics: z.array(z.enum(topicIds)).default([]),
    source,
  }),
});

const more = defineCollection({
  loader: file('./src/content/data/more.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    type: projectType,
    period: z.coerce.string(),
    blurb: z.string(),
    tags: z.array(z.string()).min(1),
    topics,
    /** Short method notes, written for this site. */
    details: z.array(z.string()).default([]),
    /** Public links only (repositories, files). Leave empty when there is nothing public to link to. */
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    source,
  }),
});

export const collections = { projects, experience, highlights, story, skillColumns, skills, pins, credentials, more };
