function NotFoundPage({ onNavigate }) {
  const { Icon, Button } = window.PrideInTurfDesignSystem_2d4922;

  return (
    <div style={{ padding: 'var(--space-32) var(--container-padding)', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '420px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)', textAlign: 'center' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}>
          <Icon name="frown" size={28} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-5xl)', color: 'var(--text-primary)' }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', margin: 0 }}>
          We couldn't find that page.
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '420px', margin: 0, lineHeight: 'var(--leading-snug)' }}>
          It may have moved, or the link may be out of date. Try the homepage or request a quote instead.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
          <Button variant="outline" onClick={() => onNavigate('/')}>Back to homepage</Button>
          <Button variant="primary" onClick={() => onNavigate('/contact/')}>Request Quote</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NotFoundPage });
