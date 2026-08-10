function AboutPage({ onNavigate }) {
  const { SectionHeading, Icon, Button, CTABanner, LocationCard } = window.PrideInTurfDesignSystem_2d4922;
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
            {data.contact.locations.map((loc, i) => (
              <LocationCard
                key={loc.label}
                label={loc.label.replace(' (primary)', '')}
                isPrimary={i === 0}
                address={loc.address}
                phone={data.contact.phone}
                description={loc.description}
                media={<image-slot id={`about-location-${i}`} shape="rect" placeholder={`Drop a ${loc.label.replace(' (primary)', '')} photo`} src={window.__img(`../../assets/imagery/branch-${loc.label.replace(' (primary)', '').toLowerCase()}.jpg`)}></image-slot>}
              />
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
