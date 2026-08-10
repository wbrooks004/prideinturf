import React from 'react';

const PALETTES = {
  primary: { bg: 'var(--brand-primary-tint)', fg: 'var(--brand-primary-active)' },
  accent: { bg: 'var(--brand-accent-tint)', fg: 'var(--brand-accent-active)' },
  neutral: { bg: 'var(--surface-sunken)', fg: 'var(--text-secondary)' },
  inverse: { bg: 'rgba(255,255,255,0.14)', fg: 'var(--text-on-dark)' },
};

export function Badge({ children, variant = 'neutral', icon = null }) {
  const p = PALETTES[variant] || PALETTES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: 'var(--radius-full)',
        background: p.bg,
        color: p.fg,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {icon}
      {children}
    </span>
  );
}
