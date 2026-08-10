# Pride In Turf — Component Specification

Structural/behavioral spec for every component. Source of truth for props/variants is each component's `.d.ts` + `.prompt.md` in `components/` — this document adds the cross-cutting behavior (a11y, responsive, spacing, interaction) the JSDoc doesn't carry. Semantic HTML is described as rendered; exact Etch markup may differ — see `etch-implementation-map.md`.

---

## Header (NavBar)
**File:** `components/navigation/NavBar.jsx` · **Purpose:** persistent site header — logo, primary nav with dropdowns, CTA.
**Semantic HTML:** `<header><nav><a>` items, `<button aria-expanded>` for dropdown/mobile toggles.
**Props:** `logo`, `links[]` (with optional `children[]`), `ctaLabel`, `onCtaClick`, `activeHref`, `mobileBreakpoint` (default 860), `defaultMobileOpen`.
**Variants:** none (single visual treatment) — states below cover its behavior range.
**States:** default / active-item (green text) / dropdown-open (desktop hover flyout) / mobile-menu-closed / mobile-menu-open / mobile-accordion-expanded.
**Content limits:** top-level items should stay short enough to stay on one line at 860px width (currently 4 items + CTA fits comfortably; a 5th top-level item risks wrapping — verify before adding one).
**Accessibility:** dropdown trigger is a real `<button aria-expanded aria-controls>`; keyboard focus reaches every link; mobile toggle has `aria-label="Menu"` and `aria-expanded`.
**Desktop (≥860px, per `mobileBreakpoint`):** horizontal nav, hover-opens dropdown flyouts (150ms close-delay to survive the mouse gap), CTA renders as a real button.
**Tablet/Mobile (<860px):** nav collapses; the CTA button **slot** becomes the hamburger toggle (not a second control); opening it reveals an accordion panel where dropdown parents expand in place; the real CTA re-appears full-width at the bottom of the open panel.
**Spacing:** 76px fixed header height; `--space-8` gap between nav items; `--container-padding` horizontal.
**Interaction:** sticky (`position: sticky; top: 0`) with a hairline bottom border; no shadow-on-scroll effect implemented (flag if wanted).

