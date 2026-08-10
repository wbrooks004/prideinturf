# Etch Implementation SOP

> **Status:** DERIVED working procedure. It does not replace the missing UI/build-rules SOT.

## 1. Preflight the decision

1. Identify the page or component role.
2. Confirm its URL and entity type in the architecture SOT.
3. Confirm services/codes in the coding-sheet PDF.
4. Confirm brand tokens in the brand book.
5. Inspect ACF only after business truth is established.
6. Record unresolved conflicts before building.

## 2. Define the content source

For each piece of content, decide whether it is:

- Global option data
- Page-level ACF data
- CPT data
- Relationship/query-loop data
- Static structural text

Do not hard-code reusable business content that editors must maintain.

## 3. Build the structure natively in Etch

- Create semantic sections and containers.
- Use headings in a valid document hierarchy.
- Create reusable Etch components for recurring patterns.
- Use query loops for services, programs, reviews, and other repeated content.
- Map ACF fields deliberately; do not bind fields merely because they exist.
- Reproduce reference component states and responsive intent without importing React.

## 4. Apply styling

- Start with authoritative brand colors and type rules.
- Use Automatic.css utilities after verifying the installed class set.
- Add project-specific classes only when a reusable semantic component needs them.
- Avoid one-off selectors tied to generated builder markup when a stable class/component is possible.
- Preserve visible focus, touch targets, contrast, reduced-motion handling, and keyboard operation.

## 5. Configure SEO and schema

- Use Rank Math fields or approved integrations.
- Branch schema only for Atlanta and Hoschton.
- Duluth is service-area content only.
- Canonicals, breadcrumbs, menus, and sitemap entries must match the approved URL model.
- Do not generate a service entity that is absent from the coding sheet/public architecture.

## 6. Configure forms

- Use WS Form Pro.
- Validate required fields server-side.
- Include clear success/error states.
- Avoid exposing form endpoints or secrets in public documentation.
- Confirm routing, notifications, consent language, spam controls, and data retention with the business.

## 7. Quality assurance

- Desktop, tablet, and mobile layout
- Keyboard and focus navigation
- Heading hierarchy and landmarks
- Form validation and delivery
- Dynamic fields with empty-state behavior
- Internal links, breadcrumbs, canonicals, and redirects
- Branch/service schema correctness
- Image alt text and media performance
- No legacy Duluth branch or non-coded service references

## 8. Handoff

Document:

- Template/component names
- ACF dependencies
- Query conditions
- Custom code snippets
- SEO/schema configuration
- Redirects added
- Known unresolved items
- Rollback steps
