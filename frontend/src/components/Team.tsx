import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'
import briannaPhoto from '../assets/brianna.jpeg'
import './Team.css'

type Photo = {
  src: string
  /** Point to centre in the avatar, as a fraction of the image's width and height. */
  focusX: number
  focusY: number
  /** How many times wider than the avatar the image is drawn (square images only). */
  zoom: number
}

type Member = {
  initials: string
  name: string
  role: string
  bio: string
  photo?: Photo
}

const TEAM: Member[] = [
  {
    initials: 'BT',
    name: 'Bony Tom, MD',
    role: 'Managing Director',
    bio: "Visionary leader driving Thelxis Media's mission to bring world-class digital marketing to the Caribbean and beyond.",
  },
  {
    initials: 'BR',
    name: 'Briana Rai',
    role: 'Brand Manager',
    bio: 'The guardian of brand excellence, ensuring every touchpoint is consistent, captivating, and unmistakably Thelxis.',
    photo: { src: briannaPhoto, focusX: 0.556, focusY: 0.234, zoom: 3.4 },
  },
]

function photoStyle({ focusX, focusY, zoom }: Photo): CSSProperties {
  return {
    width: `${zoom * 100}%`,
    left: `${50 - focusX * zoom * 100}%`,
    top: `${50 - focusY * zoom * 100}%`,
  }
}

export function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <Reveal>
          <div className="section-label">The People</div>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-desc">
            A small, fierce team of strategists and creatives who believe great marketing is an
            art form.
          </p>
        </Reveal>
        <div className="team-grid">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} className="team-card" delay={(i + 1) * 0.1}>
              {member.photo ? (
                <div className="team-avatar team-photo">
                  <img src={member.photo.src} alt="" style={photoStyle(member.photo)} />
                </div>
              ) : (
                <div className="team-avatar team-initials" aria-hidden="true">
                  {member.initials}
                </div>
              )}
              <h3 className="team-name">{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
