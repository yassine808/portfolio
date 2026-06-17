import { type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href?: string
  onClick?: (e: MouseEvent) => void
  children: ReactNode
  className?: string
}

export function Button({ variant, href, onClick, children, className = '' }: ButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = (e.clientX - centerX) * 0.15
    const dy = (e.clientY - centerY) * 0.15
    x.set(dx)
    y.set(dy)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const classes = `${styles.btn} ${styles[variant]} ${className}`.trim()

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={classes}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}
