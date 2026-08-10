import * as React from 'react';

export interface ServiceCardProps {
  /** An `<Icon size={20} />` element. */
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  /** @default 'Learn more' */
  ctaLabel?: string;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
