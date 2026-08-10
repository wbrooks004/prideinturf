function LawnCareProgramsHub({ onNavigate }) {
  const { SectionHeading, Icon, Breadcrumbs, CTABanner, Button, ProgramCard } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Lawn Care' }]} />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-16)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading
            eyebrow="Lawn Care Programs"
            heading="Choose the right program for your turf type and conditions."
            subhead="Three program options for warm weather, cool weather, and mixed lawn care needs."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {data.programs.map((p) => (
              <ProgramCard key={p.slug} icon={<Icon name={p.icon} size={22} />} title={p.title} description={p.description} href={p.href} />
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

Object.assign(window, { LawnCareProgramsHub });
