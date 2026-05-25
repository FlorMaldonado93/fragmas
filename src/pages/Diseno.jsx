import { D1, btnPrimary, asset } from '../tokens'
import SectionRule from '../components/SectionRule'
import SubHeader from '../components/SubHeader'

const CALENDAR_PAGES = [
  { src: asset('assets/calendario/01.png'), label: 'Portada · 2026' },
  { src: asset('assets/calendario/02.png'), label: 'Mes ilustrado · cocina' },
  { src: asset('assets/calendario/03.png'), label: 'Enero · grilla' },
  { src: asset('assets/calendario/04.png'), label: 'Mes ilustrado · vestidor' },
  { src: asset('assets/calendario/05.png'), label: 'Febrero · grilla' },
  { src: asset('assets/calendario/06.png'), label: 'Mes ilustrado · terrazo' },
]

function CalendarioMockup() {
  return (
    <div>
      <div className="fr-cal-grid">
        {CALENDAR_PAGES.map((p) => (
          <figure key={p.src} style={{ margin: 0 }}>
            <div style={{
              background: '#fff', border: `1px solid ${D1.ink}15`,
              boxShadow: `0 4px 18px ${D1.ink}14`, overflow: 'hidden',
              aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={p.src} alt={p.label}
                   style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <figcaption style={{
              marginTop: 8, fontFamily: D1.mono, fontSize: 10,
              color: `${D1.ink}77`, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              {p.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="fr-two-wide" style={{ marginTop: 36 }}>
        <p style={{
          margin: 0, fontFamily: D1.serifBody, fontSize: 17,
          lineHeight: 1.6, color: `${D1.ink}C8`,
        }}>
          Calendario anual con identidad propia: una portada y doce piezas mensuales que
          alternan fotografía de ambientes con grillas de tipografía editorial sobre paleta
          tierra, pensadas para acompañar el trabajo comercial sin competir con él. Cada
          mes resalta feriados y fechas relevantes para el rubro.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
          fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.08em',
          color: `${D1.ink}99`, textTransform: 'uppercase',
        }}>
          <div><div style={{ color: D1.cobre }}>Cliente</div><div style={{ marginTop: 4 }}>Amoblamientos Patagónicos</div></div>
          <div><div style={{ color: D1.cobre }}>Rol</div><div style={{ marginTop: 4 }}>Diseño integral · Flucty</div></div>
          <div><div style={{ color: D1.cobre }}>Formato</div><div style={{ marginTop: 4 }}>26 páginas · apaisado</div></div>
          <div><div style={{ color: D1.cobre }}>Año</div><div style={{ marginTop: 4 }}>2025 · para 2026</div></div>
        </div>
      </div>
    </div>
  )
}

export default function Diseno() {
  return (
    <main className="fr-page">
      <SubHeader color={D1.cobre} kicker="Flucty" title="Diseño" eyebrow="UX/UI · gráfico · freelance" />
      <p style={{
        marginTop: 28, fontFamily: D1.serifBody, fontSize: 19,
        lineHeight: 1.65, color: `${D1.ink}C0`, maxWidth: 760,
      }}>
        Diseño para emprendedores pequeños. Casos con problema, propuesta y resultado.
        Sin agencia premium, sin promesas imposibles.
      </p>

      <section style={{ marginTop: 56 }}>
        <SectionRule color={D1.cobre} label="Casos · 01" />

        {/* Caso 01 — Sitio web */}
        <div style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <div style={{ fontFamily: D1.serif, fontSize: 38, fontStyle: 'italic', color: D1.cobre }}>01</div>
            <div style={{
              fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}77`,
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Amoblamientos Patagónicos · sitio web
            </div>
          </div>
          <h3 style={{
            margin: '4px 0 8px', fontFamily: D1.serif, fontSize: 36,
            fontWeight: 400, color: D1.ink, lineHeight: 1.15,
          }}>
            amoblamientospatagonicos.com
          </h3>
          <div style={{
            fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}88`,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18,
          }}>
            Diseño visual · UX · catálogo digital · 2024
          </div>

          <div className="fr-two-wide">
            <div style={{ background: '#fff', border: `1px solid ${D1.ink}15`, overflow: 'hidden' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px',
                borderBottom: `1px solid ${D1.ink}10`, background: '#EFE5D6',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#D86C5E' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E0B055' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#7DA67A' }} />
                <div style={{
                  marginLeft: 14, padding: '4px 12px', background: '#fff',
                  fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}88`,
                  border: `1px solid ${D1.ink}10`, borderRadius: 12,
                }}>
                  amoblamientospatagonicos.com
                </div>
              </div>
              <img src={asset('assets/amoblamientos-site.png')} alt="Amoblamientos Patagónicos · sitio web"
                   style={{ width: '100%', display: 'block' }} />
            </div>

            <div>
              <p style={{
                margin: 0, fontFamily: D1.serifBody, fontSize: 17,
                lineHeight: 1.6, color: `${D1.ink}C8`,
              }}>
                Sitio institucional y catálogo digital de la marca. Diseño visual y experiencia
                a cargo de Flucty, manteniendo la identidad y comunicación de la empresa.
              </p>
              <div style={{
                marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
                fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.08em',
                color: `${D1.ink}99`, textTransform: 'uppercase',
              }}>
                <div><div style={{ color: D1.cobre }}>Rol Flucty</div><div style={{ marginTop: 4 }}>Diseño visual · UX</div></div>
                <div><div style={{ color: D1.cobre }}>Estado</div><div style={{ marginTop: 4 }}>Finalizado</div></div>
              </div>
              <div style={{ marginTop: 26 }}>
                <a href="https://amoblamientospatagonicos.com/" target="_blank" rel="noopener"
                   style={btnPrimary(D1.cobre, D1.bg)}>
                  Visitar el sitio →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Caso 02 — Calendario */}
        <div style={{ marginTop: 80 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <div style={{ fontFamily: D1.serif, fontSize: 38, fontStyle: 'italic', color: D1.cobre }}>02</div>
            <div style={{
              fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}77`,
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Amoblamientos Patagónicos · pieza ancla
            </div>
          </div>
          <h3 style={{
            margin: '4px 0 8px', fontFamily: D1.serif, fontSize: 36,
            fontWeight: 400, color: D1.ink, lineHeight: 1.15,
          }}>
            Calendario 2026
          </h3>
          <div style={{
            fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}88`,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18,
          }}>
            Diseño gráfico · dirección de arte · 26 páginas · 2025
          </div>
          <CalendarioMockup />
        </div>

        {/* Caso 03 — Próximo */}
        <div style={{
          marginTop: 80, padding: '28px 32px', background: D1.beige,
          border: `1px dashed ${D1.cobre}66`,
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <div style={{ fontFamily: D1.serif, fontSize: 32, fontStyle: 'italic', color: `${D1.cobre}88` }}>03</div>
            <div style={{
              fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}77`,
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Próximo caso · espacio reservado
            </div>
          </div>
          <p style={{
            margin: '6px 0 0', fontFamily: D1.serifBody, fontSize: 15,
            fontStyle: 'italic', color: `${D1.ink}90`, lineHeight: 1.6, maxWidth: 620,
          }}>
            Estructura para el próximo cliente: contexto, alcance, propuesta visual y link al
            producto final.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ marginTop: 96 }}>
        <SectionRule color={D1.cobre} label="Servicios · 02" />
        <div className="fr-cards" style={{ marginTop: 24 }}>
          {[
            ['Identidad', 'Logotipo, paleta, tipografías y guía mínima de uso. Para emprendimientos que están por nacer o que necesitan ordenarse.'],
            ['UX/UI', 'Diseño de producto digital: web, app o herramienta interna. Trabajo iterativo con vos y con quien implementa.'],
            ['Pieza editorial', 'Catálogo, calendario, libro de arte, e-book. Si la pieza tiene que durar más que un scroll.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div style={{ fontFamily: D1.serif, fontSize: 26, color: D1.cobre, fontStyle: 'italic' }}>{t}</div>
              <p style={{
                marginTop: 10, fontFamily: D1.serifBody, fontSize: 15,
                lineHeight: 1.6, color: `${D1.ink}A8`,
              }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
