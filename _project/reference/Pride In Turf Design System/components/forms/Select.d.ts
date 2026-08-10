import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Plain strings or `{value,label}` pairs. */
  options: (string | SelectOption)[];
  placeholder?: string;
  error?: boolean;
  id?: string;
  name?: string;
}

export function Select(props: SelectProps): JSX.Element;
