# CLAUDE.md — holdfast-press.github.io

Claude Code context for the primary Holdfast Press public website.

## What this repo is

This is the public-facing website for Holdfast Press, a small independent publisher focused on mythic fiction and literary fantasy. The site serves as the publisher's home: series listings, about the press, reader-facing content, and the first taste of *The Keepers* for prospective readers.

The site is served via GitHub Pages and is built as static HTML/CSS — no framework required unless complexity demands it.

## ADO

| Field | Value |
|---|---|
| Organization | https://dev.azure.com/hybridcloudsolutions |
| Project | Holdfast Press |
| Area path | Holdfast Press\Website |
| Commit format | `type(scope): description AB#<id>` |

## Repo structure

```
holdfast-press.github.io/
├── CLAUDE.md
├── README.md
├── index.html          — homepage (publisher identity, series listing)
├── the-keepers/
│   ├── index.html      — series landing page
│   ├── prologue.html   — readable prologue
│   └── chapter-one.html — readable chapter one
├── about.html          — about Holdfast Press
├── css/
│   └── style.css       — single stylesheet
├── fonts/              — self-hosted fonts if needed
└── assets/             — images, cover art, logos
```

## Visual direction

The site should feel like a literary publishing house — not generic tech or bootstrap-default.

- **Palette:** deep ink tones (near-black, dark slate, aged paper off-white), accents in deep amber or forest green
- **Typography:** a classic serif for body text (Georgia as fallback; ideally a hosted literary serif), smaller caps or tracked sans-serif for navigation and labels
- **Tone:** craftsmanship, depth, the sense that the words have weight
- **No:** stock-photo heroes, gradient buttons, parallax scrolling, animation for its own sake

The Keepers series page should feel like opening a book: intimate, inviting, slightly mysterious.

## Agents

| Agent | Model | Purpose |
|---|---|---|
| hp-web-writer | sonnet | Writes marketing copy, page content, series descriptions in the Holdfast Press voice |
| hp-web-designer | sonnet | HTML/CSS implementation — static, accessible, literary aesthetic |
| hp-reviewer | sonnet | Reviews published content for quality and voice |

## Slash commands

| Command | Skill | Purpose |
|---|---|---|
| `/publish <content>` | workstream-publish | Create or update a page: writer → designer → reviewer → human approve → commit |

## Hard rules

- Static HTML/CSS only unless complexity genuinely demands more
- No tracking scripts, analytics pixels, or third-party JS without explicit author approval
- All images must have meaningful alt text
- No secrets, tokens, or API keys ever committed
- Content exported from the-keepers/ref/ should be kept in sync with that repo's canonical versions

## What Claude may do autonomously

- Read, search, and grep any file in this repo
- Write and edit HTML, CSS, and content files
- Run git add, git commit, git push (normal pushes)

## Always confirm before

- Adding any JavaScript to the site
- Changing the visual design direction significantly
- Publishing the prologue or chapter one (coordinate with the-keepers repo)
- Deploying changes that affect the GitHub Pages live URL

## Runtime structure

```
.claude/
├── agents/           — hp-web-writer, hp-web-designer, hp-reviewer
├── commands/         — /publish
├── skills/           — workstream-publish, workstream-document
├── hooks/            — block-secrets, validate-path, log-tokens, summarize-session
├── logs/             — sessions.jsonl, tokens.jsonl
└── settings.json     — Claude Code settings
```
