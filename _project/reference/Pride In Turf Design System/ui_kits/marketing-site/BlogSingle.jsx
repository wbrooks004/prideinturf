function BlogSingle({ post, onNavigate }) {
  const { Breadcrumbs, Icon, CTABanner, Button } = window.PrideInTurfDesignSystem_2d4922;
  if (!post) return null;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/blog/', label: 'Blog' }, { label: post.title }]} />
          <ConceptualBadge />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-12)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{post.date}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: 0 }}>
            {post.title}
          </h1>
          <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <image-slot id={`blog-hero-${post.slug}`} shape="rect" placeholder={`Drop a hero image for "${post.title}"`} src={window.__img(`../../assets/imagery/blog-${post.slug}.jpg`)}></image-slot>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
            {post.excerpt} Placeholder body copy — the real post content flows here as standard WordPress post content (paragraphs, headings, images).
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

Object.assign(window, { BlogSingle });
