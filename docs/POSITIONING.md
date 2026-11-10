# Audience, positioning and storytelling

## Who the site is for

1. **Recruiters and hiring managers** scanning for a fit in under a minute. They need to see the role, the stack and one or two hard numbers without scrolling.
2. **Hiring teams** (BI leads, analytics and data engineering managers) who read the case studies to judge how I think: what I owned, how I handled stakeholders, and whether the work was checked.
3. **Peers and interviewers** who may open a repository or a paper, so every link goes to something real.

## Positioning

**One sentence:** a Business Intelligence developer who owns the whole path from a business question to a trusted, adopted data product, with data engineering and data science depth underneath.

**Headline (from your brief and LinkedIn):** Business Intelligence | Power BI & Microsoft Fabric | Data Modeling, ETL, DAX, SQL & Python | Turning Complex Data into Trusted Decisions.

**Why BI-first, not "Data Scientist":** the resume and LinkedIn show the strongest, most recent and most measurable evidence in BI and integration (BC SPCA now, Softgic before). Data science is real but sits in two places: a published CLV paper and a team forecasting project. Leading with it would understate the profile and invite the wrong interviews. The site still shows the science work in full, and the target-role chips are editable (see `src/config/site.ts`).

**Open-to roles shown:** BI Developer, Analytics Engineer, Data Analyst, Data Engineer. "Data Scientist" is not shown as a target role. This is the first question in `QUESTIONS_FOR_ANDRES.md`.

## The story the page tells

The career is told as one repeated pattern, not four jobs:

> Find where decisions depend on data that is manual, scattered or inconsistent; build the pipeline and model that fix it; make sure people actually use the result.

| Chapter | Role in the story |
| --- | --- |
| Owens Illinois, 2018–2020 | Where the habit of using process data to run operations started. |
| Softgic, 2020–2022 | First full BI stack: ETL, warehouse, cube, dashboards. |
| Langara, 2022–2025 | Research data platform and healthcare modeling, ending in a publication. |
| BC SPCA, 2025–now | Governed Microsoft Fabric and Power BI models with stakeholders. |

The home page then moves from the quick read to the proof: map and highlights, story and timeline, filterable case studies, a skills-by-role matrix (a dot only where the work is documented), one-line experience rows, credentials, and contact.

## Choices that follow from the brief

- **Dashboard look, data-engineer feel.** The page itself is a dashboard: KPI tiles, a career map that separates where I was based from where my remote projects' data comes from, a timeline, a filterable project explorer, an evidence matrix. Monospace labels and data-flow diagrams carry the engineering feel. The map is a build-time SVG, so it needs no map service, key or tracking.
- **Case studies follow your seven parts:** situation, challenge, my role (what I owned versus what the team did), approach, result, evidence, reflection.
- **Numbers keep the sources' wording.** "About" and "approximately" stay. The site shows a number only when a source states it.
- **Gaps are visible.** Anything that needs your input shows as a highlighted **Need detail** note, and `npm run check:placeholders` lists them all. Nothing is silently filled in.
- **Accessible by default.** A single light theme with contrast checked by script, keyboard navigation, a skip link, visible focus, 44px touch targets on touch devices, reduced-motion support, text alternatives for images and a list version of the timeline on small screens.
- **No stock imagery.** Visuals are project evidence (dashboard samples with blurred titles, an SSIS data flow, the SmartEnerx datafolio and forecast chart), diagrams drawn from the documented architecture, or clearly labelled synthetic drawings where the real dashboards cannot be shown (the BC SPCA case study).

## Design process note

The project's `SKILL.md` (UI/UX guidance) expects a search tool and data files that are not in the project. I applied its priority rules by hand (accessibility, touch targets, contrast, responsive layout, motion) and verified them with a contrast script and screenshots. The palette, fonts and layout are my own choices for this brief.
