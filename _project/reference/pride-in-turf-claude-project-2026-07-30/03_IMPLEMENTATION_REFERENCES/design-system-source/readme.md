# Pride In Turf — Design System

Reference design system for **Pride In Turf**, a program-based lawn care company serving Metro Atlanta and Northeast Georgia. Built for generating on-brand marketing pages, sales/citation collateral, and prototypes — not a copy of an existing digital product (none was available; see **Sources** below).

## Company & product context

- **Business:** Pride In Turf (also "Pride In Turf Lawn Care"), founded **January 2005**. Locally operated turf-care company, not a general lawn-mowing/landscaping company.
- **Locations (real branches):** Hoschton, GA (1900 GA Hwy 211, Hoschton, GA 30548) and Atlanta, GA (44 Peachtree Pl NE Suite 821, Atlanta, GA 30309). Only these two get branch-level treatment (NAP, schema, standalone pages) — every other city is a **service area**, not a location.
- **Primary market:** Northeast Georgia (Hoschton, Braselton, Winder, Auburn, Dacula, Buford, Gainesville, Cumming, Suwanee, Lawrenceville, Johns Creek, Peachtree Corners). **Secondary market:** Metro Atlanta (Atlanta, Sandy Springs, Dunwoody, Roswell, Alpharetta, Marietta, Smyrna, Kennesaw, Woodstock, Canton, Vinings, Fulton & Cobb County).
- **What they sell:** recurring, **program-based** lawn care matched to grass type/season — not one-size-fits-all mowing. Core programs (Lawn Care post type): **Warm Weather, Cool Weather, Mixed Lawn**. A fourth program, *Select*, has been **discontinued** — do not reference it anywhere. Main services (Lawn Services post type, in nav): **Aeration** (spring/fall), **Fungicide Treatments**, **Pest Control**, **Weed Control**, **Soil Testing**.
- **Site navigation (confirmed 2026-07-11):** About · Lawn Care (dropdown: Warm Weather, Cool Weather, Mixed Lawn) · Lawn Services (dropdown: Aeration, Fungicide Treatments, Pest Control, Weed Control, Soil Testing) · Client Portal · a single primary-CTA button. Below the mobile breakpoint that same CTA button becomes the hamburger menu toggle (not a second control) — see `components/navigation/NavBar.jsx`.
- **Explicitly NOT offered / do not market as core:** mowing, general landscaping, irrigation install/repair, sod installation, hydroseeding, yard cleanup, putting greens, artificial turf, drainage, retaining walls. (Legacy citation listings mention these — they are wrong/out of date and should not drive page or copy decisions.)
- **Turf types served:** Bermuda, Zoysia, Fescue, and mixed/split lawns.
- **Contact:** +1 833-388-8873 · info@prideinturf.com · Mon–Sat 7:00–18:00, Sun closed.
- **Positioning:** an expert, program-based alternative to generic lawn-mowing companies — confident about turf science (grass types, seasons, soil), consultative rather than pushy.

### Sources consulted (for future reference — reattach if you want deeper fidelity)
- `uploads/Pride in Turf BrandBook-V1.pdf` (21 pages) — logo, color standards, typefaces, print collateral (merch, yard signs, business cards, truck wraps). Copied into `assets/brand/`.
- `uploads/PT-Logo (1).png` — the only brand mark provided. Copied into `assets/logo/`.
- Live production site **https://prideinturf.com** — fetched homepage content directly (real, current copy/structure) for information architecture and voice.
- **"PIT MOCK"** — `https://sprint-table-32146272.figma.site/` — a published Figma Sites prototype (its own metadata calls it "Design System and Homepage… modern design system"), likely the intended visual reference for a redesign. **Not accessible from this environment**: it's a JS-rendered published site, not a mounted `.fig` file, so no design-context tooling reaches it, and it refused plain fetches. Per the user's instruction, this system was built **without it**, from the brand book + live site + provided copy instead. If you can export/attach the actual Figma file or screenshots, this system should be revisited against it — see the ask at the end.
- The large info dump (Cloudways/WP logins, GBP CIDs, citation logins, competitor URLs, keyword lists) is operational/SEO data, not design source material — retained above only where it affects service-area / NAP copy decisions.

---

## Content fundamentals

**Voice:** plain-spoken and consultative, not salesy. Declarative sentences, periods not exclamation points. Reads like an expert explaining a plan, not an ad.

**Person:** "we" for the company, "you/your" for the homeowner and their lawn — collaborative, never commanding. *"We help homeowners throughout North Georgia care for Bermuda, Zoysia, Fescue…"* / *"Tell us what your lawn needs…"*

**Casing:** sentence case everywhere — headlines, buttons, nav labels. Never Title Case, never ALL CAPS for real headlines. Short category "eyebrow" labels (e.g. `Program`, `Services`, `Metro Atlanta Lawn Care`) read like small tags above a heading.

**Structure that repeats everywhere:** *eyebrow label → sentence-case heading → one short supporting sentence → a short, verb-first CTA.* e.g. eyebrow "Program" → "Warm Weather" → "For warm-season turf that needs season-timed care through active growing periods." → "View program."

