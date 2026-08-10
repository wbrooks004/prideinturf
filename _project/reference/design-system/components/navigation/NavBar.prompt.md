Sticky site header — logo, centered nav with dropdowns for Lawn Care and Lawn Services, and a single primary-CTA button on the right that **becomes the mobile menu toggle** below `mobileBreakpoint` (same slot, not a second button) — the actual CTA moves inside the mobile panel. Measures its own container width (`ResizeObserver`), not the window, so it behaves correctly inside cards/kits of any size.

```jsx
<NavBar
  logo={<img src="assets/logo/pride-in-turf-logo.png" alt="Pride In Turf" style={{ height: 36 }} />}
  links={[
    { href: '/about/', label: 'About' },
    { href: '/lawn-care/', label: 'Lawn Care', children: [
      { href: '/lawn-care/warm-weather/', label: 'Warm Weather' },
      { href: '/lawn-care/cool-weather/', label: 'Cool Weather' },
      { href: '/lawn-care/mixed/', label: 'Mixed Lawn' },
    ]},
    { href: '/lawn-services/', label: 'Lawn Services', children: [
      { href: '/lawn-services/aeration/', label: 'Aeration' },
      { href: '/lawn-services/fungicide-treatments/', label: 'Fungicide Treatments' },
      { href: '/lawn-services/pest-control/', label: 'Pest Control' },
      { href: '/lawn-services/weed-control/', label: 'Weed Control' },
      { href: '/lawn-services/soil-testing/', label: 'Soil Testing' },
    ]},
    { href: '/client-portal/', label: 'Client Portal' },
  ]}
  activeHref="/lawn-care/warm-weather/"
  onCtaClick={() => {}}
/>
```

Desktop: dropdown children open on hover (small close-delay to survive the gap to the flyout). Mobile: each parent with children becomes a tap-to-expand accordion row; the real CTA button appears full-width at the bottom of the open panel.
