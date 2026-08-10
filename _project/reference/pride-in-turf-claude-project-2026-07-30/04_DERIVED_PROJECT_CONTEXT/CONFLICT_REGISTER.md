# Conflict Register

> **Status:** DERIVED. This file records conflicts; it does not resolve them unless the governing sources clearly establish a winner.

## 1. Missing UI/build-rules authority

- Governance assigns UI/build rules to `SOT-ui-build-rules-pride-in-turf-2026-04-01.txt`.
- That file is not available in the package.
- **Status:** UNRESOLVED for exact UI/component behavior beyond the brand book and approved references.

## 2. `/lawn-care-services/` example versus `/lawn-services/` architecture

- Governance contains an old URL example using `/lawn-care-services/overseeding`.
- The operational architecture SOT defines `/lawn-services/` and an explicit final map.
- Governance also delegates URL architecture to the restructure sheet.
- **Winner:** Architecture SOT for implementation. Do not use `/lawn-care-services/` from the stale example.

## 3. ACF lawn-care program rewrite conflict

- ACF currently defines the `lawn-care-programs` CPT under `lawn-care/`.
- Architecture defines `/lawn-care-programs/` as a hub and program children under `/lawn-services/lawn-care-programs/`.
- ACF is reference-only.
- **Winner:** Architecture SOT. Technical routing/rewrite changes require implementation planning.

## 4. Design-system service/navigation conflict

The design-system readme and UI data describe:

- Warm Weather, Cool Weather, Mixed Lawn
- Five main services including Weed Control
- A navigation structure that omits Tree and Shrub and Bed Pre-Emergent

Higher-authority sources define Warm Season, Cool Season, Split Lawn and a broader codesheet-aligned hierarchy. Weed control is not recommended as a standalone canonical page.

- **Winner:** Coding sheet for names/codes and architecture SOT for public hierarchy/navigation.

## 5. Select Customer Lawn Care status

- Coding sheet includes `LS - Select Customer Lawn Care`.
- Architecture treats it as internal/secondary/section-level/quote logic.
- Design-system readme states it is discontinued.
- The design-system assertion is not authoritative.
- **Status:** Public-page decision resolved as non-core by architecture; actual operational “discontinued” status remains UNRESOLVED without business confirmation.

## 6. Contact information and hours

- Design-system reference includes phone, email, and hours sourced from a live-site review.
- ACF includes an email default, but ACF is not business-truth authority.
- No controlled business-details SOT is included.
- **Status:** UNRESOLVED. Verify before publishing.

## 7. Duplicate Lawn Care Program Details field groups

- ACF export includes two groups with the same title.
- One appears nearly empty; one contains the full schema.
- **Status:** Technical cleanup required after confirming active field usage.

## 8. Page-ID assignments

- Several ACF groups target specific numeric page IDs.
- The export does not establish the current title/URL mapping for every ID.
- **Status:** UNRESOLVED until verified in WordPress.

## 9. Referral recommendations versus mandatory policy

- Referral PDF includes public terms and internal policy plus sections explicitly labeled “Recommended.”
- **Rule:** Do not convert recommended tiers or Clicki settings into mandatory policy without approval.
