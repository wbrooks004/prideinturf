# Component Library — canonical class system

`component-library.json` is a **specimen page**: every canonical component rendered once, with
static content, so the system can be reviewed visually in one place.

It is not decoration. The classes on that page are the *same global class objects* the five page
templates carry. Change a class and the specimen and all five templates move together, because they
are all generated from one definition in `_project/builders/pit_common.py`.

| File | Use |
|---|---|
| `component-library.json` | Bricks → Templates → Import. **No template conditions** — it never auto-applies. Assign it to a private page to view it. |
| `component-library.clipboard.json` | Ctrl/Cmd + V into a private page |

---

## What changed, and why

The previous library (`_project/exports/bricks-json/component-library.json`, 59 classes) and the
page templates had grown two parallel class systems. Reconciling them surfaced five real defects.
All are fixed; the old file is left in place as history.

### 1. Three classes were defined twice, differently

`review-card`, `review-card__text`, and `review-card__meta` existed in both systems with different
settings. Bricks merges global classes **by name** on import, so whichever imported second silently
adopted the other's styling.

The consequence was not cosmetic: template review cards sit on the dark proof surface (light text,
translucent fill) while the library's were built for a light surface (dark text on white). One
import order gives you dark text on a dark background — unreadable. Now defined once.

### 2. Twenty-five setting keys were silently ignored

Bricks discards settings keys it doesn't recognise, with no error. The old library used:

| Invalid key | Uses | Correct form |
|---|---:|---|
| `_borderRadius` | 12 | `_border.radius` |
| `_borderColor` | 5 | `_border.color` |
| `_borderLeftColor` | 3 | `_border` (one colour, width on one side) |
| `_borderLeft` | 2 | `_border.width.left` |
| `_borderTop` | 1 | `_border.width.top` |
| `_maxWidth` | 1 | `_widthMax` |
| `_minHeight` | 1 | `_heightMin` |

So `card`, `badge`, `alert`, `btn`, `program-card--featured` and `feature-point__icon` had **no
border radius** despite declaring one; the alert variants had no coloured accent bar; the featured
program card had no green border. The library looked specified and rendered unstyled.

The builder now validates every key against the Bricks schema and **fails the build** if an
unrecognised one appears.

### 3. Thirty-eight hardcoded colours

`PRODUCT.md` is explicit: *"Design values are never hardcoded … ACSS variables/utilities first …
Missing tokens are requested, never invented."* The old library carried 23 distinct hex values
(`#5b5954`, `#8a8783`, `#e3e1dd`, `#F3F4EE` …), five hardcoded line-heights, and `font-family:
"Kanit"` written out 26 times.

Every one now resolves to a token. Translucent fills use `color-mix(in oklch, …)` against a token
rather than a baked rgba, which is the pattern `prideinturfacss4x.css` itself documents.

The builder **fails the build** if a hex value appears in a class.

### 4. The button classes fought ACSS and lost

The old library defined `btn`, `btn--primary`, `btn--secondary`, `btn--ghost`, `btn--text`,
`btn--block` as Bricks global classes — with `btn--primary` filled **orange**.

ACSS 4 styles buttons through `[class*="btn--"]` and defines `btn--primary` as **green**, and
`automatic.css` loads *after* Bricks' stylesheet. ACSS wins. The specimen page claimed orange while
the site rendered green, and every button carried two competing definitions.

**Bricks no longer defines any button class.** Buttons attach ACSS classes through `_cssClasses`,
which is what the header and footer already did:

| Role | Class | Colour |
|---|---|---|
| Quote CTA (main conversion) | `btn--accent` | orange |
| Call CTA (secondary) | `btn--primary` | green |

One button system, owned by the framework that ships the CSS.

### 5. `service-card` was declared with no settings

An empty class. It now has a definition, and so do the other per-type variants.

---

## The system

**43 classes.** Component classes are unprefixed BEM, matching the card-naming rule in
`pride_in_turf-website-rules.txt`. Layout scaffolding is `pit-` prefixed so it cannot collide with
an ACSS utility.

| Group | Classes |
|---|---|
| Layout | `pit-section`, `pit-section--tight`, `pit-shell`, `pit-grid-2/3/4`, `pit-actions` |
| Typography | `section-title`, `section-title--light`, `section-lead`, `eyebrow`, `text-on-dark` |
| Card base | `card`, `card--featured`, `card__media`, `card__title`, `card__text`, `card__actions` |
| Card variants | `service-card`, `program-card`, `program-card--featured`, `branch-card`, `team-card`, `product-card` |
| Review | `review-card`, `review-card__text`, `review-card__name`, `review-card__meta` |
| Modules | `ticklist__item`, `step__number`, `spec-item`, `spec-item__label`, `spec-item__value`, `media`, `trust-strip__point`, `trust-strip__value`, `trust-strip__label`, `faq-item__q`, `faq-item__a`, `inline-link`, `badge`, `badge--accent`, `badge--neutral` |

**Card hierarchy** follows the shadow rule in the website rules doc: standard cards get 1.5rem
padding and the light shadow; featured cards get 2rem and the heavier one. A card is always the base
`card` **plus** its type modifier — `["card", "service-card"]` — so the shared structure stays in one
place and the variant only carries what differs.

---

## Verification

Every build asserts, and fails on violation:

```
1. class system identical across all 6 files — 43 classes, zero drift
2. invalid setting keys: NONE | hardcoded hex colours: NONE
3. button classes now owned by ACSS
4. ACF references across 5 templates: 247 | unverified: NONE
5. distinct ACSS tokens referenced: 40
6. all 12 files parse as valid JSON
```

Regenerate everything:

```
python3 _project/builders/build_component_library.py
python3 _project/builders/build_service.py
python3 _project/builders/build_program.py
python3 _project/builders/build_about.py
python3 _project/builders/build_contact.py
python3 _project/builders/build_branch.py
```

## Still open

**Five of the 40 tokens are unconfirmed** against the live framework —
`--text-dark`, `--text-dark-muted`, `--text-light`, `--text-light-muted`, `--section-space-m`. They
are used by the shipped header and footer, which were verified against the live `automatic.css`, so
they are almost certainly present. Confirm with:

```
grep -oE '\-\-(text-dark|text-dark-muted|text-light|text-light-muted|section-space-m):' \
  wp-content/uploads/automatic-css/automatic.css | sort -u
```

Five lines back means all 40 resolve. These five carry body colour and section rhythm, so a miss
would look broken rather than subtly off.

**The old library file** at `_project/exports/bricks-json/component-library.json` is superseded.
It is kept for reference. Do not import it — it would reintroduce the collisions above.
