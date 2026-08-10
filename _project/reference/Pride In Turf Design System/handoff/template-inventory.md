# Pride In Turf — Template Inventory

Every page type in this handoff, its route in the reference UI kit (`ui_kits/marketing-site/`), its content status, and the primary components it composes. "Content status" follows `handoff/README.md`'s Finalized / Conceptual classification — see that file for the full definition.

| # | Template | UI kit file | Route | Content status | Primary components |
|---|---|---|---|---|---|
| 1 | Global header | `components/navigation/NavBar.jsx` | *(persistent, all pages)* | Finalized | NavBar |
| 2 | Global footer | `components/navigation/Footer.jsx` + utility link row in `App.jsx` | *(persistent, all pages)* | Finalized (Footer) / Conceptual (utility row targets) | Footer |
| 3 | Homepage | `HomePage.jsx` | `/` | Finalized | Hero, SectionHeading, ProgramCard, ServiceCard, CTABanner |
| 4 | Standard page | `StandardPage.jsx` | `/privacy-policy/` (example) | Conceptual (generic template; example content is placeholder) | Breadcrumbs, plain rich-text region |
| 5 | Lawn Services archive | `LawnServicesArchive.jsx` | `/lawn-services/` | Finalized structure / real service list | SectionHeading, ServiceCard, Breadcrumbs, CTABanner |
| 6 | Parent service single | `ServicePage.jsx` | `/lawn-services/{slug}/` (5 services) | Finalized | Breadcrumbs, Badge, InfoList, child-service pill links, CTABanner |
| 7 | Child service single | `ChildServicePage.jsx` | `/lawn-services/aeration/{spring\|fall}-aeration/` | Finalized structure; only Aeration has real children today | Breadcrumbs, Badge, SectionHeading, CTABanner |
| 8 | Lawn Care Programs hub | `LawnCareProgramsHub.jsx` | `/lawn-care/` | Finalized | SectionHeading, ProgramCard, CTABanner |
| 9 | Individual Lawn Care Program | `ProgramPage.jsx` | `/lawn-care/{slug}/` (3 programs) | Finalized | Breadcrumbs, Badge, InfoList, CTABanner |
| 10 | Reviews archive | `ReviewsArchive.jsx` | `/reviews/` | **Conceptual** — sample reviews only | SectionHeading, ReviewCard |
| 11 | Atlanta branch page | `BranchPages.jsx` (`AtlantaBranchPage`) | `/locations/atlanta/` | Finalized (real address/description) | Breadcrumbs, LocationCard, TrustPointCard, CTABanner |
| 12 | Hoschton branch page | `BranchPages.jsx` (`HoschtonBranchPage`) | `/locations/hoschton/` | Finalized (real address/description) | Breadcrumbs, LocationCard, TrustPointCard, CTABanner |
| 13 | Duluth service-area page | `DuluthServiceAreaPage.jsx` | `/service-areas/duluth/` | **Conceptual / unresolved** — Duluth is not in either confirmed market list (see README §Known inconsistencies) | Breadcrumbs, Badge, InfoList, CTABanner |
| 14 | Blog archive | `BlogArchive.jsx` | `/blog/` | **Conceptual** — placeholder posts | SectionHeading, post card grid |
| 15 | Blog single | `BlogSingle.jsx` | `/blog/{slug}/` | **Conceptual** — placeholder post | Breadcrumbs, CTABanner |
| 16 | Careers | `CareersPage.jsx` | `/careers/` | **Conceptual** — placeholder openings | SectionHeading, Badge, Breadcrumbs |
| 17 | Contact | `ContactPage.jsx` | `/contact/` | Finalized | SectionHeading, FormField, Input, Select, Textarea, Checkbox, Button |
| 18 | Referral page | `ReferralPage.jsx` | `/referral/` | **Conceptual / unresolved** — no approved referral terms exist yet | SectionHeading, Breadcrumbs, CTABanner |
| 19 | Search | `SearchPage.jsx` | `/search/` | Conceptual (functional pattern; not wired to real search index) | Breadcrumbs, Input, result list |
| 20 | 404 | `NotFoundPage.jsx` | *(any unmatched route)* | Finalized pattern | Icon, Button |
| — | About | `AboutPage.jsx` | `/about/` | Finalized | SectionHeading, LocationCard, CTABanner |
| — | Client Portal | `ClientPortalPage.jsx` | `/client-portal/` | **Conceptual placeholder** — no real portal provider supplied | Badge, Icon, Button |

**Not in this inventory / intentionally excluded:** artificial turf, irrigation, sod, mowing, landscaping, hydroseeding, drainage, or retaining-wall pages — the approved messaging architecture explicitly excludes these as core offers (see root `readme.md`). Do not create templates for them without new client direction.

**Duplicate-shape templates:** #6/#7 (parent/child service) and #8/#9 (program hub/single) share one component each in the reference kit (`ServicePage.jsx` renders any of the 5 services; `ProgramPage.jsx` renders any of the 3 programs) — in Etch these become one Query-Loop-driven template each, not one static page per item. See `etch-implementation-map.md` and `dynamic-data-map.md`.
