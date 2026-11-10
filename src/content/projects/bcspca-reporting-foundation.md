---
title: One governed reporting foundation from 40+ sources at BC SPCA
type: professional
org: BC SPCA
period: Sep 2025 – present
order: 5
summary: >-
  Microsoft Fabric and Power BI reporting for several departments, built from more than 40 internal and external
  sources and agreed with stakeholders before any dashboard was developed.
tags: [Power BI, Microsoft Fabric, DAX, Power Query, SQL, Python, Power Automate, Data modeling, ETL, Data quality, Governance]
topics: [reporting, modeling, practice]
metric:
  value: "40+"
  label: data sources unified, about 800K records
  source: "RES · BC SPCA bullet 4; LI · Summary"

situation: >-
  Several departments each needed reporting, and the data behind it lived in different places: APIs, databases,
  Excel files and Microsoft 365. I joined as the Business Intelligence Developer in September 2025 to turn that
  into centralized, consistent reporting that leaders and frontline teams could rely on.

challenge: >-
  Volume and variety: more than 40 internal and external sources feeding models of about 800K records.
  Inconsistent definitions: duplicated dashboards and KPIs that meant different things to different teams.
  Messy operational data: records and Microsoft Exchange mailbox data had to be linked across 26+ fields, with
  duplicates, email threads and free-text subject lines to untangle.

role:
  owned:
    - "Led delivery end to end across 4+ departments: requirements, business requirements definition (BRD), prototyping, development, testing, deployment and stakeholder validation."
    - "Designed the Microsoft Fabric semantic models, DAX measures and Power Query transformations."
    - "Built the Dataflow Gen2 pipelines that clean and link the operational and mailbox data."
    - "Created the Power BI design and governance framework and the Visualization Playbook."
  team:
    - "[NEED DETAIL: who else worked on this (other developers, data owners, IT and security contacts) so the page can separate what you owned from what the team did.]"

approach:
  - title: Agree the question before building
    text: >-
      Partnered with 50+ stakeholders, from executives to frontline teams. I challenged reporting requests
      that were not needed and standardized KPI definitions, so every dashboard measures the same thing the
      same way.
  - title: Prototype before Power BI
    text: >-
      Built interactive HTML prototypes and dashboard mockups so stakeholders could react to layout and
      information architecture before any Power BI development, to reduce development iterations.
  - title: Integrate, model and check
    text: >-
      Pulled data in with Fabric Dataflow Gen2, Python, APIs, Power Automate and SQL (automating collection
      from 8+ sources) into semantic models with DAX measures, and added data-quality and validation controls
      across the sources, pipelines, models and reports.
  - title: Standardize and support adoption
    text: >-
      Published through Power BI Service (workspaces, scheduled refresh, access management), consolidated
      duplicated dashboards, and gave business users guidance and data-literacy support.

result:
  summary: >-
    Teams now work from centralized, consistent reporting instead of one-off reports, with daily operational
    visibility and multi-year analysis to support leadership decisions.
  points:
    - text: "40+ internal and external sources integrated into unified Fabric and Power BI models, supporting about 800K records."
      source: "RES · BC SPCA bullet 4; LI · Summary"
    - text: "Data collection automated from 8+ sources, reducing repetitive manual reporting and data preparation."
      source: "RES · BC SPCA bullet 5"
    - text: "Duplicated dashboards and inconsistent metrics identified and consolidated into a more standardized reporting environment."
      source: "RES · BC SPCA bullet 16"
    - text: "[NEED DETAIL: one measurable outcome, such as hours of manual reporting saved, refresh reliability, number of active report users, or a decision the dashboards changed.]"
      source: "Pending input from Andres"

flow:
  title: How the data moves, from sources to the people who use it
  stages:
    - label: Sources
      nodes: [APIs, Databases, Excel files, Microsoft 365, Exchange mailbox, Existing dataflows]
    - label: Ingest and transform
      nodes: [Fabric Dataflow Gen2, Python, Power Automate, SQL]
    - label: Model and validate
      nodes: [Fabric semantic models, DAX measures, Power Query (M), Validation checks]
    - label: Serve
      nodes: [Power BI Service, Workspaces, Scheduled refresh, Access management]
    - label: Use
      nodes: [Executives, Managers, Frontline teams]
  note: >-
    Drawn from the stack and workflow described in my resume. It shows the flow, not a specific production
    configuration.

evidence:
  - kind: image
    label: Step 1, an HTML prototype (synthetic)
    src: images/projects/bcspca-synthetic-prototype.webp
    alt: >-
      A grey dashed wireframe of a dashboard page: five filter boxes on the left, four KPI boxes across the top,
      boxes for a line chart, a bar chart, a heatmap and a tile map, and two yellow sticky notes with open
      questions about a KPI definition and whether a regional view is needed.
    caption: >-
      The kind of low-fidelity prototype I put in front of stakeholders before building in Power BI: layout, filters
      and open questions about KPI definitions. I drew it for this page with invented content. It is not a BC SPCA
      prototype.
  - kind: image
    label: Step 2, the dashboard layout (synthetic)
    src: images/projects/bcspca-synthetic-dashboard.webp
    alt: >-
      A synthetic "Service Requests Overview" dashboard with a filter panel on the left, four KPI cards, a monthly
      line chart with a previous-year comparison, a bar chart by category, a weekday-by-time heatmap and a tile map
      of six regions. A banner states that the data is synthetic and not a BC SPCA report.
    caption: >-
      A polished layout in the style I build, drawn with synthetic numbers and generic labels. The operational
      dashboards and data are not shown, so this is an illustration of the approach, not a screenshot.

sources:
  - "RES · BC SPCA bullets 1-19"
  - "LI · BC SPCA and Summary"
  - "Synthetic images: drawn for this portfolio (docs/synthetic); not BC SPCA material"
---
