# +234 Rides — React rebuild

A full rebuild of the +234 Rides marketing site as a React single-page app
(Vite + React Router + Tailwind + Framer Motion), moving away from the
original Bootstrap template toward a custom look: an asphalt-navy palette
with a Lagos-taxi-yellow accent, a live "trip status" hero widget, and
scroll/page animations throughout.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   shared UI: Navbar, Footer, RouteHero (signature hero widget),
                FeatureBlock, HowItWorks, DownloadMarquee, BlogCard, Reveal
                (scroll-in animation wrapper), PageTransition
  pages/        Home, About, Contact, BlogList, BlogDetail, Privacy, NotFound
  data/         blogPosts.js, team.js — content used by the pages
public/images/  images carried over from the original template
```

## Design notes

- **Palette**: asphalt navy (`#0B1220`) background, taxi-yellow "route"
  accent (`#FFC53D`), signal green (`#2BD576`) for live/online states.
- **Type**: Space Grotesk for display headings, Inter for body copy,
  IBM Plex Mono for data-like readouts (fares, timestamps, statuses).
- **Signature element**: the "live trip status" card in the hero — an
  animated route line with a moving pin and cycling status text, meant to
  feel like a real booking screen rather than a static illustration.
- All animation respects `prefers-reduced-motion`.

## Notes

- The booking widget on the home page (`#book`) embeds the same dispatch
  form URL used by the original template.
- Blog content currently ships two posts as static data in
  `src/data/blogPosts.js` — swap this for a CMS/API later without touching
  the page components.
