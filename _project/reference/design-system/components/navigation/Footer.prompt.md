Ink-dark full-width footer — logo + one-line description, program links, contact block (phone/email/address). Mirrors the live site's footer structure.

```jsx
<Footer
  logo={<img src="assets/logo/pride-in-turf-logo.png" alt="Pride In Turf" style={{ height: 32 }} />}
  programLinks={[
    { href: '/lawn-care/', label: 'Lawn Care' },
    { href: '/lawn-care/warm-weather/', label: 'Warm Weather' },
    { href: '/lawn-care/cool-weather/', label: 'Cool Weather' },
    { href: '/lawn-care/mixed/', label: 'Mixed Lawn' },
  ]}
  phone="+1 833-388-8873"
  email="info@prideinturf.com"
  address="1900 GA Hwy 211, Hoschton, GA 30548"
/>
```
Note: the provided logo PNG has a black tagline pill and relies on a light backdrop — on this dark footer, prefer a reversed/white logo lockup if you obtain one (see readme.md caveats).
