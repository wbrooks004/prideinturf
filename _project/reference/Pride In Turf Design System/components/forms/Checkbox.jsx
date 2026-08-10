import React from 'react';

export function Checkbox({ checked, defaultChecked, onChange, label, id, ...rest }) {
  return (
    <label
      htmlFor={id}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--leading-snug)',
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--brand-primary)', cursor: 'pointer', flexShrink: 0 }}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}
