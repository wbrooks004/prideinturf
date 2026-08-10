import React from 'react';
import { Icon } from '../core/Icon';

const VARIANTS = {
  info: { bg: 'var(--color-info-500)', bgTint: 'oklch(58% 0.09 240 / 0.08)', border: 'oklch(58% 0.09 240 / 0.35)', fg: 'var(--color-info-700)', icon: 'circle-alert' },
  success: { bg: 'var(--color-success-500)', bgTint: 'var(--brand-primary-tint)', border: 'var(--color-green-200)', fg: 'var(--color-success-700)', icon: 'circle-check' },
  warning: { bg: 'var(--color-warning-500)', bgTint: 'oklch(78% 0.15 82 / 0.14)', border: 'oklch(78% 0.15 82 / 0.45)', fg: 'var(--color-warning-700)', icon: 'triangle-alert' },
  error: { bg: 'var(--color-error-500)', bgTint: 'oklch(56% 0.19 25 / 0.08)', border: 'oklch(56% 0.19 25 / 0.35)', fg: 'var(--color-error-700)', icon: 'circle-alert' },
};

export function Alert({ variant = 'info', title, children, icon = true, onDismiss }) {
  const v = VARIANTS[variant] || VARIANTS.info;
  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-3)',
        background: v.bgTint,
        border: `1px solid ${v.border}`,
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4) var(--space-5)',
      }}
    >
      {icon ? <Icon name={v.icon} size={20} color={v.fg} style={{ marginTop: '1px', flexShrink: 0 }} /> : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title ? (
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)', color: v.fg, marginBottom: children ? '2px' : 0 }}>
            {title}
          </div>
        ) : null}
        {children ? (
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)' }}>
            {children}
          </div>
        ) : null}
      </div>
      {onDismiss ? (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{ background: 'none', border: 'none', padding: '2px', cursor: 'pointer', color: v.fg, flexShrink: 0, display: 'flex' }}
        >
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </div>
  );
}
