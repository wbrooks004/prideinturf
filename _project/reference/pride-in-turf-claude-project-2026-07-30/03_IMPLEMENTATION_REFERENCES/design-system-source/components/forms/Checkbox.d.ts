import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  id?: string;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
