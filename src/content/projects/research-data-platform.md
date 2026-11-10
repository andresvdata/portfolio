---
title: One secure workspace for research data, from lab notebook to dashboard
type: professional
org: Langara College, Research & Innovation
period: 2024 – 2025
order: 2
summary: >-
  A containerized platform on Azure that brings an electronic lab notebook, Airflow pipelines, Superset
  dashboards and single sign-on together for research teams.
tags: [Apache Airflow, Docker, Azure, PostgreSQL, Apache Superset, Django, SSO, ETL, Data warehouse, Python]
metric:
  value: "1 login"
  label: "for three research apps: eLabFTW, Airflow and Superset"
  source: "GH · Research-Data-Integration-Analytics-Platform README (User Flow)"

situation: >-
  Research data in Langara's Research & Innovation department was fragmented across lab and research sources.
  Scientists needed one place to record experiments, move data and see results, without each team keeping its
  own copy.

challenge: >-
  The platform had to be secure without slowing research down. That meant single sign-on across several tools,
  role-based access so each user sees only what they should, encrypted access, backups, and enough performance
  for several teams working at once, all running as containers that can be moved and reproduced.

role:
  owned:
    - "Gathered requirements from scientists and designed the data warehouse pipeline that centralizes lab and research data."
    - "Built the Airflow ETL workflows (Python, Docker) for scheduled ingestion, transformation and synchronization."
    - "Deployed the Dockerized electronic lab notebook (eLabFTW) on Azure."
    - "Set up Superset dashboards on the operational and analytical databases."
  team:
    - "The Django-based portal was built together with a multidisciplinary team."
    - "[NEED DETAIL: who owned the Keycloak single sign-on, the NGINX reverse proxy and the Azure setup, you or a teammate?]"

approach:
  - title: Start from how researchers work
    text: >-
      Gathered requirements from scientists first, then mapped them to a central PostgreSQL database for lab
      data and a set of services around it.
  - title: Orchestrate the data
    text: >-
      Apache Airflow, running in Docker, handles scheduled ingestion, transformation and synchronization
      between systems, with modular pipelines so several research projects can run in parallel.
  - title: Capture it properly
    text: >-
      eLabFTW is configured as the department's electronic lab notebook, customized for research workflows and
      metadata standards, with timestamped data certification for reproducibility.
  - title: Make it explorable
    text: >-
      Apache Superset connects to operational and analytical databases for interactive dashboards that monitor
      research activity, trends and KPIs.
  - title: Lock it down sensibly
    text: >-
      Keycloak provides single sign-on (OpenID Connect and SAML) with role-based access control. NGINX adds
      domain-based routing and TLS encryption.
  - title: Host for real use
    text: >-
      Azure virtual machines with tuned container resources, Docker volumes for persistence, and snapshot
      backups for disaster recovery.

result:
  summary: >-
    Researchers capture data in the lab notebook, move it through Airflow pipelines into a central database,
    and explore it in Superset behind one login. The project README describes less administrative overhead
    through automation and single sign-on, and a standardized data lifecycle from capture to visualization.
  points:
    - text: "Three applications (eLabFTW, Airflow, Superset) consolidated into one platform with a single sign-on."
      source: "GH · Research-Data-Integration-Analytics-Platform README (Impact, User Flow)"
    - text: "Role-based access control enforces data-governance policy without blocking research work."
      source: "GH · Research-Data-Integration-Analytics-Platform README (Security)"
    - text: "A foundation for future machine-learning and predictive analytics work, as noted in the README."
      source: "GH · Research-Data-Integration-Analytics-Platform README (Impact)"
    - text: "[NEED DETAIL: usage numbers, such as how many researchers or teams use it and how many pipelines run in production.]"
      source: "Pending input from Andres"

flow:
  title: Platform architecture
  stages:
    - label: Capture
      nodes: [eLabFTW electronic lab notebook, Timestamped data certification]
    - label: Orchestrate
      nodes: [Apache Airflow, Scheduled ETL pipelines, Python in Docker]
    - label: Store
      nodes: [PostgreSQL, Central lab and research data]
    - label: Explore
      nodes: [Apache Superset, Interactive dashboards]
  foundation:
    - label: Access
      nodes: [Keycloak single sign-on (OIDC, SAML), Role-based access, NGINX reverse proxy with TLS]
    - label: Hosting
      nodes: [Azure virtual machines, Docker volumes, Snapshot backups]
  note: >-
    Redrawn from the architecture described in the repository README. The Django portal sits in front of the
    three apps and hands users to each of them after login.

evidence:
  - kind: link
    label: Source repository with architecture notes and walkthrough GIFs
    href: https://github.com/andresvdata/Research-Data-Integration-Analytics-Platform
  - kind: note
    label: About the data
    caption: >-
      The platform holds research data, so none is shown here. The repository documents the architecture and
      user flow.

reflection: >-
  [NEED DETAIL: what you would improve, such as the portal UI (the README notes it was a temporary build), data
  governance, or monitoring.]

sources:
  - "RES · Langara Research Assistant bullets 4, 7, 8, 9"
  - "LI · Langara"
  - "GH · Research-Data-Integration-Analytics-Platform README"
  - "OLD · Research Data Integration & Analytics Platform page"
---
