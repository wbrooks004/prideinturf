Renders one curated brand icon as inline SVG (stroke-based, `currentColor` by default) — use for services, contact/trust chips, and UI chrome.

```jsx
<Icon name="leaf" size={20} />
<Icon name="phone" size={16} color="var(--brand-primary)" />
```

Variants: any `IconName` in `Icon.d.ts` (21 curated glyphs — no others exist; don't pass arbitrary Lucide names). Substituted icon set (see readme.md "Iconography") — stroke-only, 2px default weight, rounded caps/joins.
