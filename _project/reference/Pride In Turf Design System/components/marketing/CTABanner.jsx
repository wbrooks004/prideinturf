import React from 'react';
import { SectionHeading } from '../core/SectionHeading';

export function CTABanner({ eyebrow = 'Request a Quote', heading, subhead, cta, variant = 'inverse' }) {
  const bg = variant === 'brand' ? 'var(--brand-primary)' : variant === 'inverse' ? 'var(--surface-inverse)' : 'var(--surface-sunken)';
  const onDark = variant !== 'light';
  return (
    <section style={{ background: bg, padding: 'var(--space-20) var(--container-padding)', textAlign: 'center', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
        <SectionHeading eyebrow={eyebrow} heading={heading} subhead={subhead} align="center" onDark={onDark} />
        {cta}
      </div>
    </section>
  );
}
