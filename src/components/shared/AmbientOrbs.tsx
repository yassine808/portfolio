import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './AmbientOrbs.module.css'

export function AmbientOrbs() {
  const reduced = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced) return
    const x = (e.clientX / window.innerWidth - 0.5) * 40
    const y = (e.clientY / window.innerHeight - 0.5) * 40
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <div className={styles.wrapper} onMouseMove={handleMouseMove}>
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={reduced ? undefined : {
          x: [0, -30, 20],
          y: [0, 40, -20],
        }}
        transition={reduced ? undefined : {
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={reduced ? undefined : { x: springX, y: springY }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={reduced ? undefined : {
          x: [0, 40, -20],
          y: [0, -30, 30],
        }}
        transition={reduced ? undefined : {
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={reduced ? undefined : { x: springX, y: springY }}
      />
    </div>
  )
}
