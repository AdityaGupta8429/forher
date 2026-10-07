import { useEffect, useRef, useState } from 'react'
import { burst } from './Particles'
import { Heart } from './Doodles'

// closed → opening (flap) → rising (letter) → leaving (brighten + fade) → gone
export default function EnvelopeIntro({ onOpen }) {
  const [stage, setStage] = useState('closed')
  const timers = useRef([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const after = (ms, fn) => timers.current.push(setTimeout(fn, ms))

  const open = () => {
    if (stage !== 'closed') return
    setStage('opening')
    after(900, () => {
      setStage('rising')
      burst({ kind: 'petal', mode: 'rise', x: window.innerWidth / 2, y: window.innerHeight * 0.62, w: 220, n: 34 })
    })
    after(2300, () => {
      setStage('leaving')
      burst({ kind: 'star', mode: 'rise', x: window.innerWidth / 2, y: window.innerHeight * 0.7, w: window.innerWidth * 0.8, n: 26 })
      onOpen()
    })
    after(3600, () => setStage('gone'))
  }

  if (stage === 'gone') return null

  return (
    <div className={`intro ${stage}`} role="dialog" aria-label="An envelope for Mansii">
      <div className="intro-inner">
        <p className="intro-kicker">Something I made for you.</p>

        <button className="env" onClick={open} aria-label="Open the envelope">
          <span className="env-back" />
          <span className="env-letter">
            <em>dear mansii,</em>
            <b /> <b /> <b className="short" />
          </span>
          <span className="env-front" />
          <span className="env-flap" />
          <span className="seal">
            <Heart size={16} color="#f6e4e4" />
          </span>
        </button>

        <p className="intro-name">Mansii <span className="hrt">♡</span></p>
        <p className="intro-hint">Open this when you have a little time.</p>
        <p className="intro-tap">tap the envelope</p>
      </div>
    </div>
  )
}
