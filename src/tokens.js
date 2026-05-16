export const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const D1 = {
  bg: 'var(--crudo)',
  ink: 'var(--carbon)',
  azul: 'var(--azul-lago)',
  niebla: 'var(--azul-niebla)',
  cobre: 'var(--cobre)',
  terra: 'var(--terracota)',
  beige: 'var(--beige)',
  musgo: 'var(--musgo)',
  serif: 'var(--serif)',
  sans: 'var(--sans)',
  mono: 'var(--mono)',
}

export function btnPrimary(bg, fg) {
  return {
    background: bg,
    color: fg,
    border: 'none',
    padding: '14px 26px',
    fontFamily: D1.sans,
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
  }
}

export function btnGhost(c) {
  return {
    background: 'transparent',
    color: c,
    border: `1px solid ${c}`,
    padding: '13px 26px',
    fontFamily: D1.sans,
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
  }
}

export function footerLinkStyle() {
  return {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'var(--mono)',
    fontSize: 12,
    color: 'var(--carbon)',
    textAlign: 'left',
    textDecoration: 'none',
    letterSpacing: '0.02em',
  }
}
