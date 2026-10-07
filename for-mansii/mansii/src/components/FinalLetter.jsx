import Reveal from './Reveal'
import Egg from './Egg'
import { Sparkle } from './Doodles'

const PARAS = [
  'If you ever wonder how much you mean to me,\nI hope you remember this website.',
  'Not because it is perfect.',
  'But because every little part of it was made thinking about you.',
  'The flowers.\nThe memories.\nThe stupid little messages.\nThe words I struggle to say out loud.',
  'All of it points to the same thing:',
  { t: 'You matter to me.', cls: 'big' },
  'More than I usually know how to explain.',
  'Thank you for being you.',
  'Thank you for being part of my days.',
  'And thank you for giving me so many reasons to smile.',
  'I don’t know what the future looks like.',
  'But I know that the memories we’ve already made\nare something I’ll always be grateful for.',
  'And if I get the chance…',
  'I’d love to make many more.',
]

export default function FinalLetter() {
  return (
    <section id="final" className="chapter final">
      <Reveal variant="paper" rot={0.4}>
        <article className="sc final-sc">
          <div className="paper final-paper">
            <p className="type-l">Mansii,</p>
            {PARAS.map((p, i) => {
              const o = typeof p === 'string' ? { t: p } : p
              return (
                <Reveal key={i} variant="blur" threshold={0.5}>
                  <p className={`fp serif-l ${o.cls || ''}`}>{o.t}</p>
                </Reveal>
              )
            })}
            <Reveal variant="blur" threshold={0.6}>
              <p className="sign calli">— Aditya <span className="hrt">♡</span></p>
            </Reveal>
          </div>
        </article>
      </Reveal>

      <Reveal className="made" threshold={0.6}>
        <p className="hand-m">
          Made with way too much love,
          <br />
          a ridiculous amount of effort,
          <br />
          and probably too many late nights.
        </p>
        <p className="hand-m sig">— Aditya</p>
      </Reveal>

      <footer className="foot">
        <Egg text="if you’re smiling right now, mission accomplished." side="top">
          <Sparkle size={16} color="#b99a6a" />
        </Egg>
        <p>for Mansii, always ♡</p>
      </footer>
    </section>
  )
}
