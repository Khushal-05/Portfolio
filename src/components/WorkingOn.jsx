import styles from './WorkingOn.module.css'

const items = [
  {
    title: 'AI/ML Foundation',
    desc: 'Going deep on Python — OOP, collections, built-ins — then moving into LangChain, AI agents, and Kaggle competitions.',
    status: 'Active',
  },
  {
    title: 'Developer Portfolio',
    desc: 'Building this site from scratch with React + Vite. Designing, coding, and deploying it myself — end to end.',
    status: 'Active',
  },
  {
    title: 'DSA Grind',
    desc: 'Consistent daily problem-solving — arrays, trees, graphs, DP. Targeting top-tier placement prep.',
    status: 'Ongoing',
  },
]

export default function WorkingOn() {
  return (
    <section id="working-on">
      <p className="section-label">right now</p>
      <h2 className="section-title">Currently Working On</h2>

      <div className={styles.list}>
        {items.map(item => (
          <div className={styles.card} key={item.title}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.badge}>{item.status}</span>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
