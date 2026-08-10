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
}

export function ProgramCard(props: ProgramCardProps): JSX.Element;
