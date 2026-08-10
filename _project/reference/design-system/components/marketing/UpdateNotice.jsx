import React from 'react';
import { Icon } from '../core/Icon';
import { Badge } from '../core/Badge';

const TYPE_META = {
  seasonal: { icon: 'sun', label: 'Seasonal' },
  drought: { icon: 'droplet', label: 'Drought notice' },
  service: { icon: 'clock', label: 'Service notice' },
  alert: { icon: 'triangle-alert', label: 'Local alert' },
  general: { icon: 'circle-alert', label: 'General' },
};

export function UpdateNotice({ label = 'Pride In Turf Update', type = 'general', heading, message, cta, priority = 'normal' }) {
  if (!heading) return null;
  const important = priority === 'important';
  const meta = TYPE_META[type] || TYPE_META.general;
  return (
    <section
      style={{
        background: important ? 'var(--brand-accent-tint)' : 'var(--surface-sunken)',
        border: important ? '1px solid var(--color-orange-200)' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8) var(--space-10)',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: 'var(--radius-md)',
            background: important ? 'var(--brand-accent)' : 'var(--brand-primary-tint)',
            color: important ? 'var(--text-on-brand)' : 'var(--brand-primary-active)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon name={meta.icon} size={24} />
        </div>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--weight-medium)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-eyebrow)',
                textTransform: 'uppercase',
                color: 'var(--brand-primary-active)',
              }}
            >
              {label}
            </span>
            <Badge variant="neutral">{meta.label}</Badge>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', margin: 'var(--space-2) 0 0' }}>
            {heading}
          </h3>
          {message ? (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)', margin: 'var(--space-2) 0 0', maxWidth: '640px' }}>
              {message}
            </p>
          ) : null}
        </div>
        {cta ? <div style={{ flexShrink: 0 }}>{cta}</div> : null}
      </div>
    </section>
  );
}
