import * as React from 'react';

export interface ProgramCardProps {
  /** An `<Icon size={22} />` element. */
  icon?: React.ReactNode;
  /** @default 'Program' */
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  /** @default 'View program' */
  ctaLabel?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  /** Optional photo region (e.g. an `<image-slot>`) rendered above the icon at `--aspect-card` (4:3). Omit for the icon-only card. */
  media?: React.ReactNode;
}

export function ProgramCard(props: ProgramCardProps): JSX.Element;
