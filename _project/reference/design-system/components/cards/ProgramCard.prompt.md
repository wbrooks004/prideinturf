A boxed, bordered card for one of the 3 lawn care programs (Warm Weather, Cool Weather, Mixed Lawn) — the repeating card shape from the live site's "Lawn Care Programs" section. Lifts on hover.

```jsx
<ProgramCard
  icon={<Icon name="sun" size={22} />}
  title="Warm Weather"
  description="For warm-season turf that needs season-timed care through active growing periods."
  href="/lawn-care/warm-weather/"
/>
```

Always used in a 3-up grid (see `ui_kits/marketing-site`). For services (Aeration, Fungicide Treatments, Pest Control, Weed Control, Soil Testing) use `ServiceCard` instead — lighter weight, no card chrome.
