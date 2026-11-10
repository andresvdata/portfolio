# Questions for Andres

Everything below is visible on the site as a highlighted **Need detail** note, or is a place where two sources disagree. Run `npm run check:placeholders` for the live list.

## 1. Decisions only you can make

1. **Target roles.** The site shows "Open to: BI Developer, Analytics Engineer, Data Analyst, Data Engineer". Which should lead, and do you want "Data Scientist" shown too? Edit `targetRoles` in `src/config/site.ts`.
2. **Browser-tab title.** The home page title is "Andres Camilo Viloria Garcia · Business Intelligence Developer & Analytics Engineer". Is that the title you want recruiters to see in search results?
3. **Resume link.** Paste your Google Drive link into `resumeUrl` in `src/config/site.ts` (Drive: Share, "Anyone with the link", Viewer). Until you do, the buttons show a visible placeholder.
4. **Repository URL.** After you create the GitHub repository, paste its URL into `repoUrl` so the footer links to the source.
5. **Industries or companies** to emphasize: your brief says open. Do you want any industry named on the home page (for example healthcare or non-profit, which your recent work covers)?

## 2. Facts where sources disagree

The site currently follows the resume (`Master.docx`) unless noted, and shows the more conservative value.

| Topic | Resume says | LinkedIn says | What the site shows | Your call |
| --- | --- | --- | --- | --- |
| Softgic start date | 08/2020 | Nov 2020 | "2020 – 2022" (no months) | Which is correct? |
| Softgic title | Data Analyst | Data Analyst / Data Scientist | Data Analyst | Keep, or add Data Scientist? |
| Langara roles and end date | Two roles (Student Aide, then Research Assistant) ending Aug 2025 | One role ending Sep 2025 | Two roles, ending Aug 2025 | Which end date is correct, and should the roles be one or two? |
| XML/CSV migration (about 25% faster) | Under Langara Student Aide | Listed under the Softgic section | Under Langara Student Aide | Which employer did this at? |
| "Python visualizations led to a 20% increase in stakeholder engagement" | Under Langara Student Aide | In the same LinkedIn block as the migration work (Softgic section) | **Not shown** (the site shows the 25% migration result only) | Do you want it shown, and under which employer? |
| Data volume at Softgic | One bullet says "over 100GB"; two others say "more than 10 GB" or "over 10 GB" across four projects | "Over 10 GB" across four projects | "Over 10 GB" | Which is right, 10 GB or 100 GB? |
| Dashboards at Softgic | "10+ Power BI dashboards" and, in another bullet, "more than 15 dashboards across four projects" | "More than 15" | "10+" | Which count should be shown? |
| Owens Illinois plant | Cogua | Zipaquirá | "Colombia" only | Which plant? |
| SmartEnerx forecast error | README: 1.357% | Poster table: 1.35% | "About 1.36%" | Fine to keep? (The poster seems to truncate.) |

## 3. Details missing from the case studies

**BC SPCA reporting foundation**
- Who else worked on this (developers, data owners, IT and security), so the page can separate what you owned from what the team did?
- One measurable outcome: hours of manual reporting saved, refresh reliability, number of active report users, or a decision the dashboards changed?
- Can you share a sanitized screenshot or one of your HTML prototypes built on synthetic data? It would be the strongest evidence for the page.
- What did you learn about agreeing KPI definitions or driving adoption?

**Research data platform (Langara)**
- Who owned the Keycloak single sign-on, the NGINX reverse proxy and the Azure setup, you or a teammate?
- Usage numbers: how many researchers or teams use it, how many pipelines run in production?
- What would you improve (the repository README says the portal UI was a temporary build)?

**Customer lifetime value paper**
- Names or number of co-authors, and your specific contribution (modeling, analysis, writing)?
- What did the comparison teach you about when a simpler probability model beats machine learning, in your own words?

**Softgic BI stack**
- Team size and who else contributed (other analysts, DBAs, the client)?
- Is the SSIS conditional-split screenshot a package you built, and for which project?
- What would you do differently today (testing the pipelines, documenting the cube)?

**SmartEnerx**
- Your specific contribution: exploratory analysis, forecasting model, dashboard or AWS deployment?
- What would you do differently (for example the "Not Private Households" group), or what did deploying end to end teach you?
- The datafolio poster shows your teammates' names and the UK Power Networks and DS4A logos. It is on your earlier portfolio, but please confirm you are happy for it to appear here.

**Compact rows that could become case studies**
- *Automated report generation (Dec 2024)*, *Power Apps healthcare app (Oct 2024)*, *Detection of illicit activities (2022)*, *Probability of product shortage (2021)*: for each, which employer or client, what was your role, and is there one outcome? The old pages never say. The Power Apps page says details are confidential, so confirm what can be shown.

## 4. Things I did not do, on purpose

- **Phone number.** Never published. The old portfolio's `cv.pdf` was not copied, in case it carries one. Use your Drive link instead.
- **Your account email** (the one tied to your Claude account) is not on the site. Only `andresvdata@gmail.com` is.
- **No deployment.** Nothing was pushed, published or deployed.
