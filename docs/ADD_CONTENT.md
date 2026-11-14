# Adding and editing content

You never edit page code to add content. Everything on the site comes from plain text files in `src/content/` and `src/config/site.ts`, and the build checks them. If a required field is missing, `npm run build` tells you which file and field.

## Add a new case study (about 10 minutes)

```bash
npm run new:project -- "Sales forecasting dashboard" --type personal
```

This creates `src/content/projects/sales-forecasting-dashboard.md` with the next `order` number and `draft: true`. Then:

1. Open the file and fill in what you know. Delete blocks you do not need: `metric`, `flow` (the diagram), `evidence`, `reflection` and `role.team` are all optional.
2. Preview: `npm run dev` (drafts show in dev, and stay hidden in the published site).
3. When it is ready, delete the line `draft: true`.
4. Commit and push. The site rebuilds and deploys itself.

It appears automatically in the project cards, the home-page filter, the previous/next links and the source map. Nothing else to edit.

**Rules the template teaches:**
- `type` is `professional`, `academic` or `personal`. It controls the badge and the "Project type" chips of the filter.
- `topics` (1 to 4) says what kind of work it shows, so a recruiter who picks "ETL & data pipelines" or the "Data Engineer" role sees it. `tags` are matched against the tool chips (Power BI, SQL, Python...), so write tool names the way the chips do.
- Every number needs a `source` (where the fact comes from). Use "about" when the source does.
- Put images in `public/images/projects/` (WebP, under about 150 KB) and reference them as `images/projects/name.webp` with a real `alt` description. Blur or crop anything private.
- Write `[NEED DETAIL: ...]` for anything you still have to find out. It shows highlighted on the page and in `npm run check:placeholders`.

## Add a smaller project (one row, no page)

Open `src/content/data/more.yaml` and copy an existing block. Give it a new `id`, `title`, `type`, `period`, `blurb`, `tags`, `topics`, `links` and `source`. Lower `order` numbers show first.

## Quick reference: where each thing lives

Everything you see on the page comes from a text file. You never need to touch the components.

| I want to... | Edit |
| --- | --- |
| Change the headline, intro, email or target roles | `src/config/site.ts` |
| Add a skill, or a dot in the skills table | `src/content/data/skills.yaml` (template at the top of the file) |
| Add, rename, reorder or hide a column of the skills table | `src/content/data/skill-columns.yaml` |
| Add a job | copy `docs/templates/experience.yaml` to `src/content/experience/<name>.yaml` |
| Hide a job, a skill row, a map place or one map entry | add `hidden: true` to it |
| Add a place on the map | `src/content/data/pins.yaml` (city-level latitude and longitude) |
| Choose what the map shows (layers, lines, legend, labels, "Built remotely" list) | `src/config/map.ts` |
| Add a publication, certificate or award | `src/content/data/credentials.yaml` |
| Change the KPI tiles | `src/content/data/highlights.yaml` |
| Change the filter's roles, topics or tool chips | `src/config/focus.ts` |
| Change colors | `src/styles/tokens.css`, then run `npm run check:contrast` |

Order on the page follows the order in the file for skills, skill columns and map places. Jobs, projects, credentials and KPI tiles use their `order` number.

## Add a skill

1. Open `src/content/data/skills.yaml` and copy the template at the top.
2. Put it under the right `group` (a new group name creates a new section in the table).
3. Under `roles`, add one line per column where you used it, with a short piece of evidence. That line is what people read when they tap the dot.
4. Give it 1 to 2 `topics` so the recruiter filter can find it, and a `source`.

## Add a job

1. Copy `docs/templates/experience.yaml` to `src/content/experience/<name>.yaml` and fill it in.
2. To give it a column in the skills table, add `- id: <name>` with a `label` and `years` in `skill-columns.yaml`, then use `<name>:` under `roles` in `skills.yaml`.
3. To show it on the map, add an entry with `layer: work` to the right place in `pins.yaml`.

## Choose what the map shows

`src/config/map.ts` has one switch per element:

- `layers`: each button above the map. `show: false` removes a layer; `on: false` keeps it but starts switched off. Change `label`, `tag` or `color` freely. You can add a layer (for example `{ id: 'volunteering', ... }`) and use it as `layer:` in `pins.yaml`.
- `startPin`: the place selected when the page opens.
- `showDataPins`: places where only a remote project's data comes from (London, Florida).
- `showMoveLines`, `showRemoteLines`: the dashed and dotted lines.
- `showRemoteStrip`, `showLegend`, `alwaysShowLabels`.

For a single place or entry, use `hidden: true` in `pins.yaml` instead of deleting it.

If you make a typo in a column or layer id, the build stops with a message that names the file and the id to fix.

## Checks before you push

```bash
npm run check:placeholders   # lists every open [NEED DETAIL]
npm run check                # type and content check
npm run build                # full build, fails on a missing field
npm run docs:sources         # refreshes docs/SOURCE_MAP.md
```

The deploy workflow also runs the build, so a broken file never goes live.

## The recruiter filter ("Short on time?")

The panel under the introduction lets a reader keep only what matters to them: a role, topics, tools and a project type. It is driven by data, so there is no filter code to edit:

1. **`src/config/focus.ts`** lists the topics, the roles and the tool chips.
   - A **role** switches on its `topics` and, when set, its `tools` (for example "Power BI / Fabric Developer" turns on Power BI, DAX, Fabric, Power Automate, Power Apps and data security).
   - A **tool** belongs to a `group` (Microsoft BI, Data engineering, Cloud & DevOps, Analytics & AI, Ways of working) and has `match` words. An item matches when its tags, stack, skill label or skill evidence contains one of those words.
2. **A `topics` list on every item** (highlights, story chapters, jobs, case studies, smaller projects, skills; optional on publications and certificates). Education and accomplishments always stay visible.

You rarely need to tag tools by hand: a job and its story chapter automatically match every tool that `skills.yaml` credits to that job. Add a dot in the skills table and the filter finds the job.

To add a tool chip, add a line to `tools` in `src/config/focus.ts`, for example:

```ts
{ id: 'dbt', group: 'engineering', label: 'dbt', match: ['dbt'] },
```

To add a role:

```ts
{ id: 'powerbi-admin', label: 'Power BI Administrator', topics: ['reporting', 'practice'], tools: ['power-bi', 'security'], blurb: 'One sentence.' },
```

The filter state lives in the address bar, so a recruiter can share a view, and you can put a role-specific link in an application:

```
https://<your-site>/?role=power-bi-developer
https://<your-site>/?role=data-engineer
https://<your-site>/?topics=pipelines,cloud&tools=python,airflow&type=professional
```

Parameters: `role` (one id from `roles`), `topics` and `tools` (comma-separated ids; an item matches if it has any of them), `type` (`professional`, `academic` or `personal`).
