# Single Templates — Lawn Service & Lawn Care Program

Two Bricks **template exports**, in `_project/exports/imports/`. Import via
**Bricks → Templates → Import** (one file at a time, or both in a zip).

> These live under `_project/` deliberately. The repo's `.gitignore` ignores everything at root
> (`/*`) and whitelists `/_project/` and `/themes/bricks-child/` — anything dropped in `bricks-json/`
> is untracked unless force-added, which is how the header and footer exports got there.

| File | Type | Applies to |
|---|---|---|
| `single-lawn-service.json` | `single` | Post type `lawn-services` |
| `single-lawn-care-program.json` | `single` | Post type `lawn-care-programs` |

Both carry the **same 26 global classes with the same ids and names**, so importing the second one
after the first merges rather than duplicating. Import order doesn't matter.

Built against the ACF field names verified in `_project/exports/acf-export-2026-08-11.json`. Every
`{acf_*}` tag and every loop source in both files was checked against that export — **107 tags, zero
unverified**. Field-name variances from the original spec (`desired_outcome`, `public_display_name`,
`contact_options`, …) are bound as they actually exist, per
`_project/docs/ACF-VERIFICATION-2026-08-11.md`.

---

## Section map

| # | Service Single | Program Single |
|---:|---|---|
| 1 | Service hero | Program hero |
| — | Trust strip *(supporting module)* | Program snapshot *(supporting module)* |
| 2 | Problem and desired outcome | Program overview and ideal fit |
| 3 | What the service includes | What is included |
| 4 | How the service works | Annual treatment schedule |
| 5 | Timing and turf compatibility | Program features and treatment approach |
| 6 | How this fits a program | Recommended add-ons |
| 7 | Results and customer proof | Compare other programs |
| 8 | Related services | Program results and reviews |
| 9 | Service FAQs | Program FAQs |
| 10 | Final evaluation CTA | Final program CTA |

Both hit the brief's standard: **10 primary sections, 1 H1, 9 H2**, plus one supporting module that
isn't counted.

## Heading discipline

**One H1 per page, guaranteed.** Each template contains three H1 elements with mutually exclusive
render conditions, so exactly one ever outputs:

1. the hero override (`hero_title_override` / `hero_heading`) when set,
2. otherwise the public name (`public_service_name` / `public_program_name`),
3. otherwise `{post_title}`.

Bricks' `@fallback` only accepts literal text, not another tag — three conditioned elements is the
only way to chain three dynamic sources without risking an empty H1.

H3 is used for card titles, process steps, treatment rounds, and FAQ questions. Eyebrows, trust-point
titles, spec labels, and snapshot values are **not** headings — they're styled `text-basic`, per the
brief's heading system.

**One arithmetic note.** The brief targets 6–12 H3s, but its own component limits allow more: 5
problems + 5 steps + 1 program + 3 products + 3 related services + 6 FAQs = 23 at maximum fill. A
typical service (3 problems, 4 steps, 1 program, 3 related, 5 FAQs) lands around 16. That's the
brief's numbers colliding with each other, not a build error — the counts are described there as "a
template standard, not a quota." Nothing was padded or trimmed to hit a number.

## Conditional rendering

Every optional section is gated with `_conditions`, so a section with no data produces **no markup at
all** — no empty wrapper, no orphan heading. Server-side, so it costs nothing in the DOM.

Notable gates:

- **Products** render only when `approved_for_publication` is on **and** `approved_summary` is filled.
  Both conditions, on the loop itself. A product record can't leak to the front end by being attached
  to a service before it's approved.
- **Before/after** renders only when **both** images exist — the brief's "only when original images
  and accurate context exist" rule, enforced in markup rather than trusted to discipline.
- **Treatment rounds** render only when `treatment_rounds` has rows. When it's empty, the section
  falls back to the verified summary (`application_count` + `application_schedule`) instead. This is
  the safe default given that the coding sheet confirms the *count* of applications but not what
  happens in each round.
- **FAQ schema** uses the accordion's native `faqSchema`, which emits JSON-LD only for rendered items,
  and the whole section is gated on the repeater. Schema can never outrun visible copy.

## Three things to verify in the builder

I can't test against a live Bricks install from here. These three are the parts I'd check first —
everything else is standard.

**1. ACF relationship loop sources.** Related services, programs, products, included services, and
add-ons use `"query": { "objectType": "acf_<field_name>" }`. That's the documented form for ACF
relationship loops, but the builder generates the exact provider key itself. If a relationship grid
renders empty, open the loop element, re-pick the field from the query-type dropdown, and the correct
key writes itself. The card markup inside is unaffected.

**2. Review meta queries.** Reviews are pulled by reverse-matching the ACF relationship:

```json
"meta_query": [{ "key": "related_service", "value": "\"{post_id}\"", "compare": "LIKE" }]
```

ACF stores relationships as a serialized array, so a `LIKE` against the quoted post ID is the standard
reverse lookup. Confirm Bricks resolves `{post_id}` inside the meta value on your version — if it
doesn't, the loop returns nothing rather than returning the wrong reviews, which is the safe failure.

**3. Section backgrounds vs surface classes.** Each section carries both an explicit `_background`
(ACSS tokens) and the project's surface class (`surface-hero`, `surface-proof`,
`surface-subtle-grid`, `surface-dark-cta`) via `_cssClasses`. Bricks writes `_background` as an
ID-specificity rule, so **the explicit background wins** and the surface class is currently a semantic
hook only. If you'd rather the utility classes drive the colour, delete `_background` from the section
elements — the class names are already in place.

## Known gap

**`before_after` does not exist on Lawn Care Program Details** in the export I verified against
(finding F6). The Program template's before/after block is written and conditioned, so it stays
invisible and harmless until the field group is added — no error, no empty wrapper. Add the Group
field with `before_image`, `after_image`, `timeframe`, `caption` and it starts rendering with no
template change.

Same story for `available_in_duluth` and the `duluth` branch choices: nothing in these two templates
depends on them yet, but the branch filter for related-service cards will once branch availability is
wired in.

## Design system

Tokens only — no hardcoded colour or spacing. Variables used are the ones already proven in
`header-main.json` / `footer-main.json` plus the ACSS 4 set in `prideinturfacss4x.css`:
`--primary*`, `--accent*`, `--base-*`, `--neutral-*`, `--text-*`, `--space-*`, `--grid-gap`,
`--section-space-m`, `--content-width`, `--content-width-narrow`, `--radius-*`, `--h1`–`--h3`,
`--font-weight-heading`, `--letter-spacing-*`, `--line-height-*`.

Cards follow the BEM structure in `pride_in_turf-website-rules.txt` (`pit-card`, `pit-card__title`,
`review-card__text`, …) and the shadow hierarchy: standard cards get a subtle shadow, the featured
program card gets a heavier one. Buttons attach ACSS classes through `_cssClasses` — `btn--accent`
for the quote CTA, `btn--primary` for the phone CTA — matching the mapping already documented in
`bricks-json/README.md`.

Grids collapse 3 → 2 at tablet and 2 → 1 at mobile landscape.

## Rebuilding

Generated by scripts, not hand-authored, so ids and parent/child links can't drift. The builders live
in `_project/builders/` (`pit_common.py`, `build_service.py`, `build_program.py`). Each run
validates: unique 6-char ids, every parent/child cross-reference resolving, every
`_cssGlobalClasses` id declared, and a heading census. They write straight back into this directory:

```
python3 _project/builders/build_service.py
python3 _project/builders/build_program.py
```
