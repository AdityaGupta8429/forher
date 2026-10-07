import { useRef, useState } from 'react'
import { burst } from './Particles'

/** A tiny hidden secret: tap the child and a handwritten note appears. */
export default function Egg({ text, children, className = '', style, side = 'top', dark = false }) {
  const [on, setOn] = useState(false)
  const t = useRef(0)
  const fire = (e) => {
    setOn(true)
    clearTimeout(t.current)
    t.current = setTimeout(() => setOn(false), 4200)
    const r = e.currentTarget.getBoundingClientRect()
    burst({ kind: 'heart', mode: 'burst', x: r.left + r.width / 2, y: r.top + r.height / 2, n: 7 })
  }
  return (
    <span className={`egg ${className}`} style={style}>
      <button type="button" className="egg-btn" onClick={fire} aria-label="a tiny secret">
        {children}
      </button>
      <span className={`egg-note ${side} ${dark ? 'dark' : ''} ${on ? 'on' : ''}`} role="status">
        {text}
      </span>
    </span>
  )
}
