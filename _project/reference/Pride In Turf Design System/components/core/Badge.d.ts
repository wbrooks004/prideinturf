import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default 'neutral' */
  variant?: 'primary' | 'accent' | 'neutral' | 'inverse';
  /** An `<Icon size={14} />` element to place before the label. */
  icon?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
