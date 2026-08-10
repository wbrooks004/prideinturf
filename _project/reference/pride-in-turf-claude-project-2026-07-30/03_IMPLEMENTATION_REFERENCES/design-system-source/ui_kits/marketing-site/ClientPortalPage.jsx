function ClientPortalPage() {
  const { SectionHeading, Icon, Button, Badge } = window.PrideInTurfDesignSystem_2d4922;

  return (
    <div style={{ padding: 'var(--space-20) var(--container-padding)', boxSizing: 'border-box', minHeight: '440px', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            background: 'var(--surface-sunken)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-12)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-5)',
          }}
        >
          <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary-active)' }}>
            <Icon name="shield-check" size={28} />
          </div>
          <Badge variant="neutral">Client Portal</Badge>
          <SectionHeading heading="Manage your account and service schedule." align="center" size="sm" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)', maxWidth: '440px', margin: 0 }}>
            Existing customers can view upcoming visits, invoices, and account details here. This placeholder links out to the real client portal system once it's connected.
          </p>
          <Button variant="primary" icon={<Icon name="arrow-right" size={16} />}>Go to Client Portal</Button>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', margin: 0 }}>
            Placeholder page — no client-portal provider or login flow was supplied. Swap this for a real embed or redirect.
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ClientPortalPage });
