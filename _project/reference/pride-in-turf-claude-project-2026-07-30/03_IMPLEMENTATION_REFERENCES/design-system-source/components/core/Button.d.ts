import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** @default 'primary' */
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'inverse';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** An `<Icon />` element to place inside the button. */
  icon?: React.ReactNode;
  /** @default 'right' */
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Render as a different element/component, e.g. 'a' for a link styled as a button. @default 'button' */
  as?: React.ElementType;
  style?: React.CSSProperties;
  onClick?: (e: React.SyntheticEvent) => void;
  href?: string;
}

export function Button(props: ButtonProps): JSX.Element;
