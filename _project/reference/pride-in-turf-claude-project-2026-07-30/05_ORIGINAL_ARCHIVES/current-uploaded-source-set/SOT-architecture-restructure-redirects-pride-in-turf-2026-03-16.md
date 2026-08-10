# Pride In Turf Restructure and Redirect Project Sheet

## Project Objective
Restructure the Pride In Turf website so the public site architecture matches the current coded service model and the real branch setup.

This sheet is the working implementation document for:
- site structure
- service architecture
- branch and city page roles
- redirect planning
- cleanup decisions
- implementation order

---

## Source of Truth
This project should only use the following sources of truth for architecture decisions:

### Services and offer structure
- **Codesheet only**

### Real branch locations
- **Atlanta branch**  
  44 Peachtree Pl NE UNIT 821, Atlanta, GA 30309, United States
- **Hoschton branch**  
  1900 GA Hwy 211, Hoschton, GA 30548, United States

### Important clarification
- **Duluth is not a branch location**
- Duluth may remain as a **service-area city page** if it has value
- Duluth should not be treated as a location entity in schema, footer NAP, or branch logic

---

## Core Strategy

### Branch pages
Only these should be treated as true location / branch pages:
- `/lawn-care-atlanta/`
- `/lawn-care-hoschton-ga/`

### Service-area city pages
These are optional supporting local SEO pages, not branch pages.
Example:
- `/lawn-care-duluth-ga/`

### Canonical service architecture
Canonical services should be handled through the `lawn-services` CPT and aligned to the codesheet.

### What to avoid
Do not rebuild the site around:
- generic legacy service pages
- dozens of city-service combinations
- false branch pages
- broad landscaping-style service lists that do not match the codesheet

---

## Recommended End-State Site Architecture

### Core pages
- `/`
- `/about-us/`
- `/contact/`
- `/careers/`
- `/lawn-care-programs/`
- `/lawn-care-atlanta/`
- `/lawn-care-hoschton-ga/`
- `/lawn-care-duluth-ga/` only as a service-area page

### Canonical `lawn-services` CPT structure

#### Parent pages
- `/lawn-services/lawn-care-programs/`
- `/lawn-services/fungicide-programs/`
- `/lawn-services/lawn-pest-control/`
- `/lawn-services/aeration/`
- `/lawn-services/tree-and-shrub-program/`
- `/lawn-services/soil-testing/`
- `/lawn-services/bed-pre-emergent/`

#### Program children
- `/lawn-services/lawn-care-programs/warm-season-lawn-care/`
- `/lawn-services/lawn-care-programs/cool-season-lawn-care/`
- `/lawn-services/lawn-care-programs/split-lawn-care/`

#### Fungicide children
- `/lawn-services/fungicide-programs/bermuda-fungicide-program/`
- `/lawn-services/fungicide-programs/fescue-fungicide-program/`
- `/lawn-services/fungicide-programs/zoysia-fungicide-program/`

#### Pest control children
- `/lawn-services/lawn-pest-control/mosquito-control/`
- `/lawn-services/lawn-pest-control/flea-and-tick-control/`
- `/lawn-services/lawn-pest-control/fire-ant-control/`
- `/lawn-services/lawn-pest-control/grub-control/`

### Aeration note
Use one main aeration page unless there is a strong business or SEO reason to split out separate standalone public pages for spring, fall, and liquid aeration.

---

## Codesheet-Aligned Public Service Model

### Keep as public-facing core offers
- Lawn Care Programs
- Warm Season Lawn Care
- Cool Season Lawn Care
- Split Lawn Care
- Fungicide Programs
- Bermuda Fungicide Program
- Fescue Fungicide Program
- Zoysia Fungicide Program
- Lawn Pest Control
- Mosquito Control
- Flea & Tick Control
- Fire Ant Control
- Grub Control
- Aeration
- Tree and Shrub Program
- Soil Testing
- Bed Pre-Emergent

### Treat as internal, secondary, section-level, or quote logic items
- Select Customer Lawn Care
- Army Worm Preventative
- Plant Growth Regulators
- Lime
- Phosphorus / Potash correction items
- Deep root or arbor-type special items
- Root collar or highly specialized tree items

---

## Content and Messaging Rules

