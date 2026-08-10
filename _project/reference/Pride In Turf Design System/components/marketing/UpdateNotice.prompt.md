Homepage "Pride In Turf Update" notices section — fed by the real **Company Updates** ACF options page (`enable_company_updates`, `company_update_type`, `company_update_label`/`_heading`/`_message`/`_cta_label`/`_cta_link`, `company_update_related_service`, `start_date`/`end_date`, `display_priority`). See `handoff/dynamic-data-map.md`.

The page must gate the **entire section** on `enable_company_updates` being true AND the current date falling within `start_date`/`end_date` — hide it completely rather than rendering an empty or expired notice, same fallback philosophy as everywhere else in this system.

`priority="important"` (from `display_priority`) is the one deliberate place this system fills a background with the orange accent (see `guidelines/color-ratio.html`) — reserve it for genuinely urgent notices (a watering restriction, a service disruption), not routine ones, which should stay `priority="normal"`.

```jsx
<UpdateNotice
  type="drought"
  heading="Stage 2 watering restrictions now in effect"
  message="Hoschton and surrounding counties are under a Stage 2 outdoor watering restriction. Program schedules are adjusting automatically."
  cta={<Button variant="primary">See how this affects your program</Button>}
  priority="important"
/>
```
