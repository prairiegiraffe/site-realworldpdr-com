# realworldpdr.com — Professional Site Build

## How This Works — Two Phases

### Phase 1: Design & Plan (do this FIRST)
Before writing any HTML, design the site plan. Present it for approval.

1. Read this entire file — business facts, section catalog, copy framework
2. **Design the site plan**: for each page, list which sections to use, in what order, which layout variant
3. **Present the plan** as a summary table — page name, sections, layout choices
4. Wait for approval or feedback ("swap the hero", "more photo-heavy", "add a gallery page")
5. Iterate until approved

### Phase 2: Build (after approval)
1. Build each page as a standalone `.html` file
2. The shell CSS is at `css/styles.css` — it defines the full design system
3. Create forms in the platform via the API (see Forms section below)
4. Generate images via the API (see Images section below)
5. Preview with `npx serve .`
6. When done: `git add . && git commit -m "Build site" && git push` to deploy

## Copy Framework: StoryBrand

Every page follows the StoryBrand narrative structure. The business owner is the HERO,
not the company. The company is the GUIDE.

### The 7 StoryBrand Elements

1. **A Character** (the customer) — has a want or need. Lead with THEIR problem, not your services.
   - "You need a yard that works for your family" not "We provide landscaping services"

2. **Has a Problem** — external (the visible issue), internal (how it makes them feel), philosophical (why it's wrong)
   - External: "Your yard is unusable half the year"
   - Internal: "You're embarrassed to have people over"
   - Philosophical: "A family should be able to enjoy their own home"

3. **Meets a Guide** (the business) — shows empathy + authority
   - Empathy: "We've helped hundreds of families in your area reclaim their outdoor space"
   - Authority: stats, years in business, project count, credentials

4. **Who Gives Them a Plan** — 3 simple steps that remove confusion
   - Step 1: "Tell us about your project" (contact/quote form)
   - Step 2: "We design a plan that fits your property and budget"
   - Step 3: "We build it — on time, on budget, guaranteed"

5. **And Calls Them to Action** — one clear, direct CTA per page
   - Primary: "Get a Free Quote" / "Schedule a Consultation"
   - Transitional: "See Our Work" / "Read Our Story"

6. **That Helps Them Avoid Failure** — what happens if they do nothing
   - "Every season you wait, the problem gets worse and more expensive to fix"
   - Cost of inaction, competitor advantage, missed enjoyment

7. **And Ends in Success** — paint the picture of life after
   - "Imagine hosting a barbecue in a yard you're proud of"
   - Transformation story, not feature list

### Copy Rules
- Write from the customer's perspective, not the company's
- Lead each page section with the PROBLEM before the SOLUTION
- Use "you/your" more than "we/our"
- Specific > generic: name actual services, cities, project types
- No slop: avoid "state-of-the-art", "one-stop shop", "world-class", "industry-leading"
- No invented facts: if a specific number isn't in the business facts, write around it
- Match the personality: direct, confident, professional

## Section Catalog

These are the available layout patterns in `sections/`. Mix and match them to create
variety — don't use the same layout for every page. Each section file contains HTML
you can adapt using the shell's CSS classes.

### Heroes (pick ONE per page)
| File | Layout | Best for |
|------|--------|----------|
| `hero-with-photo.html` | Full-bleed background image, text overlay, 2 CTAs | Home page, high-impact landing |
| (custom) Centered hero | Centered text, no image, clean and minimal | About, Services index, Contact |
| (custom) Split hero | Text left, image right in 2-column grid | Service detail pages |

### Social Proof & Trust
| File | Layout | Best for |
|------|--------|----------|
| `stats-four-columns.html` | 4 stat cards in a row (years, projects, areas, etc.) | Below hero, credibility strip |
| `testimonial-large-photo.html` | Quote on one side, large project photo on the other | Mid-page trust builder |
| (custom) Review snippet | Star rating + short quote + name | Scattered throughout pages |

### Features & Services
| File | Layout | Best for |
|------|--------|----------|
| `features-alternating.html` | Alternating image/text rows, grayscale-to-color hover | Home page service highlights |
| `features-three-column.html` | 3 cards with icons in a grid | Services index, capabilities overview |
| (custom) Service detail | Full-width overview + process timeline + FAQ | Individual service pages |

### Content & Story
| File | Layout | Best for |
|------|--------|----------|
| `team-grid.html` | Photo grid with grayscale-to-color hover | About page team section |
| (custom) Story narrative | Narrow column, drop-cap first letter, flowing paragraphs | About page origin story |
| `faqs-accordion.html` | Expandable Q&A using details/summary | FAQ section, service pages |

### Projects & Gallery
| File | Layout | Best for |
|------|--------|----------|
| `project-gallery.html` | Card grid with image, title, metadata strip | Projects/portfolio page |
| (custom) Before/after | Side-by-side or slider comparison | Project showcases |

### Calls to Action
| File | Layout | Best for |
|------|--------|----------|
| `cta-simple.html` | Dark centered banner with heading + button | End of every page |
| (custom) CTA with stats | CTA banner that includes a compelling number | After testimonials or projects |

### Navigation & Footer
These are built into the shell CSS (`.site-header`, `.site-footer` classes).
Every page needs a consistent header and footer.

### Design Variety Guidelines
- **Never use the same section layout on two consecutive sections** — alternate between full-width, grid, and narrow
- **Vary the background**: alternate between white (`.page-section`), light gray (`.page-section.alt`), and dark (`.page-section.dark`)
- **Mix image treatments**: some sections with photos, some without, some with icons
- **Each page should have a unique "hero" feel** — don't copy the same hero layout to every page
- **The home page gets the most variety** — it's the showcase. Interior pages can be simpler.
- **When in doubt, look at the inspiration sites** listed in the business facts for layout cues

## Business Facts (DO NOT INVENT — write around missing info)

| Field | Value |
|-------|-------|
| **Business Name** | realworldpdr.com |
| **Industry** |  |
| **Type** |  |
| **Tagline** | N/A |
| **Years in Business** | N/A |
| **Phone** | N/A |
| **Email** | N/A |
| **Address** | N/A |
| **Primary Location** | N/A |
| **Personality** | Direct, confident, professional |
| **Target Audience** | B2B decision-makers |
| **Inspiration Sites** | N/A |

### About
No about text provided — write around this.

### Services (0 total)


### Service Areas


## Design System

**Shell**: `service_business`
**Fonts**: Figtree (headings) + Inter (body)
**Brand Color**: Not set — shell uses a default

The shell CSS (`css/styles.css`) defines all design tokens as CSS custom properties:
```
--color-primary: #1f4d2b;
  --color-primary-dark: #102917;
  --color-primary-light: #60bf78;
  --color-primary-tint: rgba(31, 77, 43, 0.08);
  --color-primary-tint-strong: rgba(31, 77, 43, 0.18);
  --color-accent: #247561;
  --color-dark: #0f172a;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-surface: #f9fafb;
  --color-surface-alt: #f3f4f6;
  --color-on-primary: #ffffff;
  --font-heading: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --container: 1200px;
  --container-narrow: 800px;
  --radius-sm: 6px;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.05);
  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 20px 40px rgba(15, 23, 42, 0.12);
  --shadow-primary: 0 10px 40px -10px var(--color-primary-tint-strong);
  --transition: 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
```

### Key CSS Classes
- `.container` — max-width centered container
- `.container-narrow` — narrower container for text-heavy sections
- `.eyebrow` — small uppercase label with accent bar (used above section headings)
- `.btn`, `.btn--outline`, `.btn--inverse`, `.btn--ghost` — button variants
- `.hero` — full-bleed hero with `.hero__bg` background image
- `.stats` — stat strip with `.stat`, `.stat__value`, `.stat__label`
- `.service-grid` + `.service-card` — card grid for services
- `.feature-row` + `.feature-row.reverse` — alternating image/text rows
- `.diff-grid` + `.diff-card` — icon cards for differentiators/values
- `.process-list` — numbered timeline
- `.faq` — accordion using `<details>`/`<summary>`
- `.project-grid` + `.project-card` — photo cards with metadata
- `.testimonial` — two-column quote + photo
- `.contact-grid` + `.contact-form` — form + contact info card
- `.cta-section` — dark call-to-action banner
- `.site-header` — sticky dark header
- `.site-footer` — dark footer with grid columns
- `.page-section`, `.page-section.alt`, `.page-section.dark` — section wrappers

## Original Site Reference

This is a **rebuild** of an existing site: `realworldpdr.com`

The original site's HTML is in `.source/` — read these files to understand:
- What content/copy exists (preserve all real content — business descriptions, service details, testimonials)
- What pages the site has
- What the navigation structure looks like

**Your job**: rebuild the site using our design system (shell CSS + section templates) with StoryBrand copy.
- **Keep** all factual content from the original (service descriptions, about text, contact info, testimonials)
- **Improve** the copy using StoryBrand principles (lead with the customer's problem, not features)
- **Replace** the layout with our section templates — don't replicate the original HTML structure
- **Use** the shell CSS classes, not the original site's CSS

### Original Pages
- `.source/index.html` — PDR Ultimate Course | Real World PDR
- `.source/pdr-101.html` — PDR Course | PDR 101 Training | Lafayette, Indiana
- `.source/pdr-ultimate.html` — Real World PDR Monthly Training | PDR School Online - realworldpdr.com
- `.source/privacy-policy.html` — Privacy Policy | Data Processing | Real World PDR
- `.source/real-world-pdr-courses.html` — PDR Online Course | PDR Training Online | Lafayette Indiana
- `.source/real-world-prd.html` — Real World PDR Training | Paintless Dent Removal Training | Lafayette IN
- `.source/terms.html` — Terms | Paintless Dent Repair Training - realworldpdr.com

### Original Images (already on CDN)
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riiskbteqpd.png
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riissbgiqyf.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riisz4054l9.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riisxymou0a.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riisksdcfok.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riiuxb3xxq5.png
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riiwuh5c1dr.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riivwg7dgth.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riiv12imn77.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riiwvllrizs.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijhajk8i8u.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijhasbpz19.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijhlvbgkev.png
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riji3sdaod1.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7riji33vu1qj.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijiyemw9t8.jpg
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijk72tpjq7.png
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijlhw0ofux.png
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijo5fspudv.png
- https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/mo7rijljp9d0tf.png

## Pages to Build

Build these as standalone HTML files. Each file should be a complete document
(`<!DOCTYPE html>` through `</html>`) that links to `css/styles.css`.

1. **index.html** (Home) — Hero, stats strip, services overview, featured capabilities with photos, about teaser, service areas, CTA
2. **about.html** — Company story, team/leadership (if info available), values/differentiators, CTA
3. **services.html** — All services as card grid with icons
4. **services/[slug].html** — One per service: hero, overview, what-we-do, process timeline, FAQ, CTA
5. **contact.html** — Contact form + info card + map, company field for B2B
6. **service-areas.html** — Area cards grid (if multiple areas)

### Page Structure Rules
- **ALL internal links must use RELATIVE paths** — never use `/api/projects/` URLs
  - From root pages: `href="services/hardscapes.html"` or `href="about.html"`
  - From service pages: `href="../about.html"` or `href="../contact.html"`
  - CSS from root: `href="css/styles.css"` — from subdirectories: `href="../css/styles.css"`
  - The `/api/projects/.../serve/` URLs are for the platform editor only, NEVER in page HTML
- Every `<section>` needs `data-block-id="page:section-name"` (for the platform editor)
- Editable text slots get `data-content="slot-name"` attributes
- Contact form needs `data-devtools-form` and `data-form-type="contact"`
- Header wraps in `data-devtools-partial="header"`
- Footer wraps in `data-devtools-partial="footer"`
- Hero images: `loading="eager" fetchpriority="high"`
- All other images: `loading="lazy"`
- H1 → H2 → H3 hierarchy, no skips
- Meta description on every page, ≤ 155 chars
- Include LocalBusiness schema JSON-LD on home page

## Section Templates

The `sections/` directory contains HTML section templates you can reference.
These are from the oatmeal-olive-mona and Studio template libraries — adapt
the structure and layout patterns but use the shell's CSS classes, not Tailwind.

Available sections:
- `stats-four-columns.html` — grid of stat cards
- `features-alternating.html` — alternating image/text feature rows
- `features-three-column.html` — three-column feature cards
- `testimonial-large-photo.html` — quote + large photo side by side
- `team-grid.html` — team member photo grid
- `faqs-accordion.html` — two-column FAQ with accordion
- `hero-with-photo.html` — hero with side photo
- `cta-simple.html` — centered call-to-action

## Copy Writing Rules

1. **Never invent facts.** If a specific fact is missing (founding year, certifications, team size), rewrite the sentence so it doesn't need that fact. Don't use placeholder markers.
2. **No slop.** Avoid: "in today's world", "look no further", "state-of-the-art", "one-stop shop", "world-class", "industry-leading", "leverage", "synergies", "cutting-edge", "seamless", "pristine", "unlock the potential", "game-changer", "delve into", "tapestry of", "plethora of", "myriad of".
3. **No self-congratulation.** Skip "We're proud to...", "We take pride in...", "Our commitment to...".
4. **Be direct.** Write what the business does, not what it "may help" with.
5. **Use the business name** at least once per page, not "our company".
6. **Mention specific services and areas by name** — pull from the facts above.
7. **Match the personality** — direct, confident, plain-spoken, professional.
8. **B2B tone** — speak to project managers, procurement, field supervisors. Not homeowners.

## Images

### AI Image Generation (preferred)
Generate images on demand using the platform API. Each call creates a photorealistic
image via AI, saves it to R2, and returns a URL you can use directly in `<img src>`.

```bash
curl -X POST "https://devtools.prairiegiraffe.com/api/projects/proj_dkm43vn7/sites/54/generate-image" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer dtk_3fa59663c4d8abff2efc3bd84eca549760f590f13009f59be257850626651fe2" \
  -d '{
    "prompt": "Heavy equipment excavator on an oilfield pad construction site, Wyoming prairie, golden hour",
    "filename": "hero-excavation",
    "aspect": "landscape"
  }'
# Returns: { "success": true, "url": "/api/projects/.../serve/assets/hero-excavation-a1b2c3d4.webp", ... }
```

**The token above is pre-filled and valid for 30 days.** No additional auth setup needed.

**Parameters:**
- `prompt` (required) — Describe the image. Be specific about subject, setting, lighting.
- `filename` (optional) — Stem for the filename. Default: "image". Use descriptive names like "hero-main", "about-team", "service-fencing".
- `aspect` (optional) — "landscape" (1536x1024), "portrait" (1024x1536), or "square" (1024x1024). Default: "landscape".

**Cost:** ~$0.05 per image. Generate only what you need.

**The URL returned is a relative path** — use it directly as the `src` attribute:
```html
<img src="/api/projects/proj_dkm43vn7/sites/54/serve/assets/hero-excavation-a1b2c3d4.webp"
     alt="Excavation work in Wyoming" loading="eager" />
```

### Unsplash Fallback
If you can't generate (no session cookie, API down), use Unsplash:
```
https://source.unsplash.com/1600x900/?construction,work
https://source.unsplash.com/800x1000/?construction,team
```

### Client Uploads
When the client provides real photos later, they'll be uploaded at:
`https://devtools.prairiegiraffe.com/api/files/sites/proj_dkm43vn7/1776723863099/assets/[filename]`

## Deployment

- **Repo**: https://github.com/prairiegiraffe/site-realworldpdr-com
- **Live URL**: https://site-realworldpdr-com.pages.dev
- Push to `main` branch → auto-deploys via Cloudflare Pages
- No build step — CF Pages serves static files directly

## Forms

When building contact forms, quote request forms, or any other form, register them with
the platform so submissions are tracked and forwarded.

### Step 1: Create the form in the platform
```bash
curl -X POST "https://devtools.prairiegiraffe.com/api/projects/proj_dkm43vn7/forms" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer dtk_3fa59663c4d8abff2efc3bd84eca549760f590f13009f59be257850626651fe2" \
  -d '{
    "name": "Contact Form",
    "fields": [
      { "label": "Name", "type": "text", "required": true, "placeholder": "Your name" },
      { "label": "Email", "type": "email", "required": true, "placeholder": "you@company.com" },
      { "label": "Phone", "type": "phone", "required": false, "placeholder": "(555) 555-5555" },
      { "label": "Service", "type": "select", "required": false, "options": ["Landscaping", "Hardscapes", "Irrigation"] },
      { "label": "Message", "type": "textarea", "required": true, "placeholder": "Tell us about your project" }
    ],
    "settings": {
      "submit_button_text": "Send Message",
      "success_message": "Thank you! We will be in touch shortly.",
      "form_type": "contact"
    }
  }'
# Returns: { "success": true, "data": { "id": 5, "slug": "contact-form" } }
```

**Field types:** `text`, `textarea`, `email`, `phone`, `number`, `date`, `file`, `select`, `checkbox`, `url`

For `select` fields, include an `options` array: `["Option 1", "Option 2", "Option 3"]`

### Step 2: Build the HTML form
Use `data-devtools-form` and `data-form-type` attributes. The platform's form-embed script
auto-wires submission handling (AJAX submit, file uploads, success message).

```html
<form data-devtools-form data-form-type="contact" method="post">
  <input type="text" name="name" required placeholder="Your name" />
  <input type="email" name="email" required placeholder="you@company.com" />
  <input type="tel" name="phone" placeholder="(555) 555-5555" />
  <select name="custom_fields[service]">
    <option value="">Select a service...</option>
    <option value="Landscaping">Landscaping</option>
  </select>
  <textarea name="message" required placeholder="Tell us about your project"></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Important field name mapping:**
- `name`, `email`, `phone`, `company`, `message` — these are top-level submission fields
- Any other fields: use `name="custom_fields[field_name]"` (e.g. `custom_fields[service]`, `custom_fields[budget]`)
- The form's `data-form-type` should match the `form_type` in the settings (e.g. "contact", "quote", "newsletter")

### Create forms for each form on the site
If the site has multiple forms (contact page, quote sidebar, newsletter footer), create
a separate form record for each one with a different `name` and `form_type`.

## Platform Integration

This site is tracked in the devtools platform as a `captured_sites` row.
After building, the owner can:
- Edit pages visually in the platform editor
- Run SEO audits
- Generate fulfillment plans
- Share with clients for review
