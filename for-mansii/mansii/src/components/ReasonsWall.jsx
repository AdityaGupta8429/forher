import { useState } from 'react'
import Reveal, { ChapterMark } from './Reveal'
import { Decor, Flower, Clip } from './Doodles'
import { burst } from './Particles'
import { reasons } from '../data/reasons'

const TOTAL = reasons.length
const PAPERS = ['#fbf3e4', '#f3d9da', '#e4dcef', '#f6ecc9', '#f9e8dd']
const pr = (n) => {
  const x = Math.sin(n * 9301 + 49297) * 233280
  return x - Math.floor(x)
}
const pad = (n) => String(n).padStart(2, '0')

export default function ReasonsWall() {
  const [i, setI] = useState(0) // how many notes have been revealed

  const next = (e) => {
    if (i >= TOTAL) return
    const n = i + 1
    setI(n)
    if (n === TOTAL && e) {
      const r = e.currentTarget.getBoundingClientRect()
      burst({ kind: 'mix', mode: 'burst', x: r.left + r.width / 2, y: r.top + r.height / 2, n: 46 })
    } else if (n % 10 === 0 && e) {
      const r = e.currentTarget.getBoundingClientRect()
      burst({ kind: 'heart', mode: 'burst', x: r.left + r.width / 2, y: r.top + r.height / 2, n: 8 })
    }
  }
  const prev = () => setI((v) => Math.max(0, v - 1))

  // show the top note plus a few underneath
  const visible = []
  for (let k = Math.max(0, i - 5); k < i; k++) visible.push(k)

  return (
    <section id="reasons" className="chapter reasons">
      <ChapterMark n="07" title="100 reasons" />
      <Reveal variant="blur">
        <h2 className="serif-h">
          100 little reasons why you are <em>so important to me.</em>
        </h2>
      </Reveal>

      <Reveal delay={120} className="stack-zone">
        <Decor speed={0.08} rot={-8} style={{ left: '2%', top: -30 }}><Flower size={70} /></Decor>
        <Decor speed={0.06} rot={20} style={{ right: '3%', bottom: 40 }}><Clip /></Decor>

        <button type="button" className="stack" onClick={next} aria-label="Reveal another reason" disabled={i >= TOTAL}>
          {/* blank notes waiting underneath */}
          <span className="note blank b1" />
          <span className="note blank b2" />
          {i === 0 && (
            <span className="note top first" style={{ '--bg': PAPERS[0] }}>
              <span className="note-text hand-xl">tap the notes, one at a time ♡</span>
            </span>
          )}
          {visible.map((k) => {
            const age = i - 1 - k
            const r = pr(k)
            const style =
              age === 0
                ? { '--bg': PAPERS[k % PAPERS.length], '--tx': '0px', '--ty': '0px', '--rot': (r * 4 - 2).toFixed(1) + 'deg' }
                : {
                    '--bg': PAPERS[k % PAPERS.length],
                    '--tx': ((r - 0.5) * 38).toFixed(0) + 'px',
                    '--ty': (-age * 6 + (pr(k + 7) - 0.5) * 14).toFixed(0) + 'px',
                    '--rot': ((pr(k + 3) - 0.5) * 16).toFixed(1) + 'deg',
                  }
            return (
              <span key={k} className={`note ${age === 0 ? 'top' : 'under'} ${k === TOTAL - 1 ? 'finale' : ''}`} style={style}>
                <span className="note-num">{pad(k + 1)}</span>
                <span className="note-text hand-xl">{reasons[k]}</span>
              </span>
            )
          })}
        </button>

        <div className="stack-ui">
          <div className="progress" aria-hidden="true"><i style={{ transform: `scaleX(${i / TOTAL})` }} /></div>
          <div className="stack-row">
            <button type="button" className="ghost" onClick={prev} disabled={i === 0}>↺ back</button>
            <span className="count">{i === 0 ? 'tap to begin' : `${i} / ${TOTAL}`}</span>
            <button type="button" className="ghost" onClick={next} disabled={i >= TOTAL}>next ›</button>
          </div>
          {i >= TOTAL && <p className="hand-m done">that’s all hundred. I’m still adding to the list.</p>}
        </div>
      </Reveal>
    </section>
  )
}
