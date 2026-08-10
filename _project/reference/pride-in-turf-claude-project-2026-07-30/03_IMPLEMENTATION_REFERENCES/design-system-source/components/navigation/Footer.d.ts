import * as React from 'react';

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterProps {
  logo?: React.ReactNode;
  programLinks: FooterLink[];
  phone?: string;
  email?: string;
  address?: string;
}

export function Footer(props: FooterProps): JSX.Element;
