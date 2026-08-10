---
name: pride-in-turf-design
description: Use this skill to generate well-branded interfaces and assets for Pride In Turf, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.

## What's in here
- `readme.md` — company/product context, content voice rules, visual foundations, iconography, and open caveats. Read this first.
- `styles.css` — single CSS entry point (tokens + base resets + Kanit `@font-face`).
- `tokens/` — colors, typography, spacing, effects (radius/shadow/motion) as CSS custom properties.
- `assets/` — the one provided logo file, vendored icon SVGs, and the original brand book PDF.
- `guidelines/` — small specimen cards for every foundation (colors, type, spacing, effects, icons, logo).
- `components/core|cards|forms|navigation|marketing/` — React UI primitives (Button, Badge, Icon, SectionHeading, ProgramCard, ServiceCard, InfoList, form fields, NavBar, Footer, Hero, CTABanner).
- `ui_kits/marketing-site/` — click-through recreation of the live site: home, a program page, a service page, and the quote-request flow.

## Non-negotiable brand rules (see readme.md for full detail)
- Colors: `#76bc43` green (primary), `#f69622` orange (accent), `#231f20` ink, white. No invented hues beyond the OKLCH-synthesized tints/shades already in `tokens/colors.css`.
- Type: Kanit only. **Black/900 is the logo wordmark ONLY — never use it for headings or UI.** Bold/700 for headings & CTAs, Medium/500 for eyebrows/labels, Regular/400 for body.
- Voice: plain-spoken, consultative, sentence case, no emoji, no exclamation points, no invented stats/testimonials. Don't market mowing/landscaping/irrigation as core offers — this is a program-based turf-care company, not a general lawn service.
- No gradients, no glassmorphism/blur chrome, no bouncy motion — flat surfaces, soft restrained shadows, 140–360ms ease-out only.
