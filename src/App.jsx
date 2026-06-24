import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkingOn from './components/WorkingOn'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <WorkingOn />
        <hr className="divider" />
        <Resume />
        <hr className="divider" />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1.8rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'rgba(240,234,255,0.18)',
        borderTop: '1px solid rgba(176,106,255,0.1)',
        letterSpacing: '1px'
      }}>
        designed & built by khushal sainiwal · 2026
      </footer>
    </>
  )
}
