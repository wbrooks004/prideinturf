import React, { useState } from 'react';
import { Icon } from '../core/Icon';

export function ProgramCard({ icon, eyebrow = 'Program', title, description, href = '#', ctaLabel = 'View program', onClick, media }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        padding: 0,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
        boxSizing: 'border-box',
        height: '100%',
      }}
    >
      {media ? (
        <div style={{ width: '100%', aspectRatio: 'var(--aspect-card)', flexShrink: 0 }}>{media}</div>
      ) : null}
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand-primary-tint)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--space-4)',
          color: 'var(--brand-primary-active)',
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-eyebrow)',
          textTransform: 'uppercase',
          color: 'var(--brand-primary-active)',
          marginBottom: 'var(--space-2)',
        }}
      >
        {eyebrow}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-primary)', margin: '0 0 var(--space-2) 0' }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)', margin: '0 0 var(--space-4) 0', flex: 1 }}>
        {description}
      </p>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: 'var(--text-sm)',
          color: 'var(--brand-primary-active)',
        }}
      >
        {ctaLabel}
        <Icon name="arrow-right" size={15} style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--duration-fast) var(--ease-standard)' }} />
      </span>
      </div>
    </a>
  );
}
