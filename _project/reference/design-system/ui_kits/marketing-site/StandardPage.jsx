function StandardPage({ title, breadcrumbItems, children }) {
  const { Breadcrumbs } = window.PrideInTurfDesignSystem_2d4922;
  return (
    <div style={{ padding: 'var(--space-16) var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        {breadcrumbItems ? (
          <div style={{ marginBottom: 'var(--space-2)' }}>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        ) : null}
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 0 }}>
          {title}
        </h1>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { StandardPage });
