import { useState } from 'react'
import { SpiralMark } from './SpiralMark'
import './Hero.css'

const PARTICLE_COUNT = 30

function makeParticles() {
  return Array.from({ length: PARTICLE_COUNT }, () => {
    const size = `${1 + Math.random() * 2}px`
    return {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 12}s`,
      animationDuration: `${8 + Math.random() * 8}s`,
      width: size,
      height: size,
    }
  })
}

export function Hero() {
  // Lazy initial state keeps the random positions stable across re-renders.
  const [particles] = useState(makeParticles)

  return (
    <section className="hero">
      <div className="particles" aria-hidden="true">
        {particles.map((style, i) => (
          <div key={i} className="particle" style={style} />
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-logo">
          <SpiralMark size={120} animated />
        </div>
        <h1 className="gold-text">
          The Art of Digital
          <br />
          Enchantment
        </h1>
        <p>
          We craft captivating digital experiences that mesmerize audiences, ignite brands, and
          turn attention into devotion. Guyana's premier digital marketing agency.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
          <a href="#services" className="btn-ghost">
            Our Services
          </a>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
