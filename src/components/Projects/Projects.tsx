import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { easeOutExpo } from '../../easing'
import { SectionHeader } from '../shared/SectionHeader'
import styles from './Projects.module.css'

const projects = [
  {
    year: '2024',
    name: 'Festival Management Platform',
    desc: 'Full web platform to browse artists, reserve tickets, and visualise available seats. Complete event and reservation management.',
    tags: ['.NET', 'SQL'],
  },
  {
    year: '2024',
    name: 'Weather Scraper',
    desc: 'Auto-fetches meteorological data, stores it in a database, and analyses trends to generate decision-support indicators.',
    tags: ['Python', 'Flask', 'SQL'],
  },
  {
    year: '2024',
    name: 'Morocco History ChatBot',
    desc: 'Interactive chatbot covering Moroccan history from prehistory to the modern era. Powered by a local LLM via Ollama.',
    tags: ['Python', 'Flask', 'Ollama'],
  },
  {
    year: '2023',
    name: 'Camera Tracker — Gesture Control',
    desc: 'Real-time hand and eye tracking via webcam. Modular architecture with gesture plugins for swipe, fist, palm, and draw.',
    tags: ['Python', 'MediaPipe', 'OpenCV'],
  },
  {
    year: '2023',
    name: 'Vault App',
    desc: 'Desktop app to securely store and manage sensitive data. Auth plus encryption with access control and local encrypted storage.',
    tags: ['Electron', 'Node.js', 'Supabase'],
  },
  {
    year: '2023',
    name: 'AHK Automation Suite',
    desc: 'Desktop automation tool that reacts to custom-defined events with configurable actions and fine-grained triggers.',
    tags: ['AutoHotkey'],
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
}

function ProjectRow({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={styles.row}
      variants={item}
      animate={isInView ? { backgroundColor: 'var(--accent-dim)' } : { backgroundColor: 'transparent' }}
      transition={{ duration: 0.3 }}
    >
      <span className={styles.year}>{project.year}</span>
      <div className={styles.info}>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.desc}>{project.desc}</div>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <motion.span
        className={styles.arrow}
        whileHover={{ x: 6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        →
      </motion.span>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeader kicker="Selected work" title="Projects" />
        <motion.div
          className={styles.list}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
