import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe the element itself and any children with .reveal class
    if (el.classList.contains('reveal')) {
      observer.observe(el)
    }
    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  return ref
}
