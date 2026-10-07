import { useEffect, useState } from 'react'
import { useInView } from '../hooks'
import Field from './Field'
import { ChapterMark } from './Reveal'

const LINES = [
  { t: 'somewhere between ordinary conversations,', d: 2800 },
  { t: 'random smiles,', d: 1500 },
  { t: 'late-night talks,', d: 1500 },
  { t: 'and little moments…', d: 1600 },
  { t: '…you became someone very special to me.', d: 3400, cls: 'em' },
  { t: 'and I don’t think I ever properly told you that.', d: 3600, cls: 'hand' },
]

export default function HerName({ active }) {
  const [ref, seen] = useInView({ threshold: 0.3 })
  const [n, setN] = useState(0)
  const go = active && seen

  useEffect(() => {
    if (!go) return
    let cum = 0
    const ids = LINES.map((l, i) => {
      cum += l.d
      return setTimeout(() => setN(i + 1), cum)
    })
    return () => ids.forEach(clearTimeout)
  }, [go])

  return (
    <section id="name" className="chapter name" ref={ref}>
      <Field mode="dust" count={46} />
      <ChapterMark n="02" title="her name" />
      <h1 className={`calli name-big ${go ? 'write' : ''}`}>Mansii</h1>
      <div className="name-lines">
        {LINES.map((l, i) => (
          <p key={i} className={`nl ${l.cls || ''} ${n > i ? 'on' : ''}`}>
            {l.t}
          </p>
        ))}
      </div>
      <div className={`scroll-cue ${n >= LINES.length ? 'on' : ''}`} aria-hidden="true">
        <span>keep scrolling</span>
        <i />
      </div>
    </section>
  )
}
