---
title: SmartEnerx, forecasting London household energy demand
type: academic
org: Data Science for All (DS4A), Correlation One, Team 94
period: Apr – Jul 2022
order: 4
summary: >-
  A team data-science project: exploratory analysis, a Prophet forecast and a Dash dashboard deployed on AWS,
  built on London smart-meter data.
tags: [Python, Prophet, Dash, Plotly, PostgreSQL, Docker, AWS, Time series, EDA, Forecasting & ML]
metric:
  value: "1.36%"
  label: MAPE of the selected Prophet model on daily consumption
  source: "GH · UK-ENERGY-Project README (Prophet model, MAPE 1.357%)"

situation: >-
  In 2014 the UK Government had UK Power Networks collect smart-meter data from a group of London households,
  to understand residential energy use as the country moves to clean energy. For the DS4A program, our team of
  seven used that public dataset to describe consumption patterns and forecast demand, so that public and
  private organizations could plan clean-energy projects.

challenge: >-
  A large smart-meter dataset had to be cleaned, combined with weather and holiday data, and modeled with
  strong seasonality (workdays versus holidays, daily, monthly and yearly cycles). The result then had to be
  usable by people who do not write code, as a dashboard they could filter and explore.

role:
  owned:
    - "[NEED DETAIL: your specific contribution, such as the exploratory analysis, the forecasting model, the dashboard or the AWS deployment.]"
  team:
    - "Team 94 of seven participants, supported by teaching assistants. The final report, dashboard user guide and presentation are team deliverables."

approach:
  - title: Explore the data
    text: >-
      Exploratory analysis linked consumption to temperature and to household demographics (ACORN groups). It
      showed, for example, the evening peak between 5 and 10 pm and higher use in autumn and winter.
  - title: Forecast with Prophet
    text: >-
      Prophet on aggregated daily consumption, with UK holidays. Rolling cross-validation used a 540-day
      training period and a 180-day horizon, and hyperparameters were tuned against MAPE with a grid search.
  - title: Compare with other models
    text: >-
      Compared Prophet with Exponential Smoothing and SARIMAX, and repeated the forecast for each ACORN group
      to see where the model works well and where it does not.
  - title: Ship a dashboard
    text: >-
      A Dash app with Introduction, Main, Details and Forecasting tabs, packaged as a Docker container, pushed
      to Amazon ECR and run on Amazon ECS, with the data in PostgreSQL on Amazon RDS.

result:
  summary: >-
    Prophet gave the best fit, and the team delivered a forecasting dashboard together with a report, a user
    guide and a recorded final presentation.
  points:
    - text: "Prophet reached a MAPE of about 1.36% on aggregate daily consumption, against 6.27% for Exponential Smoothing and 39.51% for SARIMAX."
      source: "GH · UK-ENERGY-Project README (MAPE 1.357%); POSTER · Forecasting table"
    - text: "By ACORN group the MAPE ranged from about 1.4% to 3.0%, except 'Not Private Households' at about 15%, where consumption varies too much."
      source: "GH · UK-ENERGY-Project README (Prophet model by category)"
    - text: "Finding: daily household consumption in London was about 25% higher in autumn and winter, with the evening hours showing the largest increase."
      source: "POSTER · Relating and analyzing data"

flow:
  title: From smart meters to a forecast dashboard
  stages:
    - label: Data
      nodes: [UK Power Networks smart-meter data, Weather, UK holidays]
    - label: Store
      nodes: [PostgreSQL on Amazon RDS]
    - label: Prepare
      nodes: [Python cleaning and integration, Aggregation by ACORN group]
    - label: Model
      nodes: [Prophet, Exponential Smoothing, SARIMAX]
    - label: Serve
      nodes: [Dash app, Docker, Amazon ECR, Amazon ECS]
  note: Based on the architecture section of the project README.

evidence:
  - kind: image
    label: Team datafolio poster
    src: images/projects/smartenerx-datafolio.webp
    alt: >-
      Poster titled How Could Data Mitigate Climate Change, with highlights, charts of consumption by ACORN
      category, hourly consumption, and a forecast chart with a table comparing Prophet, Exponential Smoothing
      and SARIMAX.
    caption: Team 94 datafolio poster summarizing the data, findings and forecast.
  - kind: image
    label: Forecasts by ACORN group
    src: images/projects/smartenerx-forecasts-by-group.webp
    alt: >-
      Six line charts of daily energy consumption in kilowatt-hours over 2012 to 2014, each with observed
      values, a fitted line and a forecast, one for each ACORN group.
    caption: Observed and forecast daily consumption for each ACORN group, from the team report.
  - kind: link
    label: Source repository (code, notebooks and reports)
    href: https://github.com/andresvdata/UK-ENERGY-Project
  - kind: link
    label: Final report (PDF)
    href: https://github.com/andresvdata/UK-ENERGY-Project/blob/main/final%20Reports/Analysis%20of%20residential%20energy%20consumption%20in%20London.pdf
  - kind: link
    label: Dashboard user guide (PDF)
    href: https://github.com/andresvdata/UK-ENERGY-Project/blob/main/final%20Reports/Dashboard%20User%20Guide.pdf
  - kind: link
    label: Final presentation (video)
    href: https://www.youtube.com/watch?v=Nfx-dNObHsw
  - kind: link
    label: Source dataset on Kaggle
    href: https://www.kaggle.com/datasets/jeanmidev/smart-meters-in-london

reflection: >-
  [NEED DETAIL: what you would do differently, for example how you would treat the 'Not Private Households'
  group, or what you learned from deploying a dashboard end to end.]

sources:
  - "GH · UK-ENERGY-Project README, final reports and notebooks"
  - "OLD · London Energy Consumption (SmartEnerx Dashboard) page"
  - "POSTER · SmartEnerx Datafolio, Team 94"
  - "RES · Professional development (DS4A, 2022); LI · Education"
---
