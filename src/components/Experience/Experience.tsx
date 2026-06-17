import { motion } from 'framer-motion'
import { easeOutExpo } from '../../easing'
import { SectionHeader } from '../shared/SectionHeader'
import styles from './Experience.module.css'

const experiences = [
  {
    date: '07 / 2024 — 09 / 2024',
    title: 'Development Intern',
    org: 'Morocco Customs Administration — Douane (ADII)',
    desc: 'Automated web testing with Selenium and Cucumber. Wrote BDD scenarios in Gherkin, integrated Java/Maven framework, and delivered test execution reports via IntelliJ and JUnit.',
  },
  {
    date: '2021 — Present',
    title: 'Engineering Degree',
    org: "EMSI — Ecole Marocaine Des Sciences De L'Ingenieur, Rabat",
    desc: '5th-year computer science and networks engineering program. Focus on web development, software testing, databases, and systems design.',
  },
  {
    date: '2020',
    title: 'Baccalaureat — Science Physique',
    org: 'Oued Eddahab, Morocco',
    desc: 'Graduated with honours in physical sciences.',
  },
  {
    date: 'Languages',
    title: 'Multilingual',
    org: 'Communication',
    desc: 'Arabic (native), French (fluent), English (professional proficiency).',
    borderAlt: true,
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
}

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeader kicker="Background" title="Experience & education" />
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={item}
              style={exp.borderAlt ? { borderTopColor: 'var(--border)' } : undefined}
            >
              <div className={styles.date}>{exp.date}</div>
              <div className={styles.title}>{exp.title}</div>
              <div className={styles.org}>{exp.org}</div>
              <div className={styles.desc}>{exp.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
