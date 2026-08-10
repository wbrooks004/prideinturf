Brand-accented native checkbox (uses CSS `accent-color`, no custom SVG checkmark needed). Consent / opt-in line on the quote form.

```jsx
<Checkbox id="consent" label="Text me about my quote (standard rates may apply)." checked={consent} onChange={(e) => setConsent(e.target.checked)} />
```
