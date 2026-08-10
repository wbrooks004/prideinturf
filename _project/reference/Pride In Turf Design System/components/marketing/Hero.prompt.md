Full-bleed hero band — photo + flat ink scrim (no gradient) + eyebrow/heading/subhead + CTAs + checkmark bullets. Falls back to a solid dark-green field when no `imageUrl` is supplied (never invents/generates a stock photo).

```jsx
<Hero
  eyebrow="Metro Atlanta Lawn Care"
  heading="Programs built for Georgia lawns."
  subhead="Pride In Turf helps homeowners build healthier turf with lawn care programs, aeration, fungicide protection, pest control, and weed control."
  primaryCta={<Button variant="inverse" icon={<Icon name="arrow-right" size={16} />}>Request a Free Quote</Button>}
  secondaryCta={<Button as="a" href="/lawn-care/" variant="ghost" style={{ color: 'var(--text-on-dark)' }}>View Lawn Care Programs</Button>}
  infoItems={['Warm weather, cool weather, and mixed lawn care programs', 'Serving Metro Atlanta and Northeast Georgia']}
  imageUrl="assets/imagery/your-turf-photo.jpg"
/>
```
The real hero photo (`Turf-Care-Management.jpg`) could not be fetched into this project — see readme.md caveats; swap in real photography via `imageUrl` before shipping.
