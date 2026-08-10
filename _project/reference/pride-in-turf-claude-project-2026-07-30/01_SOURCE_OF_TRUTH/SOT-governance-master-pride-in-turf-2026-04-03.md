SOT-pride-in-turf-project-governance-master.md

#SOT Pride in Turf Project Governance Master
Restructure sheet owns architecture and location truth
Codesheet owns service truth
Website rules own UI/build rules
Style guide owns brand tokens
Redesign plan owns messaging direction only
ACF export is implementation reference only
Info file is lookup only
Generated packs are never source of truth

## approved branch/location model
Atlanta and Hoschton/Braselton locations. Duluth is not an actual location, more of a service area.

## approved service model
coding sheet is from real green crm software the company uses. it is the actual list of services and add-ons.

## approved URL model
example: https://www.prideinturf.com/lawn-care-services/overseeding

## authority order across files
governance-master.md is authority. 
pride_in_turf_restructure_and_redirect_project_sheet.md
Coding Sheet - Sheet1 (1).pdf
pride_in_turf-website-rules.txt
Pride-In-Turf Style Guide.md
pride-in-turf--acf-export--20260316.json
pride-in-turf--info-2026-03-16.md
pride_in_turf--audience-messaging-and-lawn_services_cpt-content-pack.md
Pride_in_Turf_Referral_Program_Clicki_Integration.pdf

## deprecated files list
pride_in_turf_updated_redesign_plan_v_2.md

### soft-deprecated files list
pride_in_turf--audience-messaging-and-lawn_services_cpt-content-pack.md (kept but not source of truth)
pride-in-turf--info-2026-03-16.md (reference only, not for architecture or messaging authority, split into controlled reference files. Only for contact lookup, social profile lookup, business details.)
Pride-In-Turf Style Guide.md (only use for brand colors, typography, and logo/visual identity.)

## conflict resolution rule
When two or more project files conflict, use this order of precedence:

Project Governance / Source-of-Truth file
Implementation and architecture files
Examples: restructure plan, redirect map, approved sitemap, canonical URL rules, location rules, schema rules
Structured source data
Examples: approved coding sheet, approved field map, approved business data file
Design system and website rules
Style guide and messaging documents
Derivative outputs
Examples: content packs, page drafts, generated summaries, brainstorming docs
Older, ambiguous, or mixed-purpose reference files

### Additional rules:

Specific beats general. A file written for one exact decision beats a broader strategy file.
Operational beats aspirational. A file that defines what must be built beats a file describing what would be ideal.
Explicit beats inferred. A directly stated rule beats assumptions, summaries, or generated interpretations.
Newer only wins if it is also authoritative. Recency alone does not make a file correct.
Derivative files never create truth. Generated content, summaries, and output packs can reflect source truth but cannot redefine it.
If authority is unclear, mark the issue unresolved instead of guessing.
Do not merge conflicting rules into a compromise unless an authority file explicitly does so.

## rules for what files can and cannot be used as source-of-truth
A file may be used as source-of-truth only if all of the following are true:
it is explicitly authoritative for the decision being made
it belongs to the correct decision domain
it is operational, meaning it defines what must actually be built, enforced, or used
it is specific enough to govern that exact issue
it is not deprecated, soft-deprecated, archived, draft, or reference-only
it is not overridden by a higher-authority file
it does not conflict with this governance file

A file cannot be used as source-of-truth if any of the following are true:
it is a generated output
it is a content pack
it is a page draft
it is a brainstorming document
it is a summary or interpretation
it is a mixed-purpose reference file
it is a raw export
it is a lookup file
it is soft-deprecated or deprecated
it was created under incomplete source access
it is being used outside its assigned authority area
domain ownership rule

Each file may act as source-of-truth only within its assigned domain.
SOT-pride-in-turf-project-governance-master.md owns authority rules, conflict resolution, approved models, and file status
pride_in_turf_restructure_and_redirect_project_sheet.md owns architecture, location truth, page roles, redirects, URL structure, and implementation cleanup
Coding Sheet - Sheet1 (1).pdf owns service truth, service naming, and service/add-on canon
pride_in_turf-website-rules.txt owns UI/build rules and component behavior
Pride-In-Turf Style Guide.md owns brand colors, typography, and logo/visual identity only
pride_in_turf_updated_redesign_plan_v_2.md may guide messaging direction only where it does not conflict with higher-authority files
pride-in-turf--acf-export--20260316.json is implementation reference only and may not define public site truth
pride-in-turf--info-2026-03-16.md is lookup/reference only and may not define architecture, messaging, or service truth
pride_in_turf--audience-messaging-and-lawn_services_cpt-content-pack.md is derivative only and may not define truth
Pride_in_Turf_Referral_Program_Clicki_Integration.pdf owns referral-program rules only
prohibited source types

The following may never be used to define architecture, branch truth, location truth, service canon, URL rules, redirect rules, schema entities, or public site structure:

generated content packs
page drafts
summaries
brainstorming files
mixed-purpose reference files
raw exports
lookup files
deprecated files
soft-deprecated files
style guides used outside brand-token decisions
ACF exports used to decide business truth
messaging documents used to override implementation files
source-of-truth preflight test

Before using any file as authority, confirm all of the following:

Does this file own the decision category?
Is it allowed to act as source-of-truth for that category?
Is it more authoritative than any competing file?
Is it not deprecated, soft-deprecated, derivative, or reference-only?
Is it being used within its approved scope?
Is there no higher-priority file that overrides it?

If any answer is no, the file cannot be used as source-of-truth.

enforcement rule

Do not infer truth from convenience, file recency, keyword overlap, or technical field availability.

Do not let a lower-authority file override a higher-authority file just because it is more detailed, newer, or easier to retrieve.

Do not blend conflicting files into a compromise. One file must win based on authority. If no file clearly wins, mark the issue unresolved.

final rule

No file is source-of-truth by default.

A file is source-of-truth only when this governance file assigns it authority for a specific decision area.
