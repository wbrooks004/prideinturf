import * as React from 'react';

export interface HeroProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subhead?: React.ReactNode;
  /** A `<Button variant="inverse">` (or similar) element. */
  primaryCta?: React.ReactNode;
  /** A second, lower-emphasis CTA element. */
  secondaryCta?: React.ReactNode;
  /** Checkmark bullet lines rendered below the CTAs. */
  infoItems?: string[];
  /** Full-bleed inset ReactNode (e.g. an `<image-slot>`), rendered behind the scrim INSTEAD of `imageUrl` when provided. */
  media?: React.ReactNode;
  /** Full-bleed background photo URL. Falls back to a solid dark-green field (no photo baked in) when omitted. Ignored if `media` is set. */
  imageUrl?: string;
}

export function Hero(props: HeroProps): JSX.Element;
