function DuluthServiceAreaPage({ onNavigate }) {
  const { SectionHeading, Icon, Breadcrumbs, Badge, CTABanner, Button, InfoList } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Areas We Serve' }, { label: 'Duluth' }]} />
          <ConceptualBadge />
        </div>
      </section>

      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-16)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Badge variant="neutral" icon={<Icon name="map-pin" size={13} />}>Service area — not a branch</Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 0 }}>
            Lawn Care in Duluth, GA
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)', margin: 0 }}>
            Placeholder template for a service-area page. Duluth is not confirmed in the approved primary/secondary market lists — do not publish specific coverage claims here until confirmed against real technician routes (see handoff/README.md).
          </p>
          <InfoList items={[
            'Structured as a service area page: no standalone NAP block, no branch schema — only Hoschton and Atlanta get that treatment.',
            'Links back to the nearest real branch (Hoschton) rather than implying a local office.',
            'Confirm city inclusion against actual routes before publishing.',
          ]} />
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

Object.assign(window, { DuluthServiceAreaPage });
