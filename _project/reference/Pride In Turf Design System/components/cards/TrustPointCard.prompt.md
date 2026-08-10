Minimal icon + claim, no card chrome (no border/shadow) — for a row of short trust signals under a hero or above a footer.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-8)' }}>
  <TrustPointCard align="center" icon="calendar" title="Serving Georgia since 2005" />
  <TrustPointCard align="center" icon="map-pin" title="Hoschton & Atlanta based" description="Two service operations covering North Georgia and Metro Atlanta." />
  <TrustPointCard align="center" icon="shield-check" title="Program-based, not one-size-fits-all" />
</div>
```
Only use real, approved claims (see readme.md content fundamentals) — never invented stats or awards.
