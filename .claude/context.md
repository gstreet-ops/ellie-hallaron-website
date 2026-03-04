# Ellie Hallaron Website — Project Context

> This file is maintained by Claude across sessions to carry forward project context.
> It lives in the repo so both Cowork and Claude Code can read/update it.

## Current State

- **Active branch**: main
- **Last deployment**: Session 5 — Eleventy conversion (pending push)
- **Design phase**: Session 5 complete — Eleventy Migration

## Build Progress

### Completed
- [x] Scope document finalized (magenta/cream/gold redesign)
- [x] Project context skill created
- [x] All client assets collected and inventoried

### Build Sessions
- [x] Session 1: Foundation & Home Page (new color system, logo hero, coming soon, bio teaser, connect section)
- [x] Session 2: Books Page & Individual Book Pages (series grid, 4 detail pages)
- [x] Session 3: About, Shop, & Connect Pages (full bio, quiz embed, shop grid, social cards, newsletter)
- [x] Session 4: Polish, Mobile Testing & Fixes
- [x] Session 5: Eleventy Migration (data-driven templates, GitHub Actions)

### Pending from Client
- [ ] Book 4 (Angelic Acts) blurb — Molly writing soon
- [ ] Professional headshots — using Pic_of_Me.jpg as placeholder
- [ ] Purchase links (Amazon/B&N/Ingram URLs for each book)
- [x] Social media handles — TikTok, Instagram, Amazon, Goodreads (in connect section)
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

### Images (organized in src/images/)
| File | Purpose |
|------|---------|
| src/images/logo/logo-white-bg.png | Logo (white bg) |
| src/images/logo/logo-transparent.png | Logo (transparent) |
| src/images/author/author-photo.jpg | Author photo (placeholder) |
| src/images/covers/vengeful-vows.jpg | Book 1 cover |
| src/images/covers/deceptive-desires.jpg | Book 2 cover |
| src/images/covers/innocent-intentions.jpg | Book 3 cover |
| src/images/covers/angelic-acts.jpg | Book 4 cover |

### Legacy images (root dir, still in repo)
| File | Purpose |
|------|---------|
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

### 2026-03-02 — Session 2: Books Page & Individual Book Pages
- Fixed Vengeful Vows label on index.html from "Book Three" to "Book One" (correct series order)
- Correct series order: Book 1 Vengeful Vows (Dominic & Katerina), Book 2 Deceptive Desires (Roman & Cecilia), Book 3 Innocent Intentions (Matthias & Margot), Book 4 Angelic Acts (upcoming)
- Updated homepage featured card links to point to individual detail pages instead of books.html
- Added mix-blend-mode: multiply to hero logo (white bg blends into cream)
- Updated About teaser bio to use real first paragraph from Bio for Website doc
- Built books.html — series overview with 4-book responsive grid (4-col desktop, 2-col tablet, 2-col mobile)
- Built 4 individual book detail pages in books/ subdirectory:
  - books/vengeful-vows.html — full dual-POV blurb, collapsible content warning (with spoiler note), purchase buttons
  - books/deceptive-desires.html — full dual-POV blurb, collapsible content warning, purchase buttons
  - books/innocent-intentions.html — full dual-POV blurb, collapsible content warning, purchase buttons
  - books/angelic-acts.html — "Blurb coming soon" placeholder, cover image, View All Books link
- Book detail layout: sticky cover left + scrollable info right (desktop), stacked on mobile
- Blurb formatting preserves verse-style line breaks with character name headers (h3, magenta)
- Intro quotes styled with gold left border
- Content warnings use native <details>/<summary> for collapsible behavior, no JS required
- Purchase buttons: Amazon (primary magenta), Barnes & Noble + Ingram (outline) — all placeholder # URLs
- Back-to-books arrow link on each detail page
- New CSS sections added to styles.css: books grid, book detail, content warning, purchase links, responsive
- All pages use consistent nav (Books active), mobile hamburger, footer, magenta/cream/gold design system

