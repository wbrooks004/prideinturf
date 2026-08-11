# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: property owners / homeowners in Metro Atlanta looking for recurring lawn care, turf treatment, and pest-control programs, evaluating providers online (mostly on mobile) before requesting a quote.

Secondary, confirmed by the template set:
- Prospective employees using the Careers page (single `careers` entries are public when a job is live).
- Existing/prospective customers using the Referral program (governed by the SOT referral-program rules).

## Product Purpose

Pride In Turf is a premium Metro Atlanta lawn-care company. This project is a custom-built WordPress marketing site whose job is lead generation, trust building, and long-term content scalability — "not simply to recreate a marketing website but to build a scalable content system that can continue growing for years."

Success on a visit = a submitted **online quote / lead request (WS Form Pro)**. Phone contact is a secondary conversion. The build also optimizes for fast page loads, strong SEO, and easy client editing.

## Positioning

A multi-location Metro Atlanta lawn-care provider with a deliberately structured public architecture:

- A season-driven catalog of programs and services (warm/cool/split lawn care, fungicide programs, pest control, aeration, tree & shrub, add-ons) rather than a flat service list.
- A branch vs. service-area distinction that is a factual/SEO commitment, not a design choice: **Atlanta**, **Hoschton**, and **Duluth** are branches (branch pages, branch schema, office NAP). Any city outside those three is service-area only and must never inherit branch schema, NAP, or branch entity data. (Corrected 2026-08-11 — earlier revisions wrongly listed Duluth as service-area only. See `LOCATION-MODEL-CORRECTION.md`.)

The differentiator a neighboring lawn company could not truthfully copy is this specific location entity model and the approved program catalog tied to it.

## Operating Context

- **Stage:** redesign + architecture restructure of the existing prideinturf.com. Existing production content, legacy URLs, old templates, ACF fields, design exports, and generated content are NOT assumed correct merely because they exist.
- **Environments:** local development → Cloudways staging → production. Never edit or test on production.
- **Client / entity:** Pride In Turf, operated by Find Me Solutions. Host: Cloudways (Varnish caching).
- **Stack (governed, not optional):** WordPress + **Bricks Builder** (primary builder) · Automatic.css (ACSS) as the design system (tokens, colors, type, spacing, grids, containers, responsive + a11y utilities) · Frames for accessible component scaffolding · ACF Pro (CPTs, fields, options pages, relationships) · WS Form Pro (forms) · Rank Math Pro (titles, meta, canonicals, schema, sitemap, redirects) · WPCodeBox (all custom PHP/CSS/JS + snippets) · Polylang only if multilingual is explicitly approved.
- **Authoritative-file workflow:** before writing code or editing Bricks, read the governance master, identify the decision domain, and read the authoritative file for that domain before inspecting templates, classes, ACSS tokens, Frames, ACF, snippets, and query loops. Changes touching >3 files/templates/major components require a written plan (affected items, purpose, dependencies/risks, order) and approval before implementing.

## Capabilities and Constraints

**Content model (CPTs / structure):**
- `lawn-services` — hierarchical (parent variation + child variation); single + archive/hub where approved.
- `lawn-care-programs` — single + archive/hub.
- `reviews` — featured selections surface on the homepage.
- `updates` (company updates) — dynamic homepage section / announcement bar.
- `careers` — single pages public when a job is live.
- `locations` and `service-areas` — separate CPTs, marked future expansion in the content-model doc.
- Homepage content driven by a Homepage Content ACF group (hero, intro, featured programs, featured services, featured reviews, CTA, company updates). Content originates from ACF/WordPress; editable content is never hardcoded.

**Templates:** global components (site header/footer, mobile nav, announcement bar, breadcrumbs, global quote CTA, review/service/program/branch/blog cards, WS Form wrapper, pagination, empty query-loop state) and page templates (homepage, standard, about, contact, careers, referral, branch, service-area city, blog archive, single blog) plus dynamic templates for the CPTs above. The `branch-page` template is allowed for Atlanta, Hoschton, and Duluth; other cities use the service-area city-page template.

**Services catalog:** the approved **Coding Sheet** is authoritative for what services/programs may be published (codes such as L8, CLC, SLC, LS; add-ons BAP, BFP, FFP, ZP, PG, TSP; pest control MO, FT, AW, FAC, GRP, GRC, LPC; service add-ons TST, CAS, LAS, etc.). Nothing may be published as an active offer if it is absent from the approved coding sheet; retired services must not be linked or shown as active.

