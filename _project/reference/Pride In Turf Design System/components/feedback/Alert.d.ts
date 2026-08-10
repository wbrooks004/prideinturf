import * as React from 'react';

/**
 * @startingPoint section="Feedback" subtitle="Info/success/warning/error inline banner" viewport="700x110"
 */
export interface AlertProps {
  /** @default 'info' */
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children?: React.ReactNode;
  /** Show the leading status icon. @default true */
  icon?: boolean;
  /** Show a dismiss (×) button and call this when clicked. Omit to make the alert non-dismissible. */
  onDismiss?: () => void;
}

export function Alert(props: AlertProps): JSX.Element;
