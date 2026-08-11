# ACF Verification — export of 2026-08-11

Checked `_project/exports/acf-export-2026-08-11.json` (27 items: 16 field groups, 5 post types,
6 options pages) against `ACF-BUILD-INSTRUCTIONS.md`.

**Most of it landed correctly.** Six items need fixing before I build templates — two of them block,
and one is a location-model violation that matters beyond this build.

---

## Confirmed correct

| Item | Status |
|---|---|
| P1.1 Duplicate `Lawn Care Program Details` (`group_6a4436973098c`) | Removed |
| P1.2 `team-members` CPT | Created, Title-only support |
| P1.3 Team Member Details | All 9 field names match spec exactly |
| P1.4 Service → `related_programs` | Max 1, points at `lawn-care-programs` |
| P1.7 Products | Option A chosen, CPT + 7-field group built |
| P2.1 About additions | All present |
| P2.2 Contact additions | Present (one defect, see F2) |
| P2.3 Service `before_after` group | 4 sub-fields correct |
| P2.4 Program `not_designed_for`, `treatment_rounds` | Present |
| P3.1 `hero_heading_override` WYSIWYG → Text | Fixed |
| P3.2 `common_lawn_types` deleted | Done (see F5) |
| P3.3 `seasonal_relevance` deleted | Done |
| P3.4 Relationship maximums | Set on all 8 relationships |
| P3.5 `location_faqs.answer` → Textarea | Fixed |
| Page IDs | 286 = About, 287 = Contact, Page Hero on both |

---

## F1 — Duluth (293) now has branch fields — **fix first**

`Location Page Details` is bound to pages **291, 292, and 293**. In the previous export it was 291 and
292 only. Page 293 is Duluth.

That group carries `street_address`, `city`, `state`, `zipcode`, `google_map_embed_url`,
`google_business_profile_url`, `directions_link`, and `office_hours`. Its presence on a page is the
mechanism that lets a NAP block, a map pin, and `LocalBusiness` schema render there.

Duluth is a service area, not a branch. `PRODUCT.md` states the branch/service-area split is "a
factual/SEO commitment, not a design choice," and the brief repeats it three times. Publishing an
office address or `LocalBusiness` schema for a location that has no office is a false business claim,
and it's the kind that gets a Google Business Profile actioned.

**Fix:** ACF → Field Groups → Location Page Details → Location Rules → delete the `Page is equal to
293` rule. Leave 291 and 292.

Then check whether anything was already entered on page 293 — if an address got typed in, clear it.
The postmeta survives the location-rule change; it just stops being visible.

**If Duluth genuinely needs a page**, it needs a *service-area* field set — areas served, local
service copy, links to the branch that covers it — with no address, no hours, no map, no NAP. Tell me
and I'll spec it as a separate group. It must not reuse this one.

## F2 — Two `related_service` fields on Reviews — **blocks the build**

There are two active field groups titled **Reviews**, both on the `reviews` post type:

| Key | Fields |
|---|---|
| `group_6264655b7ef18` | The original 10, including `related_service` |
| `group_6a7adf9037265` | `related_program` **and a second `related_service`** |

Two fields with the same name on the same post type. `get_field('related_service')` returns whichever
group registers last, which is not guaranteed stable, and the editor now sees two identical service
pickers on every review with no way to tell which one the site reads.

This is the same defect as the duplicate program group deleted in P1.1, recreated.

**Fix (preferred):** add `related_program` to the original group `group_6264655b7ef18` — Relationship,
post type Lawn Care Programs, max 3 — then delete `group_6a7adf9037265` entirely. One group per post
type.

**Fix (faster):** open `group_6a7adf9037265` and delete just the `related_service` field from it,
keeping `related_program`. This works, but leaves you with two Reviews groups to maintain.

Check `related_service` values on existing reviews after either fix — if any were entered through the
new group's picker, they may have written to a different meta key.

## F3 — `form_reassurance_points` has no sub-fields — **blocks that section**

The repeater exists on Contact Page Content but contains zero sub-fields, so it can't store anything
and renders nothing.

**Fix:** add one sub-field — Label `Point`, Name `point`, Type Text. Set the repeater Max to 4.

## F4 — Both new CPTs are publicly queryable

| Setting | `team-members` | `product` | Should be |
|---|---|---|---|
| `public` | false | false | false |
| `publicly_queryable` | **true** | **true** | **false** |
| `exclude_from_search` | **false** | **false** | **true** |

