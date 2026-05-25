import { D1 } from '../tokens'

export default function SubHeader({ color, kicker, title, eyebrow }) {
  return (
    <div>
      <div style={{
        fontFamily: D1.mono, fontSize: 10, letterSpacing: '0.18em',
        color: `${D1.ink}77`, textTransform: 'uppercase',
      }}>
        {eyebrow}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginTop: 14 }}>
        <div style={{
          fontFamily: D1.mono, fontSize: 11, color,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          {kicker}
        </div>
      </div>
      <h1 style={{
        margin: '6px 0 0', fontFamily: D1.serif, fontSize: 'clamp(42px, 8vw, 96px)',
        fontWeight: 400, color: D1.ink, letterSpacing: '-0.02em', lineHeight: 1.05,
      }}>
        {title}
      </h1>
    </div>
  )
}
