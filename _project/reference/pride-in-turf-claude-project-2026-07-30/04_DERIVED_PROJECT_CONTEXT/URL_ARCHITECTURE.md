# URL and Page Architecture

> **Status:** DERIVED from the architecture SOT. The architecture file remains authoritative.

## Core pages to keep

- `/`
- `/about-us/`
- `/contact/`
- `/careers/`
- `/lawn-care-programs/`
- `/blog/`
- `/refer-a-friend/`
- `/privacy-policy/`
- `/terms-of-service/`
- `/sitemap/` - keep but noindex
- `/lawn-care-atlanta/` - Atlanta branch hub
- `/lawn-care-hoschton-ga/` - Hoschton branch hub
- `/lawn-care-duluth-ga/` - service-area page only

## Canonical lawn-services parents

- `/lawn-services/lawn-care-programs/`
- `/lawn-services/fungicide-programs/`
- `/lawn-services/lawn-pest-control/`
- `/lawn-services/aeration/`
- `/lawn-services/tree-and-shrub-program/`
- `/lawn-services/soil-testing/`
- `/lawn-services/bed-pre-emergent/`

## Preferred shortened children

The final slug policy in the architecture document shortens redundant child names:

- `/lawn-services/lawn-care-programs/warm-season/`
- `/lawn-services/lawn-care-programs/cool-season/`
- `/lawn-services/lawn-care-programs/split/`
- `/lawn-services/fungicide-programs/bermuda-fungicide/`
- `/lawn-services/fungicide-programs/fescue-fungicide/`
- `/lawn-services/fungicide-programs/zoysia-fungicide/`
- `/lawn-services/lawn-pest-control/mosquito-control/`
- `/lawn-services/lawn-pest-control/flea-tick-control/`
- `/lawn-services/lawn-pest-control/fire-ant-control/`
- `/lawn-services/lawn-pest-control/grub-control/`

## Required redirects explicitly listed

| Legacy URL | Destination |
|---|---|
| `/lawn-care-atlanta/core-aeration/` | `/lawn-services/aeration/` |
| `/lawn-care-atlanta/fungicide-treatments/` | `/lawn-services/fungicide-programs/` |
| `/lawn-care-atlanta/lawn-pest-control/` | `/lawn-services/lawn-pest-control/` |
| `/lawn-care-atlanta/lawn-fertilization/` | `/lawn-care-programs/` |
| `/lawn-care-atlanta/weed-control/` | `/lawn-care-programs/` |
| `/lawn-care-atlanta/overseeding/` | `/lawn-care-programs/` |
| `/healthy-lawn-and-shrub-care/` | `/lawn-services/tree-and-shrub-program/` |
| `/lawn-care-atlanta/core-aeration/donate/` | `/lawn-services/aeration/` unless campaign remains active |
| `/lawn-care-acworth/` | `/lawn-care-atlanta/` |
| `/lawn-care-decatur/` | `/lawn-care-atlanta/` |
| `/lawn-care-dunwoody/` | `/lawn-care-atlanta/` |
| `/lawn-care-kennesaw/` | `/lawn-care-atlanta/` |
| `/lawn-care-mableton-ga/` | `/lawn-care-atlanta/` |
| `/lawn-care-sandy-springs/` | `/lawn-care-atlanta/` |
| `/lawn-care-cumming-ga/` | `/lawn-care-hoschton-ga/` |
| `/lawn-care-gainesville/` | `/lawn-care-hoschton-ga/` |
| `/lawn-care-peachtree-corners/` | `/lawn-care-hoschton-ga/` |

## Implementation cautions

- The ACF export currently defines a separate `lawn-care-programs` CPT rewrite under `lawn-care/`; this does not override the approved architecture.
- The governance file contains an old example using `/lawn-care-services/`; the architecture SOT delegates and operationalizes the current `/lawn-services/` structure.
- Do not change live URLs for minor keyword gains without a documented redirect and internal-link migration plan.
