---
name: Pride In Turf
description: Metro Atlanta turf treatment specialists — flat, structural, sunlit. Kanit throughout, green structure, orange signal.
source: paper.design style sheet v1.0 (frames 00–12) — "Pride In Turf Style Sheet (offline).html"

colors:
  brand-green: "#76bc43"
  brand-orange: "#f69622"
  brand-ink: "#231f20"
  white: "#ffffff"

  green-50: "oklch(97% 0.03 128)"
  green-100: "oklch(93% 0.06 128)"
  green-200: "oklch(87% 0.09 128)"
  green-300: "oklch(80% 0.13 128)"
  green-400: "oklch(75% 0.16 128)"
  green-600: "oklch(60% 0.16 130)"
  green-700: "oklch(49% 0.14 132)"
  green-800: "oklch(39% 0.12 132)"
  green-900: "oklch(29% 0.09 132)"

  orange-50: "oklch(97% 0.025 60)"
  orange-100: "oklch(93% 0.05 58)"
  orange-200: "oklch(87% 0.09 56)"
  orange-300: "oklch(81% 0.13 54)"
  orange-400: "oklch(76% 0.16 52)"
  orange-600: "oklch(63% 0.17 48)"
  orange-700: "oklch(53% 0.15 44)"
  orange-800: "oklch(43% 0.13 40)"
  orange-900: "oklch(33% 0.10 38)"

  neutral-50: "oklch(98% 0.002 45)"
  neutral-100: "oklch(95% 0.004 45)"
  neutral-200: "oklch(90% 0.006 45)"
  neutral-300: "oklch(82% 0.008 45)"
  neutral-400: "oklch(68% 0.010 45)"
  neutral-500: "oklch(54% 0.012 45)"
  neutral-600: "oklch(42% 0.012 45)"
  neutral-700: "oklch(32% 0.012 45)"
  neutral-800: "oklch(24% 0.010 45)"
  neutral-950: "oklch(10% 0.006 45)"

  surface-page: "{colors.neutral-50}"
  surface-card: "{colors.white}"
  surface-sunken: "{colors.neutral-100}"
  surface-inverse: "{colors.brand-ink}"
  overlay-scrim: "oklch(15% 0.01 40 / 0.55)"

  text-primary: "{colors.brand-ink}"
  text-secondary: "{colors.neutral-600}"
  text-tertiary: "{colors.neutral-500}"
  text-disabled: "{colors.neutral-300}"
  text-link: "{colors.green-700}"
  text-link-hover: "{colors.green-800}"
  text-on-dark-secondary: "oklch(100% 0 0 / 0.72)"

  border-default: "{colors.neutral-200}"
  border-strong: "{colors.neutral-300}"
  border-on-dark: "oklch(100% 0 0 / 0.16)"

  success: "{colors.green-600}"
  warning: "oklch(78% 0.15 82)"
  error: "oklch(56% 0.19 25)"
  info: "oklch(58% 0.09 240)"

typography:
  display:
    fontFamily: "Kanit, 'Arial Narrow', sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Kanit, 'Arial Narrow', sans-serif"
    fontSize: "2.375rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Kanit, 'Arial Narrow', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.14em"

rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "999px"

spacing:
  "0": "0px"
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "clamp(20px, 18.51px + 0.38vw, 24px)"
  "8": "clamp(24px, 21.03px + 0.76vw, 32px)"
  "10": "clamp(28px, 23.54px + 1.14vw, 40px)"
  "12": "clamp(32px, 26.06px + 1.52vw, 48px)"
  "16": "clamp(40px, 31.09px + 2.29vw, 64px)"
  "20": "clamp(48px, 36.11px + 3.05vw, 80px)"
  "24": "clamp(56px, 41.14px + 3.81vw, 96px)"
  "32": "clamp(72px, 51.2px + 5.33vw, 128px)"

