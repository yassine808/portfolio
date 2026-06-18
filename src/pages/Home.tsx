import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ArrowRight, GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react'

export function Home() {
  return (
    <>
      <Hero />
      <QuickAbout />
      <FeaturedProjects />
    </>
  )
}

function Hero() {
  const ref = useReveal()

  return (
    <section className="min-h-[100dvh] flex items-center pt-16">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] w-full">
        <div ref={ref} className="reveal max-w-3xl">
          <p className="reveal reveal-delay-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-accent mb-6">
            Available for internship
          </p>

          <h1 className="reveal reveal-delay-2 text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold tracking-[-0.03em] text-text leading-[1.05] mb-6">
            Magri
            <br />
            Mohammed
            <br />
            <span className="text-accent">Yassine</span>
          </h1>

          <p className="reveal reveal-delay-3 text-[clamp(0.95rem,1vw+0.5rem,1.05rem)] text-text-dim leading-relaxed max-w-[55ch] mb-10">
            5th-year engineering student at EMSI Rabat. Building web platforms,
            automation tools, and AI-powered applications. Focused on clean
            code, thoughtful architecture, and systems that work.
          </p>

          <div className="reveal reveal-delay-4 flex flex-wrap items-center gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium text-sm rounded-lg hover:bg-accent-dim transition-colors duration-200"
            >
              Get in touch
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-medium text-sm rounded-lg hover:border-border-hover hover:bg-surface transition-all duration-200"
            >
              View work
            </Link>
          </div>

          <div className="reveal reveal-delay-5 flex items-center gap-6">
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
              Find me on
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yassine808"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubLogo size={18} weight="regular" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-yassine-magri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} weight="regular" />
              </a>
              <a
                href="mailto:ysmagri@gmail.com"
                className="text-text-muted hover:text-text transition-colors duration-200"
                aria-label="Email"
              >
                <Envelope size={18} weight="regular" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickAbout() {
  const ref = useReveal()

  return (
    <section className="py-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          <div ref={ref} className="reveal">
            <SectionHeading kicker="Quick intro" title="Who I am" />
          </div>

          <div className="space-y-6">
            <p className="reveal text-text-dim leading-relaxed max-w-[65ch]">
              I am a <strong className="text-text font-semibold">5th-year computer science and networks engineering student</strong> at
              EMSI Rabat, with a hands-on approach to building software that solves
              real problems. My work spans full-stack web development, test
              automation, AI-powered applications, and desktop tooling.
            </p>
            <p className="reveal reveal-delay-1 text-text-dim leading-relaxed max-w-[65ch]">
              During my internship at Morocco Customs Administration, I built
              automated web testing pipelines with Selenium and Cucumber. I have
              also built a gesture-controlled camera tracker using OpenCV and
              MediaPipe, and a Morocco History chatbot powered by a local LLM.
              I am currently seeking a <strong className="text-text font-semibold">PFE internship</strong>.
            </p>
            <p className="reveal reveal-delay-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dim transition-colors duration-200 text-sm font-medium"
              >
                Learn more about me
                <ArrowRight size={14} weight="bold" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  const ref = useReveal()

  const projects = [
    {
      year: '2024',
      title: 'Festival Management Platform',
      description:
        'Full web platform to browse artists, reserve tickets, and visualise available seats in real time.',
      tags: ['.NET', 'SQL'],
    },
    {
      year: '2024',
      title: 'Morocco History ChatBot',
      description:
        'Interactive chatbot covering Moroccan history. Powered by a local LLM via Ollama.',
      tags: ['Python', 'Flask', 'Ollama'],
    },
    {
      year: '2023',
      title: 'Camera Tracker — Gesture Control',
      description:
        'Real-time hand and eye tracking via webcam with gesture-based plugin system.',
      tags: ['Python', 'MediaPipe', 'OpenCV'],
    },
  ]

  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Featured" title="Selected projects" />
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${i + 1} group grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_100px] items-start gap-4 md:gap-8 py-8 border-b border-border hover:border-border-hover transition-colors duration-200`}
            >
              <span className="text-xs font-mono text-text-muted pt-1">
                {project.year}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-dim leading-relaxed mb-3">
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
              <ArrowRight
                size={16}
                className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 mt-1 hidden md:block"
              />
            </div>
          ))}
        </div>

        <div className="reveal mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dim transition-colors duration-200 text-sm font-medium"
          >
            View all projects
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  )
}
