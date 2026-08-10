import * as React from 'react';

export interface NavLink {
  href: string;
  label: string;
  /** Dropdown items (desktop: hover flyout; mobile: accordion). Omit for a plain link. */
  children?: NavLink[];
}

/**
 * @startingPoint section="Navigation" subtitle="Dropdowns for Lawn Care / Lawn Services; CTA morphs into the mobile menu toggle" viewport="700x120"
 */
export interface NavBarProps {
  /** Rendered logo element (e.g. an `<img>` pointed at assets/logo/pride-in-turf-logo.png). */
  logo?: React.ReactNode;
  /** Top-level nav items in order, e.g. About, Lawn Care (with children), Lawn Services (with children), Client Portal. */
  links: NavLink[];
  /** @default 'Request Quote' */
  ctaLabel?: string;
  onCtaClick?: (e: React.SyntheticEvent) => void;
  /** href of the current page — highlights the matching top-level item (and its child, if the child itself is active). */
  activeHref?: string;
  /** Container width in px below which the nav collapses and the CTA button becomes a hamburger toggle. @default 860 */
  mobileBreakpoint?: number;
  /** Render the mobile menu panel already open. Mainly for demos/testing. @default false */
  defaultMobileOpen?: boolean;
}

export function NavBar(props: NavBarProps): JSX.Element;
