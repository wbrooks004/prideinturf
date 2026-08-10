function HomePage({ onNavigate }) {
  const { Hero, CTABanner, Button, Icon, SectionHeading } = window.PrideInTurfDesignSystem_2d4922;
  const { ProgramCard, ServiceCard } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <Hero
        eyebrow="Metro Atlanta Lawn Care"
        heading="Programs built for Georgia lawns."
        subhead="Pride In Turf helps homeowners build healthier turf with lawn care programs, aeration, fungicide protection, pest control, and weed control."
        primaryCta={
          <Button variant="inverse" icon={<Icon name="arrow-right" size={16} />} onClick={() => onNavigate('/contact/')}>
            Request a Free Quote
          </Button>
        }
        secondaryCta={
          <Button as="a" href="#programs" variant="ghost" style={{ color: 'var(--text-on-dark)' }}>
            View Lawn Care Programs
          </Button>
        }
        infoItems={[
          'Warm weather, cool weather, and mixed lawn care programs',
          'Services focused on turf health, weeds, pests, disease, and root-zone support',
          'Serving Metro Atlanta and Northeast Georgia',
        ]}
      />

      <section style={{ padding: 'var(--space-20) var(--container-padding)', boxSizing: 'border-box' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            background: 'var(--surface-sunken)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-8)',
            flexWrap: 'wrap',
          }}
        >
          <SectionHeading
            eyebrow="Get a lawn care quote"
            heading="Tell us what your lawn needs."
            subhead="We'll help point you toward the right program or service."
            size="sm"
          />
          <Button variant="primary" icon={<Icon name="arrow-right" size={16} />} onClick={() => onNavigate('/contact/')}>
            Start Quote Request
          </Button>
        </div>
      </section>

      <section id="programs" style={{ padding: '0 var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading
            eyebrow="Lawn Care Programs"
            heading="Choose the right program for your turf type and conditions."
            subhead="Three program options for warm weather, cool weather, and mixed lawn care needs."
            align="center"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {data.programs.map((p) => (
              <ProgramCard
                key={p.slug}
                icon={<Icon name={p.icon} size={22} />}
                title={p.title}
                description={p.description}
                href={p.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Services" heading="Turf-focused services for Georgia lawns." align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {data.services.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={<Icon name={s.icon} size={20} />}
                title={s.title}
                description={s.description}
                href={s.href}
              />
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

Object.assign(window, { HomePage });
