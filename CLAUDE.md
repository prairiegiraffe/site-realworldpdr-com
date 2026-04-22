# realworldpdr.com

An Astro + Tailwind CSS website.

## Design Tokens

The site uses a custom Tailwind config with the original site's colors and fonts:
- Primary: #720eec
- Secondary: #e9e6ed
- Accent: #61ce70
- Heading font: Arial}.mejs-container
- Body font: .mejs-container .mejs-controls

Use `text-primary`, `bg-secondary`, `font-heading`, etc. in components.

## Structure

- `src/pages/` — page routes
- `src/components/` — section components
- `src/layouts/BaseLayout.astro` — shared shell (includes header + footer)

## Pages

- `src/pages/index.astro` — Home Page
- `src/pages/pdr-101.astro` — PDR 101 Course Page
- `src/pages/pdr-ultimate.astro` — PDR Ultimate Course Page
- `src/pages/privacy-policy.astro` — Privacy Policy Page
- `src/pages/real-world-pdr-courses.astro` — Courses Overview Page
- `src/pages/real-world-prd.astro` — Real World PDR Main Page
- `src/pages/terms.astro` — Terms Page

## Development

```bash
npm install
npm run dev    # localhost:4321
npm run build  # production build
```

## Editing

- Edit components in `src/components/`
- Tailwind classes use custom design tokens (see tailwind.config.mjs)
- Images are hosted on CDN — use exact URLs, don't move them
- Auto-deploys on push to main
