import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['about', 'skills', 'projects', 'working on', 'resume', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, link) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = link.replace(' ', '-')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        KS.
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.replace(' ', '-')}`} onClick={e => handleNav(e, link)}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.x1 : ''}></span>
        <span className={menuOpen ? styles.x2 : ''}></span>
        <span className={menuOpen ? styles.x3 : ''}></span>
      </button>
    </nav>
  )
}
