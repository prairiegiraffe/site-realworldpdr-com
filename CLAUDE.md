# realworldpdr.com

Astro + Tailwind rebuild of **realworldpdr.com**.

## Your Task

Build every component in `src/components/` to match the original site. Each component is currently a placeholder stub.

**Workflow:**
1. Read this file for design tokens and structure
2. For each component, read the source HTML in `.source/pages/` and the CSS in `.source/css/`
3. Write the Astro component using Tailwind utilities and the design token classes below
4. Run `npm run build` after each component to catch errors early
5. When all components are done, `git add -A && git commit && git push` — auto-deploys via CF Pages

## Design Tokens (from tailwind.config.mjs)

These are the **real colors and fonts** from the original site's CSS:

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| Primary | `#720eec` | `text-primary`, `bg-primary` |
| Secondary | `#e9e6ed` | `text-secondary`, `bg-secondary` |
| Accent | `#61ce70` | `text-accent`, `bg-accent` |
| Background | `#ffffff` | `bg-background` |
| Text | `#1f2937` | `text-text` |
| Heading Font | `Arial}.mejs-container` | `font-heading` |
| Body Font | `.mejs-container .mejs-controls` | `font-body` |
| Border Radius | `4px` | `rounded` (default) |
| Container | `1020px` | `max-w-container` |

**Full color palette** (use arbitrary values `text-[#hex]` for colors not in the tokens):
`#e5ca00`, `rgba(0,0,0,0)`, `#f98608`, `#958e09`, `#d9534f`, `#1e85be`, `#7f54b3`, `#dc3232`, `rgba(32, 7, 7, 0.8)`, `#cc3366`, `rgba(0,0,0,.05)`, `#5cb85c`

## Site Structure

### Shared Components (appear on every page)

- **SiteHeader** (header) — best version on page `/`
  - Source: `.source/pages/index.html`
  - Selector hint: `header#629`
- **SiteFooter** (footer) — best version on page `/`
  - Source: `.source/pages/index.html`
  - Selector hint: `footer#38`
- **CareerCallToAction** (cta) — best version on page `/pdr-101`
  - Source: `.source/pages/pdr-101.html`
  - Selector hint: `[data-id='e00d15d'], [data-id='23338978']`

### Pages

#### `/` — Home Page
- Source HTML: `.source/pages/index.html`
- Source CSS: `.source/css/index.css`
- Components:
  - **HeroSection** (hero)
    - Selector: `[data-id='2b4699e2']`
  - **LearnFeaturesGrid** (features)
    - Selector: `[data-id='e896c66']`
  - **StopStrugglingSection** (text)
    - Selector: `[data-id='a127554']`
  - **SkillsBenefitsSection** (features)
    - Selector: `[data-id='b7f51b7']`
  - **StopGuessingSection** (text)
    - Selector: `[data-id='d02c9bf']`
  - **TestimonialSection** (testimonials)
    - Selector: `[data-id='75ea937']`
  - **ProcessStepsSection** (features)
    - Selector: `[data-id='7c25ef5']`
  - **LearnPracticeExecuteSection** (text)
    - Selector: `[data-id='782ea1a']`
  - **LeadMagnetSection** (form)
    - Selector: `[data-id='0f6cb9f']`

#### `/pdr-101` — PDR 101 Course Page
- Source HTML: `.source/pages/pdr-101.html`
- Source CSS: `.source/css/pdr-101.css`
- Components:
  - **Pdr101HeroSection** (hero)
    - Selector: `[data-id='484a3de']`
  - **Pdr101CurriculumAccordion** (accordion) — interactive: accordion
    - Selector: `[data-id='29f924b8']`

#### `/pdr-ultimate` — PDR Ultimate Course Page
- Source HTML: `.source/pages/pdr-ultimate.html`
- Source CSS: `.source/css/pdr-ultimate.css`
- Components:
  - **PdrUltimateHeroSection** (hero)
    - Selector: `[data-id='1710bef3']`
  - **PdrUltimateCurriculumAccordion** (accordion) — interactive: accordion
    - Selector: `[data-id='7125d2d6']`
  - **FirstToKnowSection** (text)
    - Selector: `[data-id='4bbb642']`

#### `/privacy-policy` — Privacy Policy Page
- Source HTML: `.source/pages/privacy-policy.html`
- Source CSS: `.source/css/privacy-policy.css`
- Components:
  - **PrivacyPolicyContent** (text)
    - Selector: `[data-id='490eecf']`

#### `/real-world-pdr-courses` — Courses Overview Page
- Source HTML: `.source/pages/real-world-pdr-courses.html`
- Source CSS: `.source/css/real-world-pdr-courses.css`
- Components:
  - **CoursesHeroSection** (hero)
    - Selector: `[data-id='e422a0a']`
  - **AffordableCareerSection** (text)
    - Selector: `[data-id='4615816']`
  - **MonthlyContentSection** (text)
    - Selector: `[data-id='54e3c4f']`

#### `/real-world-prd` — About Real World PDR Page
- Source HTML: `.source/pages/real-world-prd.html`
- Source CSS: `.source/css/real-world-prd.css`
- Components:
  - **AboutHeroSection** (hero)
    - Selector: `[data-id='d456023']`
  - **RealWorldExperienceSection** (text)
    - Selector: `[data-id='dd4b1f4']`
  - **CoursesShowcaseSection** (features)
    - Selector: `[data-id='e3eb0b6']`
  - **Pdr101WorkshopSection** (text)
    - Selector: `[data-id='49f7340']`
  - **AboutCompanySection** (text)
    - Selector: `[data-id='378d8be9']`

#### `/terms` — Terms Page
- Source HTML: `.source/pages/terms.html`
- Source CSS: `.source/css/terms.css`
- Components:
  - **TermsContent** (text)
    - Selector: `[data-id='2fa34aa']`

## Images

2 images captured and hosted on CDN. Use these **exact URLs** — do not invent image URLs.

The HTML in `.source/pages/` already contains the correct CDN URLs (they start with `/api/files/`). Copy them from there.

Full manifest: `.source/asset-manifest.json`

## Astro Rules

- Every `.astro` file needs frontmatter: `---` at top, `---` to close, even if empty
- Curly braces `{` `}` in HTML text are JS expressions — use `{'{'}` or `&#123;` for literal braces
- `BaseLayout.astro` already includes `SiteHeader` and `SiteFooter` — do NOT add them in page files
- For accordions/toggles: use a `<script>` block with click handlers
- For sliders/carousels: use CSS `scroll-snap` with `overflow-x-auto` (no external deps)
- Use semantic HTML: `<section>`, `<nav>`, `<article>`, etc.
- Mobile-first responsive: base styles for mobile, `md:` for tablet, `lg:` for desktop

## Development

```bash
npm install
npm run dev    # localhost:4321
npm run build  # production build (run after each component!)
```

Auto-deploys on push to main via Cloudflare Pages.