import { D1, btnPrimary } from '../tokens'
import SectionRule from '../components/SectionRule'
import SubHeader from '../components/SubHeader'
import { useTwitchVODs } from '../hooks/useTwitchVODs'

function VODCard({ vod }) {
  return (
    <a href={vod.url} target="_blank" rel="noopener"
       style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{
        aspectRatio: '16/9', overflow: 'hidden', background: '#1a1a1a',
        position: 'relative',
      }}>
        {vod.thumbnail
          ? <img src={vod.thumbnail} alt={vod.title}
                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <div className="fr-ph" data-label="sin preview"
                 style={{ width: '100%', height: '100%', '--ph-bg': '#D8DCC8' }} />
        }
        <div style={{
          position: 'absolute', bottom: 8, right: 8,
          background: 'rgba(0,0,0,0.75)', color: '#fff',
          fontFamily: D1.mono, fontSize: 10, padding: '2px 6px', letterSpacing: '0.05em',
        }}>
          {vod.duration}
        </div>
      </div>
      <div style={{
        marginTop: 10, fontFamily: D1.serif, fontSize: 17,
        color: D1.ink, lineHeight: 1.3,
      }}>{vod.title}</div>
      <div style={{
        marginTop: 6, fontFamily: D1.mono, fontSize: 10,
        letterSpacing: '0.1em', color: `${D1.ink}77`, textTransform: 'uppercase',
      }}>
        {vod.date} · {vod.views.toLocaleString('es-AR')} views
      </div>
    </a>
  )
}

function VODGrid() {
  const { vods } = useTwitchVODs(3)

  if (vods === null) {
    return (
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 24,
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <div style={{
              aspectRatio: '16/9', background: `${D1.ink}0A`,
              animation: 'pulse 1.5s ease-in-out infinite',
            }} />
            <div style={{ marginTop: 10, height: 17, background: `${D1.ink}0A`, width: '80%' }} />
            <div style={{ marginTop: 6, height: 12, background: `${D1.ink}0A`, width: '50%' }} />
          </div>
        ))}
      </div>
    )
  }

  if (vods.length === 0) {
    return (
      <div style={{
        marginTop: 24, padding: '32px 0',
        fontFamily: D1.serif, fontStyle: 'italic',
        fontSize: 18, color: `${D1.ink}77`,
      }}>
        No hay videos recientes.{' '}
        <a href="https://twitch.tv/hormigaviajera/videos" target="_blank" rel="noopener"
           style={{ color: D1.musgo, textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Ver el canal →
        </a>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 24 }}>
      {vods.map((v) => <VODCard key={v.id} vod={v} />)}
    </div>
  )
}

export default function Streaming() {
  return (
    <main style={{ padding: '60px 56px 0' }}>
      <SubHeader
        color={D1.musgo}
        kicker="HormigaViajera"
        title="Streaming"
        eyebrow="twitch.tv/hormigaviajera"
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 56, marginTop: 48, alignItems: 'center' }}>
        <div style={{
          position: 'relative', aspectRatio: '16/9', background: '#3D2A2A',
          overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 50% 70%, #5A3838 0%, #2A1F1F 75%)',
          }} />
          <img src="/assets/hormiga-iso.png" alt="HormigaViajera"
               style={{
                 position: 'relative', height: '92%', width: 'auto',
                 objectFit: 'contain', filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.45))',
               }} />
          <div style={{
            position: 'absolute', top: 16, left: 18, fontFamily: D1.mono, fontSize: 10,
            letterSpacing: '0.14em', color: '#F7F2EAcc', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#E55050' }} />
            offline · próximamente
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.14em',
            color: D1.musgo, textTransform: 'uppercase',
          }}>
            Próximo stream · jueves 21:00
          </div>
          <h2 style={{
            fontFamily: D1.serif, fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400,
            color: D1.ink, margin: '8px 0 4px', lineHeight: 1.1,
          }}>
            Conversamos sobre vivir lejos del lugar donde naciste
          </h2>
          <p style={{
            marginTop: 18, fontFamily: D1.serif, fontSize: 18,
            lineHeight: 1.55, color: `${D1.ink}B0`,
          }}>
            Just Chatting, dos horas, una invitada. Si te quedás, te leo el chat.
          </p>
          <a href="https://twitch.tv/hormigaviajera" target="_blank" rel="noopener"
             style={{ ...btnPrimary(D1.musgo, D1.bg), marginTop: 24 }}>
            Seguir en Twitch →
          </a>
        </div>
      </div>

      <section style={{ marginTop: 96 }}>
        <SectionRule color={D1.cobre} label="VOD recientes · 02" />
        <VODGrid />
      </section>
    </main>
  )
}
