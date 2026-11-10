---
# ----------------------------------------------------------------------------
# New case study. Fill in what you know and delete what you do not need.
# Lines starting with # are comments. Anything marked [NEED DETAIL: ...] shows
# up highlighted on the page and in `npm run check:placeholders`.
# Delete the "draft: true" line when the page is ready to publish.
# ----------------------------------------------------------------------------
draft: true
title: "{{TITLE}}"
type: {{TYPE}}                  # professional | academic | personal
org: "[NEED DETAIL: employer, school or 'Personal project']"
period: "[NEED DETAIL: e.g. 2025 or Jan 2025 – Mar 2025]"
order: {{ORDER}}                # lower numbers appear first
summary: >-
  [NEED DETAIL: one or two sentences: what you built and for whom.]
tags: [Power BI, SQL]           # becomes the tool filters on the home page

# Optional headline number for the card and the result section. Delete the block if there is no honest number.
metric:
  value: "[NEED DETAIL]"
  label: "[NEED DETAIL: what the number measures]"
  source: "Where this number comes from, e.g. 'RES · bullet 3' or 'GH · README'"

situation: >-
  [NEED DETAIL: who needed what, and why it mattered.]

challenge: >-
  [NEED DETAIL: what made it hard: scattered data, manual work, scale, unclear definitions.]

role:
  owned:
    - "[NEED DETAIL: what you personally did]"
  # Delete "team" for solo work.
  team:
    - "[NEED DETAIL: what others contributed]"

approach:
  - title: Understand the need
    text: >-
      [NEED DETAIL: how you gathered requirements.]
  - title: Prepare and model the data
    text: >-
      [NEED DETAIL: sources, cleaning, modelling choices.]
  - title: Build and check
    text: >-
      [NEED DETAIL: tools, tests, how you checked quality.]

result:
  summary: >-
    [NEED DETAIL: the verified outcome, or what was delivered. Do not claim impact the sources do not support.]
  points:
    - text: "[NEED DETAIL: one concrete result]"
      source: "Where it comes from"

# Optional data-flow diagram. Delete the whole block to skip it.
flow:
  title: Data flow
  stages:
    - label: Sources
      nodes: ["[NEED DETAIL]"]
    - label: Transform
      nodes: ["[NEED DETAIL]"]
    - label: Serve
      nodes: ["[NEED DETAIL]"]

# Optional. Put images in public/images/projects/ and reference them without a leading slash.
evidence:
  - kind: link                  # link | image | note
    label: "[NEED DETAIL: e.g. GitHub repository]"
    href: https://github.com/andresvdata
  # - kind: image
  #   label: Dashboard overview
  #   src: images/projects/my-dashboard.webp
  #   alt: Describe what the image shows for people using screen readers.
  #   caption: Sample data only. No client details.

# Optional.
reflection: >-
  [NEED DETAIL: what you learned or would improve.]

# Required: where the facts on this page come from (kept for the source map).
sources:
  - "Your notes, README or resume bullet"
---
