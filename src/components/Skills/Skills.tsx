import { motion } from 'framer-motion'
import { easeOutExpo } from '../../easing'
import { SectionHeader } from '../shared/SectionHeader'
import styles from './Skills.module.css'

const categories = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'XML'],
    area: 'frontend',
  },
  {
    name: 'Backend',
    skills: ['Python', 'Flask', 'Java', '.NET', 'C / C++', 'C#', 'SQL', 'PostgreSQL', 'Supabase'],
    area: 'backend',
  },
  {
    name: 'Testing',
    skills: ['Selenium', 'Cucumber', 'Gherkin / BDD', 'JUnit', 'Maven'],
    area: 'testing',
  },
  {
    name: 'AI / ML',
    skills: ['OpenCV', 'MediaPipe', 'Ollama'],
    area: 'ai',
  },
  {
    name: 'Tools',
    skills: ['Node.js', 'Electron', 'Git', 'Linux', 'IntelliJ', 'AutoHotkey'],
    area: 'tools',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
}

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeader kicker="Expertise" title="Technical skills" />
        <motion.div
          className={styles.bento}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              className={`${styles.card} ${styles[cat.area]}`}
              variants={item}
            >
              <span className={styles.catName}>{cat.name}</span>
              <div className={styles.tags}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
