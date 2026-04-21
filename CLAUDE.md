# realworldpdr.com

An Astro + Tailwind CSS website.

## Structure

- `src/pages/` — page routes (one .astro file per page)
- `src/components/` — reusable components (Hero, Footer, etc.)
- `src/layouts/BaseLayout.astro` — shared HTML shell

## Pages

- `src/pages/index.astro` — PDR Ultimate Course | Real World PDR
- `src/pages/pdr-101.astro` — PDR Course | PDR 101 Training | Lafayette, Indiana
- `src/pages/pdr-ultimate.astro` — Real World PDR Monthly Training | PDR School Online - realworldpdr.com
- `src/pages/privacy-policy.astro` — Privacy Policy | Data Processing | Real World PDR
- `src/pages/real-world-pdr-courses.astro` — PDR Online Course | PDR Training Online | Lafayette Indiana
- `src/pages/real-world-prd.astro` — Real World PDR Training | Paintless Dent Removal Training | Lafayette IN
- `src/pages/terms.astro` — Terms | Paintless Dent Repair Training - realworldpdr.com

## Development

```bash
npm install
npm run dev    # localhost:4321
npm run build  # production build
```

## Editing

- Edit components in `src/components/`
- All styling uses Tailwind classes
- Images are hosted externally (CDN URLs) — don't move them
- The site auto-deploys when you push to main
