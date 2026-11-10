# Questions for Andres

These are the open questions and places where sources disagree. Details removed from the site so it could be deployed are saved in `docs/OPEN_NOTES.md`. Nothing on the published site shows a placeholder.

## 1. Decisions only you can make

1. **Target roles.** The site shows "Open to: BI Developer, Analytics Engineer, Data Analyst, Data Engineer". Which should lead, and do you want "Data Scientist" shown too? Edit `targetRoles` in `src/config/site.ts`.
2. **Browser-tab title.** The home page title is "Andres Camilo Viloria Garcia · Business Intelligence Developer & Analytics Engineer". Is that the title you want recruiters to see in search results?
3. **Repository link (optional).** If you want the footer to link to the source, paste the new repository's URL into `repoUrl` in `src/config/site.ts`.
5. **Recruiter filter presets.** The "Short on time?" panel maps each role to topics (for example Data Engineer shows ETL and pipelines, cloud and platforms, and data modeling). I tagged every item from the evidence in its source, but you know the roles best. Check the role presets in `src/config/focus.ts` and tell me if a role should show a different mix; a data scientist view currently surfaces only two case studies plus the smaller projects, because that is what the documented evidence supports.
6. **Industries or companies** to emphasize: your brief says open. Do you want any industry named on the home page (for example healthcare or non-profit, which your recent work covers)?

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

## 3. The career map and your remote projects

The map separates **where you were based** (round markers) from **where a remote project's data comes from** (diamonds). I only drew what the sources and your messages support.

- **SmartEnerx (2022).** The data is from London and you were not there. Where were you based while working on it (Colombia, as the DS4A Colombia program suggests, or Vancouver)? The map draws a "built remotely" line from the Bogotá region.
- **SpaceX capstone (2023), CORD-19 (2023) and the exploratory analyses (2022 – 2023).** I drew these as built remotely from Vancouver, because that is where you lived and worked in those years. Please confirm.
- **Florida pin.** It comes from the launch sites in the SpaceX data (Cape Canaveral and Kennedy Space Center; Vandenberg in California is mentioned in the text). Fine to keep, or would you rather show only the "Built remotely" list?
- **Other remote projects.** Are there more projects you built remotely (for a client, an employer or a course) that should appear on the map, and what place or data do they relate to?

## 4. Details missing from the case studies

**BC SPCA reporting foundation**
- Who else worked on this (developers, data owners, IT and security), so the page can separate what you owned from what the team did?
- One measurable outcome: hours of manual reporting saved, refresh reliability, number of active report users, or a decision the dashboards changed?
- The page now uses two synthetic drawings I made (a wireframe and a dashboard layout). If you have an HTML prototype built on synthetic data, it would replace them.
- Reflection removed: the current role is deliberately kept short. Add one back if you want it.

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
- The datafolio poster shows your teammates' names and the UK Power Networks and DS4A logos. It came from your earlier portfolio, but please confirm you are happy for it to appear here.

**Compact rows that could become case studies**
- *Automated report generation (Dec 2024)*, *Power Apps healthcare app (Oct 2024)*, *Detection of illicit activities (2022)*, *Probability of product shortage (2021)*: for each, which employer or client, what was your role, and is there one outcome? The original write-ups never say. The Power Apps page says details are confidential, so confirm what can be shown.

## 5. Things I did not do, on purpose

- **Phone number.** Never published. The old portfolio's `cv.pdf` was not copied, in case it carries one. Use your Drive link instead.
- **No link to the previous portfolio.** Nothing on the site or in these docs points to its address.
- **Your account email** (the one tied to your Claude account) is not on the site. Only `andresvdata@gmail.com` is.
- **No deployment.** Nothing was pushed, published or deployed.
