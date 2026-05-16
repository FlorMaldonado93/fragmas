import { useState } from 'react'
import { D1, btnPrimary, btnGhost, asset } from '../tokens'
import SectionRule from '../components/SectionRule'
import SubHeader from '../components/SubHeader'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': import.meta.env.VITE_BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, updateEnabled: true }),
      })
      if (res.status === 201 || res.status === 204) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrMsg(data.message || 'Error al suscribirse.')
        setStatus('error')
      }
    } catch {
      setErrMsg('Error de conexión. Intentá de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        padding: '32px 36px', background: D1.beige,
        border: `1px dashed ${D1.azul}55`,
      }}>
        <div style={{ fontFamily: D1.serif, fontStyle: 'italic', fontSize: 22, color: D1.azul }}>
          ¡Gracias! Te avisamos en cuanto salga Travesía.
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="fr-newsletter" style={{
        padding: '32px 36px', background: D1.beige,
        border: `1px dashed ${D1.azul}55`,
      }}>
        <div>
          <div style={{
            fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.14em',
            color: D1.azul, textTransform: 'uppercase',
          }}>
            Newsletter
          </div>
          <div style={{ fontFamily: D1.serif, fontSize: 26, fontStyle: 'italic', color: D1.ink, marginTop: 6 }}>
            Que te avise cuando salga Travesía.
          </div>
          {status === 'error' && (
            <div style={{ marginTop: 8, fontFamily: D1.mono, fontSize: 11, color: D1.terra }}>
              {errMsg}
            </div>
          )}
        </div>
        <div className="fr-newsletter-fields" style={{ display: 'flex', flexShrink: 0 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
            style={{
              width: 220, padding: '14px 16px',
              fontFamily: D1.serif, fontSize: 16,
              background: 'rgba(255,255,255,0.6)',
              border: `1px solid ${D1.azul}55`, borderRight: 'none',
              color: D1.ink, outline: 'none',
            }}
          />
          <button type="submit" disabled={status === 'loading'} style={{
            ...btnPrimary(D1.azul, D1.bg),
            opacity: status === 'loading' ? 0.7 : 1,
            cursor: status === 'loading' ? 'default' : 'pointer',
            whiteSpace: 'nowrap',
          }}>
            {status === 'loading' ? 'Enviando…' : 'Suscribirme'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default function Escritura() {
  return (
    <main className="fr-page">
      <SubHeader color={D1.azul} kicker="Flor Maldonado" title="Escritura" eyebrow="/escritura" />

      {/* Refugio */}
      <div className="fr-book" style={{ marginTop: 48 }}>
        <div>
          <img src={asset('assets/refugio-cover.png')} alt="Refugio · portada"
               style={{ width: '100%', display: 'block' }} />
        </div>
        <div>
          <div style={{
            fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.14em',
            color: D1.azul, textTransform: 'uppercase',
          }}>
            Libro 01 · Amazon KDP · ISBN 978-631-00-8092-5
          </div>
          <h2 style={{
            fontFamily: D1.serif, fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400,
            color: D1.ink, margin: '8px 0 4px', letterSpacing: '-0.02em', lineHeight: 1,
          }}>
            Refugio
          </h2>
          <div style={{ fontFamily: D1.serif, fontSize: 20, color: D1.cobre, fontStyle: 'italic' }}>
            El lugar al que vuelvo cuando me pierdo
          </div>
          <p style={{
            marginTop: 28, fontFamily: D1.serif, fontSize: 19,
            lineHeight: 1.6, color: `${D1.ink}D0`, maxWidth: 560,
          }}>
            A veces el refugio es una casa con ventanas grandes. Otras, una amiga que no
            pregunta, solo escucha. A veces tiene forma de ciudad —como Bariloche, con
            sus montañas y su aire limpio— y otras veces vive adentro mío.
          </p>
          <p style={{
            marginTop: 14, fontFamily: D1.serif, fontStyle: 'italic',
            fontSize: 17, lineHeight: 1.6, color: `${D1.ink}A0`, maxWidth: 560,
          }}>
            Cada texto es una puerta. Un rincón donde descansar.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="https://a.co/d/02h3skLA" target="_blank" rel="noopener"
               style={btnPrimary(D1.azul, D1.bg)}>
              Conseguir en Amazon →
            </a>
            <a href="https://read.amazon.com/sample/B0F4P2GKW4?clientId=share"
               target="_blank" rel="noopener" style={btnGhost(D1.azul)}>
              Leer fragmento gratuito
            </a>
          </div>
        </div>
      </div>

      {/* Travesía */}
      <section style={{ marginTop: 96 }}>
        <SectionRule color={D1.cobre} label="Próximamente · 02" />
        <div className="fr-book" style={{ marginTop: 32 }}>
          <div>
            <img src={asset('assets/travesia-cover.png')} alt="Travesía · portada"
                 style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <div style={{
              fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.14em',
              color: D1.cobre, textTransform: 'uppercase',
            }}>
              Libro 02 · próximamente
            </div>
            <h2 style={{
              fontFamily: D1.serif, fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 400,
              color: D1.ink, margin: '8px 0 4px', letterSpacing: '-0.02em', lineHeight: 1,
            }}>
              Travesía
            </h2>
            <p style={{
              marginTop: 22, fontFamily: D1.serif, fontStyle: 'italic',
              fontSize: 20, lineHeight: 1.5, color: D1.cobre, maxWidth: 560,
            }}>
              Hay libros que no se leen de un tirón, se caminan.
            </p>
            <p style={{
              marginTop: 18, fontFamily: D1.serif, fontSize: 17,
              lineHeight: 1.6, color: `${D1.ink}C8`, maxWidth: 560,
            }}>
              Una colección de relatos que acompañan como una charla al borde del
              cansancio, como una pausa en medio del camino. Historias de amor,
              miedo, pérdidas, silencios y comienzos. De esas que se sienten propias,
              aunque sean inventadas.
            </p>
            <div style={{
              marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '10px 16px', border: `1px dashed ${D1.cobre}`,
              color: D1.cobre, fontFamily: D1.mono, fontSize: 11,
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: D1.cobre }} />
              En escritura · aún no publicado
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ marginTop: 80 }}>
        <NewsletterForm />
      </section>

      {/* Bio */}
      <section style={{ marginTop: 80 }}>
        <SectionRule color={D1.cobre} label="Bio · 03" />
        <p style={{
          marginTop: 24, fontFamily: D1.serif, fontSize: 22,
          lineHeight: 1.55, color: `${D1.ink}D0`, maxWidth: 760,
        }}>
          Florencia Maldonado escribe desde Bariloche. Lo que aparece son ensayos breves y
          relatos largos sobre el territorio, el regreso y las cosas que se sostienen sin
          explicación. Publica de manera independiente en Amazon KDP.
        </p>
      </section>
    </main>
  )
}