### The website should not present Duluth as a branch
Do not use:
- Duluth NAP
- Duluth branch schema
- footer or contact section framing Duluth as a real office
- internal language like "our Duluth location"

### The website should not present non-coded legacy services as core offers
Remove or downgrade content about:
- mowing
- landscaping packages
- artificial turf
- hydroseeding
- irrigation installation
- drainage solutions
- retaining walls
- gutter cleaning
- pressure washing
- snow elimination

### Branch page roles

#### Atlanta branch page
Should include:
- Atlanta branch identity
- real branch information
- service area explanation
- branch-specific proof and trust signals
- links to service canonicals

#### Hoschton branch page
Should include:
- Hoschton branch identity
- real branch information
- service area explanation
- branch-specific proof and trust signals
- links to service canonicals

#### Duluth city page
Should include:
- service-area positioning only
- no branch framing
- no standalone NAP
- conversion flow that routes to the correct real branch

---

## Final URL Map

## Keep and rewrite

| Current URL | Action | Final Role | Notes |
|---|---|---|---|
| `/` | Keep | Homepage | Rewrite positioning and remove false location signals |
| `/about-us/` | Keep | About page | Keep live |
| `/contact/` | Keep | Contact page | Keep live |
| `/careers/` | Keep | Careers page | Keep live |
| `/lawn-care-programs/` | Keep | Main public programs hub | Use as broad commercial hub |
| `/blog/` | Keep | Blog archive | Keep live |
| `/refer-a-friend/` | Keep | Referral landing page | Keep live |
| `/privacy-policy/` | Keep | Legal page | Keep live |
| `/terms-of-service/` | Keep | Legal page | Keep live |
| `/sitemap/` | Keep | HTML sitemap | Keep but noindex |
| `/lawn-care-atlanta/` | Keep | Atlanta branch hub | Real branch |
| `/lawn-care-hoschton-ga/` | Keep | Hoschton branch hub | Real branch |
| `/lawn-care-duluth-ga/` | Keep | City / service-area page only | Not a branch |

## Redirect map

| Current URL | Redirect To | Reason |
|---|---|---|
| `/lawn-care-atlanta/core-aeration/` | `/lawn-services/aeration/` | Codesheet-aligned consolidation |
| `/lawn-care-atlanta/fungicide-treatments/` | `/lawn-services/fungicide-programs/` | Generic fungicide becomes structured fungicide silo |
| `/lawn-care-atlanta/lawn-pest-control/` | `/lawn-services/lawn-pest-control/` | Strong 1:1 codesheet fit |
| `/lawn-care-atlanta/lawn-fertilization/` | `/lawn-care-programs/` | Fertilization belongs inside coded programs |
| `/lawn-care-atlanta/weed-control/` | `/lawn-care-programs/` | Weed control belongs inside coded programs |
| `/lawn-care-atlanta/overseeding/` | `/lawn-care-programs/` | No standalone public canonical recommended |
| `/healthy-lawn-and-shrub-care/` | `/lawn-services/tree-and-shrub-program/` | Best fit for tree and shrub service |
| `/lawn-care-atlanta/core-aeration/donate/` | `/lawn-services/aeration/` | Redirect unless campaign remains active |
| `/lawn-care-acworth/` | `/lawn-care-atlanta/` | Consolidate weak city page into Atlanta branch hub |
| `/lawn-care-decatur/` | `/lawn-care-atlanta/` | Consolidate weak city page into Atlanta branch hub |
| `/lawn-care-dunwoody/` | `/lawn-care-atlanta/` | Consolidate weak city page into Atlanta branch hub |
| `/lawn-care-kennesaw/` | `/lawn-care-atlanta/` | Consolidate weak city page into Atlanta branch hub |
| `/lawn-care-mableton-ga/` | `/lawn-care-atlanta/` | Consolidate weak city page into Atlanta branch hub |
| `/lawn-care-sandy-springs/` | `/lawn-care-atlanta/` | Consolidate weak city page into Atlanta branch hub |
| `/lawn-care-cumming-ga/` | `/lawn-care-hoschton-ga/` | Consolidate northeast city page into Hoschton branch hub |
| `/lawn-care-gainesville/` | `/lawn-care-hoschton-ga/` | Consolidate northeast city page into Hoschton branch hub |
| `/lawn-care-peachtree-corners/` | `/lawn-care-hoschton-ga/` | Consolidate northeast city page into Hoschton branch hub |

