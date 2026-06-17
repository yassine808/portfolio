import { motion } from 'framer-motion'
import { easeOutExpo } from '../../easing'
import { SectionHeader } from '../shared/SectionHeader'
import { useCounter } from '../../hooks/useCounter'
import styles from './GitHub.module.css'

const repos = [
  { name: 'VALORANT-ColorBot', meta: 'AutoHotkey · 1 star' },
  { name: 'claude-settings', meta: 'Python · 1 star' },
  { name: 'View all repositories', meta: '12 public repos', isLink: true },
]

function Counter({ target }: { target: number }) {
  const { ref, rounded } = useCounter(target)
  return (
    <div className={styles.statValue} ref={ref}>
      <motion.span>{rounded}</motion.span>
    </div>
  )
}

export function GitHub() {
  return (
    <section id="github" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeader kicker="Open source" title="GitHub" />
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            <p className={styles.text}>
              A selection of public repositories. Each one represents a problem I found interesting enough to solve and publish.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <Counter target={12} />
                <span className={styles.statLabel}>Repos</span>
              </div>
              <div className={styles.stat}>
                <Counter target={14} />
                <span className={styles.statLabel}>Stars</span>
              </div>
              <div className={styles.stat}>
                <Counter target={3} />
                <span className={styles.statLabel}>Following</span>
              </div>
            </div>
            <a href="https://github.com/yassine808" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
              View profile <span className={styles.arrow}>→</span>
            </a>
          </motion.div>
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            <div className={styles.repoList}>
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href="https://github.com/yassine808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoItem}
                >
                  <span className={styles.repoName}>{repo.name}</span>
                  <span className={styles.repoMeta}>{repo.meta}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
