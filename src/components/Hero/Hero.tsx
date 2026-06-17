import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { easeOutExpo } from '../../easing'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import styles from './Hero.module.css'

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const heroItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOutExpo } },
}

const nameWords = ['Magri', 'Mohammed', 'Yassine']

export function Hero() {
  const reduced = useReducedMotion()
  const scaleX = useScrollProgress()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -15])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 8])

  return (
    <section id="hero" className={styles.hero} ref={sectionRef}>
      <motion.div className={styles.progressBar} style={reduced ? { scaleX: 0 } : { scaleX }} />

      <div className={styles.wrap}>
        <div className={styles.grid}>
          <motion.div
            className={styles.textCol}
            variants={reduced ? undefined : heroContainer}
            initial={reduced ? false : 'hidden'}
            animate={reduced ? undefined : 'visible'}
            style={reduced ? undefined : { y: textY }}
          >
            <motion.div className={styles.kicker} variants={reduced ? undefined : heroItem}>
              Available for internship
            </motion.div>

            <motion.h1 className={styles.title} variants={reduced ? undefined : heroItem}>
              {nameWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={i === 2 ? styles.nameAccent : ''}
                  initial={reduced ? false : { opacity: 0, y: 40 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: easeOutExpo }}
                >
                  {word}
                  {i < nameWords.length - 1 && <br />}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p className={styles.subtitle} variants={reduced ? undefined : heroItem}>
              5th-year engineering student at EMSI Rabat. Building web platforms, automation tools, and AI-powered applications. Focused on clean code, thoughtful architecture, and systems that work.
            </motion.p>

            <motion.div className={styles.actions} variants={reduced ? undefined : heroItem}>
              <a href="#contact" className={styles.btnPrimary}>
                Get in touch <span className={styles.arrow}>→</span>
              </a>
              <a href="#projects" className={styles.btnGhost}>View work</a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.photoCol}
            initial={reduced ? false : { opacity: 0, x: 40 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeOutExpo }}
            style={reduced ? undefined : { y: photoY }}
          >
            <div className={styles.photoInner}>
              <img src="/assets/photo_0.jpeg" alt="Magri Mohammed Yassine" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.strip}
          initial={reduced ? false : { opacity: 0, y: 36 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoValue}>Rabat, Morocco</span>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Status</span>
            <span className={`${styles.infoValue} ${styles.accent}`}>Seeking PFE</span>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Focus</span>
            <span className={styles.infoValue}>Full-stack & AI</span>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Year</span>
            <span className={styles.infoValue}>5th — Engineering</span>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/yassine808" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="https://linkedin.com/in/mohammed-yassine-magri" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="mailto:ysmagri@gmail.com" title="Email">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
