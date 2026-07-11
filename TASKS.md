# Cross-Repo Task Tracker

Backlog for the Gunner-the-Lab and Holdfast-Press web properties, organized by **PWA surface**.
Recorded 2026-07-11. **Last updated 2026-07-11** (reorganized by PWA surface per user directive).
**Model rule: Fable or Opus only.** User has granted all needed access.

> **Work-item tracking = Azure DevOps (ADO), NOT GitHub Issues.** ADO org `https://dev.azure.com/hybridcloudsolutions`; Holdfast project **Holdfast Press** (area path `Holdfast Press\Website`); commit format `type(scope): description AB#<id>`. Gunner ADO project **TBD**. Mirror these items into ADO. Original task IDs (A1–H7) are kept in brackets for continuity.

Status key: ⬜ not started · 🔄 in progress · ✅ done · 💬 needs a decision

---

## ▶ Execution plan (added 2026-07-11 — "just do the whole board")

Grouped by how much input each needs. Work 🟢 top-to-bottom without prompting; surface 🟡/🔴 as a batch.

**🟢 Autonomous — build + verify + ship without waiting:**
1. **[A1-app]** PWA "new version, refresh" prompt + clean SW update, BOTH reader apps (`vite-plugin-pwa` is already `registerType:'prompt'`, just no UI). Directly targets the "old story on my iPhone" symptom.
2. ✅ **[content]** Verify `publish:holdfast` — DONE 2026-07-11, fully healthy/zero drift (see Surface 3 for detail).
3. **[A1-site]** Gunner **site**-PWA update notification + SW cache refresh (separate PWA from the app).

**🟡 One decision from you, then I run it start to finish:**
4. **[G2]/[H1]** Re-theme the apps (Gunner warmth / Holdfast literary). I propose 2–3 visual directions each; you pick one.
5. **[G6]/[H4]** Kill the email-code login; real cross-device profile (D1). Pick the auth model (passkeys / magic-link / Google) and I build it.
6. **[ADO]** Mirror this board into Azure DevOps — needs the Gunner ADO project call (separate project or shared with Holdfast?).

**🔴 Blocked on you or external provisioning:**
7. **[G4]/[G10]** Re-publish Story #1 text + audio — your re-read (text is live on the site).
8. **[A2]** AI voice "Listen" (MAI-Voice-2) — Azure AI Foundry provisioning in the tenant.
9. **[verify]** Install / update-prompt / content-sync checks — need your iPhone + iPad + desktop.

*Why I can't literally one-shot all of it: the biggest items need your taste (re-themes), your device (verification), an auth decision (login), or external Azure provisioning (voice). Everything that's purely code, I just do.*

---

## ⭐ The PWA surfaces (this is how the work is organized)

There are **three installable PWA surfaces** (plus one minor landing site). Each is a *separate* PWA with its own service worker, its own update cycle, and its own verification needs — do not conflate them.

| # | Surface | Repo | What it is |
|---|---|---|---|
| **1** | **gunnerthelab.com** | `gunnerthelab.github.io` (Astro/Pages) | The Gunner illustrated-storybook **site**, itself an installable PWA (`site.webmanifest` + `sw.js`). |
| **2** | **app.gunnerthelab.com** | `storyreader-gunner` (Preact + CF Worker/D1/R2) | The Gunner **StoryReader app** (read + listen, sort, offline). |
| **3** | **app.holdfastpress.com** | `storyreader-holdfast` (same stack) | The Holdfast **StoryReader app** — *the* Holdfast product (The Keepers). |
| 4 (minor) | holdfast-press.github.io | `holdfast-press.github.io` | Holdfast landing site — low priority (reader-app focus). |

