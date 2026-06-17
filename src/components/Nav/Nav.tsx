import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Career', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.mark}>M</a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <span className={styles.avail}>
            <motion.span
              className={styles.dot}
              animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            Available
          </span>
        </li>
      </ul>
    </nav>
  )
}
