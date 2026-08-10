import * as React from 'react';

/**
 * @startingPoint section="Cards" subtitle="Star rating + quote + attribution, for testimonial grids" viewport="700x220"
 */
export interface ReviewCardProps {
  authorName: string;
  /** 0–5. @default 5 */
  rating?: number;
  text: string;
  /** @default 'Google' */
  source?: string;
  /** e.g. "March 2026". Omit to hide. */
  date?: string;
}

export function ReviewCard(props: ReviewCardProps): JSX.Element;
