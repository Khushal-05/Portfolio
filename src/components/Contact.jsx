import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier is enough)
// 2. Create a service (Gmail works great) → copy Service ID below
// 3. Create an email template → copy Template ID below
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = 'service_ql1z7yp'
const EMAILJS_TEMPLATE_ID = 'template_cwrd8qe'
const EMAILJS_PUBLIC_KEY  = '12sIRYDCFAsSCCxss'
// ────────────────────────────────────────────────────────────────

const socials = [
  { label: 'GitHub',   href: 'https://github.com/Khushal-05', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
  )},
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/khushal-sainiwal/', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: 'Email',     href: 'mailto:sainiwalk05@gmail.com', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  )},
  // { label: 'YouTube',   href: 'https://youtube.com/@YOUR_CHANNEL', icon: (
  //   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  // )},
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact">
      <p className="section-label">let's talk</p>
      <h2 className="section-title">Contact</h2>

      <div className={styles.layout}>
        {/* Social links */}
        <div className={styles.socials}>
          <p className={styles.socialsHeading}>Find me on</p>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <span className={styles.socialIcon}>{s.icon}</span>
              <span>{s.label}</span>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <div className={styles.form} ref={formRef}>
          <p className={styles.formHeading}>Or drop a message</p>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input}
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="What's on your mind?"
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={status === 'sending'}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message sent!' : status === 'error' ? '✗ Failed — try again' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className={styles.successMsg}>Got it! I'll get back to you soon.</p>
          )}
        </div>
      </div>
    </section>
  )
}
