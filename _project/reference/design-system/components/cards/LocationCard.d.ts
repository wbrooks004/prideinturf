import * as React from 'react';

/**
 * @startingPoint section="Cards" subtitle="Branch name, description, address, phone — Hoschton/Atlanta only" viewport="700x260"
 */
export interface LocationCardProps {
  label: string;
  address: string;
  description?: string;
  phone?: string;
  /** Marks the Hoschton HQ badge. @default false */
  isPrimary?: boolean;
  /** Optional photo region (e.g. an `<image-slot>`) rendered above the card content at `--aspect-card` (4:3). Omit for the no-photo card. */
  media?: React.ReactNode;
}

export function LocationCard(props: LocationCardProps): JSX.Element;
