import { Reveal } from './Reveal'
import { SpiralMark } from './SpiralMark'
import { WHATSAPP_URL } from '../constants'
import './Contact.css'

export function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <Reveal>
          <SpiralMark size={60} strokeWidth={2.2} solid className="cta-mark" />
          <h2 className="cta-title">
            Ready to Enchant
            <br />
            Your Audience?
          </h2>
          <p className="cta-text">
            Let's craft a digital presence that captivates, converts, and leaves a lasting
            impression.
          </p>
          <a href={WHATSAPP_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Start a Conversation
          </a>
        </Reveal>
      </div>
    </section>
  )
}
