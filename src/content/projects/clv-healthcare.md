---
title: Predicting patient lifetime value, a probability model against machine learning
type: academic
org: Langara College, healthcare analytics research
period: 2024 – 2025, published Sep 2025
order: 3
summary: >-
  Customer lifetime value modeling for a healthcare service portfolio, published in Decision Analytics Journal
  in September 2025.
tags: [Python, lifetimes, pandas, NumPy, Statistical modeling, Machine learning, Healthcare analytics, Forecasting & ML]
metric:
  value: "Published"
  label: Decision Analytics Journal, Sept 2025 (co-author)
  source: "LI · Publications and Langara bullet 6; OLD · Publications; ABS"

situation: >-
  Healthcare stakeholders wanted to understand patient segmentation, retention and revenue, so they could
  target marketing and loyalty efforts. The question was how much a patient is likely to be worth over time.

challenge: >-
  Patients are not under contract, so you cannot see directly whether a patient is still active or has
  lapsed. Two families of method could answer the question, a well-established probability model from
  marketing and several machine-learning algorithms, and it was not obvious which would be more accurate or
  when either could be trusted.

role:
  owned:
    - "Built the customer lifetime value models in Python (lifetimes, pandas, NumPy) for healthcare stakeholders."
    - "Facilitated weekly meetings to gather requirements and translate them into the analysis."
    - "Co-authored the resulting journal article."
  team:
    - "[NEED DETAIL: names or number of co-authors, and your specific contribution (modeling, analysis, writing), so the page is exact about what you did versus the team.]"

approach:
  - title: Predict with a probability model
    text: >-
      First estimated, for each patient, the probability of being 'alive' and their expected value in the
      coming period, using a probability model established in the marketing community.
  - title: Run the same task with machine learning
    text: >-
      Then applied several machine-learning algorithms to the same prediction problem.
  - title: Compare on accuracy
    text: >-
      Compared the two approaches by accuracy to understand where each one is strong or weak.
  - title: Translate into decisions
    text: >-
      Framed the outputs for stakeholders around segmentation, retention and revenue, so they could target
      marketing and loyalty initiatives.

result:
  summary: >-
    In this study the probability model was more accurate than the machine-learning models, probably because of
    an assumption it relies on. The paper's practical advice is to verify that key assumption, which it calls
    regularity, before applying these methods.
  points:
    - text: "Published in Decision Analytics Journal in September 2025 (DOI 10.1016/j.dajour.2025.100601)."
      source: "LI · Publications; OLD · Publications"
    - text: "Probability model outperformed the machine-learning models on accuracy in this study."
      source: "ABS · 10.1016/j.dajour.2025.100601"
    - text: "The authors recommend verifying the validity of the regularity assumption before applying such models."
      source: "ABS · 10.1016/j.dajour.2025.100601"

flow:
  title: Modeling approach
  stages:
    - label: Data
      nodes: [Patient-level service data, Not shared publicly]
    - label: Prepare
      nodes: [pandas, NumPy]
    - label: Model
      nodes: [Probability model (lifetimes), Machine-learning algorithms]
    - label: Compare
      nodes: [Accuracy of each approach, Check the key assumption]
    - label: Decide
      nodes: [Patient segmentation, Retention, Marketing and loyalty]
  note: >-
    A summary of the method described in the abstract and my resume, not a diagram from the paper.

evidence:
  - kind: link
    label: Read the article (DOI)
    href: https://doi.org/10.1016/j.dajour.2025.100601
  - kind: note
    label: About the data
    caption: Patient data is confidential and is not shown. The article is the public record of the method and results.

reflection: >-
  [NEED DETAIL: what the comparison taught you about when a simpler probability model beats machine learning, in
  your own words.]

sources:
  - "RES · Langara Research Assistant bullets 1, 2, 5, 6"
  - "LI · Langara and Publications"
  - "ABS · 10.1016/j.dajour.2025.100601 (abstract, as listed on the earlier portfolio)"
---
