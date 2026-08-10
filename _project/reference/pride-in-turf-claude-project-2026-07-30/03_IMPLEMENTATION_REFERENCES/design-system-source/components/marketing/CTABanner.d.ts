import * as React from 'react';

export interface CTABannerProps {
  /** @default 'Request a Quote' */
  eyebrow?: string;
  heading: React.ReactNode;
  subhead?: React.ReactNode;
  /** A `<Button>` element. */
  cta?: React.ReactNode;
  /** Background treatment. @default 'inverse' */
  variant?: 'inverse' | 'brand' | 'light';
}

export function CTABanner(props: CTABannerProps): JSX.Element;
