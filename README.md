# Andres Camilo Viloria Garcia · Data portfolio

A recruiter-focused portfolio for a Business Intelligence developer and analytics engineer, built as a dashboard: career map, KPI tiles, timeline, case studies and a skills-by-role evidence matrix, plus a "Short on time?" filter that lets a recruiter keep only the role, topics and tools they care about (and share that view as a link). Static site (Astro + TypeScript), deployed to GitHub Pages.

Every claim on the site carries a `source` (resume, LinkedIn, old portfolio, public repository or paper), so the content stays accurate and traceable.

## Run it locally

Needs Node 20 or newer.

```bash
npm install
npm run dev                          # http://localhost:4321 (drafts are visible)
npm run build && npm run preview     # exactly what will be published
```

## Edit the site

You edit text files, not page code.

| To change | Edit |
| --- | --- |
| Headline, intro, links, target roles | `src/config/site.ts` |
| Case studies | `src/content/projects/*.md` |
| Add a case study | `npm run new:project -- "Title"` |
| Jobs | `src/content/experience/*.yaml` |
| KPIs, story, skills, map pins, credentials, smaller projects | `src/content/data/*.yaml` |
| Skills table columns | `src/content/data/skill-columns.yaml` |
| What the map shows | `src/config/map.ts` |
| Filter roles, topics and tool chips | `src/config/focus.ts` (tag content with `topics`, see ADD_CONTENT) |
| Colors and type | `src/styles/tokens.css` |

Full guide: [docs/ADD_CONTENT.md](docs/ADD_CONTENT.md).

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run new:project -- "Title" --type personal` | Creates a draft case study from the template |
| `npm run check:placeholders` | Lists every open `[NEED DETAIL: ...]` |
| `npm run check` | Type and content check |
| `npm run check:contrast` | Verifies text colors meet WCAG AA |
| `npm run docs:sources` | Rebuilds `docs/SOURCE_MAP.md` |

## Publish

Push to GitHub, set **Settings, Pages, Source** to **GitHub Actions**, and the included workflow deploys on every push to `main`. Step by step: [docs/DEPLOY.md](docs/DEPLOY.md).

## Handoff documents

| Document | Contents |
| --- | --- |
| [docs/QUESTIONS_FOR_ANDRES.md](docs/QUESTIONS_FOR_ANDRES.md) | Decisions, source conflicts and missing details |
| [docs/POSITIONING.md](docs/POSITIONING.md) | Audience, positioning and storytelling choices |
| [docs/PROJECTS.md](docs/PROJECTS.md) | Selected projects and why |
| [docs/SOURCE_MAP.md](docs/SOURCE_MAP.md) | Source for each claim (generated) |
| [docs/REUSED_ASSETS.md](docs/REUSED_ASSETS.md) | What was reused from the old portfolio |
| [docs/EXCLUSIONS.md](docs/EXCLUSIONS.md) | What was left out, and why |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Technology choices and folder map |
| [docs/ADD_CONTENT.md](docs/ADD_CONTENT.md) | How to add projects and edit content |
| [docs/DEPLOY.md](docs/DEPLOY.md) | How to publish on GitHub Pages |
