import React, { useState, useRef, useId } from 'react';
import { Icon } from '../core/Icon';

export function Accordion({ items = [], allowMultiple = false, defaultOpenIndex = null }) {
  const [openIndexes, setOpenIndexes] = useState(() => (defaultOpenIndex === null ? [] : [defaultOpenIndex]));
  const baseId = useId();

  function toggle(i) {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(i);
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
      }
      return isOpen ? [] : [i];
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-card)' }}>
      {items.map((item, i) => {
        const open = openIndexes.includes(i);
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-default)' }}>
            <h3 style={{ margin: 0 }}>
              <button
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-5) var(--space-6)',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-medium)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>{item.question}</span>
                <Icon
                  name="chevron-down"
                  size={20}
                  color="var(--text-secondary)"
                  style={{ flexShrink: 0, transition: 'transform var(--duration-fast) var(--ease-standard)', transform: open ? 'rotate(180deg)' : 'none' }}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: 'grid',
                gridTemplateRows: open ? '1fr' : '0fr',
                transition: 'grid-template-rows var(--duration-base) var(--ease-standard)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  style={{
                    margin: 0,
                    padding: '0 var(--space-6) var(--space-5)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
