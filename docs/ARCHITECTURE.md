# Technology choices (and the "back end")

## Proposal: no server at all

A portfolio is read far more than it is changed, and it holds no user data. The best "back end" for it is **no back end**: content lives in typed text files in the repository, a build step turns it into plain HTML, and GitHub Pages serves the result. It costs nothing, cannot be hacked through a server or database, loads fast and cannot go down because a service did.

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Astro 7** with TypeScript (strict) | Ships almost no JavaScript by default, so pages load fast and rank well. Content collections give a built-in "content database" without a server. The old site was Hugo; Astro is easier to edit and to extend with small interactive parts. |
| Content store | **Content collections** with Zod schemas (Markdown for case studies, YAML for data) | Add a project by adding a file. The build validates every file and fails with a clear message if a field is missing, so the site cannot publish half-written content. |
| Traceability | A required `source` field on each claim, plus `npm run docs:sources` | Keeps every number traceable to the resume, LinkedIn, a repository or a paper. |
| Map | `d3-geo` and `world-atlas`, drawn to SVG **at build time** | No tile service, API key, tracking or runtime map library. Pins are real buttons, so they are keyboard accessible. |
| Interactivity | A few small inline scripts (filters, map layers, skills matrix, theme, copy email) | No client framework needed; each works without a network call. |
| Styling | Plain CSS with design tokens, one light theme | Easy to retheme in one file. Contrast is checked by `npm run check:contrast`. |
| Fonts | IBM Plex Sans and Mono, self-hosted through `@fontsource` | No third-party font request, so no extra privacy or speed cost. |
| Hosting and deploy | **GitHub Pages** via a GitHub Actions workflow | Free, the same account as your code, and a push is a deploy. |
| Contact | `mailto:` and a copy-to-clipboard button | No form backend to maintain or to receive spam. |

## Alternatives considered

- **Next.js or another React framework:** more power than a portfolio needs, larger bundles and more to maintain.
- **Hugo (the old setup):** fast, but content validation is weak and interactive parts are awkward.
- **A headless CMS (Strapi, Sanity, Notion) or a database (Supabase):** adds accounts, keys and a service to keep alive, for content that changes a few times a year. Files in Git give version history for free.
- **A form backend (Formspree and similar):** possible later if you want a contact form; not needed now.

## Folder map

```
src/config/site.ts        headline, links, resume URL
src/content/projects/     one Markdown file per case study
src/content/experience/   one YAML file per employer
src/content/data/         highlights, story, skills, map pins, credentials, compact project rows
src/components/           page sections
src/pages/                home page, case-study pages, 404
src/styles/               tokens (colors, type) and global CSS
public/                   images, favicon, social card
scripts/                  new-project, placeholder check, contrast check, source map
docs/                     handoff documents (this folder)
.github/workflows/        deploy to GitHub Pages
```
