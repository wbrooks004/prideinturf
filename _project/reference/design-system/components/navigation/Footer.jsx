import React from 'react';
import { Icon } from '../core/Icon';

const EYEBROW_STYLE = {
  fontFamily: 'var(--font-display)',
  fontWeight: 'var(--weight-medium)',
  fontSize: 'var(--text-xs)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--text-on-dark-secondary)',
};

const LINK_STYLE = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-on-dark)',
  textDecoration: 'none',
  opacity: 0.86,
};

export function Footer({ logo, programLinks = [], phone, email, address }) {
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-dark)' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--space-16) var(--container-padding) var(--space-10)',
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr 1fr',
          gap: 'var(--space-12)',
        }}
      >
        <div>
          {logo}
          <p style={{ color: 'var(--text-on-dark-secondary)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', maxWidth: '320px', marginTop: 'var(--space-4)', lineHeight: 'var(--leading-snug)' }}>
            Program-based lawn care and turf-focused services for homeowners throughout Northeast Georgia and Metro Atlanta.
          </p>
        </div>
        <div>
          <div style={EYEBROW_STYLE}>Programs</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
            {programLinks.map((l) => (
              <a key={l.href} href={l.href} style={LINK_STYLE}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div>
          <div style={EYEBROW_STYLE}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
            {phone ? (
              <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={{ ...LINK_STYLE, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon name="phone" size={15} />{phone}
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`} style={{ ...LINK_STYLE, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon name="mail" size={15} />{email}
              </a>
            ) : null}
            {address ? (
              <div style={{ ...LINK_STYLE, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Icon name="map-pin" size={15} style={{ marginTop: '2px' }} />
                <span>{address}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: 'var(--border-on-dark) solid 1px',
          borderColor: 'var(--border-on-dark)',
          padding: 'var(--space-6) var(--container-padding)',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-on-dark-secondary)',
        }}
      >
        © {new Date().getFullYear()} Pride In Turf. Serving Metro Atlanta and Northeast Georgia since 2005.
      </div>
    </footer>
  );
}
