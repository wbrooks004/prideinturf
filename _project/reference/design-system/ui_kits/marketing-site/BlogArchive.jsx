function BlogArchive({ onNavigate }) {
  const { SectionHeading, Breadcrumbs, Icon } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Blog' }]} />
          <ConceptualBadge />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Blog" heading="Lawn care articles." subhead="Placeholder listing — connect to the real WordPress post archive." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {data.blogPosts.map((post) => (
              <a
                key={post.slug}
                href={post.href}
                onClick={(e) => { e.preventDefault(); onNavigate(post.href); }}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textDecoration: 'none', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}
              >
                <div style={{ width: '100%', aspectRatio: '16 / 10', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <image-slot id={`blog-thumb-${post.slug}`} shape="rect" placeholder={`Drop a thumbnail for "${post.title}"`} src={window.__img(`../../assets/imagery/blog-${post.slug}.jpg`)}></image-slot>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{post.date}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)', margin: 0 }}>{post.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-snug)' }}>{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { BlogArchive });
