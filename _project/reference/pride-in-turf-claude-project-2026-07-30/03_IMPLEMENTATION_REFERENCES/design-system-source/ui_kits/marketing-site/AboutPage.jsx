function AboutPage({ onNavigate }) {
  const { SectionHeading, Icon, Button, CTABanner } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  const bodyTextStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    margin: 0,
  };

  return (
    <div>
      <section style={{ padding: 'var(--space-20) var(--container-padding) var(--space-16)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <SectionHeading eyebrow="About Pride In Turf" heading="Locally operated since 2005." />
          <p style={bodyTextStyle}>{data.aboutIntro}</p>
          <p style={bodyTextStyle}>{data.aboutParagraph}</p>
          <p style={bodyTextStyle}>{data.aboutClosing}</p>
        </div>
      </section>

      <section style={{ padding: '0 var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Where we work" heading="Two service operations, one focus on Georgia turf." align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', marginTop: 'var(--space-12)' }}>
            {data.contact.locations.map((loc) => (
              <div key={loc.label} style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--brand-primary-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)', flexShrink: 0 }}>
                    <Icon name="map-pin" size={20} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-primary)', margin: 0 }}>{loc.label}</h3>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)', margin: 0 }}>{loc.description}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)', margin: 0 }}>{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready for a healthier lawn?"
        subhead="Request a quote and Pride In Turf will help point you toward the right program or service."
        cta={<Button variant="primary" onClick={() => onNavigate('/contact/')}>Request Quote</Button>}
      />
    </div>
  );
}

Object.assign(window, { AboutPage });