**Vocabulary is deliberately technical/specific**, used with confidence, never dumbed down: *warm-season, cool-season, split turf, aeration, fungicide, pre-emergent, root zone, soil conditions.* Naming exact grass types (Bermuda, Zoysia, Fescue) signals expertise and is used constantly instead of generic "grass."

**CTAs** are consistently quote-first and short: "Request a Quote," "Request a Free Quote," "View Lawn Care Programs," "Start Quote Request." Avoid generic "Learn More" / "Sign Up" / "Get Started" — match this brand's specific phrasing.

**Numbers are used sparingly and mean something** (founded 2005) — not stat-stuffed, no fake metrics, no manufactured urgency ("Only 3 spots left!").

**Locality is a trust signal.** Name real cities and the two real branch cities (Hoschton, Atlanta) confidently and often; don't flatten every service-area city to the same weight as an actual branch.

**No emoji, ever.** No decorative unicode glyphs in copy.

**What to avoid explicitly** (per the approved messaging architecture): don't market mowing/landscaping/irrigation/sod/hydroseeding as core offers; don't call every service-area city a "location"; don't pad copy with generic lawn-care filler that could describe any competitor — always ground copy in the program/season/turf-type model that differentiates Pride In Turf.

**Reference copy blocks** (use verbatim where possible — these are approved, not placeholders):
- Hero: *"Healthier Georgia Lawns Start With the Right Program"* / *"Season-timed lawn care programs, aeration, disease protection, pest control, and soil-based recommendations for North Georgia homeowners."*
- Positioning: *"Programs Built for Georgia Lawns"*
- Footer: *"Program-based lawn care and turf-focused services for homeowners throughout Northeast Georgia and Metro Atlanta."*

---

## Visual foundations

**Colors.** Four brand-book flag colors, used at full strength, high-contrast, graphic — not a soft/pastel "wellness" green: `#76bc43` green (growth/turf/primary action), `#f69622` orange (warmth/energy/accent — secondary CTAs, highlights, icon accents), `#231f20` near-black ink (text, the heavy outline color in the logo), `#ffffff` white. Neutral grays and status colors used in this system are synthesized (OKLCH) around that ink, not part of the original brand book — see `tokens/colors.css`. Green at full saturation is under AA contrast for small text on white, so body links use a darkened green (`--text-link`), not raw brand green.

**Type.** One family throughout: **Kanit** (geometric, slightly technical/engineered-feeling sans — fits a science-forward "turf management" brand). Brand-book weight rules carry over directly to the web:
- **Black (900) is reserved for the logo wordmark only** — never use it for headlines or UI.
- **Bold (700)** is the real workhorse heavy weight (confirmed in the brand book across merch, yard signs, business cards) — use for headings, nav emphasis, buttons.
- **Medium (500)** for secondary emphasis (eyebrows, labels, sub-heads).
- **Regular (400)** for body copy, form fields, fine print.
- Headings are sentence case, tight leading, slightly tightened tracking at large sizes.
- Avenir Medium appears in the brand book but only for internal documents/contracts/paperwork — out of scope for this web/marketing system, not implemented.

**Imagery.** Real photography of turf/lawns — sunlit, saturated, healthy green, not desaturated or black & white, no heavy grain or filter. No illustration style or icon-illustration hybrids anywhere in source material. The brand book's print collateral (yard signs, truck wraps, business cards) is flat solid color with no gradients, no patterns/textures, no photographic backgrounds — that flatness is a print convention; for the web system, full-bleed turf photography is used for hero moments specifically (a primary hero image URL was provided but could not be fetched into this project — see caveats), with a dark ink scrim (`--surface-overlay-scrim`) for text legibility over photos.

**Backgrounds.** Flat only: white/`--surface-page` for most sections, `--surface-inverse` (ink) for occasional high-contrast bands (e.g. footer, a callout), full-bleed photography for hero sections with scrim. No gradients, no decorative blur/glassmorphism, no repeating patterns — none appear anywhere in source material.

**Shadows / elevation.** The print brand is flat with hard black outlines (no soft shadow at all). For the digital system we use restrained, soft elevation only (`--shadow-sm/md/lg`) rather than the print system's thick-outline style — chosen per the "modern, premium" direction the client mock's own metadata described. Cards default to a hairline `--border-default` and pick up `--shadow-md` on hover, not both heavy at once.

**Corner radii.** Moderate throughout — `--radius-md` (10px) for buttons/inputs, `--radius-lg` (16px) for cards, `--radius-full` for pills/badges. Not the print system's sharp corners (signage/vehicle graphics are inherently sharp-cut); not an overly soft/bubbly startup look either.

**Motion.** No motion exists in the source (the brand book is print-only). This system uses short, functional motion only: 140–220ms ease-out fades and small translate-ins on scroll, no bounce/spring, no infinite decorative loops — matches the brand's measured, professional tone.

**Hover / press states.** Hover: primary/accent buttons step one shade darker on their own ramp (`-hover` token); outline/ghost buttons fill with a light brand tint; links darken + underline. Press/active: one shade darker still (`-active` token); no scale/shrink bounce.

