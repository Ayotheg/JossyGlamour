# Jossyglamour Home — Build Plan

Working plan for building the home page from the Claude Design handoff, one section at a time.

**Rule: do not build a section until the owner says so.** Build one section, stop, wait for the next command.

## Original request

> Use the claude_design MCP (https://api.anthropic.com/v1/design/mcp, auth via /design-login) to import this project:
> https://claude.ai/design/p/7459c3ec-9455-4c44-b854-10da19fe786c?file=Jossyglamour+Home.dc.html
>
> Focus on these files (the whole project is readable):
> - `Jossyglamour Home.dc.html`
>
> Also read these files the selection imports:
> - `support.js`
> - `uploads/JossyGlamour-CEO.jpeg`
> - `uploads/logo.jpg`
>
> Implement: `Jossyglamour Home.dc.html`

## Source of truth

The design link cannot be opened from a non-interactive Claude Code session (it needs `/design-login`). Work from the local export instead:

- `Jossy Glamour Redesign/handoff/reference/Jossyglamour Home.dc.html` — the design (exported 2026-10-10 16:02). Recreate it pixel-perfectly; read the values from the source, do not screenshot it.
- `Jossy Glamour Redesign/handoff/tokens.css` and `tokens.json` — the design tokens.
- `Jossy Glamour Redesign/handoff/download-images.sh` — the image list.
- `About.md` — brand copy and contact details.

If the design changes again, re-export it into that folder and update this plan before building further.

## Stack and conventions

- Vite 8, React 19, Tailwind CSS 4 (tokens in `src/index.css`), React Router 7 (`BrowserRouter`/`Routes`/`Route` in `src/App.jsx`), `lucide-react` for icons.
- Shared chrome: `src/components/Layout.jsx` imports only `Navbar` and `Footer`.
- Home sections go in `src/components/home/<Section>.jsx` and are composed in `src/pages/Home.jsx`.
- Brand constants: `src/config/site.js`. Per-page head tags: `src/components/Seo.jsx`.
- Use the tokens below, not raw hex values. Use Lucide icons in place of the design's inline SVG and arrow glyphs where one matches.
- After each section: `npm run lint` and `npm run build`.

## Design tokens (done)

`src/index.css` mirrors `handoff/tokens.css` under Tailwind's `@theme`, keeping the handoff's names. Fonts load from Google Fonts and Fontshare via `index.html`.

| Token | Value | Tailwind class | Used for |
|---|---|---|---|
| pink-500 | `#DD3185` | `bg-pink-500`, `text-pink-500` | Primary accent, CTAs, active states |
| pink-300 | `#E093B8` | `bg-pink-300`, `text-pink-300` | Image fallback, footer links |
| pink-100 | `#FFE6F1` | `text-pink-100` | Text on pink |
| pink-50 | `#FFF0F6` | `bg-pink-50` | Hover tint |
| blush | `#FFF7FA` | `bg-blush` | Page background |
| white | `#FEFEFE` | `bg-white`, `text-white` | Surfaces, cards, header |
| black | `#000000` | `bg-black`, `text-black` | Headings, primary buttons |
| charcoal | `#3E3C41` | `text-charcoal`, `bg-charcoal` | Body text, footer background |
| grey-300 | `#D9D6DC` | `text-grey-300` | Footer body text |
| line-pink / line-ink / line-dark | 12% pink / charcoal / white | `border-line-pink` etc. | Hairlines |

Some hairlines in the design are 8% or 14% charcoal; use `border-charcoal/8` and `border-charcoal/14` for those.

| Font | Class | Used for |
|---|---|---|
| Satoshi | `font-display` | Titles, 700 |
| Manrope | `font-body` (also the default) | Paragraphs, 400–600 |
| Geist | `font-label` | Nav, eyebrows, numbers, 500–600 |
| Plus Jakarta Sans | `font-ui` | Buttons, pills, footer, 600 |
| Inter | `font-meta` | Fine print, 400–500 |

| Type size | Class | Value |
|---|---|---|
| h1 | `text-h1` | clamp 46–84px, line-height 0.98, tracking -0.04em |
| h2 | `text-h2` | clamp 38–64px, line-height 1, tracking -0.04em |
| h2-sm | `text-h2-sm` | clamp 32–48px, line-height 1.08, tracking -0.035em |
| h3 | `text-h3` | 26px, tracking -0.025em |
| lead | `text-lead` | clamp 16–18px, line-height 1.65 |
| body | `text-body` | 17px, line-height 1.7 |
| small / ui | `text-small` / `text-ui` | 15px / 14px |
| label / micro | `text-label` / `text-micro` | 13px / 11px, uppercase, tracking 0.14em |

| Other | Class or variable | Value |
|---|---|---|
| Page width | `max-w-site` | 1320px |
| Side padding | `px-gutter` | clamp 20–72px |
| Section padding | `py-section-y` | clamp 72–128px |
| Radius | `rounded-sm/md/lg/xl/2xl` | 6 / 14 / 20 / 24 / 32px |
| Radius | `rounded-pill`, `rounded-arch` | 999px; `180px 180px 16px 16px` |
| Shadow | `shadow-cta`, `shadow-card`, `shadow-menu`, `shadow-float` | See `src/index.css` |
| Easing | `ease-out` | `cubic-bezier(.2,.7,.2,1)` |
| Durations | `--dur-fast`, `--dur-base`, `--dur-reveal`, `--dur-crossfade` | .2s / .35s / .9s / 1.2s |
| Reveal | `--reveal-offset`, `--slide-interval` | 36px; 5000ms |

The hero badge shadow (`0 20px 40px -20px` pink at 70%) is in the design but not in the token file; write it as an arbitrary value.

## Images

All twelve go in `public/gallery/`, named as `download-images.sh` names them (the upload path with `/` replaced by `-`, which keeps the two `Jossy-img-2.jpeg` files apart). Base URL: `https://jossyglamour.com/wp-content/uploads/`.

**The site sits behind a Vercel security check, so `curl` and the download script get a "Security Checkpoint" page instead of the image.** Open each URL in a browser and use "Save image as". A real file is a photo of a few hundred KB; a 34 KB file is the checkpoint page.

| # | Download path | Save as (in `public/gallery/`) | Category | Used in |
|---|---|---|---|---|
| 1 | `2025/12/Jossy-img-3.jpeg` | `2025-12-Jossy-img-3.jpeg` | fashion | Hero slide 1, gallery |
| 2 | `2026/01/Beuaty-img-123.jpeg` | `2026-01-Beuaty-img-123.jpeg` | beauty | Hero slide 2, Services card 01, gallery |
| 3 | `2025/12/Jossy-img-4.jpeg` | `2025-12-Jossy-img-4.jpeg` | fashion | Gallery |
| 4 | `2026/01/FA-JossyGlamour-6.jpeg` | `2026-01-FA-JossyGlamour-6.jpeg` | fashion | Hero slide 3, Services card 02, gallery |
| 5 | `2025/12/Jossy-img-6.jpeg` | `2025-12-Jossy-img-6.jpeg` | beauty | Gallery |
| 6 | `2026/01/Jossyglamour-Parafet-img-7.jpeg` | `2026-01-Jossyglamour-Parafet-img-7.jpeg` | styling | Hero slide 4, Services card 03, gallery |
| 7 | `2025/12/Jossy-img-2.jpeg` | `2025-12-Jossy-img-2.jpeg` | fashion | Gallery |
| 8 | `2026/01/Jossyglamour-Parafet-img-6.jpeg` | `2026-01-Jossyglamour-Parafet-img-6.jpeg` | styling | Gallery |
| 9 | `2026/01/Jossy-img-2.jpeg` | `2026-01-Jossy-img-2.jpeg` | beauty | Gallery |
| 10 | `2026/01/Jossyglamour-Parafet-img-5.jpeg` | `2026-01-Jossyglamour-Parafet-img-5.jpeg` | styling | Gallery |
| 11 | `2026/01/Styling-Creative-Services-001.jpeg` | `2026-01-Styling-Creative-Services-001.jpeg` | styling | Personal Styling section, gallery |
| 12 | `2026/01/Jossyglamour-Parafet-img-8.jpeg` | `2026-01-Jossyglamour-Parafet-img-8.jpeg` | styling | Gallery |

**Current state (2026-10-10): all twelve files are placeholder photos from picsum.photos.** Replace each with the real photo under the same file name; no code changes are needed.

The table order is the gallery order. Already in place: `public/resources/logo.jpg`, `public/resources/JossyGlamour-CEO.jpeg`.

## Sections

Status: `[ ]` not started, `[x]` done.

- [x] **0. Design tokens and fonts**
- [x] **1. Navbar** — `src/components/Navbar.jsx` (replace the current one)
  - Sticky, `bg-white`, bottom border `charcoal/8`, padding 20px / gutter, `max-w-site`.
  - Logo 52px tall with `mix-blend-multiply`.
  - Links HOME, SERVICES, ABOUT, CONTACT: Geist 12px, weight 500, tracking 0.12em, `text-charcoal`, active/hover `text-pink-500`. They point at `#services`, `#about`, `#contact`.
  - Mobile: hamburger toggle with a dropdown menu (`shadow-menu`).
  - "Book an Appointment" pill (opens WhatsApp): `bg-pink-500`, calendar icon, 14px `font-ui` 600, padding 14×26, `shadow-cta`; hover black with no shadow.
- [x] **2. Hero** — `home/Hero.jsx`
  - Two-column auto-fit grid (min 420px), centred vertically.
  - `h1` "Endless beauty without borders." with the second half in pink; intro paragraph (max 500px); two buttons (black "Book an Appointment →", outlined "Explore Services").
  - Arched image frame (4:5, `rounded-arch`, max 420px) with a 4-slide cross-fade every 5s, slow zoom on the active slide, caption label, and clickable dash indicators.
  - Pink badge overlapping bottom-left: "Fascinators, hats, turbans & gele" / "Made to order for special occasions".
  - Staggered fade-up intro on load (18px offset; delays .12s, .24s, .36s; image .2s).
- [x] **3. Services** — `home/Services.jsx`, `id="services"`
  - Eyebrow "Services", heading "Our Services", black "Book a Service" button on the right.
  - Three cards (auto-fit, min 320px): 4:3 image, number, title, bulleted list with hairline dividers, "Book this service →" (WhatsApp; see assumptions). Hover lifts 4px with `shadow-card`.
  - Card content is the three service groups in `About.md`.
- [x] **4. Personal Styling** — `home/PersonalStyling.jsx`
  - `bg-white` band. Image left (4:5, max 500px, `object-position: 50% 20%`), text right.
  - Eyebrow "One-on-one", heading "Personal Styling & Consultation", intro line, rows A and B with hairline dividers, pink "Book a Consultation" button.
- [x] **5. About** — `home/About.jsx`, `id="about"`
  - `bg-white` band with `line-pink` top and bottom borders.
  - Founder portrait (200–260px wide) with a pink name plate: "Josephine Chukwu" / "FOUNDER · CREATIVE DIRECTOR". Beside it: eyebrow "About Jossyglamour" and heading "Led by founder and creative director Josephine Chukwu."
  - Three columns under a hairline: "01 — Who We Are", "02 — Our Founder", "03 — Our Vision".
- [x] **6. Our Work** — `home/Gallery.jsx`, `id="work"`
  - Eyebrow "Gallery", heading "Our Work", outlined "More on Instagram ↗" button.
  - Filter pills: All, Beauty Services, Fashion & Accessories, Styling & Creative Services. Active pill is black.
  - Dense grid (auto-fill, min 240px, 240px rows, 14px gap). On "All", tiles 1, 4, 8 and 11 span two rows; on a filter, every third tile starting with the first does. Hover zooms the image to 1.04.
- [x] **7. Treat Yourself** — `home/BookingCta.jsx`
  - Pink panel, max 1176px, `rounded-2xl`. Eyebrow "Book An Appointment", heading "Treat Yourself" (clamp 48–84px), paragraph, black "Book a Service →" and outlined "Call Us" (`tel:+447587975813`).
- [x] **8. Footer** — `src/components/Footer.jsx` (replace the current one), `id="contact"`
  - `bg-black` (owner decision). Four columns (auto-fit, min 220px): logo (64px, inverted, `mix-blend-screen`) with tagline paragraph; Contact links; Opening Hours; Private Consultations with "BOOK A CONSULTATION ↗" (WhatsApp).
  - Bottom bar: "© {current year} Jossyglamour. All rights reserved." No legal links.
- [x] **9. Page behaviours**
  - Scroll reveal: every section after the hero, and the footer, fades up 36px over .9s when its top comes within 40px of the bottom of the viewport.
  - Back-to-top button: fixed bottom-centre, 52px black circle with an up arrow and `shadow-float`; appears after 600px of scroll; hover pink.
- [ ] **10. Final pass** (lint, build and a desktop + 500px visual check are done; real photos and a phone-width check are not)
  - Check 375px, 768px and 1320px+ widths; keyboard focus states; `prefers-reduced-motion` for the slideshow, intro and reveals.
  - Image `alt` text, `width`/`height`, lazy-loading below the fold.
  - Update the home `<Seo />`, `sitemap.xml` and the share image if needed.

## Mobile layout (done)

Source: `Jossy Glamour Redesign-mobile/Jossyglamour Home.dc.html` (exported 2026-10-10 17:04), which is the Home design with responsive rules added. It supersedes the older export for anything it changes. Breakpoints: `tab:` at 560px and `desk:` at 860px.

- Below 860px: 42px logo, round two-line menu button, full-screen menu (Home, Services, About, Gallery, Contact in large type, booking button, phone and Instagram), and a full-bleed photo hero with the headline over it, stacked full-width buttons and a "Newcastle, United Kingdom / Open 7 days" line.
- Below 860px the "Book a Service" and "More on Instagram" buttons move below their grids as full-width buttons.
- Below 560px: two-column gallery with 170px rows, smaller filter pills, 18px card corners, full-width founder photo, stacked CTA buttons, single-column footer with extra bottom padding for the back-to-top button. Between 560px and 860px the footer is two columns.
- Section padding now starts at 56px instead of 72px.
- The same folder has `Jossyglamour 404.dc.html`, a 404 page design that has **not** been built.

## Owner decisions (2026-10-10) — these override the design

1. **It is a single-page app.** There are no separate service or booking pages. Never link to `jossyglamour.com/bookings/`, `/beauty-services/`, `/fashion-accessories/` or `/styling-creative-services/`.
2. **Navbar links scroll to sections on the page**: HOME to the top, SERVICES to `#services`, ABOUT to `#about`, CONTACT to `#contact`. Write them as `/#services` etc. so they also work from the 404 page.
3. **Every booking button opens WhatsApp** at `https://wa.me/447587975813` (`site.whatsapp` in `src/config/site.js`), in a new tab. This covers "Book an Appointment", "Book a Service", "Book a Consultation" and the footer booking link.
4. **Anything pointing at services goes to `#services`** ("Explore Services", the SERVICES nav link).
5. **Footer background is pure black** (`bg-black`), not charcoal.
6. **Keep a mobile menu** (hamburger toggle, dropdown with `shadow-menu`), even though the design only wraps the links.
8. **Navbar highlight follows the scroll.** The pink link is the section currently on screen (Home, Services, About, Contact), not just the one last clicked.
9. **Scroll animation is per block, not per section.** Headings, cards, columns, gallery tiles and the footer content each fade up as they enter the view, with a short stagger. There is no timer that reveals everything.
7. **Only use facts from `About.md`.** Where the design says something `About.md` does not, use the `About.md` wording:
   - Copyright: "© {current year} Jossyglamour. All rights reserved." (drop "Atelier & Beauty Ltd").
   - "STUDIO HOURS" becomes "OPENING HOURS"; "NEWCASTLE STUDIO" becomes "CONTACT"; "Call the Studio" becomes "Call Us"; "RESERVE FITTING" becomes "BOOK A CONSULTATION". `About.md` never mentions a studio or fittings.
   - Contact details, hours, founder text and service lists come from `About.md` / `src/config/site.js`, not retyped from the design.

## Assumptions to confirm

- **Service cards.** In the design each card links to its own page with "Learn more →". With no service pages, the plan is for the card's link to open WhatsApp and read "Book this service →".
- **Copy that is not in `About.md` but makes no factual claim** is kept as designed: the "Treat Yourself" paragraph, the Personal Styling rows A and B, and the hero badge line "Made to order for special occasions".
