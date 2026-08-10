function BranchPage({ locationIndex }) {
  const { SectionHeading, Icon, Breadcrumbs, Badge, LocationCard, CTABanner, Button, TrustPointCard } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;
  const loc = data.contact.locations[locationIndex];
  const cleanLabel = loc.label.replace(' (primary)', '');

  return (
    <div>
      <section style={{ background: 'var(--brand-primary-tint)', padding: 'var(--space-12) var(--container-padding) var(--space-12)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: `${cleanLabel} Lawn Care` }]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            <Badge variant="primary" icon={<Icon name="map-pin" size={13} />}>{locationIndex === 0 ? 'Primary location' : 'Branch'}</Badge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 'var(--space-4) 0 var(--space-3)' }}>
            Pride In Turf Lawn Care {cleanLabel}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '680px', margin: 0, lineHeight: 'var(--leading-snug)' }}>
            {loc.description}
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) var(--container-padding)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-12)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <SectionHeading eyebrow="Serving" heading={`Programs and services from our ${cleanLabel} operation`} size="sm" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
              <TrustPointCard icon="sun" title="Warm & cool season programs" />
              <TrustPointCard icon="sprout" title="Aeration & fungicide treatments" />
              <TrustPointCard icon="shield-check" title="Program-based, not one-size-fits-all" />
            </div>
          </div>
          <LocationCard
            isPrimary={locationIndex === 0}
            label={cleanLabel}
            address={loc.address}
            phone={data.contact.phone}
            description={`Hours: Mon\u2013Sat 7:00\u201318:00, Sun closed.`}
            media={<image-slot id={`branch-${cleanLabel.toLowerCase()}`} shape="rect" placeholder={`Drop a ${cleanLabel} photo`} src={window.__img(`../../assets/imagery/branch-${cleanLabel.toLowerCase()}.jpg`)}></image-slot>}
          />
        </div>
      </section>

      <CTABanner
        heading="Ready for a healthier lawn?"
        subhead={`Request a quote and the ${cleanLabel} team will help point you toward the right program or service.`}
        cta={<Button variant="primary">Request Quote</Button>}
      />
    </div>
  );
}

function AtlantaBranchPage() { return <BranchPage locationIndex={1} />; }
function HoschtonBranchPage() { return <BranchPage locationIndex={0} />; }

Object.assign(window, { AtlantaBranchPage, HoschtonBranchPage });
