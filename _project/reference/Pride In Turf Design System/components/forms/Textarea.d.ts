import * as React from 'react';

export interface TextareaProps {
  rows?: number;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
}

export function Textarea(props: TextareaProps): JSX.Element;
