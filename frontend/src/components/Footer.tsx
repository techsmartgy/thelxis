import { SpiralMark } from './SpiralMark'
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164 } from '../constants'
import './Footer.css'

type FooterLink = { label: string; href?: string }

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Brand Strategy', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
      { label: 'Content Creation', href: '#services' },
      { label: 'Social Media', href: '#services' },
      { label: 'Web Design', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: 'Georgetown, Guyana' },
      { label: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <SpiralMark size={24} strokeWidth={2.9} />
              <span className="wordmark footer-wordmark gold-text">THELXIS</span>
            </div>
            <p>
              Guyana's premier digital marketing agency. We enchant audiences through strategy,
              design, and storytelling.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="footer-heading">{column.heading}</h4>
              <ul className="footer-links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? <a href={link.href}>{link.label}</a> : <span>{link.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">&copy; 2026 THELXIS MEDIA</div>
          <div className="footer-copy">THE ART OF DIGITAL ENCHANTMENT</div>
        </div>
      </div>
    </footer>
  )
}
