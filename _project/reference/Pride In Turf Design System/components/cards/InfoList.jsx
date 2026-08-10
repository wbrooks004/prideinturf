import React from 'react';
import { Icon } from '../core/Icon';

export function InfoList({ items = [], onDark = false }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
          <Icon
            name="check"
            size={18}
            color={onDark ? 'var(--color-green-400)' : 'var(--brand-primary-active)'}
            style={{ marginTop: '3px' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: onDark ? 'var(--text-on-dark)' : 'var(--text-secondary)',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
