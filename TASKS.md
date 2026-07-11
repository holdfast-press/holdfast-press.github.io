# Cross-Repo Task Tracker

Central backlog for the Gunner-the-Lab and Holdfast-Press sites + their StoryReader PWAs and GitHub orgs.
Recorded 2026-07-11. **Model rule for these tasks: use Fable or Opus only.** User has granted all needed access.

> **Issue / work-item tracking = Azure DevOps (ADO), NOT GitHub Issues.**
> ADO org: `https://dev.azure.com/hybridcloudsolutions`. Holdfast project: **Holdfast Press** (area path `Holdfast Press\Website`); commit format `type(scope): description AB#<id>`. Gunner-the-Lab ADO project: **TBD — confirm with user** (may share a board or need its own).
> This TASKS.md is a convenience working list; the backlog items below should be **mirrored into ADO work items**. GitHub here means code hosting + org/repo branding (the "GitHub org + repo icons/descriptions" tasks are GitHub *profile* settings, not issue tracking).

Status key: ⬜ not started · 🔄 in progress · ✅ done · 💬 needs a decision/discussion

Repos:
- `D:/git/gunnerthelab/gunnerthelab.github.io` (site, Astro) — agent: `gunner-story-writer`, `gunnerthelab.github.io-engineer`
- `D:/git/gunnerthelab/storyreader-gunner` (PWA: Vite+Preact app, Cloudflare Worker/Hono + D1 + R2, md→JSON+TTS pipeline) — agent: `storyreader-gunner-engineer`
- `D:/git/holdfast-press/holdfast-press.github.io` (site) — agents: `hp-*`
- `D:/git/holdfast-press/storyreader-holdfast` (PWA, same stack as storyreader-gunner) — agent: `storyreader-holdfast-engineer`
- `D:/git/holdfast-press/the-keepers` (manuscript/source for Holdfast stories) — agents: `hp-writer`, `hp-editor`, `hp-lore-keeper`, `hp-planner`

---

## A. All repos (both apps)

- ⬜ **A1. PWA "app update" notification.** When the web/app files are updated (not just when new content is added), the installed PWA must advertise an app update. Implement for BOTH storyreader apps. (Service-worker update flow + user-facing "new version available, refresh" prompt.)
- 💬 **A2. Microsoft AI voice (MAI-Voice-2) for the "Listen" feature.** Research + (if viable) build. Requirements:
  - Keep the EXISTING voice for the **read-along** view only (read-along can't move the cursor with a new TTS yet).
  - For the **listen-only** view, offer **multiple voices** (at least one man + one woman, pick fitting ones from what's available).
  - Model: https://ai.azure.com/catalog/models/MAI-Voice-2
  - Decide whether ONE shared Azure AI Foundry project serves BOTH Gunner + Holdfast.
  - Provision in the **thisismydemo / hybridcloudsolutions** tenant.
  - If Claude can't fully build it, produce a step-by-step PLAN for the user to build it out.

---

## B. Gunner the Lab

- ⬜ **G1. Distinct StoryReader icons.** storyreader-gunner currently shares the same browser favicon AND PWA icons as the gunnerthelab.github.io site → confusing. Make them different. Source/sample art may exist in `gunnerthelab.github.io`. (storyreader-gunner-engineer)
- ⬜ **G2. Re-theme the storyreader-gunner app** to feel more "Gunner the Lab."
- ⬜ **G3. PWA install name** for storyreader-gunner should include "Gunner the Lab."
- 💬 **G4. "Change the first story."** Ambiguous — likely: re-publish/sync the newly edited story #1 into the app (+ new audio, see G10). Confirm intent with user. Best-guess disposition: after the site story #1 edit ships, re-run the app publish pipeline for story #1.
- 💬 **G5. Microsoft AI voice** — see **A2** (Gunner side; shared Foundry project with Holdfast to be decided).
- ⬜ **G6. Real login + cross-device profile.** User strongly dislikes the magic-link ("email me a sign-in link") flow. Wants a real login that saves a profile (progress, what they're listening to, prefs) across devices → needs profile storage (D1). Note: "thought we fixed this twice, still doesn't show" — verify the account/profile UI actually renders. Also fold in **A1** (advertise app updates).
- ⬜ **G7. GitHub org + repo icons + descriptions** for the `gunnerthelab` org and its repos. Create nice marks; update descriptions. (See existing memory `gunnerthelab-github-branding` for what's web-UI-only.)
- ⬜ **G8. Custom agents per repo.** Confirm each gunner repo has agents; gunnerthelab.github.io has a dedicated specialized series-voice writer — `gunner-story-writer` ✅ exists (audited 2026-07-11). Verify others.
- ⬜ **G9. Reader-app UI for the new metadata.** Wire storyreader-gunner sort UI (Chronological / Recently Released / By Collection) to the `timeframe` / `publishDate` / `era` fields added on the site 2026-07-11. FIRST verify the md→JSON publish pipeline carries `timeframe` through. (see memory `gunner-story-metadata-model`)
- ⬜ **G10. Redo audio for story #1 "The Voyage Home, Going East."** ✅ Rewrite committed 2026-07-11 (gunner site `bc06986`). NOW regenerate its narration — flagship story, do it "no matter the cost"; update the AI SKU if needed. Ties to A2/G5 voice work.
- ⬜ **G11. Story #1 art follow-ups (from the rewrite).** New illustrations to generate: (1) "the Horse House" — middle boy meeting the old bay over the fence at dusk (signature new beat); (2) the great-aunt's crowded dinner table in El Paso; (3) the night-critter gauntlet (skunk in the headlights). Orphaned on disk after the edit: `story-01-scene-the-switch.png` and `story-01-scene-06-hour-four.png` (crayon scene cut) — archive or repurpose. Also `resources/Illustration_Prompts_All_Stories.md` is stale for Story 1 (says "Spring 2017", boys "7,5,3", has the cut Hour-Four/crayons prompt) — update era notes + add prompts for the 3 new scenes.

---

## C. Holdfast Press

- ⬜ **H1. Re-theme the storyreader-holdfast app** to feel more "Holdfast Press."
- ⬜ **H2. PWA install name** for storyreader-holdfast → change to something else (PWA name only).
- 💬 **H3. Microsoft AI voice** — see **A2** (Holdfast side; shared Foundry project with Gunner TBD).
- ⬜ **H4. Real login + cross-device profile** — same requirement as **G6** (real login, profile storage, cross-device, + **A1** app-update advertising).
- ⬜ **H5. GitHub org + repo icons + descriptions** for the `holdfast-press` org and repos.
- ⬜ **H6. Dedicated series-voice writer agent** for the stories repo (the-keepers). Style must be **C.S. Lewis, Tolkien, and Stephen R. Lawhead.** `hp-writer` may already exist — verify it matches that style, upgrade if not.
- 💬 **H7. Public-repo visibility audit.** Verify which currently-public repos SHOULD remain public; report before changing anything.

---

## Notes
- 2026-07-11: Story #1 rewrite is the active piece (site repo). Everything above is queued for AFTER it's committed/pushed.
- Related memory: `gunner-story-metadata-model`, `gunner-story-writer-agent-audit`, `feedback-story-numbering-and-metadata`, `gunnerthelab-github-branding`, `storyreader-holdfast-rename`.
