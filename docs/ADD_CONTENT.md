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

## Other common edits

| I want to... | Edit |
| --- | --- |
| Paste my Google Drive resume link | `resumeUrl` in `src/config/site.ts` |
| Change the headline, intro or target roles | `src/config/site.ts` |
| Add a job | copy a file in `src/content/experience/`, set a new `order` |
| Add a publication, certificate or award | `src/content/data/credentials.yaml` |
| Add a skill row or a skill-by-role dot | `src/content/data/skills.yaml` (add a dot only where a source documents it) |
| Change the KPI tiles | `src/content/data/highlights.yaml` (each tile needs `topics`, and `tools` if it should answer a tool chip) |
| Change the map pins | `src/content/data/pins.yaml` (latitude and longitude, city level only) |
| Change what the home-page filter offers (roles, topics, tool chips) | `src/config/focus.ts` |
| Change colors | `src/styles/tokens.css`, then run `npm run check:contrast` |

## Checks before you push

```bash
npm run check:placeholders   # lists every open [NEED DETAIL]
npm run check                # type and content check
npm run build                # full build, fails on a missing field
npm run docs:sources         # refreshes docs/SOURCE_MAP.md
```

The deploy workflow also runs the build, so a broken file never goes live.

## The recruiter filter ("Short on time?")

The panel under the introduction lets a reader keep only what matters to them: a role preset, topics, tools and a project type. Everything is driven by two things, so there is no filter code to edit:

1. **`src/config/focus.ts`** lists the topics, the role presets (each role switches on a set of topics) and the tool chips (each with the aliases it matches).
2. **A `topics` list on every item** (highlights, story chapters, jobs, case studies, smaller projects, skills; optional on publications and certificates). Education and accomplishments have none, so they always stay visible.

Rules of thumb: tag an item with the 1 to 3 kinds of work it really shows, not everything it touches. An item with no matching topic or tool is hidden when a filter is on, so a missing tag is the usual reason something "disappears".

The filter state lives in the address bar, so a recruiter can share a view, and you can put a role-specific link in an application:

```
https://<your-site>/?role=data-engineer
https://<your-site>/?role=bi-developer&tools=power-bi,fabric
https://<your-site>/?topics=pipelines,cloud&type=professional
```

Parameters: `role` (one id from `roles`), `topics` and `tools` (comma-separated ids; an item matches if it has any of them), `type` (`professional`, `academic` or `personal`).
