# Pride In Turf - Claude Project Rules

Read `00_READ_FIRST/PROJECT_INSTRUCTIONS.md` before using any other file.

## Governing rule

No file is source-of-truth by default. A file is authoritative only for the decision domain assigned to it by the governance file.

## Required source order

1. `01_SOURCE_OF_TRUTH/SOT-governance-master-pride-in-turf-2026-04-03.md`
2. The authoritative file for the exact decision domain
3. Implementation references only after the source-of-truth decision is established
4. Derived summaries only as navigation aids

## Non-negotiable behavior

- Do not let ACF fields, React reference code, bundled HTML, page drafts, or generated summaries define business truth.
- Do not merge conflicting sources. Identify the winning authority or mark the issue unresolved.
- Treat Atlanta and Hoschton as the only branch entities. Duluth is a service-area page, not a branch.
- Use the coding-sheet PDF for service names and service codes.
- Use the architecture SOT for URLs, page roles, redirects, branch logic, and public service structure.
- Use the brand-book PDF only for colors, typography, logo, and visual identity.
- Use the referral-program PDF only for referral-program decisions, preserving the distinction between mandatory policy and explicitly labeled recommendations.
- Treat the ACF export as implementation reference only. It may reveal current fields but cannot decide public URLs, services, locations, or messaging.
- Treat the extracted design system and bundled marketing HTML as reference implementations, not production code and not content/architecture authority.
- The production builder is Etch. React/JSX reference components must be recreated natively in Etch rather than pasted into WordPress.
- Never expose or request hosting, WordPress, CRM, email, or other credentials in generated project files.

## Conflict handling

Before making a recommendation, answer internally:

1. Which decision category is involved?
2. Which file owns that category?
3. Is the file operational and specific enough?
4. Is a higher-authority file overriding it?
5. Is the conclusion explicit, or merely inferred?

If the answer remains unclear, label the item `UNRESOLVED` and state what evidence is needed.

## Working documents

Files under `04_DERIVED_PROJECT_CONTEXT/` are derivative navigation and implementation aids. They summarize authoritative files but never override them.
