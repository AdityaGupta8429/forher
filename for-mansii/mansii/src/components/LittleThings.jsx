import Reveal, { ChapterMark } from './Reveal'
import { Decor, Flower, Sprig, Stamp, Clip, Tape, Butterfly, Sparkle, Heart } from './Doodles'
import Egg from './Egg'

export default function LittleThings() {
  return (
    <section id="little" className="chapter little">
      <ChapterMark n="03" title="little things" />
      <Reveal variant="blur">
        <h2 className="serif-h">
          The little things <em>about you…</em>
        </h2>
      </Reveal>

      <div className="things">
        <Reveal rot={-2.4} className="thing" style={{ marginRight: 'auto', marginLeft: '3%' }}>
          <div className="sc"><div className="paper torn-a">
            <p className="hand-l">the way you understand me.</p>
          </div></div>
          <Tape color="blush" style={{ top: -10, left: '30%', '--tr': '-6deg' }} />
        </Reveal>

        <Reveal rot={2.2} delay={80} className="thing" style={{ marginLeft: 'auto', marginRight: '4%' }}>
          <div className="sc"><div className="paper note">
            <p className="hand-l">the way you listen.</p>
          </div></div>
          <Decor className="clip-pos" speed={0.03} rot={8}><Clip /></Decor>
        </Reveal>

        <Reveal rot={-1.6} className="thing wide" style={{ marginRight: 'auto', marginLeft: '1%' }}>
          <div className="sc"><div className="paper torn-b">
            <p className="serif-l">the way you somehow make ordinary conversations <em>feel important.</em></p>
          </div></div>
          <Decor speed={0.1} rot={14} style={{ right: -26, top: -46 }}><Flower size={92} /></Decor>
          <Decor speed={0.05} rot={-20} style={{ left: -22, bottom: -34 }}><Sprig size={60} /></Decor>
        </Reveal>

        <Reveal rot={3} delay={80} className="thing small" style={{ marginLeft: 'auto', marginRight: '8%' }}>
          <Stamp w={150} h={168}>
            <span className="stamp-top">for mansii</span>
            <p className="hand-m">the way you care.</p>
            <Heart size={16} />
          </Stamp>
        </Reveal>

        <Reveal rot={-3} className="thing" style={{ marginRight: 'auto', marginLeft: '6%' }}>
          <div className="mini-pol">
            <p className="hand-l">the way you make me smile without even trying.</p>
          </div>
          <Tape color="lav" style={{ top: -9, right: '12%', '--tr': '7deg' }} />
          <Decor speed={0.12} rot={-6} style={{ right: -14, bottom: -40 }}>
            <Egg text="you found this ♡" side="top"><Flower size={54} c1="#c9bfdc" c2="#b3a3d0" /></Egg>
          </Decor>
        </Reveal>

        <Reveal rot={1.4} delay={80} className="thing wide" style={{ marginLeft: 'auto', marginRight: '2%' }}>
          <div className="sc"><div className="paper scrap">
            <p className="hand-l">the way talking to you makes everything feel lighter.</p>
          </div></div>
          <Decor speed={0.08} rot={0} style={{ left: -18, top: -48 }}><Butterfly size={58} /></Decor>
          <Decor speed={0.04} rot={0} style={{ right: 6, bottom: -26 }}><Sparkle /></Decor>
        </Reveal>
      </div>
    </section>
  )
}
