import * as React from 'react';

export type IconName =
  | 'leaf' | 'droplet' | 'bug' | 'trees' | 'sprout' | 'flask-conical' | 'sun' | 'cloud'
  | 'layers' | 'sliders-horizontal' | 'shield-check' | 'map-pin' | 'phone' | 'mail'
  | 'clock' | 'calendar' | 'arrow-right' | 'check' | 'menu' | 'x' | 'chevron-down';

export interface IconProps {
  /** Which curated glyph to render. */
  name: IconName;
  /** Width & height in px. @default 24 */
  size?: number;
  /** Stroke width. @default 2 */
  strokeWidth?: number;
  /** CSS color; defaults to `currentColor` so it inherits the parent text color. */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon(props: IconProps): JSX.Element | null;
