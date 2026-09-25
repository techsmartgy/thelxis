import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import './Services.css'

type Service = {
  title: string
  text: string
  icon: ReactNode
}

const SERVICES: Service[] = [
  {
    title: 'Brand Strategy',
    text: "We uncover your brand's essence and craft a positioning that resonates deeply with your audience. Identity, voice, and visual language, all aligned.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </>
    ),
  },
  {
    title: 'Digital Marketing',
    text: 'SEO, paid media, email campaigns, and content marketing, all orchestrated into a cohesive strategy that drives measurable growth and real returns.',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    title: 'Content Creation',
    text: 'Captivating visuals, compelling copy, and scroll-stopping video content. We tell stories that move people, from first glance to lasting impression.',
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </>
    ),
  },
  {
    title: 'Social Media',
    text: 'Community building, influencer partnerships, and platform-specific strategies that transform followers into a loyal tribe of brand advocates.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'Web Design',
    text: 'Immersive, conversion-focused websites that look extraordinary and perform flawlessly. Every pixel is intentional, every interaction is designed to convert.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
  {
    title: 'Analytics & Growth',
    text: 'Data-driven insights and performance optimization. We track what matters, test relentlessly, and scale what works to maximize your ROI.',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Services</h2>
          <p className="section-desc">
            Every brand has a story waiting to enchant. We give it a voice, a stage, and an
            audience that can't look away.
          </p>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} className="service-card" delay={(i + 1) * 0.1}>
              <div className="service-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="service-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A44E"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
