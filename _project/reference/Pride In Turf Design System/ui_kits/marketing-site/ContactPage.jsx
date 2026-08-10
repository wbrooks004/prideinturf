function ContactPage() {
  const { SectionHeading, Icon, Button, FormField, Input, Select, Textarea, Checkbox } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;
  const [submitted, setSubmitted] = React.useState(false);
  const [consent, setConsent] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const contactPageLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-medium)',
    fontSize: 'var(--text-base)',
    color: 'var(--text-primary)',
    textDecoration: 'none',
  };

  const programOptions = data.programs.map((p) => ({ value: p.slug, label: p.title }))
    .concat(data.services.map((s) => ({ value: s.slug, label: s.title })));

  return (
    <div style={{ padding: 'var(--space-16) var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Request a Quote" heading="Tell us about your lawn." subhead="We'll help point you toward the right program or service." />

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-16)', marginTop: 'var(--space-12)', alignItems: 'start' }}>
          <div>
            {submitted ? (
              <div
                style={{
                  background: 'var(--brand-primary-tint)',
                  border: '1px solid var(--color-green-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-10)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', background: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-on-brand)' }}>
                  <Icon name="check" size={24} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', margin: 0 }}>
                  Thanks — we'll be in touch.
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-snug)' }}>
                  A Pride In Turf team member will follow up to confirm your program or service.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Submit another request</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                <FormField label="Full name" htmlFor="c-name"><Input id="c-name" required /></FormField>
                <FormField label="Phone" htmlFor="c-phone" required><Input id="c-phone" type="tel" required /></FormField>
                <div style={{ gridColumn: '1 / -1' }}>
                  <FormField label="Email" htmlFor="c-email"><Input id="c-email" type="email" /></FormField>
                </div>
                <FormField label="City" htmlFor="c-city"><Input id="c-city" placeholder="e.g. Alpharetta" /></FormField>
                <FormField label="Turf type" htmlFor="c-turf">
                  <Select id="c-turf" placeholder="Select if known…" options={['Bermuda', 'Zoysia', 'Fescue', 'Mixed / not sure']} />
                </FormField>
                <div style={{ gridColumn: '1 / -1' }}>
                  <FormField label="Interested in" htmlFor="c-program">
                    <Select id="c-program" placeholder="Select a program or service…" options={programOptions} />
                  </FormField>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <FormField label="What's going on with your lawn?" htmlFor="c-notes" hint="Brown patches, weeds, thinning turf…">
                    <Textarea id="c-notes" rows={4} />
                  </FormField>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <Checkbox id="c-consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} label="Text me about my quote (standard rates may apply)." />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <Button type="submit" variant="primary" fullWidth icon={<Icon name="arrow-right" size={16} />}>Start Quote Request</Button>
                </div>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <a href={`tel:${data.contact.phone.replace(/[^\d+]/g, '')}`} style={contactPageLinkStyle}>
                <Icon name="phone" size={17} color="var(--brand-primary-active)" />{data.contact.phone}
              </a>
              <a href={`mailto:${data.contact.email}`} style={contactPageLinkStyle}>
                <Icon name="mail" size={17} color="var(--brand-primary-active)" />{data.contact.email}
              </a>
              {data.contact.locations.map((loc) => (
                <div key={loc.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Icon name="map-pin" size={17} color="var(--text-secondary)" style={{ marginTop: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{loc.label}</strong><br />{loc.address}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-4)' }}>
                <Icon name="clock" size={17} color="var(--text-secondary)" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>Hours</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {data.contact.hours.map(([day, val]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    <span>{day}</span><span style={{ color: 'var(--text-primary)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ContactPage });