**Hard constraints (durable):**
- Design values are never hardcoded (colors, font sizes, line heights, spacing, gaps, container widths, radii, shadows, breakpoints) — ACSS variables/utilities first, then semantic BEM custom classes; no inline styles, no styling via Bricks-generated element IDs, no arbitrary CSS in Bricks elements. Missing tokens are requested, never invented.
- No additional page builder may be introduced. **Etch, Gutenberg page-building, Elementor, Breakdance, Oxygen are banned** (this supersedes the earlier Etch-era project docs — see Evidence).
- No client functionality in `functions.php`; use WPCodeBox or an approved version-controlled plugin. Never edit WordPress core or plugin files.
- No new CPT, taxonomy, field group, options page, or URL structure without checking the authoritative files. Don't delete a template, global element, class, ACF field, snippet, redirect, or CPT before auditing dependencies. Don't change live URLs for cosmetic reasons; permanent migrations use permanent (301) redirects, never temporary.
- Plugins are not installed without explicit approval.

## Brand Commitments

- Name: **Pride In Turf**. Tagline present on brand assets: "We Take Pride In Turf." Operating entity: Find Me Solutions.
- A brand book exists (`Pride In Turf Design System/assets/brand/Pride-in-Turf-BrandBook-V1.pdf`) and is a binding identity reference; specific visual-world decisions belong in DESIGN.md, not here.
- The build must feel premium, trustworthy, and conversion-focused per the stated objectives.

## Evidence on Hand

Real project material lives in `C:\Users\William\Desktop\Client Work\Pride In Turf\`:
- **Governance master** — the top authority (`Pride In Turf Website Governance.pdf`, confirmed by the user as master).
- **Coding Sheet** (`Coding Sheet - Sheet1 (1).pdf`) — authoritative services/programs catalog referenced by the governance master.
- **SOT referral-program rules** (`SOT-referral-program-rules-pride-in-turf-2026-03-16.pdf`).
- **Website rules** (`pride_in_turf-website-rules.txt`) and the `Pride In Turf Project/docs/*` set.
- **Brand book** and an exported design system (`Pride In Turf Design System/`).
- `Reviews` CPT is the source of real testimonials — do not fabricate reviews.

Superseded / anti-reference:
- The Etch-era docs (`Pride In Turf Project/docs/project-overview.md` naming Etch WP, "Etch native whenever possible") and the `etch-html-css-importer` skill are **anti-reference for the builder decision** — the builder is Bricks. Their non-builder product/content facts (objectives, content model, catalog) still hold.
- The ACF export (`acf-export-2026-07-27.json`) must NOT be used to determine business truth. Existing production pages, design exports, generated content, and Frames templates never override approved architecture.

Absences future work must not fabricate: pricing/quotes, customer counts, licensing/insurance claims, deployment or performance benchmarks, and any branch/location data for cities other than the approved Atlanta, Hoschton, and Duluth branches. The Duluth NAP is not yet supplied and must not be approximated.

## Product Principles

1. **Approved source-of-truth beats anything that already exists.** Legacy URLs, old templates, ACF exports, design exports, and generated content are evidence, not truth — verify against the governance master and its designated authoritative files.
2. **Location truth is sacred.** Atlanta, Hoschton, and Duluth are branches. Never create false branch pages or leak branch schema/NAP to non-branch locations.
3. **Publish only approved offers.** Nothing ships as an active service/program unless it is on the approved coding sheet; retired services are never shown as active.
4. **Reusable, dynamic, component-based.** No duplicated structures that could be reusable components; ACF/query-loop-driven content over hardcoded content; ACSS-first with no arbitrary design values.
5. **Protect production and SEO integrity.** Work local → staging → production; permanent redirects for permanent moves; don't churn live URLs for cosmetics.

## Accessibility & Inclusion

Semantic HTML in Bricks (header, nav, main, section, article, aside, footer); Frames components keep their intended accessible behavior when adapted; ACSS accessibility utilities used as intended. Verify visible keyboard focus, logical tab order, adequate tap targets, usable mobile/off-canvas navigation, and no overlap/clipping. Responsive verification is required at 375px, 768px, 1280px, and 1920px.
