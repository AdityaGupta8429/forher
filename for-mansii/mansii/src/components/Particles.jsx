import { useEffect, useRef } from 'react'

// tiny event bus so any component can call burst({...})
let sink = null
export const burst = (o) => sink && sink(o)

const COLORS = ['#e8b4bc', '#d9a3ad', '#f3d4d4', '#c9bfdc', '#e5c27a', '#fff1d6']
const rand = (a, b) => a + Math.random() * (b - a)

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0,
      H = 0,
      list = [],
      raf = 0

    const size = () => {
      W = window.innerWidth
      H = window.innerHeight
      cv.width = W * dpr
      cv.height = H * dpr
      cv.style.width = W + 'px'
      cv.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    size()
    addEventListener('resize', size)

    const drawShape = (p) => {
      const s = p.s
      if (p.kind === 'petal') {
        ctx.beginPath()
        ctx.ellipse(0, 0, s, s * 0.55, 0, 0, Math.PI * 2)
        ctx.fill()
      } else if (p.kind === 'star') {
        ctx.beginPath()
        ctx.moveTo(0, -s)
        ctx.quadraticCurveTo(0, 0, s, 0)
        ctx.quadraticCurveTo(0, 0, 0, s)
        ctx.quadraticCurveTo(0, 0, -s, 0)
        ctx.quadraticCurveTo(0, 0, 0, -s)
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.moveTo(0, s * 0.35)
        ctx.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s, 0, -s * 0.4)
        ctx.bezierCurveTo(s * 0.5, -s, s, -s * 0.3, 0, s * 0.35)
        ctx.fill()
      }
    }

    const tick = () => {
      ctx.clearRect(0, 0, W, H)
      list = list.filter((p) => p.life > 0 && p.y < H + 40 && p.y > -80)
      for (const p of list) {
        p.life -= 1
        p.phase += 0.03
        p.x += p.vx + Math.sin(p.phase) * p.sway
        p.y += p.vy
        p.vy += p.g
        p.vx *= p.drag
        p.rot += p.vr
        ctx.save()
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 50)) * p.a
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        drawShape(p)
        ctx.restore()
      }
      raf = list.length ? requestAnimationFrame(tick) : 0
      if (!raf) ctx.clearRect(0, 0, W, H)
    }

    sink = ({ kind = 'mix', mode = 'burst', x = W / 2, y = H / 2, w = W, n = 40 }) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) n = Math.min(n, 8)
      for (let i = 0; i < n; i++) {
        const k = kind === 'mix' ? ['petal', 'petal', 'star', 'heart'][(Math.random() * 4) | 0] : kind
        const p = {
          kind: k,
          color: k === 'star' ? '#f0d28c' : k === 'heart' ? '#d98e9c' : COLORS[(Math.random() * COLORS.length) | 0],
          s: k === 'petal' ? rand(5, 9) : k === 'star' ? rand(3, 6) : rand(4, 8),
          rot: rand(0, 6.28),
          vr: rand(-0.05, 0.05),
          phase: rand(0, 6.28),
          sway: rand(0.1, 0.5),
          a: rand(0.7, 1),
          drag: 1,
          g: 0,
        }
        if (mode === 'burst') {
          const ang = rand(0, Math.PI * 2)
          const sp = rand(1.5, 6.5)
          Object.assign(p, { x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 2, g: 0.05, drag: 0.985, life: rand(110, 190), sway: 0.15 })
        } else if (mode === 'rise') {
          Object.assign(p, { x: x + rand(-w / 2, w / 2), y: y + rand(0, 40), vx: 0, vy: -rand(0.7, 1.9), life: rand(160, 260), sway: rand(0.2, 0.6) })
        } else {
          Object.assign(p, { x: rand(0, W), y: -20, vx: 0, vy: rand(0.8, 2), life: rand(300, 500), sway: rand(0.3, 0.8) })
        }
        list.push(p)
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }

    return () => {
      sink = null
      cancelAnimationFrame(raf)
      removeEventListener('resize', size)
    }
  }, [])

  return <canvas ref={ref} className="particles" aria-hidden="true" />
}
