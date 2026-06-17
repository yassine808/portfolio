import { motion } from 'framer-motion'
import { easeOutExpo } from '../../easing'
import { SectionHeader } from '../shared/SectionHeader'
import styles from './About.module.css'

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeOutExpo } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeOutExpo } },
}

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeader kicker="Introduction" title="About" />
        <div className={styles.grid}>
          <motion.p
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
          >
            I am a <strong>5th-year computer science and networks engineering student</strong> at EMSI Rabat, with a hands-on approach to building software that solves real problems. My work spans full-stack web development, test automation, AI-powered applications, and desktop tooling.
          </motion.p>
          <motion.p
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideRight}
          >
            During my internship at Morocco Customs Administration, I built automated web testing pipelines with Selenium and Cucumber, writing BDD scenarios that caught regressions before they shipped. I have also built a gesture-controlled camera tracker using OpenCV and MediaPipe, and a Morocco History chatbot powered by a local LLM. I am currently seeking a <strong>PFE internship</strong> where I can contribute to meaningful projects.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
