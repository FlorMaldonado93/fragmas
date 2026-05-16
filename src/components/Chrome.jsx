import { D1, asset } from '../tokens'
import Footer from './Footer'

const TABS = [
  ['inicio', 'Inicio'],
  ['escritura', 'Escritura'],
  ['streaming', 'Streaming'],
  ['diseno', 'Diseño'],
]

export default function Chrome({ page, setPage, children }) {
  return (
    <div style={{ background: D1.bg, minHeight: '100vh', width: '100%' }}>
      <header className="fr-header" style={{
        borderBottom: `1px solid ${D1.ink}15`,
        position: 'sticky', top: 0, background: D1.bg, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
             onClick={() => setPage('inicio')}>
          <img src={asset('assets/fragmas-logo-horizontal.png')} alt="Fragmas"
               style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>

        <nav className="fr-nav">
          {TABS.map(([k, label]) => (
            <button key={k} onClick={() => setPage(k)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: D1.sans, fontSize: 13, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: page === k ? D1.azul : `${D1.ink}88`,
                fontWeight: page === k ? 600 : 400,
                padding: '4px 0',
                borderBottom: page === k ? `1.5px solid ${D1.azul}` : '1.5px solid transparent',
              }}>
              {label}
            </button>
          ))}
        </nav>

        <div className="fr-hide-mobile" style={{
          fontFamily: D1.mono, fontSize: 10,
          color: `${D1.ink}66`, letterSpacing: '0.05em',
        }}>
          fragmas.com.ar · v1.0
        </div>
      </header>

      {children}

      <Footer setPage={setPage} />
    </div>
  )
}
