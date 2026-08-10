Native `<select>` styled to match `Input`, with a themed chevron. Used for "Which program are you interested in?" / turf type / service-area dropdowns on the quote form.

```jsx
<FormField label="Turf type" htmlFor="turf">
  <Select id="turf" placeholder="Select your grass type…" options={['Bermuda', 'Zoysia', 'Fescue', 'Mixed / not sure']} />
</FormField>
```