`public: false` sets the *default* for these, but an explicit `publicly_queryable: true` overrides it.
Combined with the rewrite rules that are also registered, `/team-members/<name>/` and
`/product/<name>/` resolve to real front-end pages right now — thin, indexable, contentless. That's
the exact outcome the private-CPT decision was meant to avoid, and for products it also means the
approved-summary gating can be bypassed by hitting the URL directly.

**Fix:** ACF → Post Types → each one → Advanced → set **Publicly Queryable: No** and **Exclude From
Search: Yes**. Then Settings → Permalinks → Save (flushes the rewrite rules — without this the old
URLs keep resolving until the next flush).

While you're in Products: **Supports** is `title, custom-fields`. Untick custom-fields — it shows the
raw postmeta box, which invites editing values ACF should own.

## F5 — `Centipede` missing from Service `turf_type`

`common_lawn_types` was deleted as instructed, but its `Centipede` choice wasn't carried over.
`turf_type` is still Bermuda / Zoysia / Fescue / Mixed / All.

Centipede is a real warm-season turf in this market, so it's now unrepresentable.

**Fix:** add `Centipede : Centipede` to `turf_type` on Service Details, between Fescue and Mixed. Add
it to the matching `turf_type` on Lawn Care Program Details too, so the two stay aligned — that
alignment is what makes service↔program cross-linking work.

If any service already had Centipede ticked under the old field, re-tick it.

## F6 — `before_after` missing on Lawn Care Program Details

P2.4 asked for it on both templates. Service has it; Program doesn't. Program Single section 8
("Program results and reviews") calls for before-and-after media.

**Fix:** add a **Group** field, name `before_after`, on Program Details with the same four sub-fields
as the Service one: `before_image` (Image), `after_image` (Image), `timeframe` (Text),
`caption` (Textarea).

Low urgency — the section renders reviews without it. But it's cheaper to add now than after content
entry starts.

## F7 — Product Details not exposed to REST

`show_in_rest: 0`. Team Member Details is correctly `1`.

**Fix:** ACF → Field Groups → Product Details → Settings → Show in REST API: Yes. Cosmetic, but it
makes the records visible in the Bricks query preview during template QA.

---

## Naming variances — no action needed

Several names came through differently from the spec. **None of these are problems** — I'm binding
templates to what actually exists, and this table is the record of that.

| Spec'd | Built | Where |
|---|---|---|
| `contact_methods` | `contact_options` | Contact Page Content |
| `desired_outcome_text` | `desired_outcome` | Service Details |
| `team_section_heading` / `_text` | `meet_the_team_heading` / `_text` | About Page Content |
| `public_product_name` | `public_display_name` | Product Details |
| post type `products` | post type `product` | CPT key |

Two worth a moment:

**`related_program` (Program) vs `related_programs` (Service).** Same concept, different name on the
two post types. I'll bind to each correctly, so nothing breaks. But if you want them consistent, now
is free — there's no content in either field yet. Rename the Program one to `related_programs` and
tell me. Otherwise I'll leave it and this table is the reference.

**`careers_bridge_heading` / `careers_bridge_text` / `careers_bridge_cta_link` / `careers_cta_label`.**
The label and link don't share a prefix. Purely cosmetic; I'll bind as-is.

### Repeater maximums left at 0

`contact_options` (should be 4), `treatment_rounds` (12), `form_reassurance_points` (4). `0` means
unlimited. Not blocking — I enforce render limits in the template regardless — but setting them makes
the limit visible to whoever enters content instead of surprising them when card 5 doesn't appear.

---

## What I need back

Only **F1, F2, and F3** block me. F4 should be fixed before launch regardless of the build.

```
F1  Duluth (293) removed from Location Page Details ... [ ]   BLOCKING
    Any address data entered on 293? cleared? ......... [ ]
F2  Reviews duplicate related_service resolved ....... [ ]   BLOCKING
F3  form_reassurance_points → add `point` sub-field .. [ ]   BLOCKING
F4  publicly_queryable No + exclude_from_search Yes .. [ ]
    Permalinks flushed ............................... [ ]
F5  Centipede added to turf_type (Service + Program) . [ ]
F6  before_after added to Program Details ............ [ ]
F7  Product Details REST enabled .................... [ ]

Optional: rename Program related_program → related_programs?  [ ]
Does Duluth need its own service-area field group?            [ ]
```

Fix F1–F3, re-export, and I'll start on the Service Single and Program Single template JSON.
