function ReviewsArchive() {
  const { SectionHeading, Breadcrumbs, ReviewCard } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;

  return (
    <div>
      <section style={{ padding: 'var(--space-12) var(--container-padding) 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Reviews' }]} />
          <ConceptualBadge />
        </div>
      </section>
      <section style={{ padding: 'var(--space-8) var(--container-padding) var(--space-20)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Reviews" heading="What Georgia homeowners say." subhead="Sample layout only — wire this to real Google Business Profile reviews before publishing." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {data.reviews.map((r, i) => (
              <ReviewCard key={i} authorName={r.authorName} rating={r.rating} source={r.source} text={r.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ReviewsArchive });
