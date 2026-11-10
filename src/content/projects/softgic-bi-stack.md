---
title: From manual processing to an automated BI stack at Softgic
type: professional
org: Softgic
period: 2020 – 2022
order: 4
summary: >-
  Scheduled SSIS and Pentaho pipelines, a snowflake-schema warehouse, an SSAS cube and executive dashboards that
  replaced most manual data work.
tags: [SSIS, Pentaho, SQL, SSAS, SSRS, Power BI, Data warehouse, ETL, Data modeling, Python]
metric:
  value: "~60%"
  label: less end-to-end ETL and cube processing time
  source: "RES · Softgic bullet 10; LI · Summary"

situation: >-
  Softgic's internal operations relied heavily on manual data processing, and managers and executives needed
  dependable reporting on business performance.

challenge: >-
  The data came from many places: APIs, Oracle databases, SQL Server, and JSON, XML and CSV files, over 10 GB
  across four projects. It had to arrive on schedule, in a consistent shape, and fast enough that reports were
  usable, while several data solutions were being delivered in parallel.

role:
  owned:
    - "Designed and built the BI solution end to end: SSIS ETL, snowflake-schema warehouse, SSAS cube and SSRS reports."
    - "Wrote and optimized 50+ complex SQL queries, using indexing and query refactoring."
    - "Built and maintained 10+ Power BI dashboards for executives and managers."
    - "Found and fixed data inconsistencies and pipeline problems through root-cause analysis."
  team:
    - "[NEED DETAIL: team size and who else contributed (other analysts, DBAs, the client), so the page separates your part from the team's.]"

approach:
  - title: Start with managers and executives
    text: >-
      Worked directly with managers and executives to turn business needs into data solutions aligned with
      operational and strategic goals.
  - title: Automate the pipelines
    text: >-
      Built scheduled ETL in SSIS and Pentaho to pull from APIs, Oracle, SQL Server and flat files, replacing
      most of the manual processing.
  - title: Model for reporting
    text: >-
      Consolidated data from SQL Server sources into a snowflake-schema warehouse, then modeled and deployed an
      SSAS multidimensional cube. I added intermediate datasets so the reporting logic stayed simple.
  - title: Deliver the reports
    text: >-
      SSRS reports for executive analytics and Power BI dashboards on top of the cube, with measures defined
      in SSAS.
  - title: Make it fast and reliable
    text: >-
      Tuned ETL and cube processing, and used root-cause analysis to remove recurring data errors.

result:
  summary: >-
    Most manual data processing was replaced by scheduled pipelines, and senior leadership got faster, more
    reliable reporting from the cube.
  points:
    - text: "About 90% of manual data processing across internal operations replaced by automated ETL."
      source: "RES · Softgic bullet 1"
    - text: "End-to-end ETL and cube processing time cut by about 60%, improving report responsiveness and reducing calculation errors."
      source: "RES · Softgic bullet 10"
    - text: "10+ Power BI dashboards in use by executives and managers."
      source: "RES · Softgic bullet 2"

flow:
  title: Warehouse to dashboard
  stages:
    - label: Sources
      nodes: [APIs, Oracle, SQL Server, JSON / XML / CSV files]
    - label: ETL
      nodes: [SSIS, Pentaho, Scheduled jobs]
    - label: Warehouse
      nodes: [Snowflake schema, Intermediate datasets]
    - label: Cube
      nodes: [SSAS multidimensional cube, Measures and metrics]
    - label: Reports
      nodes: [SSRS executive reports, Power BI dashboards]
  note: >-
    Based on the architecture described in my resume. Client details are not shown.

evidence:
  - kind: image
    label: Power BI dashboards built from client requirements
    src: images/projects/softgic-powerbi-samples.webp
    alt: >-
      Six Power BI dashboard pages with filter panels, KPI cards, bar and pie charts, line charts and shaded
      maps of Colombia. Titles and client details are blurred.
    caption: >-
      Samples of dashboards I worked on with the team, built from client requirements on a cube data source.
      The figures are sample data, not real data, and client details are blurred.
  - kind: image
    label: An SSIS data flow
    src: images/projects/softgic-ssis-dataflow.webp
    alt: An SSIS data flow with a source feeding a conditional split that routes rows to United Kingdom, United States, Germany and default outputs.
    caption: >-
      An SSIS conditional-split data flow, from my earlier ETL portfolio page. [NEED DETAIL: confirm this is a
      package you built, and for which project.]

reflection: >-
  [NEED DETAIL: what you would do differently, such as how you would test the pipelines or document the cube
  today.]

sources:
  - "RES · Softgic bullets 1-10"
  - "LI · Softgic and Summary"
  - "OLD · Data Visualization in Power BI page; ETL project page"
---
