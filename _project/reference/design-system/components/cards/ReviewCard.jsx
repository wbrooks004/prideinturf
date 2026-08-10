import React from 'react';
import { Icon } from '../core/Icon';

export function ReviewCard({ authorName, rating = 5, text, source = 'Google', date }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', gap: '3px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={16} filled color={i < rating ? 'var(--brand-accent)' : 'var(--color-neutral-200)'} />
        ))}
      </div>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-primary)', flex: 1 }}>
        “{text}”
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--border-default)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{authorName}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
          {source}{date ? ` · ${date}` : ''}
        </span>
      </div>
    </div>
  );
}
