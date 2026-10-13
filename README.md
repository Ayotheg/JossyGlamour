# Jossyglamour

The website for **Jossyglamour**, a beauty and fashion brand in Newcastle, United Kingdom, led by founder and creative director Josephine Chukwu. The brand makes custom headwear (fascinators, hats, gele, turbans, hand fans) and offers professional makeup and personal styling for weddings, cultural events and special occasions.

Live site: [jossyglamour.com](https://jossyglamour.com)

## What the site does

It is a single-page site. The navigation scrolls to sections of the home page rather than loading separate pages.

| Section | What it shows |
|---|---|
| Hero | Headline, short introduction and a photo slideshow |
| Services | Beauty Services, Fashion & Accessories, Styling & Creative Services |
| Personal Styling | The one-on-one styling consultation |
| About | The founder, who the brand is, and its vision |
| Our Work | A photo gallery that filters by service |
| Treat Yourself | Booking call to action |
| Footer | Location, contact icons, opening hours |

There is no booking form or backend. Every booking button opens a WhatsApp chat with the business number and a message already filled in for that button. An address that does not exist shows a custom 404 page.

## Tech stack

- [React 19](https://react.dev) with [Vite 8](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com), configured in CSS through the `@tailwindcss/vite` plugin (there is no `tailwind.config.js`)
- [React Router 7](https://reactrouter.com) (`BrowserRouter`, `Routes`, `Route`)
- [Lucide](https://lucide.dev) icons
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting
- Hosted on [Vercel](https://vercel.com)

## Getting started

You need Node.js 20.19 or newer (22.12 or newer on the 22 line).

```bash
git clone git@github.com:Ayotheg/JossyGlamour.git
cd JossyGlamour
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs Oxlint |

Run `npm run lint` and `npm run build` before pushing, since a build error will stop a deploy.

## Project structure

```text
index.html                 Page head: SEO tags, structured data, fonts, analytics
vercel.json                Sends unknown addresses to the app so the 404 page shows
public/
  gallery/                 Web-ready photos used on the site
  resources/               Original photos and logo files as supplied
  logo.png, logo-footer.png, favicon*, og-image.jpg
  robots.txt, sitemap.xml, site.webmanifest
src/
  App.jsx                  Routes
  index.css                Design tokens (colours, fonts, spacing, breakpoints)
  config/site.js           Brand details, contact links, WhatsApp messages
  data/home.js             Hero slides, service lists, gallery photos
  pages/                   Home.jsx, NotFound.jsx
  components/
    Layout.jsx             Wraps every page in the Navbar and Footer
    Navbar.jsx, Footer.jsx
    Seo.jsx                Per-page title, description and canonical link
    Reveal.jsx             Fade-up animation as content scrolls into view
    home/                  One file per home page section
```

## Changing content

Most changes do not need a component edited.

- **Contact details, opening hours, social links:** `src/config/site.js`. `About.md` is the source of truth for brand facts; keep the two in step.
- **WhatsApp messages:** the `whatsappMessages` list at the bottom of `src/config/site.js`.
- **Hero slides, service lists and card photos:** `src/data/home.js`.
- **Gallery photos:** add the image to `public/gallery/`, then add an entry to `galleryImages` in `src/data/home.js` with a `category` (`beauty`, `fashion` or `styling`) and `alt` text. Two optional fields control cropping: `fullLength: true` gives a tall tile, and `position` moves the crop (for example `'object-[50%_10%]'` to favour the top).
- **Colours, fonts and spacing:** the `@theme` block in `src/index.css`.
- **Logo:** `public/logo.png` is used in the header and `public/logo-footer.png` in the footer. Both are transparent images made from `public/resources/newLogoJossy.jpg`.
- **A new page:** add a `<Route>` inside the layout route in `src/App.jsx`, put a `<Seo title="..." description="..." />` in the page, and add its address to `public/sitemap.xml`.

## SEO and analytics

- `index.html` holds the default title and description, Open Graph and Twitter tags for link previews, and structured data describing the business (location, opening hours, phone, social profiles).
- `public/robots.txt` allows all crawlers and points to `public/sitemap.xml`.
- The 404 page is marked `noindex`.
- Visits are tracked with [Sabilytics](https://www.sabilytics.com) through a script tag in `index.html`.

If a brand fact changes, update it in three places: `About.md`, `src/config/site.js`, and the structured data in `index.html`.

## Deployment

The live site is hosted on Vercel. `vercel.json` rewrites every unknown address to `index.html`, which lets React Router show the 404 page for mistyped links. Real files such as images and `sitemap.xml` are still served as normal.

## Design source

The layout follows a Claude Design handoff. The exported design files are in `Jossy Glamour Redesign/` and `Jossy Glamour Redesign-mobile/`, and `BUILD_PLAN.md` records the design tokens, the photo list, and the decisions that differ from the design.