### 2026-03-03 — Session 3: About, Shop, & Connect Pages
- Complete redesign of about.html — full 5-paragraph bio, large author photo (bio-grid layout), fade-in animations
- Added "Test Your Knowledge" trivia section at bottom of About page with quiz embed iframe (light theme, magenta primary)
- Quiz iframe: gstreet-ops quiz-embed with community=ellie-hallaron, lazy-loaded, styled with blush background
- Built shop.html — "Where to Buy" page with 4 book rows (cover thumbnail + title + retailer buttons)
- Shop layout: cover left + info right grid, Amazon (primary magenta), B&N + Ingram (outline buttons) — all placeholder # URLs
- Angelic Acts shop entry shows "Coming Soon" with note about purchase links at release
- "Signed Copies" section with blush background, "Coming Soon" message, "Get Notified" CTA linking to connect page
- Built connect.html — dedicated Connect page with 3 sections: social links, email contact, newsletter
- Social links: 4-card grid (TikTok, Instagram, Goodreads, Amazon) with gold-bordered circle icons, handles shown
- Email contact section: placeholder contact@elliehallaron.com with envelope icon
- Newsletter: reuses "Join the Inner Circle" pattern from homepage (deep plum background, subscribe form)
- Updated nav links across ALL 8 pages to point to connect.html instead of #connect / index.html#connect
- Root pages: href="connect.html", Book detail pages: href="../connect.html"
- Mobile overlay CTA updated to point to connect.html on all pages
- Removed "legacy" comments from CSS (no longer legacy — Session 3 is complete)
- New CSS sections: quiz embed, shop page, connect page (social cards, email contact), responsive breakpoints for all
- All new pages use consistent nav, mobile hamburger, footer, fade-in scroll animations, magenta/cream/gold design system

### 2026-03-03 — Session 4: Polish and Fixes
- Replaced all 5 bio paragraphs in about.html with exact verbatim text from Bio_for_Website.docx
- Verified quiz embed iframe URL is correct (literal & characters, #/? hash route, correct community/theme params)
- Full cross-page nav audit: all 10 pages (5 root + 4 books/* + trivia.html) checked
- Fixed trivia.html nav: updated from old structure (Books/Trivia/About/Newsletter) to current (Home/Books/About/Shop/Connect)
- Fixed trivia.html: updated font from Cormorant Garamond to Playfair Display, added footer, added mobile overlay CTA
- Added overflow-x: hidden to body in styles.css to prevent horizontal scroll on mobile
- Mobile verified: hamburger scripts on all pages, img { max-width: 100% } global rule, quiz iframe height 500px on mobile
- Nav link map verified: root pages use direct filenames, books/* pages use ../ prefix, all consistent

### 2026-03-03 — Session 5: Eleventy Migration
- Converted entire site from static HTML to Eleventy (11ty) static site generator
- Initialized npm project, installed @11ty/eleventy@3.1.2
- Created src/ directory structure: _data/, _includes/layouts/, images/ (covers, logo, author)
- Renamed and organized all images from root into semantic subdirectories
- Extracted all content from 10 HTML pages into separate JSON data files in src/_data/:
  - site.json, nav.json, hero.json, bio.json, books.json, series.json, social.json, quiz.json, newsletter.json, pagesMeta.json
  - Originally content.json but split to avoid Eleventy's reserved `content` variable in layouts
- Created base.njk layout with Nunjucks extends pattern (not Eleventy layout chaining)
  - Shared nav loop, mobile overlay, footer, scripts (nav scroll, hamburger, fade-in observer)
  - Block overrides: pageTitle, pageDescription, extraHead, navScript, content, extraScripts
  - pageKey front matter variable drives active nav state
  - mobileCtaHref variable for connect page's #newsletter anchor
- Created 7 Nunjucks page templates:
  - index.njk — homepage with hero, featured books (filtered by book.featured), about teaser, newsletter
  - books.njk — series grid loop over all books
  - book-detail.njk — pagination over books array generates 4 individual book pages
  - about.njk — bio paragraphs loop, quiz embed iframe
  - shop.njk — shop rows loop with coming_soon conditional
  - connect.njk — social cards loop, email contact, newsletter
  - trivia.njk — quiz web component with extraHead styles and forced scrolled nav
- Book blurbs use nl2br custom filter to convert \n to <br> for verse-style poetry formatting
- All URLs use Eleventy's url filter with pathPrefix: /ellie-hallaron-website/
- Created .eleventy.js config: input src, output _site, passthrough copy for images/styles/admin
- Created .github/workflows/build.yml: GitHub Actions build + deploy to Pages
- Build output: 10 HTML pages + 8 passthrough files (images + CSS)
- Updated .gitignore: _site/, node_modules/, .cache/
- Old static HTML files remain in repo root (can be removed after verifying deployment)
