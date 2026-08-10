# Content Model

> **Status:** DERIVED implementation guide based on the 2026-07-12 ACF export. The export is reference-only and cannot define public truth.

## Registered content types

| Content type | Public | Hierarchical | Notes |
|---|---:|---:|---|
| Careers | Yes | No | Supports title, thumbnail, custom fields, excerpt, page attributes, post formats |
| Lawn Care Programs | Yes | Yes | Current ACF rewrite is `lawn-care/`; this conflicts with approved architecture and must not be treated as canonical |
| Lawn Services | Yes | Yes | Intended for canonical hierarchical services |
| Reviews | No | No | Editorial/internal review records; REST enabled |

## Options pages

- Business Info
- Careers Settings
- Global CTAs
- Trust Content
- Updates

## Major field groups

### Business Info

Business name, phone, email, primary CTA, client portal URL, logo, footer description, and social links.

**Caution:** Values in this options page are implementation data. They must be verified before being treated as public business truth.

### Company Updates

Enable flag, type, label, heading, message, CTA, related service, start/end dates, and priority.

### Homepage Content

Intro heading/text, service bullets, featured lawn services, featured reviews, branch links, why-choose-us points, and bottom CTA content.

### Lawn Care Program Details

Program code/type/turf, application count and schedule, card content, homepage flags, hero content, program overview, ideal-for/features, included services, add-ons, FAQs, and schema description.

**Caution:** The export includes two field groups with the same title. One appears to contain only a `Program Identity` tab; the other contains the full model. Review and deactivate/delete the empty or obsolete group after confirming it is unused.

### Service Details

Service code, public/internal classification, grid/navigation flags, category, turf/seasons, hero, card summary, included content, best-for/problems, timing, service steps, FAQs, branch availability, related services, and SEO/schema overrides.

**Caution:** Flags such as `is_public_service`, `show_in_navigation`, and branch availability are implementation controls. Their values must be aligned to the coding sheet and architecture before use.

### Reviews

Reviewer identity/location, star rating, source, review text, related content, feature flags, and display priority.

### Trust Content

Trust points, guarantee statement, years-in-business text, certification/licensing text, and default reviews.

**Caution:** Do not publish guarantees, certifications, or years-in-business claims without business verification.

### Page Hero

Eyebrow, heading override, summary, image, selling points, primary CTA, and secondary CTA.

### Location Page Details

Display name, summary, address, maps/directions, hours, service areas, featured services/reviews, and FAQs.

**Caution:** The field group is assigned to two page IDs, but the export does not prove which page is Atlanta or Hoschton. Confirm page-ID mapping. Never attach branch data to Duluth.

## Relationship rules

- Relationships should point to authoritative service/program records.
- Featured lists must not create new public services.
- Review relationships do not prove service availability or location truth.
- Related services should reflect the approved hierarchy, not legacy content.

## URL implementation rule

CPT rewrite settings in the export are technical state, not approved architecture. Update or route them only after mapping the final WordPress permalink implementation to `URL_ARCHITECTURE.md` and the architecture SOT.
