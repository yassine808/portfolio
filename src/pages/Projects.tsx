import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ArrowUpRight } from 'phosphor-react'

interface Project {
  year: string
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    year: '2024',
    title: 'Festival Management Platform',
    description:
      'Full web platform to browse artists, reserve tickets, and visualise available seats in real time. Built with .NET and SQL Server, featuring seat map rendering and reservation management.',
    tags: ['.NET', 'C#', 'SQL Server', 'ASP.NET'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2024',
    title: 'Morocco History ChatBot',
    description:
      'Interactive chatbot covering Moroccan history from ancient times to modern day. Powered by a local LLM via Ollama with a Flask backend and a clean web interface.',
    tags: ['Python', 'Flask', 'Ollama', 'LLM'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2023',
    title: 'Camera Tracker — Gesture Control',
    description:
      'Real-time hand and eye tracking via webcam. Supports gesture-based plugins for controlling applications through hand movements. Built with OpenCV and MediaPipe.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2023',
    title: 'VALORANT ColorBot',
    description:
      'AutoHotkey automation tool for VALORANT that locks in agents using pixel color detection. Lightweight and fast, with configurable agent preferences.',
    tags: ['AutoHotkey', 'Automation'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2023',
    title: 'Customs Testing Pipeline',
    description:
      'Automated web testing pipeline built during internship at Morocco Customs Administration. Selenium-based test suites with Cucumber BDD specifications and Gherkin feature files.',
    tags: ['Selenium', 'Cucumber', 'Java', 'BDD', 'Gherkin'],
  },
  {
    year: '2022',
    title: 'Electron Desktop Utilities',
    description:
      'Collection of desktop utilities built with Electron.js. Includes system automation tools and productivity helpers for daily workflows.',
    tags: ['Electron', 'JavaScript', 'Node.js'],
    link: 'https://github.com/yassine808',
  },
]

export function Projects() {
  const ref = useReveal()

  return (
    <section className="pt-32 pb-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Work" title="All projects" />
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_auto] items-start gap-4 md:gap-8 py-10 border-b border-border hover:border-border-hover transition-colors duration-200`}
            >
              <span className="text-xs font-mono text-text-muted pt-1">
                {project.year}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-dim leading-relaxed mb-4 max-w-[65ch]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-text-muted bg-surface px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors duration-200 mt-1 hidden md:block"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ArrowUpRight
                    size={18}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
