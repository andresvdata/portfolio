---
title: Turning 40+ scattered sources into one reporting foundation at BC SPCA
type: professional
org: BC SPCA
period: Sep 2025 – present
order: 1
summary: >-
  Microsoft Fabric and Power BI reporting for the Animal Helpline, the province-wide Spay & Neuter program and the
  finance, fundraising and volunteer teams.
tags: [Power BI, Microsoft Fabric, DAX, Power Query, SQL, Python, Power Automate, Data modeling, ETL, Data quality, Governance]
metric:
  value: "40+"
  label: data sources unified, about 800K records
  source: "RES · BC SPCA bullet 4; LI · Summary"

situation: >-
  BC SPCA's finance, fundraising, volunteer, call-centre and program teams each needed reporting, and the data
  behind it lived in different places: APIs, databases, Excel files and Microsoft 365. I joined as the Business
  Intelligence Developer in September 2025 to turn that into centralized, consistent reporting, starting with
  the Animal Helpline and the province-wide Spay & Neuter program.

challenge: >-
  Three things made it hard. Volume and variety: more than 40 internal and external sources feeding models of
  about 800K records. Inconsistent definitions: duplicated dashboards and KPIs that meant different things to
  different teams. And messy operational data: for the Helpline, call-centre records and Microsoft Exchange
  mailbox data had to be linked across 26+ fields, with duplicates, email threads and free-text subject lines
  to untangle.

role:
  owned:
    - "Led delivery end to end across 4+ departments: requirements, business requirements definition (BRD), prototyping, development, testing, deployment and stakeholder validation."
    - "Designed the Microsoft Fabric semantic models, DAX measures and Power Query transformations."
    - "Built the Dataflow Gen2 pipelines for call-centre and mailbox data (deduplication, thread-linking, subject-line parsing, validation)."
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
      information architecture before any Power BI development, to reduce development iterations and keep
      the result aligned with what they needed.
  - title: Integrate and model
    text: >-
      Pulled data in with Fabric Dataflow Gen2, Python, APIs, Power Automate and SQL (automating collection
      from 8+ sources) into semantic models, with DAX measures and Power Query transformations for dynamic KPI
      tracking.
  - title: Untangle the Helpline data
    text: >-
      Built Dataflow Gen2 pipelines with deduplication, thread-linking, subject-line parsing and validation to
      join call-centre and mailbox data. I analyzed daily patterns (seasonal surges, staffing, queue routing)
      to set dashboard metrics and reporting thresholds.
  - title: Check quality at every layer
    text: >-
      Added data-quality and validation controls across the source data, the pipelines, the semantic models
      and the reports.
  - title: Standardize and support adoption
    text: >-
      Published through Power BI Service (workspaces, scheduled refresh, access management), consolidated
      duplicated dashboards, and gave business users guidance and data-literacy support.

result:
  summary: >-
    Teams now work from centralized, consistent reporting instead of one-off reports. The Animal Helpline
    dashboards give daily operational visibility plus multi-year analysis of call volumes, staffing, queue
    performance and service demand, to support leadership decisions.
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
      nodes: [Animal Helpline, Spay & Neuter, Finance, Fundraising, Volunteer operations]
  note: >-
    Drawn from the stack and workflow described in my resume. It shows the flow, not a specific production
    configuration.

evidence:
  - kind: note
    label: Why there are no screenshots
    caption: >-
      The dashboards and data are operational, so I do not show them here. [NEED DETAIL: if you can share a
      sanitized screenshot or one of your HTML prototypes built with synthetic data, it would be the strongest
      evidence for this page.]

reflection: >-
  [NEED DETAIL: one or two sentences on what you would do differently, or what you learned about agreeing KPI
  definitions or driving adoption.]

sources:
  - "RES · BC SPCA bullets 1-19"
  - "LI · BC SPCA and Summary"
---
