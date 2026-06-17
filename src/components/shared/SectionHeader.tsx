import { motion } from 'framer-motion'
import { easeOutExpo } from '../../easing'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  kicker: string
  title: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
}

export function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.rule}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.span
        className={styles.kicker}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {kicker}
      </motion.span>
      <motion.h2
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
