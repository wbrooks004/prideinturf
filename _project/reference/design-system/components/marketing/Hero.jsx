import React from 'react';
import { SectionHeading } from '../core/SectionHeading';
import { InfoList } from '../cards/InfoList';

export function Hero({ eyebrow, heading, subhead, primaryCta, secondaryCta, infoItems, imageUrl, media }) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: media ? 'var(--color-green-900)' : imageUrl ? `center / cover no-repeat url(${imageUrl})` : 'var(--color-green-900)',
      }}
    >
      {media ? (
        <div style={{ position: 'absolute', inset: 0 }}>{media}</div>
      ) : null}
      <div style={{ position: 'absolute', inset: 0, background: (media || imageUrl) ? 'var(--surface-overlay-scrim)' : 'transparent', pointerEvents: 'none' }} />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--space-24) var(--container-padding)',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          <SectionHeading eyebrow={eyebrow} heading={heading} subhead={subhead} onDark size="xl" />
          {(primaryCta || secondaryCta) ? (
            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
              {primaryCta}
              {secondaryCta}
            </div>
          ) : null}
          {infoItems && infoItems.length ? (
            <div style={{ marginTop: 'var(--space-10)' }}>
              <InfoList items={infoItems} onDark />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
