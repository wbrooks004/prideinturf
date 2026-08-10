function SearchPage({ query = 'aeration', onNavigate }) {
  const { SectionHeading, Icon, Input, Breadcrumbs } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;
  const q = (query || '').toLowerCase();
  const results = [...data.programs, ...data.services].filter((r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q));

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Search' }]} />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <SectionHeading eyebrow="Search" heading={`Results for “${query}”`} size="sm" />
          <div style={{ position: 'relative' }}>
            <Input defaultValue={query} placeholder="Search Pride In Turf…" style={{ paddingLeft: '42px' }} />
            <Icon name="search" size={18} color="var(--text-tertiary)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {results.length ? results.map((r) => (
              <a
                key={r.slug}
                href={r.href}
                onClick={(e) => { e.preventDefault(); onNavigate(r.href); }}
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', textDecoration: 'none', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}
              >
                <Icon name={r.icon} size={20} color="var(--brand-primary-active)" />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>{r.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{r.description}</div>
                </div>
              </a>
            )) : (
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-tertiary)' }}>No results.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { SearchPage });