## Navigation (dropdown/mobile behavior)
Covered under NavBar above — there is no separate standalone "Navigation" component; header and nav are one unit by design (they share state — the mobile toggle IS the header's CTA slot).

## Mobile navigation
See NavBar "Tablet/Mobile" behavior above. Key structural point for Etch: this is **not** a separate template/partial — it's the same `NavBar` component rendering a different internal state via a `ResizeObserver` on its own container width (not `window` width), so it behaves correctly nested inside cards or narrower contexts too.

## Buttons (Button)
**File:** `components/core/Button.jsx` · **Semantic HTML:** `<button>`, or `<a>` when `as="a"` + `href` (polymorphic).
**Variants:** `primary` (green fill), `accent` (orange fill), `outline` (bordered, tinted hover), `ghost` (text-only), `inverse` (white-on-dark, for hero/photo contexts).
**Sizes:** `sm` / `md` / `lg`. **States:** default / hover (`-hover` token, one shade darker) / active-press (`-active` token + 1px translateY) / disabled (neutral-100 bg, disabled cursor) / focus-visible (brand focus ring, see Interaction Spec).
**Content limits:** label should be a short verb phrase ("Request Quote," not a sentence); icon optional, `left` or `right` position.
**Accessibility:** native `<button>`/`<a>` semantics preserved; `aria-disabled` set alongside the native `disabled` attribute; focus ring via `:focus-visible` equivalent (inline `onFocus` isn't used — real browser focus styling applies).
**Responsive:** no size changes across breakpoints by default; `fullWidth` prop is how call sites go full-bleed on mobile (used in NavBar's mobile CTA and ContactPage's submit button).

## Section introductions (SectionHeading)
**File:** `components/core/SectionHeading.jsx` · **Semantic HTML:** eyebrow `<div>`, `<h2>`, subhead `<p>`.
**Props:** `eyebrow`, `heading`, `subhead`, `align` (`left`/`center`), `onDark`, `size` (`sm`/`lg`/`xl`).
**Content limits:** eyebrow is a short label (2–4 words); heading is one sentence, no terminal period; subhead is one supporting sentence.
**Responsive:** `align="center"` also caps max-width (640px) so centered headings don't stretch full-bleed on wide desktop viewports — no explicit mobile override needed since it's already fluid.

## Heroes (Hero)
**File:** `components/marketing/Hero.jsx` · **Semantic HTML:** `<section>` with an absolutely-positioned scrim `<div>` over a CSS background-image.
**Props:** `eyebrow`, `heading`, `subhead`, `primaryCta`, `secondaryCta`, `infoItems[]`, `imageUrl`.
**Image behavior:** `background: center / cover no-repeat` — always crops to fill, never letterboxes; falls back to a solid dark-green field (`--color-green-900`) if `imageUrl` is omitted (never a generated/invented photo). Recommended source aspect ratio: `--aspect-hero` (21:9) at minimum 1920px wide.
**Scrim:** flat `--surface-overlay-scrim` (55%-opacity ink), not a gradient — full-bleed, not a bottom-anchored fade.
**Responsive:** content max-width 640px, so on very wide desktop the text column stays readable rather than stretching; on mobile the image `background-size: cover` recrops (may crop hero image subjects tighter — pick source photos with a centered focal subject).

## Service cards (ServiceCard)
**File:** `components/cards/ServiceCard.jsx` · **Semantic HTML:** plain `<div>` (no card chrome) containing icon well `<div>`, `<h3>`, `<p>`, `<a>`.
**Deliberately lighter weight than ProgramCard** (no border/shadow) — used in a 5-up grid for the Lawn Services set. **Content limits:** title = 1–3 words, description = one sentence (~90 characters max to avoid wrapping past 2 lines at grid width).
**Responsive:** grid column count is the call site's responsibility (5-up desktop → typically 2-up tablet → 1-up mobile; not yet built as a live breakpoint in the reference kit — see Responsive Spec §Grid changes for the recommended stepping).

## Program cards (ProgramCard)
**File:** `components/cards/ProgramCard.jsx` · **Semantic HTML:** `<a>` wrapping icon well, eyebrow `<div>`, `<h3>`, `<p>`, CTA `<span>`.
**Heavier weight than ServiceCard** — bordered, shadowed, lifts (`translateY(-3px)` + shadow increase) on hover, since programs are the primary product (the visual hero of the Lawn Care section). **States:** default / hover (lift + shadow-md + arrow nudges right 3px).
**Content limits:** title = 1–2 words, description = one sentence.
**Responsive:** 3-up desktop grid (3 real programs) → recommend 1-up below tablet (see Responsive Spec).

## Review cards (ReviewCard)
**File:** `components/cards/ReviewCard.jsx` · **Semantic HTML:** bordered `<div>`, star row, quoted `<p>`, footer `<div>` with author + source/date.
**Props:** `authorName`, `rating` (0–5), `text`, `source`, `date`. **Content limits:** review text should be 1–3 sentences (card has no line-clamp/truncation built in — very long reviews will grow the card taller than its grid siblings; either add a line-clamp or curate review length before publishing).
**Status: no real review content exists in source** — every instance in the reference kit is explicitly labeled placeholder (see `handoff/README.md`).

## Trust-point cards (TrustPointCard)
**File:** `components/cards/TrustPointCard.jsx` · **Semantic HTML:** plain `<div>`, no card chrome, icon circle + title `<div>` + optional description `<p>`.
**Props:** `icon`, `title`, `description`, `align` (`left`/`center`). Used in short rows (typically 3-up) under a hero or above a footer, for scannable trust claims. **Content limits:** title should be a single short claim (~6 words); only publish real, approved claims — never invented stats/awards (see root `readme.md` Content Fundamentals).

## Location cards (LocationCard)
**File:** `components/cards/LocationCard.jsx` · **Semantic HTML:** sunken `<div>`, icon + `<h3>` + optional "Primary" `<Badge>`, description `<p>`, address `<span>`, click-to-call `<a href="tel:">`.
**Restriction: only for the two real branches (Hoschton, Atlanta).** Do not use for service-area cities — see root `readme.md` "service area vs. branch" distinction. This is enforced by convention, not code — flag any use of `LocationCard` outside the two branch pages in review.

## Accordions (Accordion)
**File:** `components/core/Accordion.jsx` · **Semantic HTML:** real `<button aria-expanded aria-controls>` per row, controlling a `role="region" aria-labelledby` panel; grid-rows transition for open/close (not `height: auto`, which can't animate).
**Props:** `items[]` (`{question, answer}`), `allowMultiple` (default false — accordion-style single-open), `defaultOpenIndex`.
**States:** closed / open (chevron rotates 180°) . **Accessibility:** fully keyboard-operable via native button focus + Enter/Space; screen readers get the `aria-expanded` state change automatically.
**Content limits:** answer text should stay short (1–3 sentences) — no internal scroll is implemented for very long answers.

## Forms (FormField, Input, Select, Textarea, Checkbox)
**Files:** `components/forms/*.jsx` · **Semantic HTML:** real `<label for>` + `<input>`/`<select>`/`<textarea>`, `FormField` wraps label + control + hint/error line.
**States (Input/Select/Textarea):** default (neutral border) / focus (brand-green border + focus-ring shadow) / error (`error` prop → red border; pair with `FormField error="…"` for the message).
**Checkbox:** native `<input type="checkbox">` styled via `accent-color` (no custom SVG checkmark to maintain) — inherits OS/browser checkbox behavior including keyboard space-toggle for free.
**Content limits:** `FormField` label should be 1–4 words; `hint`/`error` text one short line.
**Responsive:** `ContactPage` lays these out in a 2-column grid on desktop that the Responsive Spec calls to stack 1-column at tablet/mobile.

## Alerts (Alert)
**File:** `components/feedback/Alert.jsx` · **Semantic HTML:** `role="alert"` for `error` variant, `role="status"` for others (screen readers announce status changes appropriately without stealing focus).
**Variants:** `info` / `success` / `warning` / `error` — each maps to the semantic status token pair, never brand green/orange (an orange Alert would misread as a brand accent, not a warning — see Design System Spec §2).
**Props:** `title`, children (body), `icon` (default true), `onDismiss` (renders an × button when present; omit for non-dismissible).

## Breadcrumbs (Breadcrumbs)
**File:** `components/core/Breadcrumbs.jsx` · **Semantic HTML:** `<nav aria-label="Breadcrumb"><ol><li>` per W3C pattern; chevron-right separators; last item is `aria-current="page"`, not a link.
**Used at the top of every nested page** (program/service/child-service/branch/blog-single detail pages) per the reference kit — the homepage, hub pages, and top-level nav destinations don't need them.

## Calls to action (CTABanner)
**File:** `components/marketing/CTABanner.jsx` · **Semantic HTML:** centered `<section>` with SectionHeading + a single CTA button.
**Variants:** `inverse` (ink bg, default — used at the end of nearly every page in the kit), `brand` (full green), `light` (sunken neutral — only when immediately following another dark section, to avoid two ink bands touching).
**Content limits:** one CTA only — this is a closing/single-decision moment, not a multi-option nav point.

## Footer
**File:** `components/navigation/Footer.jsx` · **Semantic HTML:** `<footer>` with a 3-column grid (logo/description, program links `<nav>`, contact block), plus a copyright bar.
**Props:** `logo`, `programLinks[]`, `phone`, `email`, `address`. Renders `tel:`/`mailto:` links automatically from the raw phone/email strings.
**Note:** the reference kit adds a secondary utility-link row (Reviews/Blog/Careers/Referral/Privacy) **below** the Footer component itself in `App.jsx`, rather than inside `Footer.jsx` — kept separate so the reusable `Footer` primitive's contract doesn't grow business-specific links. See `template-inventory.md`.
**Responsive:** 3-column grid is not yet given an explicit mobile stack rule in the built CSS — see Responsive Spec §Navigation changes for the recommended single-column mobile behavior.
