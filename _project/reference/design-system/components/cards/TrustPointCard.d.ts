import * as React from 'react';

/**
 * @startingPoint section="Cards" subtitle="Icon + short claim, for a row of trust signals" viewport="700x100"
 */
export interface TrustPointCardProps {
  /** An `Icon` name. */
  icon: string;
  title: string;
  description?: string;
  /** @default 'left' */
  align?: 'left' | 'center';
}

export function TrustPointCard(props: TrustPointCardProps): JSX.Element;
