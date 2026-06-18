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
    <section className="pt-28 pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Expertise" title="Technical skills" />
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, i) => (
            <div
              key={category.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <h3 className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-text-secondary bg-surface/80 border border-border/50 px-3.5 py-2 rounded-lg hover:border-border-hover hover:text-text transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-28">
          <div className="glow-line mb-16" />
          <SectionHeading kicker="Open source" title="GitHub" />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <div>
            <p className="text-text-secondary leading-relaxed max-w-[50ch] mb-10">
              A selection of public repositories. Each one represents a problem
              I found interesting enough to solve and publish.
            </p>

            <div className="flex items-center gap-10 mb-10">
              {[
                { value: '12', label: 'Repositories' },
                { value: '14', label: 'Stars' },
                { value: '3', label: 'Following' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-text font-mono tracking-tight">{value}</p>
                  <p className="text-[11px] text-text-muted mt-1 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/yassine808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-200 text-sm font-medium group"
            >
              View GitHub profile
              <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="space-y-0">
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
                className="flex items-center justify-between py-4 border-b border-border/50 hover:border-border transition-all duration-200 group"
              >
                <span className="text-sm text-text group-hover:text-accent transition-colors duration-200 font-medium">
                  {repo.name}
                </span>
                <span className="text-[11px] font-mono text-text-muted">
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
