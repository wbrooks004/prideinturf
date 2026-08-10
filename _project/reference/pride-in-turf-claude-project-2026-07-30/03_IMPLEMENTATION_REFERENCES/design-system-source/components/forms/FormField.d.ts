import * as React from 'react';

export interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  /** When set, replaces `hint` and colors it as an error. */
  error?: string;
  children?: React.ReactNode;
}

export function FormField(props: FormFieldProps): JSX.Element;
