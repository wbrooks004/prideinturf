# Pride In Turf — Etch WP Implementation Map

**Scope note:** this is a **structural/conceptual mapping** — what becomes a global class vs. a custom Etch component vs. a template — not verified against a real Etch install or codebase (none was attached). No PHP is invented; where real ACF field names / CPT registrations are needed, this document says so explicitly and points to `dynamic-data-map.md`'s PENDING markers rather than guessing. Do not treat any concrete-looking name below as confirmed until checked against the real Etch project.

**Explicitly excluded per instructions:** no Bricks Builder, Automatic CSS, or Frames guidance appears anywhere in this document.

## 1. Etch global stylesheet
`handoff/tokens.css` → Etch's **global CSS** panel (or an enqueued stylesheet, however this Etch install manages global CSS). This registers every custom property in one pass. Etch's own "Global Colors"/"Global Fonts" UI features (if used) should point at these same custom properties rather than duplicating raw values — one source of truth.

## 2. Global CSS custom properties
Every token in `handoff/design-tokens.json` becomes an Etch **global CSS variable**. Recommended grouping if Etch's variable UI supports categories/folders: Color → Typography → Spacing → Grid/Layout → Effects (radius/shadow/motion) → Z-index. This is a direct 1:1 port — no renaming needed, the token names are already kebab-case CSS custom properties.

## 3. Global classes
Candidates for Etch **global classes** (reusable utility-style classes, as distinct from one-off component styling):
- `.container` / `.container-narrow` — maps to `--container-max` / `--container-narrow` + auto margins + `--container-padding`.
- `.section-padding` / `.section-padding-sm` — maps to `--section-padding-y` / `--section-padding-y-sm`.
- `.eyebrow-label` — the uppercase, tracked, brand-green small-caps label pattern used at the top of every `SectionHeading` and card.
- `.badge-pill` — the tinted-pill shape shared by `Badge`, service/program eyebrows, and status chips.
- `.card-surface` — the white/bordered/radius-lg/shadow-sm base that `ProgramCard`, `ReviewCard`, and form containers all share before their specific modifiers.

## 4. Custom Etch components
One custom component per entry in `component-specs.md`, i.e.: Header (NavBar), Footer, Button, SectionHeading, Hero, ServiceCard, ProgramCard, ReviewCard, TrustPointCard, LocationCard, Accordion, FormField/Input/Select/Textarea/Checkbox (likely one composite "Form Field" component + a form wrapper), Alert, Breadcrumbs, CTABanner, **UpdateNotice** (homepage "Pride In Turf Update" section, added 2026-07-14). Each should expose the same prop surface documented in that component's `.d.ts`/`.prompt.md` — treat those files as the component's prop contract to reproduce, not this document.

## 5. Component props → Etch component props
Direct port, e.g.: `Button` → props `variant` (select: primary/accent/outline/ghost/inverse), `size` (select: sm/md/lg), `label` (text), `icon` (icon picker, from the 31-glyph curated set only), `href` (text/link field, optional — presence toggles button-vs-link render), `disabled` (toggle). Repeat this pattern per component from its `.d.ts` — do not re-derive prop names independently in Etch; copy them so design and build stay in sync.

## 6. Class props
Every custom component should expose an Etch **class prop** (an escape hatch for one-off utility classes) so a specific page can nudge spacing/alignment without forking the component. This is standard Etch practice, not specific to this brand — flagged here only so it isn't skipped for the more "primitive" components (Button, Icon) where it's tempting to omit.

## 7. Dynamic components
Components that render **repeating dynamic content** rather than fixed props — these need Etch's dynamic-component/query-aware wiring, not just static props:
- `ProgramCard` inside the Lawn Care Programs hub and homepage → one dynamic component instance per Query Loop item over the **`lawn-care-programs` CPT** (confirmed hierarchical, archive slug `lawn-care/`).
- `ServiceCard` inside the Lawn Services archive and homepage → same pattern over the **`lawn-services` CPT** (confirmed hierarchical, `has_archive: false` — the archive page is a curated/manual query, not a native CPT archive).
- `ReviewCard` → dynamic over the **confirmed `reviews` CPT** (`group_6264655b7ef18`) — private/non-public post type, so it's queried programmatically, never linked to directly. No longer PENDING.
- `LocationCard` → NOT dynamic/looped — exactly two hand-authored instances, confirmed as **WP Pages (IDs 67 and 3468)** carrying the Location Page Details field group, not a CPT — matches the branch-model restriction in `component-specs.md`.

