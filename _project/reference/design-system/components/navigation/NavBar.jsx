import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../core/Icon';
import { Button } from '../core/Button';

function isGroupActive(link, activeHref) {
  if (!activeHref) return false;
  if (activeHref === link.href) return true;
  return !!(link.children && link.children.some((c) => c.href === activeHref));
}

function DesktopNavItem({ link, active }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const hasChildren = link.children && link.children.length > 0;

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      onMouseEnter={hasChildren ? openNow : undefined}
      onMouseLeave={hasChildren ? closeSoon : undefined}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
    >
      <a
        href={link.href}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-sm)',
          color: active ? 'var(--brand-primary-active)' : 'var(--text-primary)',
          textDecoration: 'none',
          padding: '8px 0',
          whiteSpace: 'nowrap',
        }}
      >
        {link.label}
        {hasChildren ? (
          <Icon
            name="chevron-down"
            size={15}
            style={{ transition: 'transform var(--duration-fast) var(--ease-standard)', transform: open ? 'rotate(180deg)' : 'none' }}
          />
        ) : null}
      </a>
      {hasChildren && open ? (
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '10px' }}>
          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              padding: 'var(--space-2)',
              minWidth: '212px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {link.children.map((c) => (
              <a
                key={c.href}
                href={c.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: c.href === active ? 'var(--brand-primary-active)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: '9px 12px',
                  borderRadius: 'var(--radius-sm)',
                  whiteSpace: 'nowrap',
                  transition: 'background var(--duration-fast) var(--ease-standard)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-sunken)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavItem({ link, active, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = link.children && link.children.length > 0;

  return (
    <div style={{ borderBottom: '1px solid var(--border-default)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href={link.href}
          onClick={onNavigate}
          style={{
            flex: 1,
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-medium)',
            fontSize: 'var(--text-base)',
            color: active ? 'var(--brand-primary-active)' : 'var(--text-primary)',
            textDecoration: 'none',
            padding: 'var(--space-4) 0',
          }}
        >
          {link.label}
        </a>
        {hasChildren ? (
          <button
            aria-label={expanded ? `Collapse ${link.label}` : `Expand ${link.label}`}
            onClick={() => setExpanded((e) => !e)}
            style={{ background: 'none', border: 'none', padding: 'var(--space-3)', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex' }}
          >
            <Icon name="chevron-down" size={18} style={{ transition: 'transform var(--duration-fast) var(--ease-standard)', transform: expanded ? 'rotate(180deg)' : 'none' }} />
          </button>
        ) : null}
      </div>
      {hasChildren && expanded ? (
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 'var(--space-3)' }}>
          {link.children.map((c) => (
            <a
              key={c.href}
              href={c.href}
              onClick={onNavigate}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: c.href === active ? 'var(--brand-primary-active)' : 'var(--text-secondary)',
                textDecoration: 'none',
                padding: 'var(--space-2) 0 var(--space-2) var(--space-4)',
              }}
            >
              {c.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function NavBar({ logo, links = [], ctaLabel = 'Request Quote', onCtaClick, activeHref, mobileBreakpoint = 860, defaultMobileOpen = false }) {
  const [open, setOpen] = useState(defaultMobileOpen);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIsMobile(entry.contentRect.width < mobileBreakpoint);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [mobileBreakpoint]);

  function handleMobileNavigate() {
    setOpen(false);
  }

  return (
    <header ref={containerRef} style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--container-padding)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          gap: 'var(--space-6)',
          boxSizing: 'border-box',
        }}
      >
        {logo}
        {!isMobile ? (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', height: '100%', flex: 1, justifyContent: 'center' }}>
            {links.map((l) => (
              <DesktopNavItem key={l.href} link={l} active={isGroupActive(l, activeHref) ? activeHref : null} />
            ))}
          </nav>
        ) : null}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}>
          {!isMobile ? (
            <Button variant="primary" size="sm" onClick={onCtaClick}>{ctaLabel}</Button>
          ) : (
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
              style={{
                background: open ? 'var(--surface-sunken)' : 'none',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '10px',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
              }}
            >
              <Icon name={open ? 'x' : 'menu'} size={26} />
            </button>
          )}
        </div>
      </div>
      {isMobile && open ? (
        <div style={{ borderTop: '1px solid var(--border-default)', padding: '0 var(--container-padding) var(--space-6)', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {links.map((l) => (
              <MobileNavItem key={l.href} link={l} active={isGroupActive(l, activeHref) ? activeHref : null} onNavigate={handleMobileNavigate} />
            ))}
          </div>
          <Button variant="primary" onClick={onCtaClick} fullWidth style={{ marginTop: 'var(--space-5)' }}>{ctaLabel}</Button>
        </div>
      ) : null}
    </header>
  );
}
