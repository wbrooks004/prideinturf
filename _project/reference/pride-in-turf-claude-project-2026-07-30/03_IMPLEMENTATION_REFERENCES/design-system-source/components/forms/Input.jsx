import React, { useState } from 'react';

export function Input({ type = 'text', error = false, style: styleOverride, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <input
      type={type}
      onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px var(--space-4)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-primary)',
        background: 'var(--surface-card)',
        border: `var(--border-width) solid ${error ? 'var(--color-error-500)' : focus ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        ...styleOverride,
      }}
      {...rest}
    />
  );
}
