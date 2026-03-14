# Ellie Hallaron Website — Project Context

> This file is maintained by Claude across sessions to carry forward project context.
> It lives in the repo so both Cowork and Claude Code can read/update it.

## Current State

- **Active branch**: main
- **Last deployment**: Session 6 — Client Feedback Round 1
- **Design phase**: Session 6 complete — Client feedback implemented

## Build Progress

### Completed
- [x] Scope document finalized (magenta/cream/gold redesign)
- [x] Project context skill created
- [x] All client assets collected and inventoried
- [x] Client Feedback Round 1 implemented (Session 6)

### Build Sessions
- [x] Session 1: Foundation & Home Page
- [x] Session 2: Books Page & Individual Book Pages
- [x] Session 3: About, Shop, & Connect Pages
- [x] Session 4: Polish, Mobile Testing & Fixes
- [x] Session 5: Eleventy Migration
- [x] Session 6: Client Feedback Round 1

### Pending from Client
- [ ] Book 4 (Angelic Acts) blurb — Molly writing soon
- [ ] GoDaddy DNS activation for elliehallaron.com (then change pathPrefix to "/")
- [ ] Purchase links (Amazon/B&N/Ingram URLs for each book) — currently all "#"
- [ ] Newsletter service provider choice
- [ ] Signed copies shop link
- [ ] Professional headshots — using Pic_of_Me.jpg as placeholder

### Resolved (Client Feedback Round 1 & 2)
- [x] Contact email — set to elliehallaron.author@gmail.com
- [x] Amazon Author Page URL — set to correct URL
- [x] Watercolor logo image — added to hero
- [x] Book order corrected (II, DD, VV, AA)
- [x] Per-book labels (data-driven "label" field in books.json)
- [x] Social media handles confirmed

## Design Decisions

- **Color palette**: Magenta #C2185B, Cream #FFF8F0, Gold #C5A55A, Charcoal #2D2D2D, Deep Plum #3D1A2E, Blush #F5E6EC
- **Typography**: Playfair Display (headings), Lato (body)
- **Shop approach**: No payment processing — retailer links per book + signed copies placeholder
- **Trivia**: Linked from About page, not in main nav
- **Hosting**: GitHub Pages, pointing elliehallaron.com via GoDaddy DNS

## Correct Book Order (updated Session 6)

1. Innocent Intentions (Book One) — Matthias & Margot
2. Deceptive Desires (Book Two) — Roman & Cecilia
3. Vengeful Vows (Book Three) — Dominic & Katerina
4. Angelic Acts (Book Four) — Coming Soon

## Asset Inventory

### Images (organized in src/images/)
| File | Purpose |
|------|---------|
| src/images/logo/logo-white-bg.png | Logo (white bg, used in hero) |
| src/images/logo/logo-transparent.png | Logo (transparent) |
| src/images/logo/nav-signature.png | Signature logo for nav bar |
| src/images/author/author-photo.jpg | Author photo (placeholder) |
| src/images/covers/innocent-intentions.jpg | Book 1 cover |
| src/images/covers/deceptive-desires.jpg | Book 2 cover |
| src/images/covers/vengeful-vows.jpg | Book 3 cover |
| src/images/covers/angelic-acts.jpg | Book 4 cover |

## Session Log

### Sessions 1–5 (2026-03-01 through 2026-03-03)
- Full site built from scratch: Home, Books (grid + 4 detail pages), About, Shop, Connect, Trivia
- Migrated to Eleventy with data-driven JSON content architecture
- GitHub Actions CI/CD deployed to GitHub Pages

### 2026-03-13 — Session 6: Client Feedback Round 1
Changes made based on client review:
- **Book order corrected**: Innocent Intentions (1), Deceptive Desires (2), Vengeful Vows (3), Angelic Acts (4)
- **Book numbering updated** in books.json — all "number" fields and featured_sub text corrected
- **All 4 books now featured** on home page (was only 2); removed series heading/tagline from home
- **"New Release" / "Coming Soon" labels** added above book covers on home page
- **Book cover spacing** increased significantly (4-col grid with 3.5rem gap)
- **Nav logo**: Replaced text with signature PNG image (nav-signature.png)
- **Hero**: Added conditional for watercolor logo (hero.watercolor field in hero.json); falls back to existing logo
- **New cover images** copied: deceptive-desires.jpg, vengeful-vows.jpg, angelic-acts.jpg (from client-provided files)
- **Books page**: Title → "Ellie Hallaron's Books", subtitle → "Romances that'll make you swoon", added series heading "The Syndicate Series" within grid section, layout structured for future series
- **Shop page**: Banner heading → "Shop", sub → "Where to Buy"
- **Connect page**: Heading → "Connect with Ellie", removed "Follow Along" and "Get in Touch" section labels
- **Email**: Set to placeholder "email@placeholder.com" with TODO comment for Molly
- **Newsletter**: Heading changed to "Ellie's Newsletter", removed "Stay Connected" label, removed "unhinged" from description, fixed double period
- **Amazon author URL**: Set to placeholder with TODO
- **series.json**: book_slugs order updated to match new book order
