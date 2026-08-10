import * as React from 'react';

export interface ServiceCardProps {
  /** An `<Icon size={20} />` element. */
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  /** @default 'Learn more' */
  ctaLabel?: string;
  /** Optional photo region (e.g. an `<image-slot>`) rendered above the icon at `--aspect-card` (4:3). Omit for the icon-only card. */
  media?: React.ReactNode;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
