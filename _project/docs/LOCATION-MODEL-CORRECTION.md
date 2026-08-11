# Location Model Correction — Duluth is a branch

**Date:** 2026-08-11
**Authority:** Confirmed by the client (business owner) on 2026-08-11.
**Supersedes:** every prior statement in this repo that Duluth is service-area only.

## The correction

Pride In Turf has **three branches: Atlanta, Hoschton, and Duluth.**

Earlier project documentation asserted a two-branch model with Duluth as a service area. That was
wrong. It originated in the redesign planning documents and propagated into `PRODUCT.md`,
`DESIGN.md`, `bricks-json/README.md`, and the remaining-templates brief, where it was stated as a
hard guardrail and repeated often enough to look verified. It was not.

Duluth (page **293**) is a legitimate branch entity. It may carry a branch page, an office NAP block,
`LocalBusiness` schema, branch-assigned team members, and branch-filtered service availability on the
same terms as Atlanta and Hoschton.

The `Location Page Details` field group being bound to page 293 was therefore **correct**, not the
defect I reported as F1 in `ACF-VERIFICATION-2026-08-11.md`. That finding is withdrawn. No ACF change
is needed there.

## Confirmed branch table

| Page ID | Branch | URL | Address |
|---|---|---|---|
| 291 | Atlanta | `/lawn-care-atlanta/` | 44 Peachtree Pl NE, Suite 821, Atlanta, GA 30309 |
| 292 | Hoschton | `/lawn-care-hoschton-ga/` | 1900 GA Hwy 211, Hoschton, GA 30548 |
| 293 | **Duluth** | `/lawn-care-duluth-ga/` | **3425 Buford Hwy NE, Duluth, GA 30096** |

The three URLs already follow a parallel pattern in the header and footer templates, so no routing
change is required.

## Documentation corrected

| File | What changed |
|---|---|
| `_project/docs/PRODUCT.md` | Positioning, template rules, absences list, and the "location truth" principle |
| `_project/docs/DESIGN.md` | Branch/service-area list encoding |
| `_project/docs/ACF-BUILD-INSTRUCTIONS.md` | P1.3 branch choices, P2.1 `branch_pages` instruction, P3.6 guardrail |
| `_project/docs/ACF-VERIFICATION-2026-08-11.md` | F1 withdrawn |
| `bricks-json/README.md` | Footer location model |

The uploaded brief (`prideinturfremainingpagetemplatebriefs.md`) also carries the wrong model in its
guardrails section. It isn't a repo file, so it can't be corrected here — treat this document as
authoritative where the two disagree.

## Work this creates

### ACF — additive, none of it blocking

The two-branch assumption is hardcoded into five field definitions. All five need Duluth added, or
Duluth-assigned records won't be selectable.

| Group | Field | Change |
|---|---|---|
| Team Member Details | `branch` | Add choice `duluth : Duluth` |
| Service Details | `branch_to_feature_this_service` | Add choice `duluth : Duluth` |
| Service Details | *(new)* `available_in_duluth` | Add True/False, next to `available_in_atlanta` and `available_in_hoschton` |
| About Page Content | `branch_pages` | Max **2 → 3** |
| Homepage Content | *(new)* `duluth_location_link` | Add Page Link, matching `atlanta_location_link` and `hoschton_location_link` |

Until `available_in_duluth` exists, every service reads as unavailable in Duluth under any
branch-availability filter. Worth doing before service content entry, but it doesn't block template
work — I'll write the branch filter to handle all three from the start.

### Footer template — needs real data

`bricks-json/footer-main.json` gives Atlanta and Hoschton full NAP blocks and Duluth only a
service-area text link. To match, Duluth needs its own NAP block.

**Most of the NAP arrived** in `Info - Pride In Turf.docx` on 2026-08-11 — see `BUSINESS-FACTS.md`:

- Address: **3425 Buford Hwy NE, Duluth, GA 30096**
- Hours: Monday–Saturday 07:00–18:00, Sunday closed (supplied as one business-wide schedule)
- Phone: no Duluth-specific number exists; all branches appear to share **833-388-8873**

That is enough to build the footer NAP block and the branch card. Three items are still missing:

| Missing | Blocks |
|---|---|
| Latitude / longitude | Map embed and precise `geo` in schema |
| Google Business Profile URL / CID | `sameAs` in schema, "view on Google" link |
| A Duluth branch description | `location_short_summary` on the branch card |

Atlanta and Hoschton have coordinates, CIDs, and written descriptions; Duluth has none of the three.
The branch card and NAP render fine without them — schema completeness is what suffers.

Confirm whether the shared phone line is correct. If it is, branch cards show the same number three
times, and WS Form branch routing has to key off service address rather than a dialed number.

### Schema

Duluth gets `LocalBusiness` schema on the same terms as the other two branches, using the confirmed
address and the shared phone and hours. Leave `geo` and `sameAs` out until the coordinates and GBP
URL arrive rather than approximating them — a partial schema block is valid; a wrong one is not.

## Principle, restated

Location truth is still sacred — the correction is to *what* the truth is, not to the rule. Three
branches: Atlanta, Hoschton, Duluth. Any location beyond those three remains service-area only and
must not inherit branch schema, NAP, or branch entity data.
