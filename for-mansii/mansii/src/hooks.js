import { useEffect, useRef, useState } from 'react'

export const asset = (p) => (p ? import.meta.env.BASE_URL + String(p).replace(/^\//, '') : null)

export const prefersReduced = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** true once the element has scrolled into view */
export function useInView({ threshold = 0.2, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          if (once) io.disconnect()
        } else if (!once) setSeen(false)
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])
  return [ref, seen]
}

/**
 * One scroll listener drives every [data-speed] element through CSS vars
 * (--py scroll parallax, --px pointer parallax). Only transforms are touched.
 */
export function useParallax() {
  useEffect(() => {
    if (prefersReduced()) return
    let ticking = false
    let mx = 0
    const update = () => {
      ticking = false
      const vh = window.innerHeight
      document.querySelectorAll('[data-speed]').forEach((el) => {
        const host = el.parentElement
        if (!host) return
        const r = host.getBoundingClientRect()
        if (r.bottom < -250 || r.top > vh + 250) return
        const c = r.top + r.height / 2 - vh / 2
        const s = parseFloat(el.dataset.speed) || 0
        el.style.setProperty('--py', `${(-c * s).toFixed(1)}px`)
        el.style.setProperty('--px', `${(mx * s * -70).toFixed(1)}px`)
      })
    }
    const req = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5
      req()
    }
    addEventListener('scroll', req, { passive: true })
    addEventListener('resize', req)
    if (matchMedia('(pointer: fine)').matches) addEventListener('pointermove', onMove, { passive: true })
    req()
    return () => {
      removeEventListener('scroll', req)
      removeEventListener('resize', req)
      removeEventListener('pointermove', onMove)
    }
  }, [])
}
