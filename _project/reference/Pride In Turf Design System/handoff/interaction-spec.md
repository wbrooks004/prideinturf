# Pride In Turf — Interaction Specification

## Hover
- **Buttons:** background steps to the variant's `-hover` token (one shade darker on its own ramp); `outline` variant fills with a light brand tint instead of darkening a border.
- **Links (body text):** color darkens (`--text-link` → `--text-link-hover`) + underline appears (underline is hover-only, not default-on).
- **NavBar top-level items:** no color change on hover for plain links; items with children open their dropdown flyout on hover (150ms close-delay when the pointer leaves, to survive the visual gap between the trigger and the flyout below it).
- **ProgramCard:** lifts (`translateY(-3px)`) + shadow increases from `--shadow-sm` to `--shadow-md` + the trailing arrow icon nudges 3px right.
- **ServiceCard:** no card-level hover (no chrome to hover) — only its internal text link underlines/darkens per the standard link rule.
- **BlogArchive card:** whole card is a link; no explicit hover treatment implemented beyond the inherited link-color behavior on its title — flag if a hover lift (matching ProgramCard) is wanted here too for consistency.

## Keyboard focus
- All interactive elements use real semantic tags (`<button>`, `<a>`, `<input>`) — never a `<div onClick>` — so native keyboard reachability (Tab order) is free.
- Focus-visible styling is global (`base.css`): `box-shadow: var(--shadow-focus)` (a soft brand-green ring) + `border-radius: var(--radius-sm)`, applied via the `:focus-visible` pseudo-class so it only shows for keyboard focus, not mouse clicks.
- `Accordion` rows and `NavBar`'s dropdown/mobile toggles are real `<button aria-expanded>` — Enter/Space toggles them exactly as click does.

## Active (press)
- Buttons: background steps one shade further to the `-active` token + `translateY(1px)` (a subtle press-down, not a scale/shrink bounce — matches the brand's measured motion language).
- No other component defines a distinct "active/press" visual beyond Button.

## Disabled
- Button only: `disabled` prop sets `--color-neutral-100` background, `--text-disabled` text color, `cursor: not-allowed`, and mirrors the native `disabled` attribute with `aria-disabled` for assistive tech. No other component currently defines a disabled state (form Input/Select/Textarea accept a native `disabled` prop pass-through but have no custom disabled visual treatment beyond the browser default — flag if a designed disabled state is wanted for forms).

## Open / closed
- **NavBar dropdown (desktop):** closed by default; opens on hover; chevron rotates 180° when open.
- **NavBar mobile panel:** closed by default (`defaultMobileOpen` prop exists for demos); toggling the hamburger flips `open` state; a parent item with children becomes its own nested open/closed accordion row inside the panel.
- **Accordion:** each row independently open/closed; `allowMultiple` (default false) determines whether opening one row closes any other open row. Uses a CSS grid-rows `0fr → 1fr` transition (animatable, unlike `height: auto`).

## Loading
**No loading/skeleton state exists anywhere in this system.** The `ContactPage` form's submit has no in-flight/spinner state today — it goes directly from the form to a confirmation panel on submit (see Validation/Success below). If Etch's real form submission is asynchronous (likely, posting to WP/ACF or a CRM), a loading state on the submit button is new scope to design — flag as an open decision.

## Validation
- No client-side field-level validation is implemented in the reference `ContactPage` beyond native HTML `required`/`type="email"`/`type="tel"` browser validation. Real validation messaging should use `FormField`'s `error` prop (renders red text under a field) paired with `Input`/`Select`/`Textarea`'s `error` boolean (red border) — the visual language exists; the actual validation logic does not.

## Error
- Field-level: see Validation above (`FormField error="…"` + `error` prop on the control).
- Page/section-level: `Alert` component, `variant="error"`, `role="alert"` (assertive announcement) — use for submission failures, not individual field errors.

## Success
- `ContactPage`: on submit, the entire form is replaced by a confirmation panel (checkmark icon in a filled brand-green circle, "Thanks — we'll be in touch" heading, a "Submit another request" button that returns to the empty form). This is a full swap, not an inline banner.
- `Alert` `variant="success"` is available for a lighter-weight inline confirmation elsewhere (e.g., a newsletter signup) if a full-panel swap isn't appropriate for that context.

## Sticky header
`NavBar` is `position: sticky; top: 0; z-index: var(--z-sticky-header)` (40) — stays pinned through scroll on every page. No shrink-on-scroll or shadow-on-scroll effect is implemented (flag if wanted — currently the only visual separator from page content is a static 1px bottom border).

## Dropdown navigation
Desktop-only interaction (≥860px). Hover-triggered (not click-triggered) with a 150ms close-delay timer so moving the mouse diagonally from the nav item down into the flyout doesn't prematurely close it. Flyout is absolutely positioned, centered under its trigger, `z-index: var(--z-dropdown-menu)` (50), with `--shadow-lg` and a hairline border — the only "floating over content" UI in the whole system.

## Mobile navigation
See NavBar Open/Closed above. Additional detail: each top-level item with children gets its own chevron-toggle button independent of the panel's own open/close state — a user can open the panel, expand "Lawn Services," collapse it again, and expand "Lawn Care" instead, all without closing the outer panel.

## Accordion behavior
See Open/Closed above. Additional detail: the expand/collapse transition animates `grid-template-rows` (`0fr` ↔ `1fr`) rather than `max-height` or `height: auto`, which is the standard technique for animating to an intrinsic (unknown) content height in CSS.

## Slider behavior
**Not applicable — no slider/carousel exists in this system.** See `responsive-spec.md` → Slider behavior for what to do if Etch implementation wants one.
