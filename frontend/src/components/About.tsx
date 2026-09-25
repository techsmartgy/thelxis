import { Reveal } from './Reveal'
import './About.css'

const STATS = [
  { number: '100%', label: 'Client Retention' },
  { number: '24/7', label: 'Campaign Monitoring' },
  { number: 'GY', label: 'Proudly Guyanese' },
]

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-layout">
          <Reveal>
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Born from
              <br />
              Ancient Wisdom
            </h2>
            <div className="gold-divider" />
            <div className="section-desc">
              <p>
                In Greek mythology, <em>Thelxis</em> (θέλξις) is the power of enchantment: the
                ability to captivate hearts and minds through words and artistry. We carry that
                ancient fire into the digital age.
              </p>
              <p>
                Founded in Georgetown, Guyana, Thelxis Media exists to prove that world-class
                digital marketing belongs everywhere, not just in the major capitals. We bring
                global standards with Caribbean soul.
              </p>
            </div>
            <div className="stat-row">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="about-visual" delay={0.3}>
            <div className="about-frame">
              <blockquote className="about-quote">
                "Persuasion is strongest when in the company of desire."
                <span className="about-quote-attr">PEITHO, GODDESS OF PERSUASION</span>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
