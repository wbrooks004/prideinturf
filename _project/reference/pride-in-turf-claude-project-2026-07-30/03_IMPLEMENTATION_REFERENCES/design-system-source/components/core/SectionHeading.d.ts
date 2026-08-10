import * as React from 'react';

export interface SectionHeadingProps {
  /** Small uppercase label above the heading, e.g. "Program", "Services". */
  eyebrow?: string;
  heading: React.ReactNode;
  subhead?: React.ReactNode;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** Set true when placed over a dark/photo background. @default false */
  onDark?: boolean;
  /** @default 'lg' */
  size?: 'sm' | 'lg' | 'xl';
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
