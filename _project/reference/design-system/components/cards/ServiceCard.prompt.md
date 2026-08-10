Lighter-weight icon+text block (no card border/shadow) for the "turf-focused services" grid (Aeration, Fungicide Treatments, Pest Control, Weed Control, Soil Testing) — deliberately plainer than `ProgramCard` to keep programs as the visual hero of the page.

```jsx
<ServiceCard icon={<Icon name="sprout" size={20} />} title="Aeration" description="Support stronger root growth and help compacted lawns breathe." href="/lawn-services/aeration/" />
```

Used in a 4-up grid, no outer wrapper needed — the grid gap provides separation.
