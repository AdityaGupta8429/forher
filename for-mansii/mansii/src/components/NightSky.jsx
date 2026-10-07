import Reveal, { ChapterMark } from './Reveal'
import Field from './Field'
import Egg from './Egg'
import { Moon, Sparkle } from './Doodles'

const STATEMENTS = [
  'You became part of my days.',
  'You became someone I wait for.',
  'You became one of my favorite people.',
  'You became someone I don’t want to lose.',
]

export default function NightSky() {
  const stars = typeof window !== 'undefined' && window.innerWidth < 700 ? 90 : 170
  return (
    <section id="night" className="night">
      <div className="to-night" aria-hidden="true" />
      <div className="night-body">
        <div className="sky" aria-hidden="true">
          <Field mode="stars" count={stars} fadeMs={6000} />
          <div className="nebula n1" />
          <div className="nebula n2" />
          <div className="moon" data-speed="0.05"><Moon size={130} /></div>
        </div>

        <div className="night-content">
          <ChapterMark n="08" title="the night sky" dark />

          <Reveal variant="blur">
            <h2 className="calli night-name">Mansii <span className="hrt">♡</span></h2>
          </Reveal>

          <Reveal className="ns-gap">
            <p className="serif-l night-t">
              If I could write every reason you matter to me
              <br />
              across the sky…
            </p>
          </Reveal>
          <Reveal className="ns-gap" delay={200}>
            <p className="serif-l night-t em">…I’d probably run out of sky first.</p>
          </Reveal>

          <div className="floaters">
            {STATEMENTS.map((s, i) => (
              <Reveal key={i} className={`floater f${i}`} variant="blur" delay={60}>
                <p className="hand-xl glow-t">{s}</p>
              </Reveal>
            ))}
            <div className="star-egg">
              <Egg text="still thinking about you." side="top" dark>
                <Sparkle size={20} color="#ffe6b3" />
              </Egg>
            </div>
          </div>

          <Reveal className="ns-gap">
            <p className="hand-l night-and">and somewhere along the way…</p>
          </Reveal>
          <Reveal variant="blur" className="ns-gap">
            <h3 className="serif-big">
              You became <em>home</em> in a way I never expected.
            </h3>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
