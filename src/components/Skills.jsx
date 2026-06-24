import styles from './Skills.module.css'

const skills = [
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'C++', icon: '⚙️', category: 'Language' },
  { name: 'Java', icon: '☕', category: 'Language' },
  { name: 'JavaScript', icon: '🟨', category: 'Language' },
  { name: 'MySQL', icon: '🗄️', category: 'Database' },
  { name: 'DSA', icon: '🧩', category: 'Core CS' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'HTML & CSS', icon: '🎨', category: 'Web' },
  { name: 'AI / ML', icon: '🤖', category: 'Speciality' },
  { name: 'n8n', icon: '⚡', category: 'Automation' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Git', icon: '🔀', category: 'Version Control' },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">what i work with</p>
      <h2 className="section-title">Skills</h2>

      <div className={styles.grid}>
        {skills.map(skill => (
          <div className={styles.chip} key={skill.name}>
            <span className={styles.icon} aria-hidden="true">{skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
            <span className={styles.category}>{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
