import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { easeOutExpo } from '../../easing'
import { SectionHeader } from '../shared/SectionHeader'
import styles from './Contact.module.css'

const contactLinks = [
  { label: 'Email', value: 'ysmagri@gmail.com', href: 'mailto:ysmagri@gmail.com' },
  { label: 'Phone', value: '+212 616 725 174', href: 'tel:+212616725174' },
  { label: 'GitHub', value: 'github.com/yassine808', href: 'https://github.com/yassine808' },
  { label: 'LinkedIn', value: 'mohammed-yassine-magri', href: 'https://linkedin.com/in/mohammed-yassine-magri' },
  { label: 'Location', value: 'Rabat, Morocco', href: undefined },
]

export function Contact() {
  const [formMsg, setFormMsg] = useState('')
  const [formColor, setFormColor] = useState('var(--accent)')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.fi')
    let ok = true
    inputs.forEach((i) => { if (!i.value.trim()) ok = false })

    if (!ok) {
      setFormMsg('All fields are required.')
      setFormColor('#b85a5a')
      return
    }

    const email = form.querySelector<HTMLInputElement>('[type=email]')?.value || ''
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMsg('Please enter a valid email.')
      setFormColor('#b85a5a')
      return
    }

    setFormMsg('Message sent. I will get back to you soon.')
    setFormColor('var(--accent)')
    form.reset()
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeader kicker="Connect" title="Get in touch" />
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <p className={styles.text}>
            Interested in working together, have a question, or just want to say hello? Reach out through any of the channels below or send a message directly.
          </p>
          <div className={styles.links}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.linkItem}
                target={link.href?.startsWith('http') ? '_blank' : undefined}
                rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkValue}>{link.value}</span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.1 }}
        >
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input className="fi" type="text" placeholder="Your name" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input className="fi" type="email" placeholder="your@email.com" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className="fi" placeholder="Say hello…" required />
          </div>
          <div className={styles.formMsg} style={{ color: formColor }}>{formMsg}</div>
          <button type="submit" className={styles.submit}>Send message</button>
        </motion.form>
      </div>
    </section>
  )
}
