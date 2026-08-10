# Homepage comp — handoff to Bricks + ACSS

`homepage.html` is a **static design comp** for the Pride In Turf homepage (seed `5171a948`, before/after results-led structure). It is a reference for the Bricks build, not production markup. Open it directly in a browser.

## How it maps to the governed stack

The comp uses plain CSS custom properties so the visual truth is unambiguous. In Bricks/ACSS, **do not port these variables literally** — replace them with the installed ACSS tokens/utilities and semantic BEM classes, per the governance master. No hardcoded design values, no inline styles, classes only.

| Comp variable / class | Production (ACSS / project) |
|---|---|
| `--green-500` `#76bc43` | `--primary` (fills/large only) |
| `--green-700` (text green) | ACSS shade for text — `--primary-hover` / a text-safe green token |
| `--orange-500` `#f69622` | `--secondary` / `--accent` (fills/icons only) |
| `--orange-700` (text orange) | text-safe accent shade |
| `--n-900` `#231f20` | `--base` / text-primary |
| `--t-*`, `--s*`, `--r-*`, `--sh-*` | ACSS `--text-*`, `--space-*`, `--radius-*`, shadow slots (M/L/XL) |
| `--content` 1200 / `--content-narrow` 760 | `--content-width` / narrow content token |
| `.surface-hero/.surface-proof/.surface-subtle-grid/.surface-dark-cta` | the project's named surface classes (already defined in `pride_in_turf-website-rules.txt`) |
| `.service-card__*`, `.program-card__*` | same BEM names — build as Bricks classes, not element IDs |

Confirm every ACSS utility/token exists in the install before use; if a needed token is missing, request it — don't invent a value (governance rule).

## Structure (matches the pinned homepage order)

Hero → Trust/proof strip → Core services → Differentiators (a program, not a mow) → Programs → Results (before/after) → Service-area & branch credibility → Final CTA. Content is dynamic in production: Services, Programs, Reviews, Updates come from their CPTs via Bricks query loops + ACF dynamic data; conditions hide empty ACF instead of leaving empty wrappers.

## Placeholders to replace with REAL assets before anything ships

Everything below is authored/synthetic and clearly marked in the comp:

- **Imagery** — hero panel and the before/after slider use authored SVG turf. Replace with real property photos (a genuine before/after pair for the Results slider; hero = a real Pride In Turf lawn).
- **NAP** — footer address and phone are `[NAP placeholder]` / `(000) 000-0000`. Use the real branch NAP. Branch schema/NAP for **Atlanta and Hoschton only**; Duluth stays service-area (no branch schema/NAP).
- **Rating** — the "4.9 / 5 Google reviews" strip is a placeholder; pull the real rating/count or remove.
- **Testimonial** — the Results quote ("R. Jameson") is a placeholder; use real entries from the Reviews CPT.
- **Claims** — "Licensed applicators", "Licensed & insured" microcopy: verify before publishing; drop if not substantiable. No pricing is shown (quote-driven, per the CTA stack).
- **Services/Programs** shown are from the approved coding sheet (L8/CLC/SLC/LS; Aeration, Fungicide, Lawn Pest Control, Tree & Shrub). Publish only what's on the approved sheet.

## Known finish notes

- Verified: heading hierarchy (one H1), semantics, labels, detector clean except the intentional `.surface-subtle-grid` (a named project surface).
- **Not run this session:** the desktop/mobile screenshot round + shipped finish-reviewer — the Browser pane wasn't displayed, so frame capture wasn't possible. Re-run the visual round (375/768/1280/1920) when the comp is viewable, per the governance testing checklist, before porting.
