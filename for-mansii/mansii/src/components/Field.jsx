import { useEffect, useRef } from 'react'

/**
 * Ambient canvas: slow floating dust (paper chapters) or twinkling stars (night).
 * Pauses when off-screen. Stars fade in gradually the first time it becomes visible.
 */
export default function Field({ mode = 'dust', count = 40, fadeMs = 4500, color = '#d9b77a', className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let W = 0,
      H = 0,
      items = [],
      raf = 0,
      t0 = 0,
      visible = false

    const seed = () => {
      items = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: mode === 'stars' ? Math.random() * 1.2 + 0.3 : Math.random() * 2 + 0.6,
        s: Math.random() * 0.22 + 0.05,
        ph: Math.random() * 6.28,
        tw: Math.random() * 1.4 + 0.5,
        warm: Math.random() < 0.4,
        at: Math.random(),
      }))
    }
    const size = () => {
      const r = cv.getBoundingClientRect()
      W = r.width
      H = r.height
      cv.width = W * dpr
      cv.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
      if (reduce) draw(performance.now())
    }

    const draw = (now) => {
      if (!t0) t0 = now
      const k = Math.min(1, (now - t0) / fadeMs)
      ctx.clearRect(0, 0, W, H)
      for (const it of items) {
        if (mode === 'stars') {
          const appear = Math.max(0, Math.min(1, (k - it.at * 0.8) / 0.2))
          const tw = 0.5 + 0.5 * Math.sin((now / 1000) * it.tw + it.ph)
          const a = appear * (0.35 + 0.65 * tw)
          ctx.fillStyle = it.warm ? `rgba(255,233,196,${a})` : `rgba(230,220,255,${a})`
          ctx.beginPath()
          ctx.arc(it.x, it.y, it.r, 0, 6.283)
          ctx.fill()
          if (it.r > 1) {
            ctx.fillStyle = it.warm ? `rgba(255,220,170,${a * 0.14})` : `rgba(210,195,255,${a * 0.14})`
            ctx.beginPath()
            ctx.arc(it.x, it.y, it.r * 4, 0, 6.283)
            ctx.fill()
          }
        } else {
          if (!reduce) {
            it.y -= it.s
            it.x += Math.sin(it.ph + now / 3200) * 0.12
            if (it.y < -10) {
              it.y = H + 10
              it.x = Math.random() * W
            }
          }
          const a = (0.18 + 0.22 * (0.5 + 0.5 * Math.sin(now / 1800 + it.ph))) * Math.min(1, k * 2)
          ctx.globalAlpha = a
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(it.x, it.y, it.r, 0, 6.283)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }
    }
    const loop = (now) => {
      draw(now)
      raf = visible ? requestAnimationFrame(loop) : 0
    }

    size()
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !reduce && !raf) raf = requestAnimationFrame(loop)
      if (visible && reduce) draw(t0 + fadeMs + 1)
    })
    io.observe(cv)
    addEventListener('resize', size)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      removeEventListener('resize', size)
    }
  }, [mode, count, fadeMs, color])

  return <canvas ref={ref} className={`field ${className}`} aria-hidden="true" />
}
