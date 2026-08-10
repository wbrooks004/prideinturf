Small chevron-separated path trail — sits above the page `<h1>` on any nested page (service detail, program detail, blog post).

```jsx
<Breadcrumbs items={[
  { href: '/', label: 'Home' },
  { href: '/lawn-services/', label: 'Lawn Services' },
  { label: 'Aeration' },
]} />
```
Last item has no `href` and is rendered as the current page (`aria-current="page"`), not a link.
