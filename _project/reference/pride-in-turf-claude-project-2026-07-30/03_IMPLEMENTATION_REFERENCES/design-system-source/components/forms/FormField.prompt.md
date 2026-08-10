Label + control + hint/error wrapper — wrap any `Input` / `Select` / `Textarea` / `Checkbox` in one for consistent label spacing on the quote-request form.

```jsx
<FormField label="Phone" htmlFor="phone" required hint="We'll text you a confirmation.">
  <Input id="phone" type="tel" placeholder="(833) 388-8873" />
</FormField>
<FormField label="Email" error="Enter a valid email address.">
  <Input type="email" />
</FormField>
```
