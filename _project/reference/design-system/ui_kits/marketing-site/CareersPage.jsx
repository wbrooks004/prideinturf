function CareersPage() {
  const { SectionHeading, Breadcrumbs, Icon, Badge, Button } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Careers' }]} />
          <ConceptualBadge />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Careers" heading="Join the Pride In Turf team." subhead="Placeholder listing \u2014 connect to real openings before publishing." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-10)' }}>
            {data.careersOpenings.map((job, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--brand-primary-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)' }}>
                    <Icon name="briefcase" size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>{job.title}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{job.location}</div>
                  </div>
                </div>
                <Badge variant="neutral">{job.type}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CareersPage });
