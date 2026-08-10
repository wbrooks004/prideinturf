Inline status banner — tinted background, colored border, status icon. Used for form validation summaries, quote-request confirmations/errors, and service-area notices ("We don't currently serve this ZIP code").

```jsx
<Alert variant="success" title="Quote request received">A team member will follow up within one business day.</Alert>
<Alert variant="error" title="Couldn't submit">Check the highlighted fields and try again.</Alert>
<Alert variant="warning" onDismiss={() => setShow(false)}>Saturday appointments require 48-hour notice.</Alert>
```
Variants map to the semantic status tokens (`--color-success/warning/error/info-500/700`), never raw brand green/orange — an orange `Alert` would read as a brand accent, not a warning.
