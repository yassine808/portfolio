import { useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { GithubLogo, LinkedinLogo, Envelope, ArrowUpRight, DownloadSimple } from 'phosphor-react'

export function Contact() {
  const ref = useReveal()

  return (
    <section className="pt-28 pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Contact" title="Get in touch" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <div>
            <p className="reveal text-text-secondary leading-relaxed max-w-[50ch] mb-10">
              I am currently seeking a PFE internship for 2025. If you have a
              role that matches my skills, or if you just want to talk about
              software engineering, I would like to hear from you.
            </p>

            <div className="reveal reveal-delay-1 space-y-4 mb-10">
              <a
                href="mailto:ysmagri@gmail.com"
                className="flex items-center gap-3 text-text-secondary hover:text-text transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-surface border border-border/50 flex items-center justify-center group-hover:border-border-hover transition-colors">
                  <Envelope size={16} className="text-accent" />
                </div>
                <span className="text-sm">ysmagri@gmail.com</span>
              </a>
              <a
                href="https://github.com/yassine808"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-text transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-surface border border-border/50 flex items-center justify-center group-hover:border-border-hover transition-colors">
                  <GithubLogo size={16} className="text-accent" />
                </div>
                <span className="text-sm">github.com/yassine808</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-text-muted" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-yassine-magri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-text transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-surface border border-border/50 flex items-center justify-center group-hover:border-border-hover transition-colors">
                  <LinkedinLogo size={16} className="text-accent" />
                </div>
                <span className="text-sm">linkedin.com/in/mohammed-yassine-magri</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-text-muted" />
              </a>
            </div>

            <div className="reveal reveal-delay-2">
              <a
                href="/Magri%20mohammed%20yassine%20cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors duration-200 text-sm font-medium group"
              >
                <DownloadSimple size={14} weight="bold" />
                Download CV
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

    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  const inputClass =
    'w-full bg-surface/80 border border-border/50 rounded-xl px-4 py-3.5 text-sm text-text placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200'

  return (
    <form onSubmit={handleSubmit} className="reveal space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
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
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
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
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
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
          className={`${inputClass} resize-none`}
          placeholder="Tell me about the role or project."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-accent text-bg font-semibold text-sm rounded-xl hover:bg-accent-secondary transition-all duration-300 active:scale-[0.97]"
      >
        Send message
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-400/90">{errorMsg}</p>
      )}
      {status === 'success' && (
        <p className="text-sm text-accent">Message received. I will get back to you soon.</p>
      )}
    </form>
  )
}
