function ServicePage({ service, onNavigate }) {
  const { SectionHeading, Icon, Button, Badge, InfoList, CTABanner, Breadcrumbs } = window.PrideInTurfDesignSystem_2d4922;
  if (!service) return null;

  const serviceBackLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-medium)',
    fontSize: 'var(--text-sm)',
    color: 'var(--brand-primary-active)',
  };
  const serviceTitleStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-bold)',
    fontSize: 'var(--text-4xl)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--text-primary)',
    margin: 'var(--space-4) 0 var(--space-3)',
  };
  const serviceSubheadStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    color: 'var(--text-secondary)',
    maxWidth: '640px',
    margin: 0,
    lineHeight: 'var(--leading-snug)',
  };

  return (
    <div>
      <section style={{ background: 'var(--surface-sunken)', padding: 'var(--space-12) var(--container-padding) var(--space-12)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/lawn-services/', label: 'Lawn Services' }, { label: service.title }]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)' }}>
              <Icon name={service.icon} size={28} />
            </div>
            <Badge variant="primary">Service</Badge>
          </div>
          <h1 style={serviceTitleStyle}>{service.title}</h1>
          <p style={serviceSubheadStyle}>{service.description}</p>
        </div>
      </section>

      {service.subServices && service.subServices.length ? (
        <section style={{ padding: 'var(--space-16) var(--container-padding) 0', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
            <SectionHeading eyebrow="Timing" heading="Offered on a seasonal schedule" size="sm" />
            <div style={{ marginTop: 'var(--space-6)' }}>
              <InfoList items={service.subServices} />
            </div>
            {service.childServices && service.childServices.length ? (
              <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
                {service.childServices.map((c) => (
                  <a
                    key={c.slug}
                    href={c.href}
                    onClick={(e) => { e.preventDefault(); onNavigate(c.href); }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)',
                      color: 'var(--brand-primary-active)', background: 'var(--brand-primary-tint)',
                      borderRadius: 'var(--radius-full)', padding: '8px 16px', textDecoration: 'none',
                    }}
                  >
                    {c.label}
                    <Icon name="arrow-right" size={13} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <div style={{ height: 'var(--space-16)' }} />

      <CTABanner
        heading="Ready for a healthier lawn?"
        subhead="Request a quote and Pride In Turf will help point you toward the right program or service."
        cta={<Button variant="primary" onClick={() => onNavigate('/contact/')}>Request Quote</Button>}
      />
    </div>
  );
}

Object.assign(window, { ServicePage });
