import { D1, btnPrimary, asset } from '../tokens'
import SectionRule from '../components/SectionRule'

function SubInline({ color, onClick, children }) {
  return (
    <span onClick={onClick} style={{
      color, cursor: 'pointer', textDecoration: 'underline',
      textDecorationThickness: '1px', textUnderlineOffset: 4,
      textDecorationColor: `${color}55`,
    }}>
      {children}
    </span>
  )
}

function SubCard({ n, color, kicker, title, body, tag, onClick }) {
  return (
    <div onClick={onClick} style={{
      cursor: 'pointer', padding: '28px 26px 26px',
      background: 'rgba(255,255,255,0.4)', border: `1px solid ${D1.ink}15`,
      transition: 'border-color 0.2s',
      display: 'flex', flexDirection: 'column', minHeight: 280,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = color }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${D1.ink}15` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: D1.serif, fontStyle: 'italic', fontSize: 18, color: `${D1.ink}66` }}>{n}</div>
        <div style={{
          fontFamily: D1.mono, fontSize: 9, letterSpacing: '0.12em',
          color: `${D1.ink}66`, textTransform: 'uppercase',
        }}>{tag}</div>
      </div>
      <div style={{
        marginTop: 18, fontFamily: D1.mono, fontSize: 10,
        letterSpacing: '0.14em', color, textTransform: 'uppercase',
      }}>{kicker}</div>
      <h3 style={{
        margin: '6px 0 14px', fontFamily: D1.serif, fontSize: 'clamp(26px, 5vw, 38px)',
        fontWeight: 400, color: D1.ink, letterSpacing: '-0.01em',
      }}>{title}</h3>
      <p style={{
        margin: 0, fontFamily: D1.serifBody, fontSize: 15,
        lineHeight: 1.6, color: `${D1.ink}B0`, flex: 1,
      }}>{body}</p>
      <div style={{ marginTop: 22, fontFamily: D1.sans, fontSize: 12, color, letterSpacing: '0.04em' }}>
        Entrar al fragmento →
      </div>
    </div>
  )
}

export default function Home({ setPage }) {
  return (
    <main className="fr-page">
      <div className="fr-hero">
        <div>
          <div style={{
            fontFamily: D1.mono, fontSize: 11, letterSpacing: '0.18em',
            color: D1.cobre, marginBottom: 22, textTransform: 'uppercase',
          }}>
            Manifiesto · 01
          </div>
          <h1 style={{
            fontFamily: D1.serif, fontWeight: 400,
            fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.08,
            margin: 0, color: D1.ink, letterSpacing: '-0.01em',
          }}>
            Se puede ser <em style={{ color: D1.azul, fontStyle: 'italic' }}>múltiples cosas</em> a la vez,
            y profesional en cada una.
          </h1>

          <div style={{
            marginTop: 44, fontFamily: D1.serifBody, fontSize: 21, lineHeight: 1.6,
            color: `${D1.ink}D0`, maxWidth: 720,
          }}>
            <p style={{ margin: 0 }}>
              Fragmas es un refugio para la identidad múltiple. Tres oficios que conviven
              sin pedirse permiso:{' '}
              <SubInline color={D1.azul} onClick={() => setPage('escritura')}>la escritura</SubInline>{' '}
              que ordena lo que la cabeza no termina de decir,{' '}
              <SubInline color={D1.musgo} onClick={() => setPage('streaming')}>el streaming</SubInline>{' '}
              donde la conversación se vuelve comunidad, y{' '}
              <SubInline color={D1.cobre} onClick={() => setPage('diseno')}>el diseño</SubInline>{' '}
              que da forma a las ideas de otros con la misma honestidad.
            </p>
            <p style={{ margin: '22px 0 0' }}>
              Cada fragmento es una marca propia. Ninguno anula a los demás.
            </p>
          </div>

          <div style={{ marginTop: 56, display: 'flex', gap: 12, alignItems: 'center' }}>
            <button onClick={() => setPage('escritura')} style={btnPrimary(D1.azul, D1.bg)}>
              Conocer los fragmentos →
            </button>
            <div style={{ fontFamily: D1.mono, fontSize: 10, color: `${D1.ink}66`, letterSpacing: '0.08em' }}>
              tres sub-marcas · una misma persona
            </div>
          </div>
        </div>

        <aside>
          <img src={asset('assets/flor-retrato.jpg')} alt="Florencia Maldonado"
               style={{
                 width: '100%', aspectRatio: '3/4', objectFit: 'cover',
                 objectPosition: 'center top', display: 'block',
                 boxShadow: `8px 12px 0 ${D1.azul}18, 0 2px 12px ${D1.ink}18`,
               }} />
          <div style={{
            marginTop: 14, fontFamily: D1.serifBody, fontStyle: 'italic',
            fontSize: 14, color: `${D1.ink}99`, lineHeight: 1.55,
          }}>
            Florencia Maldonado escribe, transmite y diseña desde Bariloche.
            Vive entre el lago Nahuel Huapi y un escritorio con un gato encima.
          </div>
        </aside>
      </div>

      {/* Sub-marca cards */}
      <section style={{ marginTop: 96 }}>
        <SectionRule color={D1.cobre} label="Los fragmentos · 02" />
        <div className="fr-cards" style={{ marginTop: 28 }}>
          <SubCard n="i." color={D1.azul} kicker="Flor Maldonado" title="Escritura"
            body="Refugio. Travesía. Y lo que venga después. Libros sobre el lugar al que volvemos cuando nos perdemos."
            tag="autora · ensayo · narrativa" onClick={() => setPage('escritura')} />
          <SubCard n="ii." color={D1.musgo} kicker="HormigaViajera" title="Streaming"
            body="Just Chatting en Twitch. Una comunidad de mil quinientas personas que se quedan a conversar."
            tag="twitch · just chatting" onClick={() => setPage('streaming')} />
          <SubCard n="iii." color={D1.cobre} kicker="Flucty" title="Diseño"
            body="Diseño gráfico y UX/UI freelance para emprendedores pequeños. Casos honestos, plazos reales."
            tag="diseño · ux/ui · freelance" onClick={() => setPage('diseno')} />
        </div>
      </section>

      {/* Valores */}
      <section style={{ marginTop: 96, paddingBottom: 0 }}>
        <SectionRule color={D1.cobre} label="Valores · 03" />
        <p style={{
          marginTop: 18, fontFamily: D1.serifBody, fontStyle: 'italic',
          fontSize: 17, color: `${D1.ink}99`, maxWidth: 720, lineHeight: 1.55,
        }}>
          Lo que sostiene a las tres sub-marcas, sin importar el canal.
        </p>
        <div className="fr-values" style={{ marginTop: 32 }}>
          {[
            ['Multiplicidad sin disolución', 'Cada fragmento se sostiene profesionalmente. Ningún frente se trata como hobby de relleno.', D1.azul],
            ['Honestidad', 'No se finge, no se infla. Se dice lo que pasa, lo que se sabe y lo que no. Aplica a todo.', D1.cobre],
            ['Anclaje territorial', 'Bariloche, la Patagonia y la montaña son materia, no decorado. No se diluyen para sonar más universales.', D1.musgo],
            ['Coherencia entre fragmentos', 'Lo que se dice en un libro se sostiene en el stream y en el trato con un cliente. La misma persona en todos lados.', D1.azul],
            ['Profesionalismo sin solemnidad', 'Calidad técnica alta, sin pose de gurú ni jerga inflada. Trabajar en serio sin tomarse demasiado en serio.', D1.cobre],
            ['Comunidad', 'El vínculo real está por encima de la métrica. Se construye espacio para que otros se reconozcan y se queden.', D1.musgo],
          ].map(([title, body, color], i) => (
            <div key={title} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 18 }}>
              <div style={{ fontFamily: D1.serif, fontStyle: 'italic', fontSize: 28, color, lineHeight: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h4 style={{
                  margin: 0, fontFamily: D1.serif, fontWeight: 500,
                  fontSize: 22, color: D1.ink, letterSpacing: '-0.005em',
                }}>{title}</h4>
                <p style={{
                  margin: '6px 0 0', fontFamily: D1.serifBody, fontSize: 15,
                  lineHeight: 1.6, color: `${D1.ink}A8`,
                }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
