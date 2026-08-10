function ConceptualBadge() {
  const { Icon } = window.PrideInTurfDesignSystem_2d4922;
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: 'var(--brand-accent-tint)',
        color: 'var(--brand-accent-active)',
        border: '1px solid var(--color-orange-200)',
        borderRadius: 'var(--radius-full)',
        padding: '5px 12px',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-medium)',
        fontSize: '11px',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
      }}
    >
      <Icon name="triangle-alert" size={13} />
      Conceptual — placeholder content
    </div>
  );
}

Object.assign(window, { ConceptualBadge });
