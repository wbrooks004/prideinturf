import * as React from 'react';

export interface BreadcrumbItem {
  label: string;
  /** Omit on the last (current-page) item. */
  href?: string;
}

/**
 * @startingPoint section="Core" subtitle="Chevron-separated path trail, last item is the current page" viewport="700x60"
 */
export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (e: React.SyntheticEvent) => void;
}

export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
