# CLAUDE.md — Ellie Hallaron Website

This file is read automatically by Claude Code at the start of every session.
Follow these rules for all work in this project.

## Cross-Project Context
Before starting work, read the workspace Project Registry for relationship context:
`C:\Users\brian\projects\PROJECT_REGISTRY.md`
This project is part of the **Trivia Platform** group (Supabase Account 1).
It is a **consumer** of quiz-embed (loads web component via CDN).
Currently pinned to @gstreet-ops/quiz-embed@latest.
Check the registry's Pending Updates section for any version updates needed.

---

## What This Site Is
Author website for Ellie Hallaron. Built with Eleventy (11ty), data-driven via JSON.
Hosted on GitHub Pages. Includes a trivia page that loads the quiz-embed web component.

## Stack
- Eleventy 3.x (static site generator)
- Nunjucks templates
- GitHub Pages (via GitHub Actions)
- Quiz embed: @gstreet-ops/quiz-embed@latest via jsDelivr CDN

## Key Files
- `.eleventy.js` — Eleventy config (input: src, output: _site, pathPrefix)
- `src/_includes/layouts/base.njk` — Base layout (nav, footer, scripts)
- `src/_data/*.json` — Data files (site, nav, books, bio, social, quiz, etc.)
- `src/index.njk` — Homepage
- `src/books.njk` — Books overview (The Syndicate Series grid)
- `src/book-detail.njk` — Book detail template (pagination generates 4 pages)
- `src/about.njk` — About the author (full bio + quiz embed)
- `src/shop.njk` — Where to Buy (retailer links per book + signed copies)
- `src/connect.njk` — Connect page (social links, email, newsletter)
- `src/trivia.njk` — Trivia quiz (web component + iframe fallback)
- `src/styles.css` — Shared styles
- `.github/workflows/build.yml` — GitHub Actions build + deploy
- `.claude/context.md` — Session-to-session project context

## Data Architecture
All content lives in `src/_data/` as separate JSON files:
- `site.json` — title, tagline, palette, fonts URL
- `nav.json` — nav links array with key for active state
- `books.json` — all 4 books with blurbs, content warnings, purchase links
- `bio.json` — author bio paragraphs and photo
- `social.json` — social platforms with SVG icon paths
- `quiz.json` — quiz embed config
- `newsletter.json` — newsletter copy
- `pagesMeta.json` — per-page title/description/banner text

## Build & Dev
- `npm start` — local dev server with hot reload
- `npm run build` — build to `_site/`
- Output: 10 HTML pages + images + CSS

## Deployment
Push to `main` → GitHub Actions builds with Eleventy → deploys `_site/` to GitHub Pages.
Live at: https://gstreet-ops.github.io/ellie-hallaron-website/
PathPrefix is set to `/ellie-hallaron-website/` — change to `/` when custom domain is configured.
