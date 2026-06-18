import { useEffect, useRef, useCallback } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  const observe = useCallback((el: Element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
    return observer
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observers: IntersectionObserver[] = []

    // If the element itself has .reveal, observe it
    if (el.classList.contains('reveal')) {
      observers.push(observe(el))
    }

    // Observe all .reveal children
    el.querySelectorAll('.reveal').forEach((child) => {
      observers.push(observe(child))
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [observe])

  return ref
}
