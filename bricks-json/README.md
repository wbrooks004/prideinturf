# Pride In Turf — Bricks templates

Paste-ready Bricks **template exports**. Import via **Bricks → Templates → Import** (one file at a time, or zip both).

| File | Type | Condition |
|---|---|---|
| `header-main.json` | `header` | Entire website |
| `footer-main.json` | `footer` | Entire website |

Both are set to `templateConditions: [{ "main": "any" }]`, so they apply site-wide the moment they import. Import regenerates element IDs and merges global classes by name, so re-importing won't duplicate classes.

## Built against the live site

Every token and utility class used here was verified against
`/wp-content/uploads/automatic-css/automatic.css` — **ACSS 4.0.0-alpha-6**, generated 2026-08-07.
No invented variables: 12 ACSS vars in the header, 14 in the footer, all resolve.

Styling comes from ACSS tokens (`--primary`, `--accent`, `--base-*`, `--neutral-*`, `--text-*`,
`--space-*`, `--section-space-m`, `--grid-gap`, `--radius`) rather than hardcoded values, per the
"tokens first" rule in `pride_in_turf-website-rules.txt`.

Buttons use ACSS classes via `_cssClasses` (not `_cssGlobalClasses`) so they attach the real ACSS
classes instead of creating duplicate global classes with the same names. ACSS 4 styles buttons via
`[class*="btn--"]`, and `automatic.css` loads after Bricks' stylesheet, so these win on specificity.

## Color mapping — confirm this is what you want

Your rules doc calls the main conversion CTA "primary (orange)" and the secondary "green". In ACSS
those map the other way around:

| Rules doc | ACSS token | Class used here | Applied to |
|---|---|---|---|
| Primary CTA (orange) | `--accent` | `.btn--accent` | **Get a Quote** |
| Secondary (green) | `--primary` | `.btn--primary` | **Call Now** |

If you'd rather Get a Quote be green, swap those two class names on `pthqte` / `pthcal`. It's a
one-word change in each — nothing else depends on it.

## CTA stack

Follows the locked stack exactly — no invented CTAs:

- **Get a Quote** → `/contact/` (primary conversion, orange)
- **Call Now** → `tel:+18333888873` (immediate contact, green)
- **Customer Portal** → `https://www.lawngateway.com/PrideInTurf` (existing-customer utility, text link)

The portal URL is the one the previous site used ("Client Portal"). The current homepage has a
`tel:` link with **no number in it** — that's fixed here.

On tablet and below, Customer Portal and Call Now hide from the header bar and reappear inside the
mobile menu, so Get a Quote stays the only visible CTA on small screens.

## Location model

Per the restructure rule, only **Atlanta** and **Hoschton** get NAP blocks in the footer. **Duluth
appears as a service-area link only** — no address, no phone, so it isn't treated as a branch entity.

## Before this looks right

1. **Purge Varnish on Cloudways.** The staging homepage is still serving a ~19h-old cached copy of
   the *pre-import* site. Nothing you change is visible until that's cleared.
2. **Replace the logo.** Both templates use the `logo` element with `logoText: "Pride In Turf"` as a
   placeholder. The old logo URL (`prideinturf.com/.../PT-Logo.png`) is dead — it returns an HTML
   page, not an image — so nothing is referenced. Set the real logo on `pthlgo` (header) and
   `ptflgo` (footer).
3. **Decide the content width.** Bricks' container is at its stock **1100px** (the site has no Bricks
   theme-style override — `style-manager.min.css` is empty), while ACSS `--content-width` is
   **85.375rem / 1366px**. These templates use Bricks `container`, so they align with the current
   homepage. To move everything to the ACSS width, set the Bricks container width to
   `var(--content-width)` in *Bricks → Settings → General* — these templates then follow automatically,
   no edits needed.

## Links

All internal links are **relative** (`/contact/`, `/lawn-services/aeration/`), so the templates move
from staging to production without a search-replace. Service and program URLs were read from the live
REST API, including the nested structure (`/lawn-services/lawn-pest-control/mosquito-control/`).