**Update paths (why "the app showed the old story"):**
- **Site PWA (1):** push → GitHub Pages rebuild → the installed PWA's **`sw.js` must refresh** to show new content. A stale SW serves old pages.
- **Reader apps (2,3):** `deploy:<brand>` (build + `wrangler deploy`) ships **code/features** — *automatic* on push. `publish:<brand>` (`tools/publish.mjs`, reads the site's markdown → JSON+audio → R2 + manifest) ships **story content** — *manual, must be run after any story edit*.
- ⇒ A story edit reaches the reader app only after `publish` runs; it reaches the installed site PWA only after its SW updates. **Both need explicit verification.**

---

## 🟢 Decisions resolved 2026-07-11
- **H7** → `the-keepers` made **PRIVATE** + all repos re-audited (sites public, apps + manuscript private).
- **Branding pushed + deploying:** G1 icons, G3/H2 PWA names.
- **A2 voice** → **one shared Azure AI Foundry** for both brands (research/plan queued).

## 🔴 On hold (awaiting user)
- **[G4] Re-publish Story #1 to the Gunner app** + **[G10] regenerate its audio** — user will **re-read** the corrected text first (LIVE at <https://gunnerthelab.com/stories/01-the-voyage-home-going-east/>) and confirm it's final. Old-way Azure TTS key is in `storyreader-gunner/.dev.vars` (recoverable).

---

## 🔊 Two SEPARATE audio tracks (do not conflate)

1. **[G10] Story #1 re-narration — OLD WAY (one-off).** The edited text needs fresh narration using the **existing** Azure neural voice (`en-US-AndrewMultilingualNeural`; key in `storyreader-gunner/.dev.vars`). A content fix tied to the Story #1 edit. **ON HOLD** until the user re-reads + confirms the text is final. Gunner app (for now).
2. **[A2] New multi-voice "Listen" feature — NEW WAY (MAI-Voice-2).** A new capability for **both** reader apps: keep the existing voice for **read-along** (it can't move the read cursor with a new TTS yet); for **listen-only**, offer multiple selectable voices (≥1 man + ≥1 woman). Model: MAI-Voice-2. **One shared Azure AI Foundry** (decided), provisioned in the **thisismydemo / hybridcloudsolutions** tenant. If Claude can't fully build it, deliver a step-by-step build PLAN.

---

## 🟦 Surface 1 — gunnerthelab.com  (Gunner **site** PWA)

- ✅ Confirmed it IS an installable PWA (`public/site.webmanifest` + `public/sw.js`, update-detection in `BaseHead.astro`).
- ✅ Story #1 corrected text **live on the site** (`78ca44d`, Pages deploy succeeded).
- ⬜ **[A1-site] PWA update notification** — installed site PWA must advertise "new version — refresh" and the SW must cleanly replace stale cache. (Likely cause of "old story on my iPhone.")
- ⬜ **[verify] Update/propagation check** — after a site push, confirm the *installed* PWA (iPhone + iPad + desktop) actually shows the new content, not an SW-cached old copy.
- ⬜ **[verify] Install check** — confirm install works + icon/name/splash correct on iOS, iPadOS, desktop.

## 🟩 Surface 2 — app.gunnerthelab.com  (Gunner **StoryReader app** PWA)

- ✅ **[G1] Distinct app icons** (Gunner+Tiger silhouette) — `54f3047`, pushed/deploying.
- ✅ **[G3] PWA install name** → "Gunner the Lab" — `dfd8e19`, pushed/deploying, build-verified.
- 🔄 **[G4] Re-publish edited Story #1 content** — on hold for re-read (see On hold). ✅ Prereq done: `tools/.state/gunner.json` reconstructed from the live manifest (at v5, gitignored/local). When greenlit: `publish:gunner --book 01-the-voyage-home-going-east` to re-TTS Story #1. Note the reconstructed state has no per-chapter `blocks`, so block IDs re-derive on that republish — fine for a rewritten story.
- ⬜ **[G2] Re-theme** the app to feel more "Gunner the Lab."
- ✅ **[G9] Sort UI** (Story order / Chronological / Recently Released / By Collection) — **DONE + LIVE.** Carried `timeframe` through `parse/gunner.mjs` → `publish.mjs` manifest → app `BookEntry`; reworked the Library sort toggle (commit `4c4223a`, deploy run 29157433825 ✅). *By Collection* renders grouped sections ordered by earliest in-world date. Manifest refreshed to **v5** via a surgical merge — added `timeframe` to all 42 AND shipped the recalibrated `publishDate` cadence that had never been republished (fixes *Recently Released*, which was collapsed onto placeholder dates live). Story #1 content/audio/description left untouched (hold honored).
- ⬜ **[G6] Real login + cross-device profile (D1)** — kill the disliked email-code flow; "thought we fixed this twice, still doesn't show" → verify the account/profile UI actually renders.
- ⬜ **[G10] Redo Story #1 audio** — on hold for re-read; old-way Azure TTS (`en-US-AndrewMultilingualNeural`) ready.
- ✅ **[A1-app] PWA update notification** — DONE 2026-07-11 (`bbd949d`, pushed/deploying, run 29159115708). Root cause was double: `main.tsx` bypassed vite-plugin-pwa (bare `serviceWorker.register`) AND `sw.ts` called `skipWaiting()` unconditionally on install → new SWs silently hijacked tabs (traced against workbox-window's 200ms waiting heuristic). Now: waiting SW → app-wide top banner "New version available — Refresh" → tap → SKIP_WAITING handshake → reload; hourly + on-focus update checks for installed iOS PWAs.
- ⬜ **[A2/G5] AI voice for Listen (MAI-Voice-2)** — multi-voice listen-only; shared Foundry (decided). Keep existing voice for read-along.
- ⬜ **[G11] Story #1 art** (Horse House, El Paso dinner, skunk gauntlet) + fix stale `resources/Illustration_Prompts_All_Stories.md`. *(Art lives in the site repo but feeds this app's covers.)*
- ⬜ **[verify]** Install + update-prompt + content-sync check on iPhone/iPad/desktop.

## 🟪 Surface 3 — app.holdfastpress.com  (Holdfast **StoryReader app** PWA) — *primary Holdfast focus*

- ✅ **[H2] PWA install name** → "Holdfast Press" — `81b2e83`, pushed/deploying.
- ⬜ **[H1] Re-theme** the app to feel more "Holdfast Press." *(Primary Holdfast work.)*
- ⬜ **[H4] Real login + cross-device profile (D1)** — same as G6.
- ✅ **[A1-app] PWA update notification** — DONE 2026-07-11 (`3c948e8`, pushed/deploying). Root cause was worse than "no UI": `sw.ts` called `skipWaiting()` unconditionally on install, so new SWs silently hijacked open tabs (stale JS vs new SW race). Now: waiting SW → top banner "New version available — Refresh" → tap → SKIP_WAITING → reload. Hourly + on-focus update checks added for iOS. Same bug likely existed in the gunner twin (its agent is on it).
- ⬜ **[A2/H3] AI voice for Listen (MAI-Voice-2)** — shared Foundry (decided).
- ✅ **[content] Verify The Keepers publish pipeline** — audited 2026-07-11 (read-only): **fully healthy, zero drift** (manuscript → site repo → parse → state → live manifest → R2). 2 chapters live (prologue f58735e1, chapter-one f5373706), libraryVersion 5 = 5, audio 2/2, all 7 R2 assets HTTP 200. ⚠️ Fragility: `tools/.state/holdfast.json` is gitignored + untracked (same class as gunner's earlier loss) — exists only on this disk. Chapter-two flow: sync manuscript → site repo `src/pages/the-keepers/` first (that's the publish source), then dry-run, then `publish:holdfast`.
- ⬜ **[verify]** Install + update-prompt + content-sync check on iPhone/iPad/desktop.

## ⬜ Surface 4 (minor) — holdfast-press.github.io  (Holdfast landing site)
- ⬜ Keep as a simple landing that points to the app; **no rich-PWA investment** (reader-app is the Holdfast product).

---

## 🧩 Cross-cutting / infra (mostly done)
- ✅ **[G7/H5] Org + repo branding** — both orgs: name/description/avatar + polished repo descriptions. (Only social-preview images are web-UI-only.)
- ✅ **[H7] Repo visibility** — the-keepers private; all repos audited.
- ✅ **[G8] Per-repo agents** — story-writer + engineer agents exist across repos. **[H6]** `hp-writer` verified (Lewis/Tolkien/Lawhead).
- ⬜ **ADO** — mirror all ⬜/🔄 items above into Azure DevOps work items (`AB#<id>`).

---

## Notes
- 2026-07-11: Story #1 text is edited + live on the **site**; the **Gunner app** is stale until `publish:gunner` runs (on hold for re-read).
- 2026-07-11 (later): **G9 shipped + live.** Sort UI deployed to `app.gunnerthelab.com`; content manifest bumped to **v5** with `timeframe` (all 42) + the recalibrated weekly `publishDate` cadence. Installed apps will show the "New content in the library" banner (libraryVersion 4→5) — expected, no new stories. Story #1 body/audio remain the OLD version (G4/G10 still on hold for re-read). Backup of the prior v4 manifest saved to the session scratchpad; revert = re-upload it to `r2://storyreader-gunner-content/manifest.json`.
- Related memory: `architecture-two-pwas-per-brand`, `session-2026-07-11b-branding-app-staleness`, `feedback-ship-to-device-and-pwa-model`, `gunner-story-metadata-model`, `story-01-rewrite-new-canon`.
