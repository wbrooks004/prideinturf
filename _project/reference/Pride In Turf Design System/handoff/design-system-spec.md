# Pride In Turf — Design System Specification

Companion to `design-tokens.json` / `tokens.css`. Explains *why* each token category exists, where it's allowed, where it's forbidden, and the contrast/responsive rules that govern it. Written for whoever implements this in Etch WP — not a general design-theory document.

## 1. Token purpose & allowed usage

**Color.** Two token layers: raw ramps (`--color-green-500`, `--color-neutral-200`, …) and semantic aliases (`--brand-primary`, `--text-secondary`, `--surface-card`, …). **Always build components against semantic aliases, never raw ramp steps.** The alias layer is what lets a future rebrand (or dark-mode variant) move without touching every component. The only place raw ramp values are acceptable directly is inside `tokens/colors.css` itself, defining the aliases.

- Brand green (`--brand-primary` / `--color-green-500`) = primary actions, active nav states, primary icon accents.
- Brand orange (`--brand-accent` / `--color-orange-500`) = secondary emphasis only — secondary CTAs, a subset of service icons, badges. **Never let orange compete with green as if they were equal-weight primaries** — green is the brand's dominant hue per the brand book; orange is a highlight.
- Neutral ramp = all text, borders, and surfaces. Warm-gray (not cool-gray), derived from the brand ink.
- Semantic status colors (success/warning/error/info) are **only** for functional feedback (`Alert`, form validation) — never repurpose brand green as a "success" color in a context where it could be misread as a brand action, and never reach for `--color-error-500` decoratively.

**Typography.** One family (Kanit) for everything digital. `--weight-black` (900) is fenced off with an explicit restriction (logo wordmark only) — if you see Kanit Black anywhere in a heading or button, that's a bug, not a variant. Fixed-rem `--text-*` scale is the implemented standard; `fluidType` values in the JSON are optional guidance, not yet built into any shipped screen.

**Spacing.** 4px base unit. Section-level rhythm (`--section-padding-y`, `--space-16` through `--space-32`) is deliberately generous — this is a photography-forward marketing site, not a dense app UI. Don't tighten section padding to fit more content; trim content instead.

**Effects (radius/shadow/motion).** Soft and restrained by design — see `tokens/effects.css` header comment: the print brand has zero shadow at all (hard-edged, flat), so the digital shadow system is a deliberate digital-only extension, not derived from source material. Keep it that way: no heavy neumorphism, no colored shadows, no drop-shadows on text.

**Layout (breakpoints/grid/z-index/aspect ratios).** New for this handoff — see `tokens/layout.css`. Breakpoints are reference numbers only (CSS custom properties don't work inside `@media`); hard-code the literal pixel values in Etch and keep them in sync with this file by hand if they ever change.

## 2. Prohibited usage

- No gradients, anywhere — not on buttons, not on section backgrounds, not "just a subtle one" behind a hero. Zero exceptions found in source material.
- No glassmorphism / `backdrop-filter` blur chrome. The only transparency usage in the whole system is the hero photo scrim and `--text-on-dark-secondary`.
- No colored-left-border "accent bar" cards.
- No bounce/spring motion curves; no infinite decorative animation loops on static content.
- No raw hex/oklch values inline in component code — always the CSS custom property.
- No emoji, anywhere, including as bullet/list markers (matches the copy voice — see `readme.md` Content Fundamentals).
- Don't invent icons outside the 31 curated glyphs in `components/core/Icon.jsx` — if a new concept needs an icon, add it to that curated set deliberately (flag it), don't reach for an arbitrary Lucide name that isn't vendored.

## 3. Surface combinations

| Surface | Allowed text colors | Notes |
|---|---|---|
| `--surface-page` / `--surface-card` (white/near-white) | `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-link` | Default combination, most of the site |
| `--surface-sunken` (light gray) | Same as above | Used for subtle section separation, never as the dominant background |
| `--surface-inverse` (ink, `#231f20`) | `--text-on-dark`, `--text-on-dark-secondary` only | Footer, occasional CTA bands. Never place `--text-primary` (near-black) on this — invisible. |
| Hero photo + `--surface-overlay-scrim` | `--text-on-dark` / `--text-on-dark-secondary` | Scrim is flat ink at 55% opacity, not a gradient — legibility comes from opacity, not a vignette |
| `--brand-primary` / `--brand-accent` fill (buttons) | `--text-on-brand` (white) only | Never brand-color text on brand-color fill |
| `--brand-primary-tint` / `--brand-accent-tint` (light tint chips/badges) | The matching `-active` color (`--brand-primary-active` / `--brand-accent-active`) | This is the "tinted badge" pattern used everywhere (Badge, ProgramCard icon well, Alert backgrounds) |

## 4. Contrast requirements

- Body text on `--surface-page`/`--surface-card`: `--text-primary` and `--text-secondary` both pass AA at body sizes; `--text-tertiary` is AA-large only — don't use it for anything below `--text-sm`/paragraph body copy.
- **Never set text directly in raw brand green or orange** — both fail AA at normal text sizes on white (see `design-tokens.json` → `color.contrastNotes`). Use `--text-link` (green-700) and `--brand-accent-active` (orange-700) instead.
- White text on `--brand-primary` fill passes AA for bold/large UI text (buttons, badges) — do not use it for paragraph-length copy.
- `--text-on-dark-secondary` (72%-opacity white) is for secondary/supporting text on dark surfaces only — primary headings on dark surfaces always use full-opacity `--text-on-dark`.

## 5. Responsive behavior (token-level)

See `handoff/responsive-spec.md` for the full breakdown. Token-level summary:
- `--container-padding` is a `clamp()` — it already scales fluidly with viewport width, so most horizontal spacing needs no separate mobile override.
- `--space-*` values do **not** shrink at smaller breakpoints by default — section padding-Y is explicitly reduced via `--section-padding-y-sm` at tablet/mobile rather than scaling every space token down.
- `--grid-columns-*` (12/8/4) is documentation of intended column count per breakpoint for Etch's grid settings — nothing in the built components uses a literal 12-column CSS grid today (components use flexible `repeat(auto-fit, …)`-style patterns or explicit small column counts per breakpoint, documented per-component in `component-specs.md`).
