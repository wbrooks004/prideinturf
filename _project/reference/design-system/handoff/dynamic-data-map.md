# Pride In Turf — Dynamic Data Map

**Status: resolved against `uploads/acf-export-2026-07-12.json`** (real ACF-JSON export, attached 2026-07-12). Nearly every field below is now a confirmed group/field name instead of a placeholder. A short list of genuine gaps remains at the bottom — those are called out explicitly, nothing is invented to fill them.

## Resolved architecture (read this before the table)

- **`lawn-care-programs` CPT** — hierarchical, archive at `lawn-care/`. Field group **"Lawn Care Program Details"** (`group_pit_lawn_care_program_details`) carries identity/card/hero/content/FAQ/SEO tabs. ⚠️ The export also contains an older, near-empty group of the *same title* (`group_6a4436973098c`, a single stub tab field) — likely legacy/duplicate. This document only uses the fully-built group; flag the stub to the WP dev for cleanup.
- **`lawn-services` CPT** — hierarchical, `has_archive: false` (the Lawn Services Archive page is a curated/manual query, not a native CPT archive). Field group **"Service Details"** (`group_6a24bed51d6e7`). The `internal_service_type` field (`core_service` / `child_service` / `section_only` / `internal_only` / `add_on`) confirms native `post_parent` hierarchy is the real modeling — resolves the parent/child PENDING question from the previous version of this doc.
- **`reviews` CPT** — real but non-public (`publicly_queryable: false`, `exclude_from_search: true`) — always queried programmatically, never linked to directly. Field group **"Reviews"** (`group_6264655b7ef18`).
- **`careers` CPT** + options page `careers-settings` — field group **"Hiring Now"** (`group_6422e60a3ea27`).
- **Locations are confirmed NOT a CPT** — Hoschton and Atlanta are hand-authored **WP Pages (IDs 67 and 3468)** carrying field group **"Location Page Details"** (`group_6a257f644bf58`) — matches this system's existing 2-instance-only restriction on `LocationCard`.
- **NavBar is confirmed NOT ACF-driven** — no nav/menu field group exists anywhere in the export. Build it as a native WordPress Menu (registered menu location) with an Etch nav/mega-menu component. No repeater needed.
- **Options pages** (global/site-wide, singleton content): Business Info (`business-info`), Global CTAs (`global-ctas`), Trust Content (`trust-content`), Company Updates (`updates`), Careers Settings (`careers-settings`).
- **Homepage content lives on Page ID 2** (`group_6a24f225cc536`, "Homepage Content") — not an options page.
- **Page Hero** group applies to the front page plus Pages 55, 6080, 6101. **About Page Content** also targets Page 55 (confirms 55 = About). **Contact Page Content** targets Page 57.

## Component prop → ACF field

