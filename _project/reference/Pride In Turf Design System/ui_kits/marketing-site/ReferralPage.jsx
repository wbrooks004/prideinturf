function ReferralPage({ onNavigate }) {
  const { SectionHeading, Breadcrumbs, Icon, Button, CTABanner } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Referral Program' }]} />
          <ConceptualBadge />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-16)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-5)' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', background: 'var(--brand-primary-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)' }}>
            <Icon name="gift" size={28} />
          </div>
          <SectionHeading heading={data.referralPlaceholder.heading} align="center" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '480px', margin: 0 }}>
            {data.referralPlaceholder.body}
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

Object.assign(window, { ReferralPage });
