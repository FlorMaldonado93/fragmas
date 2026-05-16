import { D1 } from '../tokens'

export default function SectionRule({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
      <div style={{
        fontFamily: D1.mono, fontSize: 11, color,
        letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        {label}
      </div>
      <div style={{ flex: 1, height: 1, background: `${D1.ink}20` }} />
    </div>
  )
}
