import * as React from 'react';

export interface AccordionItem {
  question: string;
  answer: string;
}

/**
 * @startingPoint section="Core" subtitle="Expand/collapse Q&A rows, single- or multi-open" viewport="700x280"
 */
export interface AccordionProps {
  items: AccordionItem[];
  /** Allow more than one panel open at once. @default false */
  allowMultiple?: boolean;
  /** Index of the panel open on mount, or null for all-closed. @default null */
  defaultOpenIndex?: number | null;
}

export function Accordion(props: AccordionProps): JSX.Element;
