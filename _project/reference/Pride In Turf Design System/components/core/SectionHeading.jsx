import React from 'react';

export function SectionHeading({ eyebrow, heading, subhead, align = 'left', onDark = false, size = 'lg' }) {
  const headingSize = size === 'xl' ? 'var(--text-4xl)' : size === 'sm' ? 'var(--text-xl)' : 'var(--text-3xl)';
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? '640px' : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
      {eyebrow ? (
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-medium)',
            fontSize: 'var(--text-sm)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: onDark ? 'var(--text-on-dark-secondary)' : 'var(--brand-primary-active)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: headingSize,
          lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-tight)',
          color: onDark ? 'var(--text-on-dark)' : 'var(--text-primary)',
          margin: 0,
        }}
      >
        {heading}
      </h2>
      {subhead ? (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-regular)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-snug)',
            color: onDark ? 'var(--text-on-dark-secondary)' : 'var(--text-secondary)',
            marginTop: 'var(--space-4)',
            marginBottom: 0,
          }}
        >
          {subhead}
        </p>
      ) : null}
    </div>
  );
}
