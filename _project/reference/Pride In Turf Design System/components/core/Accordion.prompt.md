Bordered question/answer stack — one panel open at a time by default. Used for program/service FAQ sections.

```jsx
<Accordion
  items={[
    { question: 'How often is my lawn treated?', answer: 'Most programs run 6\u20138 applications per year, timed to your grass type and the season.' },
    { question: 'Do you serve my area?', answer: 'We serve Northeast Georgia and Metro Atlanta \u2014 see the Areas We Serve section for specifics.' },
  ]}
/>
```
Pass `allowMultiple` to let several panels stay open at once. Each row is a real `<button aria-expanded>` controlling an `aria-controls` panel — keyboard and screen-reader accessible out of the box.
