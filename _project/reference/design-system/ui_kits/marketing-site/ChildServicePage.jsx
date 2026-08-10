function ChildServicePage({ parent, childLabel, onNavigate }) {
  const { SectionHeading, Icon, Breadcrumbs, Badge, Button, CTABanner } = window.PrideInTurfDesignSystem_2d4922;
  if (!parent) return null;

  return (
    <div>
      <section style={{ background: 'var(--surface-sunken)', padding: 'var(--space-12) var(--container-padding) var(--space-12)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Breadcrumbs items={[
            { href: '/', label: 'Home' },
            { href: '/lawn-services/', label: 'Lawn Services' },
            { href: parent.href, label: parent.title },
            { label: childLabel },
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)' }}>
              <Icon name={parent.icon} size={28} />
            </div>
            <Badge variant="primary">Part of {parent.title}</Badge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 'var(--space-4) 0 var(--space-3)' }}>
            {childLabel}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '640px', margin: 0, lineHeight: 'var(--leading-snug)' }}>
            {parent.description}
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) var(--container-padding)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Timing" heading={`When we schedule ${childLabel.toLowerCase()}`} size="sm" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-4)' }}>
            Child service pages inherit their parent's description and share its icon/badge color to visually nest under {parent.title} in navigation and breadcrumbs.
          </p>
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

Object.assign(window, { ChildServicePage });
