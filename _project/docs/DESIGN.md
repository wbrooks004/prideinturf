# Design

<!-- impeccable:design-schema 1 -->

Recorded from the built homepage comp (`design-comps/homepage.html`, seed `5171a948`). The visual world is the **established Pride In Turf brand** (brand book + `design-tokens.json`), not an invention. This file documents how that world is expressed on the web build; the ACSS install remains the production token authority.

## World

Premium, measured Metro-Atlanta turf care. Confident but not loud: white/neutral grounds, turf green and signal orange used as **fills and structure**, generous rhythm, one authored interaction. Motif: mowing stripes and the seasonal application calendar. Anti-reference: the icon-card services grid as a page spine, gradient-text, playful/bouncy motion.

## Color

Pinned brand (brand book): green `#76bc43`, orange `#f69622`, ink `#231f20`, white. OKLCH ramps synthesized around them (see `design-tokens.json`).

**Contrast law (must hold in the Bricks build):**
- Raw `--green-500` / `--orange-500` FAIL WCAG AA as text on white. Use them only for fills, icons, and large/bold UI.
- Body/link text in green uses **green-700**; text in orange uses **orange-700**.
- Buttons: orange-500 fill with dark-ink label (primary), green-500 fill with dark-ink label (secondary) — both AA at button size.
- On dark surfaces, secondary text is tinted white (`oklch(100% 0 0 / .72)`), never gray.

Roles: page `--n-50`, card white, sunken `--n-100`, inverse `--n-900`. Surfaces: `.surface-hero`, `.surface-proof` (dark), `.surface-subtle-grid` (process/explainer), `.surface-dark-cta` (final CTA).

## Typography

**Kanit** for everything (display + body); weight 900 is **logo/wordmark only**. Weights 400/500/600/700. Hero H1 `clamp(2.5rem,1.5rem+4vw,4.5rem)`; H2 `clamp(1.875rem,1.4rem+2vw,3rem)`; H3 1.5rem; base 1.0625rem. Tracking tight on display (-.02 to -.03em), floor -.04em. One H1 per page (hero); H2 sections; H3 card titles. Body measure 65–75ch; hero copy 45–55ch.

## Space, radius, depth, motion

4px spacing base; section rhythm `clamp(64px,9vw,120px)`; content max 1200px, narrow 760px. Radius sm 6 / md 10 / lg 16 / xl 24 / full. Shadows carry offset + blur: M default card, L featured/CTA, XL rare. Motion is measured (durations 140/220/360ms, ease-out; no bounce, no infinite loops); one authored moment (the before/after reveal) plus subtle scroll reveals; `prefers-reduced-motion` fully honored.

## Components

- **Buttons:** `.btn--primary` orange (main conversion: Get a Quote), `.btn--secondary` green (View Services / Learn More), `.btn--ghost` outline. Site CTA stack is fixed: Get a Quote / Call Now / Customer Portal.
- **Cards** (BEM `__media/__body/__title/__text/__actions`): `.service-card` (standard, shadow M/2), `.program-card` (featured, shadow L, real app-counts, `--featured` variant). Title link is the primary target; whole card reads clickable via hover lift + focus.
- **Before/after slider** (`.ba`): the page's signature interaction — draggable/keyboard range revealing struggling→healthy turf.
- **Season calendar** diagram; **branch/service-area** list encoding the location model (Atlanta/Hoschton branch, Duluth service-area).

## ACSS / Bricks port

The comp uses CSS custom properties that map 1:1 to ACSS variables and the project's named classes — see `design-comps/README.md` for the mapping table, the placeholder/replacement-asset list, and porting notes. In production these become ACSS tokens + utilities and BEM custom classes; no hardcoded design values, no inline styles.

## Accessibility

Semantic landmarks (header/nav/main/section/article/footer), visible focus ring (green), keyboard-operable slider and nav, adequate tap targets, no gray-on-color text. Verify responsive at 375 / 768 / 1280 / 1920.
