import React, { useState } from 'react';
import { Icon } from '../core/Icon';

export function Select({ value, defaultValue, onChange, options = [], placeholder, error = false, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          appearance: 'none',
          WebkitAppearance: 'none',
          padding: '12px 40px 12px var(--space-4)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: 'var(--text-primary)',
          background: 'var(--surface-card)',
          border: `var(--border-width) solid ${error ? 'var(--color-error-500)' : focus ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          boxShadow: focus ? 'var(--shadow-focus)' : 'none',
          cursor: 'pointer',
          transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        }}
        {...rest}
      >
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{label}</option>;
        })}
      </select>
      <Icon
        name="chevron-down"
        size={18}
        color="var(--text-secondary)"
        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
      />
    </div>
  );
}
