import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'

interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  tags: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: '2024',
    title: 'Software Engineering Intern',
    company: 'Morocco Customs Administration',
    description: 'Built automated web testing pipelines using Selenium and Cucumber. Wrote BDD test specifications in Gherkin, reducing manual testing effort and catching regressions before staging deployment.',
    tags: ['Selenium', 'Cucumber', 'Java', 'BDD', 'Gherkin'],
  },
  {
    period: '2021 — 2026',
    title: 'Engineering Student — CS & Networks',
    company: 'EMSI Rabat',
    description: '5-year engineering program covering software development, networking, distributed systems, and applied mathematics. Active in personal projects spanning full-stack web, AI/ML, and desktop automation.',
    tags: ['Software Engineering', 'Networking', 'Distributed Systems'],
  },
]

export function Experience() {
  const ref = useReveal()

  return (
    <section className="pt-28 pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Career" title="Experience" />
        </div>

        <div className="space-y-0">
          {experiences.map((item, i) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} grid grid-cols-[100px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-10 border-b border-border/50`}
            >
              <div>
                <p className="text-[11px] font-mono text-text-muted tracking-wider">{item.period}</p>
              </div>

              <div>
                <h3 className="text-[1.15rem] font-semibold text-text mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">{item.company}</p>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[58ch] mb-5">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-text-muted bg-surface/80 border border-border/50 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
