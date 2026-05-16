import { D1, btnPrimary, btnGhost } from '../tokens'
import SectionRule from '../components/SectionRule'
import SubHeader from '../components/SubHeader'

export default function Escritura() {
  return (
    <main style={{ padding: '60px 56px 0' }}>
      <SubHeader color={D1.azul} kicker="Flor Maldonado" title="Escritura" eyebrow="/escritura" />

      {/* Refugio */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64, marginTop: 48, alignItems: 'start' }}>
        <div>
          <img src="/assets/refugio-cover.png" alt="Refugio · portada"
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
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64, marginTop: 32, alignItems: 'start' }}>
          <div>
            <img src="/assets/travesia-cover.png" alt="Travesía · portada"
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
        <div style={{
          padding: '32px 36px', background: D1.beige,
          border: `1px dashed ${D1.azul}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
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
          </div>
          <button style={btnPrimary(D1.azul, D1.bg)}>Suscribirme</button>
        </div>
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
