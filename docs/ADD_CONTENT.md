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

It appears automatically in the project cards, the tool filters (from `tags`), the previous/next links and the source map. Nothing else to edit.

**Rules the template teaches:**
- `type` is `professional`, `academic` or `personal`. It controls the badge and the type filter.
- Every number needs a `source` (where the fact comes from). Use "about" when the source does.
- Put images in `public/images/projects/` (WebP, under about 150 KB) and reference them as `images/projects/name.webp` with a real `alt` description. Blur or crop anything private.
- Write `[NEED DETAIL: ...]` for anything you still have to find out. It shows highlighted on the page and in `npm run check:placeholders`.

## Add a smaller project (one row, no page)

Open `src/content/data/more.yaml` and copy an existing block. Give it a new `id`, `title`, `type`, `period`, `blurb`, `tags`, `links` and `source`. Lower `order` numbers show first.

## Other common edits

| I want to... | Edit |
| --- | --- |
| Paste my Google Drive resume link | `resumeUrl` in `src/config/site.ts` |
| Change the headline, intro or target roles | `src/config/site.ts` |
| Add a job | copy a file in `src/content/experience/`, set a new `order` |
| Add a publication, certificate or award | `src/content/data/credentials.yaml` |
| Add a skill row or a skill-by-role dot | `src/content/data/skills.yaml` (add a dot only where a source documents it) |
| Change the KPI tiles | `src/content/data/highlights.yaml` |
| Change the map pins | `src/content/data/pins.yaml` (latitude and longitude, city level only) |
| Change colors | `src/styles/tokens.css`, then run `npm run check:contrast` |

## Checks before you push

```bash
npm run check:placeholders   # lists every open [NEED DETAIL]
npm run check                # type and content check
npm run build                # full build, fails on a missing field
npm run docs:sources         # refreshes docs/SOURCE_MAP.md
```

The deploy workflow also runs the build, so a broken file never goes live.
