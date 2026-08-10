import React from 'react';

export function FormField({ label, htmlFor, required = false, hint, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label ? (
        <label htmlFor={htmlFor} style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>
          {label}
          {required ? <span style={{ color: 'var(--color-error-500)' }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-error-700)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
