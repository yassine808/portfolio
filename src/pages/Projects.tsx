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
    description: 'Full web platform to browse artists, reserve tickets, and visualise available seats in real time. Built with .NET and SQL Server, featuring seat map rendering and reservation management.',
    tags: ['.NET', 'C#', 'SQL Server', 'ASP.NET'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2024',
    title: 'Morocco History ChatBot',
    description: 'Interactive chatbot covering Moroccan history from ancient times to modern day. Powered by a local LLM via Ollama with a Flask backend and clean web interface.',
    tags: ['Python', 'Flask', 'Ollama', 'LLM'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2023',
    title: 'Camera Tracker — Gesture Control',
    description: 'Real-time hand and eye tracking via webcam. Supports gesture-based plugins for controlling applications through hand movements.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2023',
    title: 'VALORANT ColorBot',
    description: 'AutoHotkey automation tool for VALORANT that locks in agents using pixel color detection. Lightweight, fast, with configurable agent preferences.',
    tags: ['AutoHotkey', 'Automation'],
    link: 'https://github.com/yassine808',
  },
  {
    year: '2023',
    title: 'Customs Testing Pipeline',
    description: 'Automated web testing pipeline built during internship at Morocco Customs Administration. Selenium-based test suites with Cucumber BDD specifications.',
    tags: ['Selenium', 'Cucumber', 'Java', 'BDD', 'Gherkin'],
  },
  {
    year: '2022',
    title: 'Electron Desktop Utilities',
    description: 'Collection of desktop utilities built with Electron.js — system automation tools and productivity helpers for daily workflows.',
    tags: ['Electron', 'JavaScript', 'Node.js'],
    link: 'https://github.com/yassine808',
  },
]

export function Projects() {
  const ref = useReveal()

  return (
    <section className="pt-28 pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Work" title="All projects" />
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr_auto] items-start gap-4 md:gap-10 py-10 border-b border-border/50 hover:border-border transition-all duration-300`}
            >
              <span className="text-[11px] font-mono text-text-muted pt-1.5 tracking-wider">
                {project.year}
              </span>

              <div>
                <h3 className="text-[1.15rem] font-semibold text-text group-hover:text-accent transition-colors duration-300 mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-[60ch]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-text-muted bg-surface/80 border border-border/50 px-2.5 py-1 rounded-md"
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
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-accent/50 group-hover:bg-accent-bg/30 transition-all duration-300 mt-1"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight
                    size={16}
                    className="text-text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
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
