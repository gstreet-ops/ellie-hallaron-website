# Ellie Hallaron Website — Project Context

> This file is maintained by Claude across sessions to carry forward project context.
> It lives in the repo so both Cowork and Claude Code can read/update it.

## Current State

- **Active branch**: main
- **Last deployment**: Pre-redesign (original dark glamour theme still live)
- **Design phase**: Session 1 complete — Home Page redesigned

## Build Progress

### Completed
- [x] Scope document finalized (magenta/cream/gold redesign)
- [x] Project context skill created
- [x] All client assets collected and inventoried

### Build Sessions
- [x] Session 1: Foundation & Home Page (new color system, logo hero, coming soon, bio teaser, connect section)
- [ ] Session 2: Books Page & Individual Book Pages (series grid, 4 detail pages)
- [ ] Session 3: About, Shop, & Connect Pages
- [ ] Session 4: Polish, Mobile Testing & Domain Setup

### Pending from Client
- [ ] Book 4 (Angelic Acts) blurb — Molly writing soon
- [ ] Professional headshots — using Pic_of_Me.jpg as placeholder
- [ ] Purchase links (Amazon/B&N/Ingram URLs for each book)
- [ ] Social media handles (TikTok, Instagram, Goodreads URLs)
- [ ] Newsletter service provider choice
- [ ] Signed copies shop link (when she sets up Etsy/Shopify)
- [ ] GoDaddy DNS configuration for elliehallaron.com
- [ ] Contact email address for Connect page

## Design Decisions

- **Color pivot**: Moving from dark glamour (dark bg + mauve) to magenta/cream/gold to bridge dark romance (current Syndicate Series) with planned contemporary romance work
- **Palette**: Magenta #C2185B, Cream #FFF8F0, Gold #C5A55A, Charcoal #2D2D2D, Deep Plum #3D1A2E, Blush #F5E6EC
- **Typography**: Playfair Display (headings), Lato (body)
- **Reference site**: authorkatsingleton.com — logo landing, featured books, bio, social links
- **Shop approach**: No payment processing — retailer links per book + signed copies placeholder
- **Trivia**: Linked from About page, not in main nav (per Molly's request)
- **Hosting**: Staying on GitHub Pages, pointing elliehallaron.com via GoDaddy DNS

## Known Issues

- Innocent Intentions cover (1__Innocent_Intentions_Paperback_Pic.jpg) renders very dark/black in some viewers — may need re-export from Molly. Inline image shows it's actually blue roses.
- Depositphotos images are stock photos (color references only, not for use as site assets)
- First Depositphotos image (14083733) appears entirely black — may be corrupted or extremely dark

## Asset Inventory

### Images in repo
| File | Purpose |
|------|---------|
| Gemini_Generated_Image_gzolr9gzolr9gzol.png | Logo (white bg) |
| Gemini_Generated_Image_5n21vs5n21vs5n21.png | Logo (transparent) |
| Pic_of_Me.jpg | Author photo (placeholder) |
| 1__Vengeful_Vows_CoverRecovered_copy.jpg | Book 1 cover |
| 1__NEW_DISCRETE_Deceptive_Desires_Discrete_Cover.jpg | Book 2 cover |
| 1__Innocent_Intentions_Paperback_Pic.jpg | Book 3 cover |
| Angelic_Acts_Paperback_Front.jpg | Book 4 cover |
| Depositphotos_666139340_XL.jpg | Color reference (magenta watercolor) |
| Depositphotos_14083733_XL.jpg | Color reference (renders black) |

### Text content (in project docs)
- Blurbs: Books 1-3 ✅
- Content warnings: Books 1-3 ✅
- Biography: Bio_for_Website.docx ✅
- Book 4 blurb: ❌ Pending

## Session Log

### 2026-03-01 — Project Scoping & Planning
- Reviewed Molly's detailed email with all redesign requests
- Inventoried all provided assets (covers, logo, signature, photo, bio, blurbs, content warnings)
- Established new magenta/cream/gold color palette based on client's vision and Depositphotos references
- Defined full site structure: Home, Books (with individual detail pages), About, Shop, Connect
- Created 4-session build plan with copy-paste Claude Code prompts

### 2026-03-02 — Session 1: Foundation & Home Page
- Complete redesign of index.html and styles.css with magenta/cream/gold palette
- Switched typography from Cormorant Garamond + Inter to Playfair Display + Lato
- New CSS custom properties system replacing dark glamour theme
- Built 4-section home page: logo hero, featured books, about teaser, connect
- Nav updated to: Home | Books | About | Shop | Connect (Trivia removed from nav)
- Mobile hamburger with deep plum full-screen overlay
- Fade-in scroll animations via IntersectionObserver
- Hero has onerror fallback for missing logo image (Gemini_Generated_Image_5n21vs5n21vs5n21.png)
- Featured books: Vengeful Vows (latest release) + Angelic Acts (coming soon placeholder)
- Legacy CSS preserved for about.html compatibility
- about.html nav updated to match new structure
- Note: Logo image file not yet in repo — hero falls back to text until file is added
