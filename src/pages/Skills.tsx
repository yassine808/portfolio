import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ArrowUpRight } from 'phosphor-react'

interface SkillCategory {
  label: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C / C++', 'SQL', 'HTML', 'CSS', 'XML'],
  },
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Backend',
    skills: ['Python', 'Flask', 'Java', '.NET', 'C#', 'Node.js', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'Testing & QA',
    skills: ['Selenium', 'Cucumber', 'Gherkin', 'BDD', 'JUnit', 'Maven'],
  },
  {
    label: 'AI / ML',
    skills: ['OpenCV', 'MediaPipe', 'Ollama', 'LLM'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'Linux', 'Electron', 'IntelliJ', 'AutoHotkey', 'Node.js'],
  },
]

export function Skills() {
  const ref = useReveal()

  return (
    <section className="pt-32 pb-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Expertise" title="Technical skills" />
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, i) => (
            <div
              key={category.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-accent mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-text-dim bg-surface border border-border px-3 py-1.5 rounded-lg hover:border-border-hover hover:text-text transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-32 border-t border-border pt-16">
          <SectionHeading kicker="Open source" title="GitHub" />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
          <div>
            <p className="text-text-dim leading-relaxed max-w-[55ch] mb-8">
              A selection of public repositories. Each one represents a problem
              I found interesting enough to solve and publish.
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div>
                <p className="text-2xl font-semibold text-text font-mono">12</p>
                <p className="text-xs text-text-muted mt-1">Repositories</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-text font-mono">14</p>
                <p className="text-xs text-text-muted mt-1">Stars</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-text font-mono">3</p>
                <p className="text-xs text-text-muted mt-1">Following</p>
              </div>
            </div>

            <a
              href="https://github.com/yassine808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dim transition-colors duration-200 text-sm font-medium"
            >
              View GitHub profile
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>

          <div className="space-y-3">
            {[
              { name: 'VALORANT-ColorBot', meta: 'AutoHotkey · 1 star' },
              { name: 'claude-settings', meta: 'Python · 1 star' },
              { name: 'portfolio', meta: 'TypeScript · React' },
            ].map((repo) => (
              <a
                key={repo.name}
                href="https://github.com/yassine808"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 border-b border-border hover:border-border-hover transition-colors duration-200 group"
              >
                <span className="text-sm text-text group-hover:text-accent transition-colors duration-200">
                  {repo.name}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {repo.meta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
