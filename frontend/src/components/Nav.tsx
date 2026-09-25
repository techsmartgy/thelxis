import { useEffect, useState } from 'react'
import { SpiralMark } from './SpiralMark'
import './Nav.css'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#team', label: 'Team' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <a href="#" className="nav-logo" aria-label="Thelxis Media home">
        <SpiralMark size={28} strokeWidth={3.4} />
        <span className="wordmark gold-text">THELXIS</span>
      </a>
      <div className="nav-links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta">
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
