import { useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { GithubLogo, LinkedinLogo, Envelope, ArrowUpRight } from 'phosphor-react'

export function Contact() {
  const ref = useReveal()

  return (
    <section className="pt-32 pb-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Contact" title="Get in touch" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
          <div>
            <p className="reveal text-text-dim leading-relaxed max-w-[55ch] mb-8">
              I am currently seeking a PFE internship for 2025. If you have a
              role that matches my skills, or if you just want to talk about
              software engineering, I would like to hear from you.
            </p>

            <div className="reveal reveal-delay-1 space-y-4 mb-12">
              <a
                href="mailto:ysmagri@gmail.com"
                className="flex items-center gap-3 text-text-dim hover:text-text transition-colors duration-200 group"
              >
                <Envelope size={18} className="text-accent" />
                <span className="text-sm">ysmagri@gmail.com</span>
              </a>
              <a
                href="https://github.com/yassine808"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-dim hover:text-text transition-colors duration-200 group"
              >
                <GithubLogo size={18} className="text-accent" />
                <span className="text-sm">github.com/yassine808</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-yassine-magri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-dim hover:text-text transition-colors duration-200 group"
              >
                <LinkedinLogo size={18} className="text-accent" />
                <span className="text-sm">linkedin.com/in/mohammed-yassine-magri</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="reveal reveal-delay-2">
              <a
                href="/Magri%20mohammed%20yassine%20cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dim transition-colors duration-200 text-sm font-medium"
              >
                Download CV
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMsg('All fields are required.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    // Static form — no backend. In production, connect to Formspree, Netlify Forms, etc.
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="reveal space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value })
            setStatus('idle')
          }}
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
            setStatus('idle')
          }}
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-200"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value })
            setStatus('idle')
          }}
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
          placeholder="Tell me about the role or project."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-accent text-bg font-medium text-sm rounded-lg hover:bg-accent-dim transition-colors duration-200 active:scale-[0.98]"
      >
        Send message
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}
      {status === 'success' && (
        <p className="text-sm text-accent">
          Message received. I will get back to you soon.
        </p>
      )}
    </form>
  )
}