**Borders.** Hairline `1px solid var(--border-default)` as the default separator/card border; `--border-strong` for inputs and higher-emphasis outlines. No colored left-border "accent bar" cards.

**Transparency / blur.** Used sparingly and only for the hero photo scrim and on-dark secondary text (`--text-on-dark-secondary`); no frosted-glass chrome, no backdrop-blur panels anywhere.

---

## Iconography

No icon system, icon font, or icon SVGs exist in the provided sources (the brand book is print collateral only — no digital UI to inherit an icon set from). Per the design-system process, this system substitutes **[Lucide](https://lucide.dev)** (MIT-licensed, thin 2px rounded-stroke linear icon set) — its clean, technical linework pairs well with Kanit's geometric character, and it is not a licensed/paid set. **This is a flagged substitution, not a brand asset** — replace with a real icon system if/when one exists.

- The 21 glyphs actually used were fetched from `lucide-static` and **vendored directly into this project** — raw files in `assets/icons/*.svg`, and their path data is inlined in `components/core/Icon.jsx` as real `<svg>` markup (`stroke="currentColor"`), not a live CDN/mask reference. That means icons render everywhere with zero runtime network dependency and can be tinted to any brand color via plain CSS `color`.
- Stroke-based (not filled) glyphs only, used for: services (leaf, droplet, bug, trees, sprout, flask-conical), programs (sun, cloud, layers, sliders-horizontal), trust/contact (shield-check, map-pin, phone, mail, clock, calendar), UI chrome (arrow-right, check, menu, x, chevron-down).
- No emoji anywhere (matches the copy voice). No unicode characters used as icons.

---

## Fonts — substitution flag

Kanit **is** the correct, real brand typeface (confirmed by the brand book) and **is** freely available on Google Fonts — this is not a substitution. No font files were provided in the upload, so this system self-hosts Kanit via the Fontsource CDN build (jsdelivr-backed, see `tokens/typography.css`) rather than vendoring binaries. If you'd prefer actual local `.woff2` files committed into `assets/fonts/`, send them over (or say the word and point me to a download) and I'll wire up local `@font-face` `src` paths instead of the CDN URLs.

---

## Intentional additions (components with no source counterpart)

No component library or codebase was available (brand-guidelines-only run), so the full component set below was authored from scratch, sized to what a lawn-care marketing site + quote-request flow actually needs — not a generic app kit. Notable additions and why:
- **Icon** — thin wrapper needed to apply the substituted Lucide glyph set consistently (see Iconography above).
- **SectionHeading** — codifies the "eyebrow → heading → subhead" pattern that repeats on every section of the live site.
- **ProgramCard / ServiceCard** — the two repeating card shapes on the live site (3 programs, 5 services) got dedicated components rather than one generic `Card`.
- Deliberately **not** built: Tabs, Dialog, Toast, Tooltip, Switch — nothing in the source site (a mostly-static marketing site) uses them, and inventing app-style chrome for a lawn-care brochure site would be speculative.

---

## Index

- `styles.css` — single import entry point. `base.css` + `tokens/*.css` underneath.
- `tokens/` — `colors.css`, `typography.css` (+ `@font-face`), `spacing.css`, `effects.css` (radius/shadow/motion).
- `assets/logo/` — the one provided logo file. `assets/brand/` — original brand book PDF, for reference. `assets/icons/` — vendored Lucide SVGs backing `Icon.jsx`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, elevation, logo, icons) shown in the Design System tab.
- `components/core/` — Button, Badge, Icon, SectionHeading.
- `components/cards/` — ProgramCard, ServiceCard, InfoList.
- `components/forms/` — Input, Select, Textarea, Checkbox, FormField.
- `components/navigation/` — NavBar, Footer.
- `components/marketing/` — Hero, CTABanner.
- `ui_kits/marketing-site/` — click-through recreation: home, about, a program page, a service page, a client-portal placeholder, and a quote/contact flow, composed from the components above.
- `SKILL.md` — Claude Code / Agent Skills-compatible entry point for this system.

## Caveats & ask

- **Could not access the PIT MOCK Figma site** (JS-rendered published prototype, no design-context tooling reaches it) — this build is from the brand book + live site + your copy only. If that mock represents an approved redesign direction, please export/attach the real `.fig` file via Import, or drop screenshots of its key screens, and I'll reconcile this system against it.
- **Brand book images weren't extractable** (PDF page rendering failed in this environment) — colors/type rules were read from the document's text layer, which covers the standards precisely, but I could not visually inspect the truck-wrap/business-card/yard-sign mockup pages for secondary layout cues.
- **Kanit is self-hosted from a third-party CDN (jsdelivr/Fontsource)**, not vendored binaries — flagged above.
- **Lucide substituted for iconography** — flagged above, no icon system exists in source.
- Only one logo file exists in source (transparent PNG, for light backgrounds). The live site references a white/reversed logo variant (`logo-white.jpeg`) I could not fetch — ask if you can supply it.

**Please review and iterate with me** — tell me if the Figma mock should take precedence, whether the bold/flat print palette should push further into the "premium modern" direction or stay bolder, and whether the program/service page structure in the UI kit matches what you actually want live.
