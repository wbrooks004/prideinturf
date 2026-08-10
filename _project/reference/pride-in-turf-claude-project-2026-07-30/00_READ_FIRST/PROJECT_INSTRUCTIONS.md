# Pride In Turf Claude Project Instructions

**Package date:** 2026-07-30  
**Purpose:** Give Claude a controlled, current project knowledge base for the Pride In Turf WordPress redesign.

## Start here

Use this sequence for every task:

1. Identify the decision domain: governance, architecture/URL/location, service canon, referral program, brand identity, ACF implementation, or visual reference.
2. Open the governing source file for that domain.
3. Run the source-of-truth preflight in `SOURCE_AUTHORITY_MAP.md`.
4. Consult implementation references only after the authoritative decision is known.
5. Use derived documents for orientation, not as authority.
6. State unresolved conflicts instead of guessing.

## Current project direction

- WordPress marketing site.
- Etch is the primary builder.
- Bricks Builder is legacy-only where it already exists and should not drive new architecture.
- Automatic.css is the utility/design framework.
- ACF Pro supplies structured content.
- WS Form Pro handles forms.
- WPCodeBox/CodeBox handles controlled custom code.
- Rank Math handles SEO metadata/schema integrations.
- Polylang is available for multilingual requirements.
- The design-system React files are fidelity references, not code to paste into Etch.

## Critical truth

- Real branches: Atlanta and Hoschton.
- Duluth: service area only, never a branch entity.
- Service truth: coding-sheet PDF.
- Public architecture and redirects: architecture SOT.
- Brand tokens: brand-book PDF only.
- ACF export: technical snapshot only.

## Known gap

The governance model assigns UI/build authority to `SOT-ui-build-rules-pride-in-turf-2026-04-01.txt`, but that file was not available in this package. Therefore, exact UI component behavior that is not directly established by the brand book or an approved existing implementation remains unresolved. See `04_DERIVED_PROJECT_CONTEXT/CONFLICT_REGISTER.md`.

## Security exclusion

Credentials, server passwords, WordPress logins, CRM access, API secrets, and private operational login data were intentionally excluded.
