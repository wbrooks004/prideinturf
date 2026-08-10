import React, { useState } from 'react';

const SIZES = {
  sm: { padY: '9px', padX: 'var(--space-4)', font: 'var(--text-sm)', gap: '6px' },
  md: { padY: '13px', padX: 'var(--space-6)', font: 'var(--text-base)', gap: '8px' },
  lg: { padY: '17px', padX: 'var(--space-8)', font: 'var(--text-lg)', gap: '10px' },
};

function paletteFor(variant) {
  switch (variant) {
    case 'primary':
      return { bg: 'var(--brand-primary)', bgHover: 'var(--brand-primary-hover)', bgActive: 'var(--brand-primary-active)', fg: 'var(--text-on-brand)', border: 'transparent' };
    case 'accent':
      return { bg: 'var(--brand-accent)', bgHover: 'var(--brand-accent-hover)', bgActive: 'var(--brand-accent-active)', fg: 'var(--text-on-brand)', border: 'transparent' };
    case 'outline':
      return { bg: 'transparent', bgHover: 'var(--brand-primary-tint)', bgActive: 'var(--color-green-100)', fg: 'var(--brand-primary-active)', border: 'var(--border-strong)' };
    case 'ghost':
      return { bg: 'transparent', bgHover: 'var(--surface-sunken)', bgActive: 'var(--color-neutral-200)', fg: 'var(--text-primary)', border: 'transparent' };
    case 'inverse':
      return { bg: 'var(--color-neutral-0)', bgHover: 'var(--color-neutral-100)', bgActive: 'var(--color-neutral-200)', fg: 'var(--brand-primary-active)', border: 'transparent' };
    default:
      return paletteFor('primary');
  }
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  as = 'button',
  style: styleOverride,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const pal = paletteFor(variant);
  const dims = SIZES[size] || SIZES.md;
  const As = as;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: dims.gap,
    width: fullWidth ? '100%' : undefined,
    padding: `${dims.padY} ${dims.padX}`,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-bold)',
    fontSize: dims.font,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    color: disabled ? 'var(--text-disabled)' : pal.fg,
    background: disabled ? 'var(--color-neutral-100)' : active ? pal.bgActive : hover ? pal.bgHover : pal.bg,
    border: `var(--border-width) solid ${disabled ? 'var(--border-default)' : pal.border}`,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    boxSizing: 'border-box',
    textDecoration: 'none',
    ...styleOverride,
  };

  return (
    <As
      style={style}
      disabled={As === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => !disabled && setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {icon && iconPosition === 'left' ? icon : null}
      {children}
      {icon && iconPosition === 'right' ? icon : null}
    </As>
  );
}