## 8. Etch templates
One Etch template per row in `template-inventory.md`. Two important non-1:1 mappings:
- **Parent service single** (#6) and **Child service single** (#7) are the *same* Etch template family — **confirmed**: `lawn-services` is registered `hierarchical: true` (native `post_parent`), and the Service Details field group's `internal_service_type` field (`core_service`/`child_service`/`section_only`/`internal_only`/`add_on`) tags each post's role explicitly. One single-post template branches on `internal_service_type`/`post_parent`: `child_service` renders the child breadcrumb + "part of X" badge, everything else renders the full parent layout with child-link pills queried by `post_parent`. No longer PENDING.
- **Lawn Care Programs hub** (#8) and **Individual Lawn Care Program** (#9) are a standard archive-template + single-template pair over the same CPT.

## 9. WordPress Query Loops
Needed everywhere a card grid repeats over a CPT: Lawn Care Programs (hub + homepage teaser), Lawn Services (archive + homepage teaser), Blog (archive), Reviews (if a dedicated CPT/plugin exists — PENDING). Each Query Loop's card template = the matching dynamic component from §7, not a rebuilt one-off layout per loop instance.

## 10. Dynamic data keys
See `dynamic-data-map.md` for the full prop-by-prop table. General principle: every text/icon/image prop on `ProgramCard`/`ServiceCard`/`ReviewCard` etc. that currently reads from `siteData.js` in the reference kit becomes a Dynamic Data binding to a real field in Etch — `siteData.js` is a **stand-in for the eventual CPT/ACF source**, not something to port literally into WordPress.

## 11. ACF fields
**Resolved as of `uploads/acf-export-2026-07-12.json`.** Real field groups now back nearly every dynamic prop — see the fully-populated table in `dynamic-data-map.md`. Summary of the groups and where each attaches:
- **Business Info** (options `business-info`) — business name, main phone/email, main CTA, client portal URL, logo, footer description, `social_links` repeater.
- **Global CTAs** (options `global-ctas`) — default quote CTA heading/text/button, phone CTA label, promo-bar fields.
- **Trust Content** (options `trust-content`) — `trust_points` repeater (feeds `TrustPointCard`), guarantee statement, years-in-business, certification text, default featured reviews.
- **Company Updates** (options `updates`) — the homepage "Pride In Turf Update" notice, now built as `UpdateNotice` (`components/marketing/UpdateNotice.jsx`), rendered by `HomePage` under the Hero — see `dynamic-data-map.md`.
- **Homepage Content** (Page ID 2) — intro, services bullets repeater, featured relationships, location links, why-choose-us repeater, bottom-CTA fields.
- **Page Hero** (front page + Pages 55, 6080, 6101) — eyebrow, heading override, summary, image, selling-points repeater, CTAs.
- **About Page Content** (Page 55) — company story, owner bio/image, mission, `values` repeater, about-page reviews.
- **Contact Page Content** (Page 57) — intro, form heading/text, show-location-cards toggle.
- **Location Page Details** (Pages 67, 3468 = Hoschton/Atlanta) — name, address, GBP/map/directions URLs, `office_hours` repeater, areas served, `location_faqs` repeater. No `is_primary` flag exists — see open item in `dynamic-data-map.md`.
- **Lawn Care Program Details** (CPT `lawn-care-programs`, group `group_pit_lawn_care_program_details`) — full identity/card/hero/content/FAQ/SEO field set. An older near-empty duplicate group of the same title also exists in the export — flag as legacy, unused here.
- **Service Details** (CPT `lawn-services`) — full identity/hero/card/content/process/FAQ/branch-logic/SEO field set.
- **Reviews** (CPT `reviews`) — reviewer/rating/source/text, relationships, homepage/about flags, display priority.
- **Hiring Now** (CPT `careers` + options `careers-settings`) — hiring toggle, job location/company, about text, job description.

Do not invent anything beyond this list — a handful of genuine gaps remain (referral program terms, `LocationCard.isPrimary`, the icon-enum vs. uploaded-image mismatch on Program/Service/TrustPoint icons); each is called out explicitly in `dynamic-data-map.md` rather than guessed at.

## 12. Relationship-field loops
Both candidates are now **confirmed**, not pending:
- Service ↔ program: **confirmed relationship fields** — `included_services` and `recommended_add_ons` on Lawn Care Program Details, both pointed at the `lawn-services` CPT. Replace `ProgramPage.coreServiceChecklist`'s current flat hard-coded list (from `siteData.js`) with a live query over `included_services`; render `recommended_add_ons` as a separate "pairs well with" module if the design calls for one.
- Child-service ↔ parent-service: **confirmed NOT a relationship field** — native `post_parent` hierarchy (see §8), tagged with `internal_service_type`. No relationship-field loop needed here.

## 13. Repeater-field loops
- `NavBar`'s dropdown `children[]` — **confirmed NOT ACF-driven**: no nav/menu field group exists anywhere in the export. Build as a native WordPress Menu with a standard Etch nav/mega-menu component — no repeater needed.
- Branch `hours[]` — **confirmed real repeater**: `office_hours` on Location Page Details (`day` select + `hours` text), replacing the flat array currently hard-coded in `siteData.js`.
- Service `subServices`/`childServices` — **confirmed NOT a repeater** (see §7/§8/§12) — native CPT hierarchy instead.
- Other real repeaters now confirmed and ready to wire as-is: `social_links` (Business Info), `home_services_bullets`/`why_choose_us_points`/`bottom_cta_benefits` (Homepage Content), `values` (About Page Content), `trust_points` (Trust Content), `nearby_areas_served`/`location_faqs` (Location Page Details), `card_features`/`ideal_for`/`program_features`/`program_faqs` (Lawn Care Program Details), `best_for`/`problems_solved`/`service_steps`/`faqs` (Service Details).

## 14. Conditional elements
- `Badge` "Primary" indicator on `LocationCard` → conditional on `isPrimary` boolean (Hoschton only).
- `ServicePage`'s sub-service pill row → conditional on the service having any `childServices` (only Aeration today).
- `NavBar` dropdown chevron/flyout → conditional on a nav item having `children`.
- `Hero`'s photo vs. solid-green fallback → conditional on `imageUrl` being set — **preserve this fallback behavior in Etch**; never auto-generate or substitute a stock photo if a real one isn't uploaded for a given page.
- `UpdateNotice`'s entire homepage section → conditional on `enable_company_updates` AND the current date falling within `start_date`/`end_date` — hide entirely, never render an empty or expired notice. `priority` (`display_priority`) swaps its icon/background treatment, not its visibility.
- Utility footer row conceptual pages (Blog/Careers/Reviews/Referral) → consider gating these nav entries behind a "page is published/ready" condition so conceptual pages don't go live in Etch's actual footer before real content lands.

## 15. Custom PHP or JavaScript — only where necessary
Kept deliberately minimal per the brief:
- **NavBar mobile/dropdown behavior** needs component-level JS (open state, hover-intent delay, `ResizeObserver` on the header's own width rather than `window` width) — this is genuinely necessary interactivity, not decorative. Etch's own interaction/JS panel (or a small enqueued script) should implement exactly the behavior in `interaction-spec.md` → Dropdown/Mobile navigation.
- **Accordion** needs JS for open/close state — Etch's built-in accordion component (if it has one) should be used instead of custom JS if it already matches this spec's behavior (grid-rows transition, single- or multi-open); only write custom JS if Etch has no native accordion.
- **Contact form submission** needs PHP (real form handling — email/CRM/WP admin storage) — entirely unspecified here since no backend/CRM target was provided; this is real new backend work, not a port of anything in the reference kit (the kit's "submit" is a fake client-side state swap for demo purposes only).
- Everything else (card grids, hero, footer, breadcrumbs, badges) is static markup + Etch's native dynamic-data binding — no custom JS needed.
