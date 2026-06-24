import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = ['AI/ML Engineer', 'DSA Problem Solver', 'Gamer who codes']

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = roles[roleIdx]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }, deleting ? 55 : 85)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIdx])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Left: text content ── */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>available for opportunities</p>

          <h1 className={styles.name}>
            Khushal <span className={styles.nameGrad}>Sainiwal</span>
          </h1>

          <div className={styles.roleLine}>
            <span className={styles.roleText}>{text}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </div>

          <p className={styles.bio}>
            B.Tech CSE grad living at the intersection of DSA, AI, and late-night code sessions.
            I build things that work, learn things that matter, and occasionally frag enemies in Valorant.
          </p>

          <div className={styles.ctaRow}>
            <a
              href="#projects"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* ── Right: avatar ── */}
        <div className={styles.imageCol} aria-hidden="true">
          <div className={styles.avatarWrap}>
            <div className={styles.avatarGlow} />
            <div className={styles.avatarFrame}>
              {/* Replace /avatar.jpg with your actual image path under /public */}
              <img
                src="/avatar.png"
                alt="Khushal Sainiwal"
                className={styles.avatarImg}
                draggable="false"
              />
            </div>
            {/* Decorative corner accent */}
            <div className={styles.cornerTL} />
            <div className={styles.cornerBR} />
          </div>
        </div>
      </div>
    </section>
  )
}
