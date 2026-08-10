import { ReactNode } from 'react';

export type UpdateNoticeType = 'seasonal' | 'drought' | 'service' | 'alert' | 'general';
export type UpdateNoticePriority = 'normal' | 'important';

export interface UpdateNoticeProps {
  /** Eyebrow label above the notice. Defaults to "Pride In Turf Update". */
  label?: string;
  /** Controls the icon + small type tag (Seasonal, Drought notice, Service notice, Local alert, General). */
  type?: UpdateNoticeType;
  heading: string;
  message?: string;
  /** A ready-made CTA node, e.g. <Button variant="primary">...</Button> — same convention as CTABanner. */
  cta?: ReactNode;
  /** "important" is the one place this system fills a background with the orange accent — reserve for genuinely urgent notices. */
  priority?: UpdateNoticePriority;
}

export declare function UpdateNotice(props: UpdateNoticeProps): JSX.Element;