| Component Prop | Expected Type | CPT / Source | ACF Field Name | Context | Fallback | Required |
|---|---|---|---|---|---|---|
| `ProgramCard.title` | string | Lawn Care Programs CPT | `public_program_name` | Loop/single | Falls back to post title if empty | Required |
| `ProgramCard.description` | string | Lawn Care Programs CPT | `card_summary` | Loop/single | Hide description if empty | Required |
| `ProgramCard.icon` | enum (curated `IconName`) | — no ACF field exists | **derive, don't add a field** | Loop/single | Map `program_type` → icon: `warm_season`→`sun`, `cool_season`→`cloud`, `split`→`layers`, `select`→`sliders-horizontal` (never render — see legacy note below) | Optional |
| `ProgramCard` image | image | Lawn Care Programs CPT | `card_image` (id) | Loop/single | Fall back to the program-type placeholder photo already in `assets/imagery/` | Optional |
| `ProgramCard` feature list | string[] | Lawn Care Programs CPT | `card_features` repeater → `feature` | Loop/single | Hide list if empty | Optional |
| `ProgramCard.href` | URL | Lawn Care Programs CPT | native permalink | Loop | N/A | Required |
| `ServiceCard.title` | string | Lawn Services CPT | `public_service_name` | Loop/single | Falls back to post title | Required |
| `ServiceCard.description` | string | Lawn Services CPT | `service_summary` | Loop/single | Hide if empty | Required |
| `ServiceCard.icon` | enum (curated `IconName`) | Lawn Services CPT | `service_icon` (image) exists, but **recommend ignoring it** | Loop/single | Keep the curated Lucide-by-`service_category` mapping already vendored in `Icon.jsx` for grid-wide visual consistency; treat `service_icon` as an unused optional override pending client confirmation. Fall back to `leaf`. | Optional |
| `ServiceCard.href` | URL | Lawn Services CPT | native permalink | Loop | N/A | Required |
| `ServicePage` sub-service pills | derived, not stored | Lawn Services CPT | native `post_parent` query filtered by `internal_service_type = child_service` | Single (parent) | Hide pill row if no children | Optional |
| `ProgramPage.coreServiceChecklist` | string[] → relationship | Lawn Care Programs CPT | `included_services` (relationship → `lawn-services`) | Single | Hide if empty | Optional |
| `ProgramPage` add-ons module | relationship | Lawn Care Programs CPT | `recommended_add_ons` (relationship → `lawn-services`) | Single | Hide module if empty | Optional |
| `NavBar.links[]` | array | — not ACF | Native WP Menu (registered location), not a field | Global | Never empty — authored in WP Menus screen | Required |
| `LocationCard.label` | string | Location Page Details (Pages 67/3468) | `location_display_name` | Exactly 2 instances | None | Required |
| `LocationCard.address` | string | Location Page Details | `street_address` + `address_line_2` + `city` + `state` + `zipcode` | Exactly 2 instances | None | Required |
| `LocationCard.phone` | string | — no per-location field | Use sitewide `main_phone_number` (Business Info) unless client wants a dedicated field | Exactly 2 instances | None | Required |
| `LocationCard.description` | string | Location Page Details | `location_short_summary` | Exactly 2 instances | None | Optional |
| `LocationCard` hours | array | Location Page Details | `office_hours` repeater (`day` select, `hours` text) | Exactly 2 instances | None | Required |
| `LocationCard.isPrimary` | boolean | — no ACF field exists | **derive in-template** from page ID (Hoschton = HQ) rather than adding a field — only 2 instances ever exist | Exactly 2 instances | Default `false` | Optional |
| `ReviewCard.*` | string/number | Reviews CPT | `reviewer_name`, `reviewer_location`, `star_rating`, `review_source`, `review_text`, `related_service`/`related_page` (relationship), `featured_on_homepage`/`featured_on_about_page`, `display_priority` | Loop (queried, non-public CPT) | Never fall back to placeholder text — hide section entirely if none connected | Required if section shown |
| `TrustPointCard.icon`/`.title`/`.description` | enum/string | Trust Content (options) | `trust_points` repeater → `trust_point_title`, `trust_point_text`, `icon` (image) | Homepage/branch | `icon` is an uploaded image, not a curated enum — lower repetition than `ServiceCard`, so using the uploaded image directly is reasonable here. Hide row if repeater empty. | Optional |
| `Hero.imageUrl` | image | Page Hero (front page, 55, 6080, 6101) / Program `hero_image` / Service `service_image` | see source column | Single | **Falls back to solid dark-green field — hard product rule, never substitute a stock photo** | Optional |
| `Hero.heading`/`.subhead`/`.infoItems[]` | string/string/string[] | Page Hero: `hero_heading_override`/`hero_summary`/`selling_point` repeater. Program: `hero_heading`/`hero_intro`. Service: `hero_title_override`/`hero_intro`. | Single | None appropriate — hero copy always authored per page | Required |
| `Alert` | n/a | Form submission logic | N/A — not ACF-driven | Contact form | N/A | N/A |
| `Breadcrumbs.items[]` | array | Derived from page/post hierarchy | N/A — computed, not authored | Every nested template | Fall back to `Home → [Post Title]` | Required (computed) |
| `Footer.programLinks[]` | array | — no manual-curation field found | Query published `lawn-care-programs` posts directly | Global | Query all published if no curation field | Required |
| `Footer` social links | array | Business Info (options) | `social_links` repeater (`platform` select, `url`) | Global | **Not currently rendered by `Footer.jsx`** — real data exists; add a social-icon row if the client wants these live. Hide a platform if its `url` is empty. | Optional |
| `CareersPage` openings | array | Careers CPT + Hiring Now | `currently_hiring`, `job_location`, `job_company`, `about_the_company`, `job_description` (wysiwyg); title = post title | `/careers/` archive | Hide section / show "no current openings" if none published | Optional |
| `ReferralPage` reward terms | string | — no source anywhere | N/A — unresolved business decision, not a data gap | `/referral/` | Do not publish any reward amount/condition until approved | Required once approved |
| Homepage "Pride In Turf Update" notice | object | Company Updates (options `updates`) | `enable_company_updates`, `company_update_type`, `_label`, `_heading`, `_message`, `_cta_label`/`_cta_link`, `company_update_related_service` (relationship), `start_date`/`end_date`, `display_priority` | Homepage | **Built** — `components/marketing/UpdateNotice.jsx`, rendered by `HomePage` right under the Hero. Hide the whole section if `enable_company_updates` is off or the date falls outside `start_date`/`end_date`. `display_priority = Important` maps to `priority="important"` (the one place this system fills a background with orange). | Optional |
| Sitewide promo bar (separate from the above) | object | Global CTAs (options) | `enable_promo_bar`, `promo_bar_text`, `promo_bar_link` | Global (every page, not just homepage) | **Not built** — a thin top-of-page strip is a different component from the homepage `UpdateNotice` section; not requested yet. | Optional |

## Still open (genuine gaps, not invented)

1. **`LocationCard.isPrimary`** — no boolean field in ACF; recommended fix is a template-side derivation (see table), not a new field.
2. **Icon enum vs. uploaded image** — `ProgramCard`, `ServiceCard`, and `TrustPointCard` all expect a curated Lucide glyph; ACF only ever gives an uploaded image (or, for programs, nothing at all). Recommendations are per-row above; needs a final call from the client/dev, not a design-system decision.
3. **Referral program terms** — still entirely unresolved; no ACF data addresses it.
4. **Legacy CMS values that must never render**: `program_code`/`program_type` choice lists still include `"LS" / "Select Customer Lawn Care"` — a WordPress schema cleanup for the client to do on their own timeline. Never select or display that choice; this system already excludes "Select" everywhere per `readme.md`.
5. **Newly discovered scope, not yet built**: `service_code`/`service_category` reveal a deeper hierarchy than the flat 5-service model this system currently ships — Fungicide splits into Bermuda/Fescue/Zoysia child programs, Pest Control splits into Mosquito/Flea & Tick/Fire Ant/Grub Preventative/Grub Curative, Aeration splits into Spring/Fall/Liquid Spring/Liquid Fall, plus two categories not in scope at all yet: **Tree & Shrub Program** and **Bed Pre-Emergent**. Flagging for the client/PM to confirm before Etch build starts on the services section — not restructured here.

## Notes on fallback philosophy

Two different fallback behaviors appear above and should not be confused:
1. **Designed fallbacks** (Hero's solid-green field, hidden sub-service pill row, hidden empty-repeater sections) — real product decisions already reflected in the built components; implement as-is in Etch.
2. **Gaps in this document** (items 1–5 above) — these resolve the moment the client confirms a decision; they are not instructions to leave anything unresolved in the shipped site.
