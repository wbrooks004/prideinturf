import React from 'react';
import { Icon } from './Icon';

export function Breadcrumbs({ items = [], onNavigate }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '6px',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href || item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {i > 0 ? <Icon name="chevron-right" size={13} color="var(--text-tertiary)" /> : null}
              {isLast || !item.href ? (
                <span aria-current={isLast ? 'page' : undefined} style={{ color: isLast ? 'var(--text-primary)' : 'var(--text-tertiary)', fontWeight: isLast ? 'var(--weight-medium)' : 'var(--weight-regular)' }}>
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={onNavigate}
                  style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
