import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <p className="section-label">who i am</p>
      <h2 className="section-title">About</h2>

      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            I'm a fresher developer with a deep focus on{' '}
            <span className={styles.highlight}>AI/ML engineering</span> and a solid grounding in{' '}
            <span className={styles.highlight}>DSA and competitive problem-solving</span>.
            I completed a virtual internship at OctaNet Technologies where I built a full
            car portfolio website, and hold certifications in AWS Cloud Foundations and PHP/MySQL.
          </p>
          <p>
            I participated in a DST-organized workshop, and I'm currently diving deep into Python,
            LangChain, and the AI agent ecosystem — building things that are actually useful, not just impressive on paper.
          </p>
          <p>
            Outside of code, I run a <span className={styles.highlight}>Valorant &amp; NFS YouTube channel</span> —
            because creativity doesn't stop at the terminal.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.cardNum}>1+</span>
            <span className={styles.cardLabel}>Year of building</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardNum}>2</span>
            <span className={styles.cardLabel}>Certifications</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardNum}>∞</span>
            <span className={styles.cardLabel}>Problems solved</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardNum}>0</span>
            <span className={styles.cardLabel}>Skill issues</span>
          </div>
        </div>
      </div>
    </section>
  )
}
