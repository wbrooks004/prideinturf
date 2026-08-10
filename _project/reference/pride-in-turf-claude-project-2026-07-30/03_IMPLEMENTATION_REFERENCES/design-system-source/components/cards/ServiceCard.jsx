import React from 'react';
import { Icon } from '../core/Icon';

export function ServiceCard({ icon, title, description, href = '#', ctaLabel = 'Learn more' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand-accent-tint)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--brand-accent-active)',
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)', margin: 0 }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)', margin: 0 }}>
        {description}
      </p>
      <a
        href={href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-link)',
          textDecoration: 'none',
          marginTop: '2px',
        }}
      >
        {ctaLabel}
        <Icon name="arrow-right" size={14} />
      </a>
    </div>
  );
}
