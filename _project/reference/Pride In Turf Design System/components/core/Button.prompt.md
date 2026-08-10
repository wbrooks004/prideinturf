The brand's primary call-to-action — Kanit Bold label, 4 visual variants, hover/press states built in (no CSS file needed).

```jsx
<Button variant="primary">Request a Quote</Button>
<Button variant="outline" size="sm" icon={<Icon name="arrow-right" size={16} />}>View program</Button>
<Button as="a" href="/contact/" variant="accent">Start Quote Request</Button>
```

Variants: `primary` (green fill — main CTA), `accent` (orange fill — secondary emphasis), `outline` (bordered, brand-tinted hover), `ghost` (text-only, sunken hover), `inverse` (white-on-dark, for use on the ink/photo hero). Sizes: `sm` / `md` / `lg`. Pass `disabled` or `fullWidth` as needed; `as="a"` + `href` renders a link styled identically.
