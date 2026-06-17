import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function useCounter(target: number, duration = 2) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const spring = useSpring(count, { duration, stiffness: 50 })

  useEffect(() => {
    if (isInView) {
      spring.set(target)
    }
  }, [isInView, target, spring])

  return { ref, rounded }
}
