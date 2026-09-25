import { Reveal } from './Reveal'
import './Process.css'

const STEPS = [
  {
    numeral: 'I',
    title: 'Discover',
    text: 'We dive deep into your brand, market, and audience to uncover the story only you can tell.',
  },
  {
    numeral: 'II',
    title: 'Strategize',
    text: 'We architect a data-driven roadmap tailored to your goals, budget, and competitive landscape.',
  },
  {
    numeral: 'III',
    title: 'Create',
    text: 'Our team crafts stunning visuals, compelling copy, and immersive experiences that captivate.',
  },
  {
    numeral: 'IV',
    title: 'Amplify',
    text: 'We launch, optimize, and scale, turning sparks of attention into sustained brand devotion.',
  },
]

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal className="process-header">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">The Enchantment Process</h2>
          <p className="section-desc">
            Four stages to transform your brand from unseen to unforgettable.
          </p>
        </Reveal>
        <div className="process-steps">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} className="step" delay={(i + 1) * 0.1}>
              <div className="step-num">{step.numeral}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
