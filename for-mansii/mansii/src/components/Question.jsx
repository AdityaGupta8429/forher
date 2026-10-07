import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { burst } from './Particles'

export default function Question() {
  const [yes, setYes] = useState(false)
  const rain = useRef(0)
  useEffect(() => () => clearInterval(rain.current), [])

  const say = (e) => {
    if (yes) return
    setYes(true)
    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    burst({ kind: 'star', mode: 'burst', x, y, n: 44 })
    burst({ kind: 'heart', mode: 'burst', x, y, n: 16 })
    let t = 0
    rain.current = setInterval(() => {
      burst({ kind: 'petal', mode: 'rain', n: 5 })
      if (++t > 14) clearInterval(rain.current)
    }, 420)
  }

  return (
    <section id="question" className="chapter question">
      <Reveal variant="blur">
        <h2 className="serif-h on-dark">
          So, <em>Mansii…</em>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="hand-l q-line">I have one little question.</p>
      </Reveal>
      <Reveal delay={400} variant="blur">
        <p className="serif-big q-big">Will you keep making memories with me?</p>
      </Reveal>

      <Reveal delay={500} className={`q-actions ${yes ? 'gone' : ''}`}>
        <button type="button" className="q-btn primary" onClick={say}>YES ♡</button>
        <button type="button" className="q-btn" onClick={say}>OF COURSE ♡</button>
      </Reveal>

      <p className={`q-answer calli ${yes ? 'on' : ''}`} aria-live="polite">
        Then I guess this story still has a lot of pages left.
      </p>

      <div className={`scroll-cue light ${yes ? 'on' : ''}`} aria-hidden="true">
        <span>one more page</span>
        <i />
      </div>
      <div className="to-cream" aria-hidden="true" />
    </section>
  )
}
