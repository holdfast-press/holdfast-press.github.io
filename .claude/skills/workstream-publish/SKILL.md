---
name: workstream-publish
description: Full pipeline for creating or updating pages on the Holdfast Press website.
---

## Pipeline

1. **hp-web-writer** — writes the page content (copy, HTML text structure) based on the request and source material from the-keepers/ref/
2. **hp-web-designer** — implements the full HTML/CSS for the page, applying the site's design system
3. **hp-reviewer** — reviews both content and code; issues verdict
4. If APPROVE: present to human for final approval, then commit with `feat(site): <description> AB#<id>`
5. If REVISE: hp-web-writer or hp-web-designer addresses issues; re-review (max 2 cycles)
6. Human approval required before any commit to main

## Escalation

If revision cycles exceed 2, surface to human with the current draft and the review findings. Do not loop indefinitely.
