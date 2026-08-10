# Source Authority Map

| Decision domain | Authoritative file | Allowed use | Not allowed |
|---|---|---|---|
| Governance, precedence, approved models, file status | `01_SOURCE_OF_TRUTH/SOT-governance-master-pride-in-turf-2026-04-03.md` | Decide which source governs and how conflicts are resolved | Page copy or technical implementation details not explicitly governed there |
| Architecture, page roles, branch/location truth, redirects, URLs, implementation cleanup | `01_SOURCE_OF_TRUTH/SOT-architecture-restructure-redirects-pride-in-turf-2026-03-16.md` | Define public structure and redirect behavior | Override service names/codes from the coding sheet |
| Service names, codes, programs, add-ons | `01_SOURCE_OF_TRUTH/SOT-service-canon-coding-sheet-pride-in-turf-2026-03-16.pdf` | Define service canon | Decide which items receive public pages unless architecture also says so |
| Referral rules | `01_SOURCE_OF_TRUTH/SOT-referral-program-rules-pride-in-turf-2026-03-16.pdf` | Referral public terms and internal operations; preserve labels such as “Recommended” | General site architecture or service canon |
| Brand colors, fonts, logo, visual identity | `02_BRAND_ASSETS/REF-brand-style-guide-pride-in-turf-2026-03-16.pdf` | Brand-token decisions only | Service, URL, location, messaging, or schema truth |
| ACF field/CPT snapshot | `03_IMPLEMENTATION_REFERENCES/TECH-acf-export-reference-pride-in-turf-2026-07-12.json` | Understand current fields and technical setup | Define business truth, public services, locations, URLs, or messaging |
| React design system | `03_IMPLEMENTATION_REFERENCES/design-system-source/` | Visual and component reference; inspect tokens and interaction ideas | Override authoritative architecture/service/brand files; paste JSX into Etch as production implementation |
| Bundled marketing preview | `03_IMPLEMENTATION_REFERENCES/REF-marketing-site-bundled-preview-2026-07-12.html` | Preview/reference only | Source-of-truth for content, navigation, URLs, services, or contact data |
| Derived context documents | `04_DERIVED_PROJECT_CONTEXT/` | Fast orientation and implementation planning | Override any source file |

## Source-of-truth preflight

A file may govern a decision only when all answers are yes:

- Does this file own the decision category?
- Is it explicitly allowed to act as source-of-truth for that category?
- Is it more authoritative than competing files?
- Is it operational and specific enough for the exact issue?
- Is it neither deprecated, soft-deprecated, derivative, draft, generated, nor reference-only?
- Is it being used within its assigned scope?
- Is there no higher-priority source overriding it?

If any answer is no, do not use that file as authority.
