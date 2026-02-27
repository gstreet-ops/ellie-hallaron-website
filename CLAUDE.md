# CLAUDE.md — Ellie Hallaron Website

This file is read automatically by Claude Code at the start of every session.
Follow these rules for all work in this project.

## Cross-Project Context
Before starting work, read the workspace Project Registry for relationship context:
`C:\Users\brian\projects\PROJECT_REGISTRY.md`
This project is a **consumer** of quiz-embed (loads web component via CDN).
Currently pinned to @gstreet-ops/quiz-embed@0.1.0.

---

## What This Site Is
Author website for Ellie Hallaron. Static HTML/CSS hosted on GitHub Pages.
Includes a trivia page that loads the quiz-embed web component.

## Stack
- Static HTML/CSS
- GitHub Pages
- Quiz embed: @gstreet-ops/quiz-embed@0.1.0 via jsDelivr CDN

## Key Files
- `index.html` — Homepage
- `about.html` — About the author
- `trivia.html` — Trivia quiz (web component + iframe fallback)
- `styles.css` — Shared styles

## Deployment
Push to `main` → GitHub Pages auto-deploys.
Live at: https://gstreet-ops.github.io/ellie-hallaron-website/
