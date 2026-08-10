function ProgramPage({ program, onNavigate }) {
  const { SectionHeading, Icon, Button, Badge, InfoList, CTABanner } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;
  if (!program) return null;

  const programBackLinkStyle = {
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
  const programTitleStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-bold)',
    fontSize: 'var(--text-4xl)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--text-primary)',
    margin: 'var(--space-4) 0 var(--space-3)',
  };
  const programSubheadStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    color: 'var(--text-secondary)',
    maxWidth: '640px',
    margin: 0,
    lineHeight: 'var(--leading-snug)',
  };
  const programBodyTextStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    margin: 0,
  };

  return (
    <div>
      <section style={{ background: 'var(--brand-primary-tint)', padding: 'var(--space-12) var(--container-padding) var(--space-12)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <button onClick={() => onNavigate('/')} style={programBackLinkStyle}>
            <Icon name="arrow-right" size={15} style={{ transform: 'rotate(180deg)' }} />
            Lawn Care Programs
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)' }}>
              <Icon name={program.icon} size={28} />
            </div>
            <Badge variant="primary">Program</Badge>
          </div>
          <h1 style={programTitleStyle}>{program.title}</h1>
          <p style={programSubheadStyle}>{program.description}</p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) var(--container-padding)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
          <p style={programBodyTextStyle}>{data.aboutParagraph}</p>
          <div>
            <SectionHeading eyebrow="What this can include" heading="Core services available across Pride In Turf programs" size="sm" />
            <div style={{ marginTop: 'var(--space-6)' }}>
              <InfoList items={data.coreServiceChecklist} />
            </div>
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

Object.assign(window, { ProgramPage });
