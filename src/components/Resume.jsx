import styles from './Resume.module.css'

// Replace this path with your actual resume PDF once ready
const RESUME_PATH = '/resume.pdf'

export default function Resume() {
  return (
    <section id="resume">
      <p className="section-label">credentials</p>
      <h2 className="section-title">Resume</h2>

      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.fileIcon} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div>
            <p className={styles.name}>Khushal Sainiwal — Resume</p>
            <p className={styles.sub}>B.Tech CSE · Amity University Rajasthan · 2026</p>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            View
          </a>
          <a
            href={RESUME_PATH}
            download="Khushal_Sainiwal_Resume.pdf"
            className="btn-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </a>
        </div>
      </div>
    </section>
  )
}
