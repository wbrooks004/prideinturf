# Pride In Turf — Responsive Specification

Reference breakpoints: **390px mobile / 834px tablet / 1440px desktop** (`--breakpoint-mobile/tablet/desktop` in `tokens/layout.css`). NavBar has its own independent collapse point at **860px** (`--breakpoint-nav-collapse`) — slightly above the tablet reference width, so the header is already in mobile mode at 834px tablet.

**Caveat up front:** the reference UI kit (`ui_kits/marketing-site/`) was built and verified primarily at desktop width; it uses fluid/flexible layout (flex-wrap, clamp() container padding, CSS grid) that degrades reasonably at narrower widths, but explicit tablet/mobile breakpoint rules for grid column counts below are the **recommended target for Etch implementation**, not literal shipped `@media` rules in every component today. Screens at all three widths were captured for the built templates — see `handoff/screenshots/` — review those against this spec before treating any single width as fully finished.

## Containers
- `--container-max` (1200px) and `--container-narrow` (760px) do not change across breakpoints — they're already max-widths with `margin: 0 auto`, so they simply become "100% of viewport minus padding" once viewport drops below them.
- `--container-padding: clamp(20px, 5vw, 64px)` already scales horizontal page padding fluidly — no discrete breakpoint override needed for it.

## Grid changes (recommended Etch target)
| Component | Desktop (≥1440) | Tablet (834) | Mobile (390) |
|---|---|---|---|
| ProgramCard grid (3 programs) | 3 columns | 3 columns (tight but fits — verify against real copy length) or 1 column if any description wraps awkwardly | 1 column |
| ServiceCard grid (5 services) | 5 columns | 2–3 columns | 1 column |
| ReviewCard grid | 3 columns | 2 columns | 1 column |
| TrustPointCard row | 3 columns | 3 columns (shrinks) or 1 column if `align="center"` icons crowd | 1 column, centered |
| Footer 3-column grid | 3 columns | 2 columns (contact wraps to its own row) | 1 column, stacked logo → programs → contact |
| ContactPage form grid | 2 columns | 2 columns (fields still fit) | 1 column |
| BranchPage 2-column (intro / LocationCard) | 2 columns side-by-side | 1 column, LocationCard below intro | 1 column |

## Content stacking order
Every two-column layout in the kit (BranchPage intro+card, ContactPage form+sidebar, AboutPage location cards) stacks **primary content first, supporting/contact info second** when collapsing to one column — never the reverse, so the reader always hits the substantive content before the address/hours block.

## Navigation changes
- **≥860px (`--breakpoint-nav-collapse`):** full horizontal nav, hover-opens dropdowns, real CTA button.
- **<860px:** nav links hide; the CTA button slot is replaced by a hamburger toggle; tapping it opens a full-width accordion panel (dropdown parents expand in place via tap, not hover) with the real CTA reappearing full-width at the bottom of the panel. See `component-specs.md` → NavBar and `interaction-spec.md` → Mobile navigation.
- This means at the 834px tablet reference width, the site is **already** in mobile-nav mode (834 < 860) — confirm this is intentional; if Etch's tablet breakpoint should get the full desktop nav instead, raise `mobileBreakpoint` on `NavBar` to e.g. 900 or 1024.

## Image cropping
- Hero: `background-size: cover` — always fills, always crops, never letterboxes. Source at `--aspect-hero` (21:9) or wider; narrower source images will crop top/bottom more aggressively at ultra-wide desktop viewports.
- Blog thumbnails: `--aspect-blog-thumbnail` (16:10) in the archive grid, `--aspect-blog-hero` (16:9) on the single-post template — these are two different crops of what may be the same source image; export/crop both from WordPress's image editor rather than relying on a single auto-crop.
- Cards generally: no product photography is used inside ProgramCard/ServiceCard today (icon-well only) — if photography is added later, target `--aspect-card` (4:3).

## Typography changes
- No component currently swaps `--text-*` values at a breakpoint — the fixed rem scale is deliberately breakpoint-agnostic (see Design System Spec §1). The one exception worth planning for in Etch: `Hero`'s heading (rendered at `size="xl"` → `--text-4xl`, 48px) may want to step down to `--text-3xl` (38px) below tablet to avoid awkward line breaks in a narrow hero column — not yet implemented, flagged as a build-time decision.
- If adopting the optional `fluidType` clamp() values (`design-tokens.json` → `typography.fluidType`), they replace the need for a manual breakpoint swap on hero/H1/H2 specifically.

## Spacing changes
- Section vertical padding steps down via `--section-padding-y-sm` (56px) vs. the default `--section-padding-y` (96px) — apply the `-sm` value at tablet and below.
- Horizontal container padding is already fluid (see Containers above) — no manual step needed.

## Button behavior
- No size changes across breakpoints by default. `fullWidth` is the explicit mechanism for going full-bleed (used in NavBar's mobile CTA slot and ContactPage's submit button) — apply it deliberately per button, don't globally force all buttons full-width on mobile.

## Card orientation
- ProgramCard / ServiceCard / ReviewCard: always vertical (icon/content stacked top-to-bottom) at every breakpoint — no horizontal/list-row variant exists. If a horizontal list-row treatment is wanted for a dense mobile view, that's a new variant to design, not a responsive behavior of the existing card.
- LocationCard: vertical only.

## Slider behavior
**No slider/carousel component exists anywhere in this system.** Reviews and any other repeating card set are always a static CSS grid that reflows to fewer columns — not a swipeable carousel. If Etch implementation wants a touch-swipeable review slider on mobile specifically, that is new scope, not a responsive variant of `ReviewCard`'s grid — flag it as an open decision (see `handoff/README.md` → Unresolved decisions).

## Elements that hide, move, or reorder
- **Hides below 860px:** horizontal nav links (replaced by hamburger + accordion panel).
- **Moves:** NavBar's CTA button visually relocates from the header's right edge to full-width at the bottom of the mobile panel.
- **Reorders:** none identified — no component reorders its children at different breakpoints today (columns collapse in place rather than reflowing to a different sequence).