components:
  button-primary:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.green-600}"
    textColor: "{colors.white}"
  button-primary-active:
    backgroundColor: "{colors.green-700}"
    textColor: "{colors.white}"
  button-accent:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "44px"
  button-accent-hover:
    backgroundColor: "{colors.orange-600}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.green-700}"
    rounded: "{rounded.md}"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.green-700}"
    rounded: "{rounded.md}"
    height: "44px"
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.brand-ink}"
    rounded: "{rounded.md}"
    height: "44px"
  button-sm:
    height: "36px"
  button-lg:
    height: "52px"
  badge:
    backgroundColor: "{colors.green-100}"
    textColor: "{colors.green-800}"
    rounded: "{rounded.full}"
    typography: "{typography.label}"
    height: "26px"
  input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "46px"
    typography: "{typography.body}"
  card-program:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "{spacing.8}"
  card-service:
    backgroundColor: "transparent"
    rounded: "{rounded.lg}"
    padding: "{spacing.4}"
  navbar:
    backgroundColor: "{colors.surface-card}"
    height: "76px"
  footer:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.white}"
---

# Design System: Pride In Turf

**Source of truth.** This file is derived from the paper.design style sheet v1.0
(app.paper.design/file/01KY7Q7GSKA4K1A7G4QKQD23AT, frames 00–12) and its exported token files.
Where this file and the older "Hybrid Technical-Premium" Figma spec disagree, **this file wins** —
see [Divergences from the prior spec](#divergences-from-the-prior-spec) at the bottom for the three
that matter.

## Overview

**Creative North Star: "The Sunlit Ledger"**

Pride In Turf reads like a well-kept service record left open on a clean desk: flat fills, hairline
rules, generous off-white margin, and exactly one place per screen where something is worth acting
on. Nothing decorates. Every band of green is doing structural work — nav, links, icon wells,
section rhythm — and the orange appears once, the way a highlighter appears once on a page you
intend to come back to. The system is built from plain CSS custom properties and needs no utility
classes to hold together, which is the whole point: a board can move between paper.design, Bricks,
and a static export and keep its styling.

Density is moderate and unhurried. Type is set in sentence case throughout, on a 17px base that is a
step larger than the web default — this is a homeowner-facing site read on phones in driveways, not
a dashboard. Radii are moderate (6–24px), never pill-shaped except on badges, and never sharp.
Shadows are soft, restrained, and functional: a card lifts on hover because it is clickable, not
because depth is a style.

The rejections are explicit and confirmed by the source system: no gradients, no textures, no
neumorphism, no bounce or spring motion, no infinite loops, no emoji standing in for icons, no
desaturated or filtered photography, no generated imagery. Photography is the only place the system
leaves flat color, and it earns that exception by being real turf from real jobs.

**Key Characteristics:**

- Flat brand surfaces, restrained digital elevation (three shadows, one hairline border)
- One typeface — Kanit — carrying display, UI, and body
- 60 / 30 / 10 color spend: off-white surface, green structure, orange signal
- Fluid-by-default spacing: one clamp ramp from 390px to 1440px, no breakpoint overrides
- Plain CSS custom properties — no class dependency, portable across builders
- 23 specimened components, 18 custom turf glyphs

## Colors

Four brand colors pinned exactly from the brand book, three synthesized OKLCH ramps around them, and
a semantic layer on top. **Components only ever read the semantic names.** The ramps exist so the
semantic layer has somewhere to point.

### Primary

- **Turf Green** (`#76bc43` → `--brand-primary`): The structural color, not the loud one. Nav, links,
  primary buttons, icon wells, eyebrows, section bands. Roughly 30% of any layout. Pinned from the
  brand book; never re-derived.
- **Turf Green Deep** (`oklch(49% 0.14 132)` → `--text-link`, green-700): Every green that carries
  *text*. Links, outline-button labels, glyphs inside green wells.

### Secondary

- **Signal Orange** (`#f69622` → `--brand-accent`): Calls to action, one highlight per screen, star
  ratings, the "featured" indicator. Roughly 10%. Pinned from the brand book.

### Neutral

- **Ink** (`#231f20` → `--brand-ink`, `--text-primary`, `--surface-inverse`): Body text, the dark CTA
  band, the footer. Deliberately not pure black.
- **Page** (`oklch(98% 0.002 45)` → `--surface-page`): The default canvas. Off-white, ~98% L — never
  flat `#fff` for a full page.
- **Card** (`#ffffff` → `--surface-card`): Cards sit one step brighter than the page they're on.
- **Sunken** (`oklch(95% 0.004 45)` → `--surface-sunken`): Alternating section bands, input wells.
- **Body Grey** (`oklch(42% 0.012 45)` → `--text-secondary`): Supporting sentences, card descriptions.
- **Hairline** (`oklch(90% 0.006 45)` → `--border-default`): The default separator and card edge, 1px.

The neutral ramp is warm-grey, derived from the brand ink rather than a generic grey — hue 45
throughout, so nothing on the page goes cold against the green.

### Status

Status colors are synthesized to harmonize with the brand but are **not** brand colors: success
`oklch(60% 0.16 130)`, warning `oklch(78% 0.15 82)`, error `oklch(56% 0.19 25)`, info
`oklch(58% 0.09 240)`.

### Named Rules

**The 60/30/10 Rule.** 60% off-white surface, 30% green structure, 10% orange signal. Orange never
fills a section band, never fills a row of icon tiles, never becomes a border color. The moment
orange appears twice on a screen it stops being a signal and becomes a third brand color.

**The Ramp-Step Rule.** Raw green-500 and orange-500 fail WCAG AA for small text on white. Text and
links read through the darker ramp steps — `--text-link` is green-700, never the pinned brand hex.
The pinned hexes are for *surfaces*, not type.

**The Status-Is-Not-Brand Rule.** Alerts and validation never borrow brand green or orange. An
orange warning reads as a brand accent, not a warning.

## Typography

**Display Font:** Kanit (fallback 'Arial Narrow', sans-serif)
**Body Font:** Kanit (fallback 'Helvetica Neue', Arial, sans-serif)
**Label Font:** Kanit — same family, weight 500, 0.14em tracking

**Character:** One family doing everything. Kanit is a condensed-ish grotesque with enough width
variation between 400 and 700 that the hierarchy reads on weight alone — no second typeface needed,
no serif contrast, no mono. It looks operational rather than decorative, which is the correct
register for a company whose credibility comes from doing the same job well every eight weeks.

Weight rules come straight from the brand book:

| Weight | Token | Use |
|---|---|---|
| 400 | `--weight-regular` | Body copy, form fields, addresses, fine print |
| 500 | `--weight-medium` | Eyebrows, labels, sub-heads, nav items |
| 700 | `--weight-bold` | Every heading, every button. The default heavy weight |
| 900 | `--weight-black` | **Logo wordmark only.** Never a headline. Never UI. |

### Hierarchy

Base is 1.0625rem (17px). Sentence case throughout.

| Role | Token | Size | Weight | Leading | Use |
|---|---|---|---|---|---|
| Display | `--text-6xl` / `--text-5xl` | 76 / 60px | 700 | 1.1 | Hero headline only |
| Headline | `--text-4xl` / `--text-3xl` | 48 / 38px | 700 | 1.1 | Section headings (SectionHeading xl / lg) |
| Title | `--text-2xl` / `--text-xl` | 30 / 24px | 700 | 1.25 | Card titles, sub-sections |
| Body Large | `--text-lg` | 20px | 400 | 1.5 | Lede paragraphs, sub-heads |
| Body | `--text-base` | 17px | 400 | 1.5 | All default body copy |
| Small | `--text-sm` | 15px | 400 | 1.5 | Card descriptions, metadata |
| Label | `--text-xs` | 13px | 500 | 1.5 | Eyebrows, badges, captions |

**Tracking:** -0.02em on headings (`--tracking-tight`), 0 on body, 0.14em on eyebrows
(`--tracking-eyebrow`).
**Leading:** 1.1 tight / 1.25 snug / 1.5 normal / 1.65 relaxed.

### Named Rules

**The Sentence-Case Rule.** Headings are sentence case. Uppercase appears only on eyebrows and
badges, where the 0.14em tracking makes it legible.

**The Eyebrow Pattern.** Eyebrow (13px / 500 / uppercase / 0.14em) → heading → one supporting
sentence → one verb-first link. That four-part stack is the section-opening pattern; do not add a
fifth element to it.

**Fluid type is optional, not declared.** The fixed `--text-*` scale is what every built component
uses. Fluid `clamp()` curves for hero/H1/H2 exist in `handoff/design-tokens.json` under `fluidType` —
adopt them in the builder's own stylesheet if wanted, but do not declare them as custom properties
(the `clamp()` arithmetic trips the system's font-face scanner).

## Layout

**Spacing** is a 4px base. Steps 0–5 are fixed detail spacing (0, 4, 8, 12, 16, 20px) for icon gaps,
inline runs, and control padding — these never scale. Everything at layout scale (6, 8, 10, 12, 16,
20, 24, 32) is an automatic `clamp()` ramp that interpolates itself between a 390px and a 1440px
viewport. **No layout spacing needs a breakpoint override anywhere in the system.**

**Containers:** `--container-max: 1200px`, `--container-narrow: 760px`,
`--container-padding: clamp(20px, 5vw, 64px)`.

**Section rhythm:** `--section-padding-y: clamp(56px, 41.14px + 3.81vw, 96px)`. Use
`--section-padding-y-sm: clamp(40px, 34.06px + 1.52vw, 56px)` only for a section that should stay
visually quieter than its neighbours at every width.

**Grid:** 12 columns desktop / 8 tablet / 4 mobile. Gutter rides `--space-6`, `--space-4` on mobile.

**Breakpoints (reference values):** mobile 390px, tablet 834px, desktop 1440px. The NavBar has its
own independent collapse point at **860px**, measured on the component's own container — not the
window.

CSS custom properties cannot be used inside an `@media` condition. Author breakpoints with the
literal numbers and keep them in sync with the token file by hand. This is a CSS language
limitation, not a preference.

**Z-index layers:** base 0, card-hover 1, sticky-header 40, dropdown 50, mobile-nav-panel 60,
overlay-scrim 70, modal 80, toast 90.

**Aspect ratios:** hero 21/9, card 4/3, blog thumbnail 16/10, blog hero 16/9, square 1/1,
portrait 3/4.

## Elevation & Depth

Hybrid, weighted toward flat. The brand's print collateral is entirely flat — no shadows, gradients,
or textures — so elevation here is a deliberate digital-only extension, kept soft and restrained
rather than heavy. Depth is carried primarily by **tonal layering**: page (neutral-50) → card
(white) → sunken band (neutral-100), with a 1px hairline where a boundary needs to be explicit.
Shadows are a state response, not a resting style.

### Shadow Vocabulary

- **Ambient** (`box-shadow: 0 1px 2px rgba(35, 31, 32, 0.06)` → `--shadow-sm`): Barely-there
  separation for elements already on a tonal surface.
- **Raised** (`box-shadow: 0 6px 16px rgba(35, 31, 32, 0.08)` → `--shadow-md`): ProgramCards, hover
  states. The default "this is a thing you can click."
- **Floating** (`box-shadow: 0 16px 40px rgba(35, 31, 32, 0.14)` → `--shadow-lg`): Nav flyouts,
  modals, the mobile panel.
- **Focus ring** (`box-shadow: 0 0 0 3px oklch(72% 0.15 130 / 0.45)` → `--shadow-focus`): 3px green
  at 45%. Applied on `:focus-visible` to every interactive element.

### Motion

`--duration-fast: 140ms`, `--duration-base: 220ms`, `--duration-slow: 360ms`. Easing:
`--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`, `--ease-out: cubic-bezier(0, 0, 0.2, 1)`. Fades and
small translates only.

### Named Rules

**The Border-Or-Shadow Rule.** A card takes a border or a shadow — not both at full strength. If it
needs the hairline for structure, drop the shadow to `--shadow-sm`.

**The Focus-Ring-Is-Never-Removed Rule.** Never remove the focus ring, and never replace it with a
color change alone. `:focus-visible` gets `--shadow-focus` plus `--radius-sm`, on every control.

**The No-Bounce Rule.** No spring, no bounce, no scale-on-hover, no infinite loops. Hover steps one
shade down the element's own ramp; press steps one further and lifts 1px.

## Shapes

Moderate radii and one hairline weight. `--radius-sm: 6px` (focus rings, small chrome),
`--radius-md: 10px` (buttons, inputs, icon wells — the workhorse), `--radius-lg: 16px` (cards, photo
crops), `--radius-xl: 24px` (large feature surfaces), `--radius-full: 999px` (badges and pills only).

Borders come in two weights: `--border-width: 1px` with `--border-default` is the default separator
and card edge; `--border-width-thick: 2px` with `--border-strong` is reserved for inputs and
higher-emphasis outlines. On ink, borders use `--border-on-dark` (`oklch(100% 0 0 / 0.16)`).

Photo corners are clipped by `--radius-lg` with `object-fit: cover`. Nothing letterboxes.

## Components

23 components, all specimened in the source style sheet. Character line, then the spec.

### Buttons

Confident but not shouty — a solid fill, a moderate radius, and a state response you feel rather
than watch.

- **Shape:** `--radius-md` (10px)
- **Sizes:** sm 36px, md 44px (default), lg 52px. Everything from md up holds a 44px minimum touch
  target.
- **Primary** (`variant="primary"` / ACSS `.btn--primary`): `--brand-primary` fill, white text. The
  default action.
- **Accent** (`variant="accent"` / ACSS `.btn--accent`): `--brand-accent` fill, white text.
  **One per screen.**
- **Outline** (`variant="outline"` / ACSS `.btn--primary.btn--outline`): transparent fill, green-700
  text and border.
- **Ghost** (`variant="ghost"` / ACSS `.btn--text`): transparent, green-700 text, no border.
- **Inverse** (`variant="inverse"`): white fill on ink or photography.
- **Hover / Active:** hover steps one shade down its own ramp; active steps one further and lifts
  1px. No scale bounce.
- **Icons:** left or right slot, Lucide UI chrome at 24px grid.
- **Full width:** the mobile pattern — a full-width accent button at the end of a mobile section or
  the open nav panel.

### Badges

- Pills at `--radius-full`, `--text-xs`, weight 500.
- Variants: primary (green tint), accent (orange tint), neutral, inverse.

### Forms

FormField wraps label, control, and hint-or-error as one unit.

- **Style:** `--radius-md`, `--border-width-thick` with `--border-strong`, `--font-body` /
  `--text-base` / 400, 46px height.
- **Focus:** border shifts to `--brand-primary` **and** `--shadow-focus` paints. Both, not one.
- **Error:** border goes red and the hint line is replaced by the message — the field never shows
  hint and error at once.
- **Checkbox/radio:** native controls styled with `accent-color: --brand-primary`. Do not rebuild
  them from divs.
- **Controls:** Input, Select, Textarea (rows=4 → ~110px), Checkbox.

### Cards

Six shapes, **deliberately unequal in weight.** Programs are the product, so ProgramCards carry
chrome; everything else stays quiet so a five-up row doesn't turn into a wall of boxes.

- **ProgramCard:** bordered, `--shadow-md`, `--radius-lg`, lifts 3px on hover. Optional media slot
  above the content at `--aspect-card` (4/3, `object-fit: cover`, corners clipped by `--radius-lg`).
  Media is a node, not a URL — omit it for the plain card.
- **ServiceCard:** **no chrome at all.** Icon, title, one ~90-character sentence that never runs past
  two lines. Built for a five-up row.
- **TrustPointCard:** no chrome. Left-aligned (90px) or centered (120px) variants.
- **InfoList:** label/value rows, with an on-dark variant for the footer and ink bands.
- **ReviewCard:** author name, star rating, 2–3 sentences. No border.
- **LocationCard:** label, description, address, phone. **Branch locations only — never service
  areas.**

### Sections & Feedback

- **SectionHeading:** sm / lg / xl, left or centered. Centered also caps the measure at 640px.
  Structure is always eyebrow → heading → one supporting sentence.
- **Alert:** info / success / warning / error. Status colors only — never brand green or orange.
- **Accordion:** click-to-open rows, `defaultOpenIndex` supported.
- **Breadcrumbs:** 28px row, `text-xs`.
- **UpdateNotice:** two levels. The "important" level is **the one place in the entire system where
  orange fills a surface** — reserved for genuinely urgent notices, not routine ones.
- **CTABanner:** inverse (default, ink band), brand (green band), light (only when it directly
  follows another dark band).

### Navigation

- **NavBar:** 76px, sticky, hairline bottom border, `--z-sticky-header: 40`. Logo, links with
  optional `children[]` flyouts, `ctaLabel`, `activeHref`.
- **Mobile:** collapses at **860px measured on the component's own container**, not the window.
  Below that the CTA slot *becomes* the hamburger toggle — not a second control beside it — and the
  real CTA reappears full-width at the bottom of the open panel.
- **Footer:** three columns on ink, plus a copyright bar. Program links, contact block
  (phone +1 833-388-8873, info@prideinturf.com, address), logo lockup on a white plate.

### Icons

18 custom turf glyphs drawn for this brand — turf-blades, warm-season, cool-season, mixed-lawn,
aeration, fungicide, pest, weed, soil-test, root-zone, soil-layers, program-plan, seasonal-timing,
service-visit, service-area, turf-guarantee, moisture, granular-feed.

- **Grid:** 24×24 viewBox, 2px stroke, round caps and joins, **no fills**.
- **Stroke stays 2px at every size** — the grid scales, the line weight does not.
- Single-color SVG using `stroke: currentColor`, so it tints with plain CSS `color`.
- One concept per glyph. Ground line at y=14→20 keeps the set optically aligned.
- **UI chrome — arrows, chevrons, check, menu, close — stays on Lucide.** The custom set only adds
  what the brand actually needed.
- Icon wells: tint background at `--radius-md`, glyph reads at the ramp's dark step. Orange wells are
  accents only, never a whole grid.

### Imagery

Sunlit, saturated, in-focus turf shot on real jobs. Photography is the only place this system leaves
flat color.

- Fill the frame with grass, not sky. Crop with `object-fit: cover`.
- Hero photos always carry the scrim: **flat 55% ink** (`oklch(15% 0.01 40 / 0.55)`), never a
  gradient fade.
- Hero minimum 1920px wide, centered focal subject, `--aspect-hero` 21/9.
- Text over photography: heading in `--text-on-dark`, supporting line in `--text-on-dark-secondary`
  (`oklch(100% 0 0 / 0.72)`).
- A missing hero photo falls back to a solid `--color-green-900` field — **never a generated or
  invented image.**

## Automatic.css 4.x Mapping

The build contract. Every specimen in the source sheet is labelled twice — system token, then ACSS
alias. Load `exports/pride-in-turf-acss-4x.css` as global CSS and the system resolves under ACSS
names.

| System token | ACSS 4.x | Value |
|---|---|---|
| `--brand-primary` | `--primary` | `#76bc43` |
| `--brand-primary-hover` | `--primary-hover` | `#5f9205` |
| `--brand-primary-tint` | `--primary-ultra-light` | `#eff9e4` |
| `--text-link` / `--brand-primary-active` | `--primary-dark` | `#407000` |
| — | `--primary-ultra-dark` | `#193400` |
| `--brand-accent` | `--accent` | `#f69622` |
| `--brand-accent-hover` | `--accent-hover` | `#d86105` |
| `--surface-page` | `--base` | `#faf8f7` |
| `--surface-card` | `--base-ultra-light` / `--white` | `#ffffff` |
| `--border-default` | `--base-semi-light` | `#e1dddb` |
| `--brand-ink` | `--base-ultra-dark` / `--black` | `#231f20` |
| `--text-secondary` | `--neutral` | `#756d69` |
| `--color-success-500` | `--success` | `#5f9205` |
| `--color-warning-500` | `--warning` | `#e7ac2a` |
| `--color-error-500` | `--danger` | `#cc3336` |
| `--color-info-500` | `--info` | `#4381aa` |
| `--font-display` / `--font-body` | `--primary-font` | `'Kanit', sans-serif` |
| `--text-base` | `--text-m` | `1.0625rem` |
| `--text-4xl` | `--h2` | `3rem` |
| `--space-4` | `--space-s` | `16px` |
| `--space-8` | `--space-m` | `clamp(24px, 21.03px + 0.76vw, 32px)` |
| `--section-padding-y` | `--section-padding-block` | `clamp(56px, 41.14px + 3.81vw, 96px)` |
| `--container-max` | `--content-width` | `1200px` |
| `--radius-md` | `--radius-m` | `10px` |
| `--shadow-md` | `--shadow-m` | `0 6px 16px rgba(35, 31, 32, 0.08)` |

**Weights:** `--weight-regular` → `--font-weight-body`, `--weight-medium` → `--font-weight-medium`,
`--weight-bold` → `--font-weight-heading`.
**Buttons:** primary → `.btn--primary`, accent → `.btn--accent`, outline →
`.btn--primary.btn--outline`, ghost → `.btn--text`.

**`--primary-dark` and `--action` are both `#407000`, deliberately.** `--primary-dark` is the
deep-green ramp step. `--action` is set to the same value because the export defines action as the
link color, with its own comment: "Action = link color. Raw brand green fails AA on white at body
sizes, so links read one ramp step darker." `--action-hover` is `#2b5100`. This is an intentional
decision in the paper.design system, not a default left unset — it does mean links and any ACSS
action-role element read green, not orange.

**ACSS 4.x dropped the `--*-trans-*` tokens.** Build transparency with
`color-mix(in oklch, var(--primary) 20%, transparent)`. The hero scrim in ACSS terms is
`color-mix(in oklch, var(--base-ultra-dark) 55%, transparent)`.

**Kanit** is self-hosted from the Fontsource CDN build in the token file. Swap in local `.woff2`
files under `assets/fonts/` for production rather than depending on a CDN.

## Do's and Don'ts

### Do:

- **Do** spend color 60 / 30 / 10 — off-white surface, green structure, orange signal. Audit any new
  section against that ratio before shipping it.
- **Do** read text greens through green-700+. `--brand-primary` is a surface color, not a text color.
- **Do** use the semantic aliases (`--surface-card`, `--text-secondary`, `--border-default`) in
  components. Reach for a raw ramp step only when defining a new semantic token.
- **Do** keep detail spacing on the fixed 0–5 steps and layout spacing on the fluid 6–32 steps.
  Mixing them is what breaks the automatic ramp.
- **Do** set headings 700 and sentence case; eyebrows 500, uppercase, 0.14em.
- **Do** give ProgramCards their chrome and leave ServiceCards and TrustPointCards bare.
- **Do** author `@media` queries with literal 390 / 834 / 1440 (and 860 for nav) and keep them in
  sync with the token file by hand.
- **Do** ship real Georgia turf photography, sunlit and saturated, with the flat 55% ink scrim on
  every hero.

### Don't:

- **Don't** use Kanit 900 anywhere but the logo wordmark. Not in a headline, not in a button, not
  "just for the hero."
- **Don't** let orange fill a section band, a row of icon tiles, a border, or any large surface. The
  single exception is the UpdateNotice "important" variant.
- **Don't** put brand green or orange into alerts or validation states.
- **Don't** give a card a full-strength border *and* a full-strength shadow.
- **Don't** add bounce, spring, scale-on-hover, or infinite loops. Fades and small translates only.
- **Don't** remove the focus ring or swap it for a color change.
- **Don't** use sharp 0px corners. This system's floor is `--radius-sm` 6px; the workhorse is
  `--radius-md` 10px.
- **Don't** introduce a second typeface. Kanit carries display, UI, and body.
- **Don't** use gradients, textures, neumorphism, desaturated or filtered photography, generic stock
  lawns, illustration, emoji, or unicode glyphs standing in for icons.
- **Don't** generate a hero image when one is missing — fall back to solid `--color-green-900`.
- **Don't** use a LocationCard for a service area. Branches only.

## Divergences from the prior spec

Three places where this file contradicts the older "Hybrid Technical-Premium" Figma system. This
file wins; the list exists so nothing gets rebuilt against the wrong rule by accident.

| Decision | Prior Figma spec | paper.design v1.0 (canonical) |
|---|---|---|
| Corner radius | Sharp 0px default on everything | 6 / 10 / 16 / 24px; 10px is the workhorse |
| Body typeface | Avenir Regular / Medium | Kanit 400 / 500 — Avenir is print-only per the brand book |
| Deep green `#407000` | not present | `--primary-dark` — the deep-green ramp step |
| `--action` (ACSS) | CTA Orange `#f69622` | Deep green `#407000` (`--action-hover` `#2b5100`) — defined as the link color for AA compliance, not the CTA color |
| Spacing base | 8px grid, fixed steps | 4px base, fluid `clamp()` ramp above 20px |
| Type base | 16px | 17px (1.0625rem) |

If the prior spec is still what's approved on the client side, this file needs a decision before
build — not a merge. Splitting the difference produces a system that follows neither.
