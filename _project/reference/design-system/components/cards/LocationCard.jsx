import React from 'react';
import { Icon } from '../core/Icon';

// touch: force bundle re-scan after App.jsx createRoot guard fix
export function LocationCard({ label, address, description, phone, isPrimary = false, media }) {
  return (
    <div
      style={{
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {media ? (
        <div style={{ width: '100%', aspectRatio: 'var(--aspect-card)' }}>{media}</div>
      ) : null}
      <div style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--brand-primary-tint)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--brand-primary-active)',
            flexShrink: 0,
          }}
        >
          <Icon name="map-pin" size={20} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-primary)', margin: 0 }}>
          {label}
        </h3>
        {isPrimary ? (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-medium)',
              fontSize: '10px',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'var(--brand-primary-active)',
              background: 'var(--brand-primary-tint)',
              borderRadius: 'var(--radius-full)',
              padding: '3px 9px',
            }}
          >
            Primary
          </span>
        ) : null}
      </div>
      {description ? (
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)' }}>
          {description}
        </p>
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>
          {address}
        </span>
        {phone ? (
          <a
            href={`tel:${phone.replace(/[^\d+]/g, '')}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-link)', textDecoration: 'none' }}
          >
            <Icon name="phone" size={14} />{phone}
          </a>
        ) : null}
      </div>
      </div>
    </div>
  );
}
