function LawnServicesArchive({ onNavigate }) {
  const { SectionHeading, Icon, Breadcrumbs, CTABanner, Button } = window.PrideInTurfDesignSystem_2d4922;
  const { ServiceCard } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Lawn Services' }]} />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-16)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading
            eyebrow="Lawn Services"
            heading="Turf-focused services for Georgia lawns."
            subhead="Specialist services layered on top of a lawn care program — aeration, fungicide treatments, pest control, weed control, and soil testing."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {data.services.map((s) => (
              <div key={s.slug} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
                <ServiceCard icon={<Icon name={s.icon} size={20} />} title={s.title} description={s.description} href={s.href} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner
        heading="Not sure which service you need?"
        subhead="Request a quote and Pride In Turf will help point you toward the right program or service."
        cta={<Button variant="primary" onClick={() => onNavigate('/contact/')}>Request Quote</Button>}
      />
    </div>
  );
}

Object.assign(window, { LawnServicesArchive });
