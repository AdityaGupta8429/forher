import Reveal, { ChapterMark } from './Reveal'
import Egg from './Egg'
import { Decor, Flower, Sprig, Butterfly } from './Doodles'

const PARAS = [
  'I don’t always know how to express everything I feel.',
  'Sometimes I hide behind jokes.\nSometimes I change the topic.\nSometimes I just stay quiet.',
  'But one thing I never wanted to hide from you is how important you are to me.',
  'You became someone whose presence makes ordinary days feel better.',
  'Someone whose conversations I genuinely look forward to.',
  'Someone I can talk to without pretending to be someone else.',
  'I don’t know how to measure something like this.',
  'But if love can be measured by how much someone matters to you, then you matter to me more than I know how to explain.',
  { t: 'I love you so much, Mansii.', cls: 'big' },
  'Not in a temporary,\ndramatic,\nmovie-like way.',
  'But in the quiet way.',
  'The way I want to keep choosing you,\nkeep understanding you,\nkeep making memories with you,\nand keep being there.',
  { t: 'You are incredibly special to me.', cls: 'big' },
]

export default function LoveLetter() {
  return (
    <section id="letter" className="chapter letter-ch">
      <ChapterMark n="06" title="the love letter" />
      <div className="letter-wrap">
        <Decor speed={0.1} rot={-12} style={{ left: -6, top: 40 }}><Sprig size={62} /></Decor>
        <Decor speed={0.12} rot={16} style={{ right: -4, top: 280 }}><Flower size={74} c1="#c9bfdc" c2="#b3a3d0" /></Decor>
        <Decor speed={0.07} rot={-6} style={{ left: -8, bottom: 220 }}><Flower size={64} /></Decor>
        <Decor speed={0.09} rot={0} style={{ right: 10, bottom: 90 }}><Butterfly size={50} /></Decor>

        <Reveal rot={-0.6} variant="paper">
          <article className="sc letter-sc">
            <div className="paper letter">
              <p className="type-l">dear mansii,</p>
              <h2 className="calli letter-h">For Mansii,</h2>
              {PARAS.map((p, i) => {
                const o = typeof p === 'string' ? { t: p } : p
                return (
                  <Reveal key={i} variant="blur" threshold={0.4}>
                    <p className={`lp hand-l ${o.cls || ''}`}>{o.t}</p>
                  </Reveal>
                )
              })}
              <Reveal variant="blur" threshold={0.6}>
                <p className="sign calli">— Aditya <span className="hrt">♡</span></p>
              </Reveal>
            </div>
          </article>
        </Reveal>

        <div className="scrap-egg">
          <Egg text="yes, I spent way too long making this." side="top">
            <span className="mini-scrap">psst…</span>
          </Egg>
        </div>
      </div>
    </section>
  )
}
