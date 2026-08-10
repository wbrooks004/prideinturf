import React from 'react';
import { Icon } from '../core/Icon';

export function TrustPointCard({ icon, title, description, align = 'left' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: align === 'center' ? 'column' : 'row',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 'var(--space-4)',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--brand-primary-tint)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--brand-primary-active)',
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={22} />
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
          {title}
        </div>
        {description ? (
          <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)' }}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
