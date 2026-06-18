import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-text"
        >
          M<span className="text-accent">.</span>Y
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.to
                  ? 'text-accent'
                  : 'text-text-dim hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MobileMenu pathname={pathname} />
      </div>
    </nav>
  )
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-text-dim hover:text-text transition-colors p-2"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M5 5l10 10M15 5L5 15" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-surface border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.to ? 'text-accent' : 'text-text-dim'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
