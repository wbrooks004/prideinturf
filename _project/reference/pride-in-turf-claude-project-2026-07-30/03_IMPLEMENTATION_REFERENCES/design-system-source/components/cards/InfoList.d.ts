import * as React from 'react';

export interface InfoListProps {
  /** Plain text lines, each gets a check icon. */
  items: string[];
  /** Set true when placed over a dark/photo background. @default false */
  onDark?: boolean;
}

export function InfoList(props: InfoListProps): JSX.Element;
