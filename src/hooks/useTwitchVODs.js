import { useState, useEffect } from 'react'

const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID
const ACCESS_TOKEN = import.meta.env.VITE_TWITCH_ACCESS_TOKEN
const CHANNEL = 'hormigaviajera'

function parseDuration(raw) {
  // Twitch returns e.g. "1h42m30s" or "2h02m" or "45m10s"
  const h = raw.match(/(\d+)h/)?.[1] ?? 0
  const m = raw.match(/(\d+)m/)?.[1] ?? 0
  return h > 0 ? `${h}h ${String(m).padStart(2, '0')}m` : `${m}m`
}

function thumbUrl(template, w = 480, h = 270) {
  return template.replace('%{width}', w).replace('%{height}', h)
}

export function useTwitchVODs(count = 3) {
  const [vods, setVods] = useState(null) // null = loading
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!CLIENT_ID || !ACCESS_TOKEN) {
      setVods([])
      return
    }

    const headers = {
      'Client-ID': CLIENT_ID,
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    }

    async function load() {
      try {
        const userRes = await fetch(
          `https://api.twitch.tv/helix/users?login=${CHANNEL}`,
          { headers }
        )
        const { data: users } = await userRes.json()
        const userId = users?.[0]?.id
        if (!userId) { setVods([]); return }

        const vodRes = await fetch(
          `https://api.twitch.tv/helix/videos?user_id=${userId}&type=archive&first=${count}&sort=time`,
          { headers }
        )
        const { data: items } = await vodRes.json()

        setVods(
          (items ?? []).map((v) => ({
            id: v.id,
            title: v.title,
            duration: parseDuration(v.duration),
            views: v.view_count,
            url: v.url,
            thumbnail: v.thumbnail_url
              ? thumbUrl(v.thumbnail_url)
              : null,
            date: new Date(v.created_at).toLocaleDateString('es-AR', {
              day: 'numeric', month: 'short', year: 'numeric',
            }),
          }))
        )
      } catch {
        setError(true)
        setVods([])
      }
    }

    load()
  }, [count])

  return { vods, error }
}
