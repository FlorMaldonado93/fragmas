import { D1, footerLinkStyle, asset } from '../tokens'

export default function Footer({ setPage }) {
  return (
    <footer style={{
      marginTop: 64, padding: '32px 56px 24px',
      borderTop: `1px solid ${D1.ink}15`,
      fontFamily: D1.mono, fontSize: 11,
      color: `${D1.ink}99`, letterSpacing: '0.04em',
    }}>
      <div className="fr-footer-grid">
        <div>
          <img src={asset('assets/fragmas-logo-horizontal.png')} alt="Fragmas"
               style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block' }} />
          <p style={{
            margin: '18px 0 0', fontFamily: D1.serif, fontSize: 15,
            lineHeight: 1.55, color: `${D1.ink}A0`, fontStyle: 'italic', maxWidth: 280,
          }}>
            Tres oficios, una sola persona. Escritura, streaming y diseño desde
            Bariloche, Patagonia argentina.
          </p>
        </div>

        <div>
          <div style={{
            color: D1.cobre, textTransform: 'uppercase',
            letterSpacing: '0.14em', fontSize: 10, marginBottom: 14,
          }}>
            Sub-marcas
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><button onClick={() => setPage('escritura')} style={footerLinkStyle()}>Escritura · Flor Maldonado</button></li>
            <li><button onClick={() => setPage('streaming')} style={footerLinkStyle()}>Streaming · HormigaViajera</button></li>
            <li><button onClick={() => setPage('diseno')} style={footerLinkStyle()}>Diseño · Flucty</button></li>
          </ul>
        </div>

        <div>
          <div style={{
            color: D1.cobre, textTransform: 'uppercase',
            letterSpacing: '0.14em', fontSize: 10, marginBottom: 14,
          }}>
            Encontrame
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><a href="https://a.co/d/02h3skLA" target="_blank" rel="noopener" style={footerLinkStyle()}>↗ Amazon KDP</a></li>
            <li><a href="https://twitch.tv/hormigaviajera" target="_blank" rel="noopener" style={footerLinkStyle()}>↗ Twitch</a></li>
            <li><a href="https://www.instagram.com/florencia.maldonado.ok/" target="_blank" rel="noopener" style={footerLinkStyle()}>↗ Instagram</a></li>
          </ul>
        </div>

        <div>
          <div style={{
            color: D1.cobre, textTransform: 'uppercase',
            letterSpacing: '0.14em', fontSize: 10, marginBottom: 14,
          }}>
            Base
          </div>
          <div style={{ fontFamily: D1.serif, fontSize: 15, color: D1.ink, lineHeight: 1.5 }}>
            Bariloche<br />
            <span style={{ color: `${D1.ink}88` }}>41° 08′ S · 71° 18′ O</span>
          </div>
          <div style={{ marginTop: 12, color: `${D1.ink}77` }}>
            hola@fragmas.com.ar
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 24, paddingTop: 16, borderTop: `1px solid ${D1.ink}10`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20,
        color: `${D1.ink}77`, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={asset('assets/fragmas-favicon.png')} alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} />
          © 2026 Fragmas · Florencia Maldonado
        </div>
        <div>Hecho en la Patagonia · es-AR · v1.0</div>
      </div>
    </footer>
  )
}
