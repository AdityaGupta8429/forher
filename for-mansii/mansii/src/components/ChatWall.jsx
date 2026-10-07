import { useState } from 'react'
import Reveal, { ChapterMark } from './Reveal'
import Photo from './Photo'
import { Decor, Pin, Flower, Tape } from './Doodles'
import { chats } from '../data/chats'

function ChatMemory({ c, i }) {
  const [lift, setLift] = useState(false)
  const rot = [-3, 2.5, -2, 3, -1.5][i % 5]
  return (
    <Reveal rot={rot} delay={(i % 2) * 100} className={`chat chat-${c.variant}`}>
      <button type="button" className={`chat-btn ${lift ? 'lift' : ''}`} onClick={() => setLift((v) => !v)} aria-pressed={lift}>
        {c.variant === 'pinned' && <Decor className="pin" speed={0}><Pin /></Decor>}
        {c.variant === 'polaroid' && <Tape color="butter" style={{ top: -10, left: '45%', '--tr': '-5deg' }} />}
        {c.variant === 'cutout' && <Tape color="lav" style={{ top: -8, left: -16, '--tr': '-38deg', width: 70 }} />}
        <span className="chat-shot">
          <Photo src={c.src} focus={c.focus} ratio={c.ratio} alt={c.quote} label="chat screenshot" />
          {(c.cover || []).map((v, k) => (
            <i key={k} className="cover" style={{ left: v.x + '%', top: v.y + '%', width: v.w + '%', height: v.h + '%' }} />
          ))}
          {c.variant === 'folded' && <i className="crease" />}
        </span>
        <span className="chat-quote">
          <mark>{c.quote}</mark>
        </span>
      </button>
    </Reveal>
  )
}

export default function ChatWall() {
  return (
    <section id="chats" className="chapter chats">
      <ChapterMark n="05" title="the chat wall" />
      <Reveal variant="blur">
        <h2 className="serif-h">
          Some conversations mean <em>more than they look.</em>
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="sub hand-m">messages I secretly kept close</p>
      </Reveal>

      <div className="chat-wall">
        {chats.map((c, i) => (
          <ChatMemory key={i} c={c} i={i} />
        ))}
        <Decor className="cd1" speed={0.08} rot={8}><Flower size={80} /></Decor>
      </div>
    </section>
  )
}