---

## Local Sitemap Rules for Remaining Current URLs

Apply these rules only to URLs that are already present in the current local sitemap.

### Redirect remaining Atlanta-side city pages to Atlanta
Use for current URLs tied to cities such as:
- Marietta
- Smyrna
- Roswell
- Woodstock
- Canton
- Vinings
- Brookhaven
- Buckhead
- Sandy Springs
- Dunwoody
- Decatur
- Acworth
- Kennesaw
- Mableton

### Redirect remaining northeast / Hoschton-side city pages to Hoschton
Use for current URLs tied to cities such as:
- Gainesville
- Cumming
- Buford
- Braselton
- Winder
- Auburn
- Lawrenceville
- Suwanee
- Johns Creek
- Peachtree Corners

### Special exception
- Keep `/lawn-care-duluth-ga/` live as a service-area page unless performance data later proves it should be redirected

---

## Blog and Post Sitemap Rules

### Keep live by default
Do not bulk redirect blog content.

Keep articles live unless a post is:
- obsolete
- duplicate
- thin and commercially useless

### Current special case
- `/healthy-lawn-and-shrub-care/` should be redirected to the new Tree and Shrub program page

---

## Implementation Order

### Phase 1: Lock structure
- Confirm Atlanta and Hoschton as the only branch entities
- Confirm Duluth is service-area only
- Confirm codesheet is the only service source of truth

### Phase 2: Build destination pages
Build or prepare these destination pages first:
- `/lawn-services/aeration/`
- `/lawn-services/fungicide-programs/`
- `/lawn-services/lawn-pest-control/`
- `/lawn-services/tree-and-shrub-program/`
- any additional CPT pages approved for launch

### Phase 3: Rewrite kept pages
Rewrite:
- homepage
- Atlanta branch page
- Hoschton branch page
- Duluth city page
- lawn care programs page

### Phase 4: Implement redirects
Start with:
- old Atlanta child service pages
- obvious thin city pages
- special-case commercial pages

### Phase 5: Clean technical signals
- fix internal links
- update menus
- update breadcrumbs
- update schema
- remove false Duluth branch references
- ensure XML sitemap reflects final structure

---

## Open Decisions

### Need to confirm
- whether any remaining local sitemap city pages should stay live based on rankings or backlinks
- whether aeration should remain one page or split by season / method
- whether Select Customer Lawn Care needs any public-facing explanation
- whether any specialized tree or nutrient add-ons deserve public sections only, not full pages

---

## Final Operating Rule
Any URL or content block that conflicts with the codesheet or the real branch setup should be treated as legacy content and either:
- rewritten
- reclassified
- consolidated
- redirected

Do not preserve old architecture just because it already exists.

## Recommended final slug policy

Use this rule set:

Keep the approved hierarchy
branch pages
one Duluth service-area page
lawn-services CPT
parent/child service directories
Keep parent slugs fully descriptive
especially branch pages and parent service buckets
Trim repeated words only on child slugs
where the parent folder already provides context
Use lowercase and hyphens only
no underscores
no unnecessary parameters
Do not reopen live URLs for tiny gains
URL-path keywords alone are a weak signal
stability, redirects, and clean internal linking matter more

### Direct answer
#### Most recommended

Keep the current approved top-level structure and only shorten a handful of redundant child slugs.

#### Not recommended

Do not shorten:

/lawn-services/ to /services/
/lawn-care-atlanta/ to /atlanta/
/lawn-care-hoschton-ga/ to /hoschton/

That would save characters, but it is not the best SEO/architecture tradeoff.

### Best version to move forward with
#### Keep exactly
/
/about-us/
/contact/
/careers/
/lawn-care-programs/
/lawn-care-atlanta/
/lawn-care-hoschton-ga/
/lawn-care-duluth-ga/
/lawn-services/

all parent service bucket URLs as currently planned

### Shorten only these children
warm-season-lawn-care → warm-season
cool-season-lawn-care → cool-season
split-lawn-care → split
bermuda-fungicide-program → bermuda-fungicide
fescue-fungicide-program → fescue-fungicide
zoysia-fungicide-program → zoysia-fungicide
flea-and-tick-control → flea-tick-control