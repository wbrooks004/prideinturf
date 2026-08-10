Renders one curated brand icon as inline SVG (stroke-based, `currentColor` by default) — use for services, contact/trust chips, and UI chrome.

```jsx
<Icon name="leaf" size={20} />
<Icon name="phone" size={16} color="var(--brand-primary)" />
```

```jsx
<Icon name="star" filled size={16} color="var(--brand-accent)" /> {/* solid rating star */}
```

Variants: any `IconName` in `Icon.d.ts` (31 curated glyphs — no others exist; don't pass arbitrary Lucide names). Confirmed icon set (see readme.md "Iconography") — stroke-only, 2px default weight, rounded caps/joins by default; pass `filled` to render a glyph solid instead (used for active rating stars).
