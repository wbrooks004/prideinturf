# Marketing Site UI Kit — Pride In Turf

Click-through recreation of the live marketing site (prideinturf.com): home, a program detail page, a service detail page, and the quote-request flow. Composed entirely from `components/` — no one-off styling.

## Files
- `index.html` — loads React/Babel + the compiled design-system bundle + these files in order.
- `siteData.js` — real content (nav, programs, services, contact info) matching the confirmed IA (2026-07-11): Lawn Care post type = 3 programs (Select discontinued, removed everywhere); Lawn Services post type = 5 main services in the nav dropdown (Aeration, Fungicide Treatments, Pest Control, Weed Control, Soil Testing).
- `App.jsx` — shell: persistent `NavBar` + `Footer`, lightweight client-side "router" (plain `useState`, no library) that intercepts internal `<a>` clicks so the kit feels like a real click-through site. Routes: `/`, `/about/`, `/contact/`, `/client-portal/`, plus every program/service href.
- `HomePage.jsx` — hero, quote teaser band, 3 programs, 5 services, closing CTA band.
- `ProgramPage.jsx` — generic detail page for any of the 3 programs (green-tinted header).
- `ServicePage.jsx` — generic detail page for any of the 5 services (orange-tinted header), shows sub-services where they exist (e.g. Aeration → Spring/Fall).
- `AboutPage.jsx` — real "About" copy (founding, approach) + the two real branch descriptions (Hoschton, Atlanta).
- `ClientPortalPage.jsx` — intentionally a placeholder card with a disclaimer — no client-portal provider/login flow was supplied in source, so nothing was invented. Swap for a real embed/redirect.
- `ContactPage.jsx` — the quote-request form (name/phone/email/city/turf type/program/notes/consent) with a working fake-submit → confirmation state.

## Navigation structure (confirmed)
`NavBar` renders: About · Lawn Care (dropdown: Warm Weather, Cool Weather, Mixed Lawn) · Lawn Services (dropdown: Aeration, Fungicide Treatments, Pest Control, Weed Control, Soil Testing) · Client Portal · one primary-CTA button. Below the mobile breakpoint, that same CTA button becomes the hamburger menu toggle — the actual CTA reappears full-width inside the open mobile panel. See `components/navigation/NavBar.jsx`.

## Known gaps (see readme.md at project root for full caveats)
- Real client photography is now wired in via `<image-slot src="...">` across Hero, ProgramCard, ServiceCard, LocationCard, and blog thumbnails — sourced from your uploaded image library. No photo existed for Soil Testing specifically; that slot is left empty (still drag-and-drop fillable).
- Sample blog posts use generic turf photos as placeholders since no real posts exist yet.
- Per-program detail copy beyond the one-line description doesn't exist in source; the detail page falls back to the approved company "About" paragraph + the real core-service checklist rather than invented specifics.
- `ClientPortalPage` has no real destination/provider — it's a labeled placeholder, not a functioning login.
