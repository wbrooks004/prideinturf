# Design System

> **Status:** DERIVED. Brand-book facts are authoritative only within the brand domain. React source and additional tokens are implementation references.

## Authoritative brand tokens

### Colors

| Token | Hex | Approved role |
|---|---|---|
| Ink | `#231f20` | Primary dark brand color |
| White | `#ffffff` | White/reversed applications |
| Green | `#76bc43` | Primary brand green |
| Orange | `#f69622` | Brand accent orange |

### Typography from the brand book

- Kanit Black: logo use only.
- Kanit Regular: subtext, phone, address, business cards, and similar supporting text.
- Kanit Medium: alternative font weight for miscellaneous design types.
- Avenir Medium: documents, contracts, and important paperwork.
- The brand book also demonstrates Kanit Bold on merchandise, yard signs, and business cards.

## Reference implementation

The extracted design system includes:

- CSS color, typography, spacing, radius, shadow, and motion tokens
- Core components: Badge, Button, Icon, SectionHeading
- Cards: InfoList, ProgramCard, ServiceCard
- Forms: Checkbox, FormField, Input, Select, Textarea
- Marketing: Hero, CTABanner
- Navigation: NavBar, Footer
- Page references: home, about, program, service, contact, and client-portal placeholder

## Correct usage

- Treat the React source as a visual/behavioral specification.
- Rebuild components natively in Etch.
- Preserve semantic HTML, accessible controls, keyboard behavior, focus states, and responsive intent.
- Use Automatic.css utilities only after verifying the installed version and available class names.
- Store reusable content and editorial controls in ACF rather than duplicating hard-coded copy.

## Non-authoritative additions in the reference system

The React package introduces synthesized neutral/status colors, Lucide icons, component radii, shadows, motion values, and content/navigation assumptions. These are not established by the brand book. They may be useful reference choices but cannot override a future UI/build-rules SOT.

## Known authority gap

`SOT-ui-build-rules-pride-in-turf-2026-04-01.txt` is assigned UI/build authority by project governance but is not present. Therefore:

- Exact component behavior not already approved in production/reference remains unresolved.
- Do not claim React class names or component APIs are Etch APIs.
- Do not establish a new global token or component rule merely because it exists in the reference package.
