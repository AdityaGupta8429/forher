import { useState } from 'react'
import Reveal, { ChapterMark } from './Reveal'
import Photo from './Photo'
import { Decor, Flower, Stamp, Camera, Butterfly, Clip, Tape, Sparkle } from './Doodles'
import { photos } from '../data/photos'

const TILT = [-4, 3, -2.5, 4.5, -3, 2.5, -5, 3.5]
const TAPE = ['blush', 'lav', 'butter', 'sage']

function Polaroid({ p, i }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal rot={TILT[i % TILT.length]} delay={(i % 3) * 90} variant="polaroid" className={`memo m${i % 6}`}>
      <button type="button" className={`pol ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {p.secret && <span className="pol-secret">{p.secret}</span>}
        <span className="pol-frame">
          <Tape color={TAPE[i % 4]} style={{ top: -11, left: '50%', '--tr': i % 2 ? '5deg' : '-4deg' }} />
          <span className="pol-img">
            <Photo src={p.src} focus={p.focus} ratio={p.ratio || '4 / 5'} alt={p.caption} label={`photo ${i + 1}`} />
          </span>
          <span className="pol-cap">
            {p.date && <em>{p.date}</em>}
            <span className="hand-m cap-text">{p.caption}</span>
            <span className="tap-hint">tap ♡</span>
          </span>
        </span>
      </button>
    </Reveal>
  )
}

export default function MemoryGallery() {
  return (
    <section id="memories" className="chapter memories">
      <ChapterMark n="04" title="our memories" />
      <Reveal variant="blur">
        <h2 className="serif-h">
          A few pages <em>I kept.</em>
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="sub hand-m">tap a photo — some of them have something to say</p>
      </Reveal>

      <div className="memo-wall">
        {photos.map((p, i) => (
          <Polaroid key={i} p={p} i={i} />
        ))}

        <Decor className="d1" speed={0.1} rot={-10}><Flower size={96} c1="#c9bfdc" c2="#b3a3d0" /></Decor>
        <Decor className="d2" speed={0.06} rot={6}>
          <Stamp w={96} h={118} fill="#efe0d8"><span className="stamp-top">♡</span><Camera size={44} /></Stamp>
        </Decor>
        <Decor className="d3" speed={0.09} rot={0}><Butterfly size={54} c="#d9a3ad" /></Decor>
        <Decor className="d4" speed={0.05} rot={12}><Clip /></Decor>
        <Decor className="d5" speed={0.07} rot={-4}><Sparkle size={26} /></Decor>
      </div>
    </section>
  )
}
