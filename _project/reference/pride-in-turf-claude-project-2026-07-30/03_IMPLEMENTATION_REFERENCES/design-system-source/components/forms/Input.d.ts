import * as React from 'react';

export interface InputProps {
  /** @default 'text' */
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Draws the error border color. Pair with `FormField error=".."` for the message. @default false */
  error?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
