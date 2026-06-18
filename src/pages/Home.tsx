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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Accent glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/3 rounded-full blur-[100px]" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div ref={ref} className="max-w-2xl">
          <div className="reveal reveal-delay-1 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.15em] text-accent bg-accent-bg/50 border border-accent/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to opportunities
            </span>
          </div>

          <h1 className="reveal reveal-delay-2 text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-[-0.04em] text-text leading-[0.95] mb-8">
            Magri
            <br />
            Mohammed
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Yassine
            </span>
          </h1>

          <p className="reveal reveal-delay-3 text-[clamp(1rem,1.5vw,1.15rem)] text-text-secondary leading-relaxed max-w-[50ch] mb-10">
            5th-year engineering student at EMSI Rabat. I build web platforms,
            automation tools, and AI systems — focused on clean architecture and
            software that ships.
          </p>

          <div className="reveal reveal-delay-4 flex flex-wrap items-center gap-4 mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-bg font-semibold text-sm rounded-xl hover:bg-accent-secondary transition-all duration-300 active:scale-[0.97]"
            >
              Get in touch
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text font-medium text-sm rounded-xl hover:border-border-hover hover:bg-surface transition-all duration-300"
            >
              View work
            </Link>
          </div>

          <div className="reveal reveal-delay-5 flex items-center gap-5">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest">
              Find me
            </span>
            <div className="h-px w-8 bg-border" />
            <div className="flex items-center gap-5">
              {[
                { href: 'https://github.com/yassine808', icon: GithubLogo, label: 'GitHub' },
                { href: 'https://linkedin.com/in/mohammed-yassine-magri', icon: LinkedinLogo, label: 'LinkedIn' },
                { href: 'mailto:ysmagri@gmail.com', icon: Envelope, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={18} weight="regular" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  )
}

function QuickAbout() {
  const ref = useReveal()

  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
          <div ref={ref} className="reveal">
            <SectionHeading kicker="Introduction" title="Who I am" />
          </div>

          <div className="space-y-6">
            <p className="reveal text-[1.05rem] text-text-secondary leading-[1.75] max-w-[60ch]">
              I am a <strong className="text-text font-semibold">5th-year computer science and networks engineering student</strong> at
              EMSI Rabat. I take a hands-on approach to building software that
              solves real problems — not demos, not prototypes, but systems that
              ship and work in production.
            </p>
            <p className="reveal reveal-delay-1 text-[1.05rem] text-text-secondary leading-[1.75] max-w-[60ch]">
              During my internship at Morocco Customs Administration, I built
              automated web testing pipelines with Selenium and Cucumber. Outside
              of coursework, I built a gesture-controlled camera tracker with
              OpenCV and MediaPipe, and a Morocco History chatbot powered by a
              local LLM via Ollama.
            </p>
            <p className="reveal reveal-delay-2 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-200 text-sm font-medium group"
              >
                Read more about me
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
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
      description: 'Full web platform to browse artists, reserve tickets, and visualise available seats in real time.',
      tags: ['.NET', 'C#', 'SQL Server'],
    },
    {
      year: '2024',
      title: 'Morocco History ChatBot',
      description: 'Interactive chatbot covering Moroccan history. Powered by a local LLM via Ollama with a Flask backend.',
      tags: ['Python', 'Flask', 'Ollama'],
    },
    {
      year: '2023',
      title: 'Camera Tracker — Gesture Control',
      description: 'Real-time hand and eye tracking via webcam with a gesture-based plugin system.',
      tags: ['Python', 'OpenCV', 'MediaPipe'],
    },
  ]

  return (
    <section className="relative py-28 md:py-36">
      <div className="glow-line mb-28" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="Featured" title="Selected projects" />
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr_auto] items-start gap-4 md:gap-10 py-10 border-b border-border/50 hover:border-border transition-all duration-300`}
            >
              <span className="text-[11px] font-mono text-text-muted pt-1.5 tracking-wider">
                {project.year}
              </span>

              <div>
                <h3 className="text-[1.2rem] font-semibold text-text group-hover:text-accent transition-colors duration-300 mb-2.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-[55ch]">
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

              <div className="hidden md:flex items-center pt-2">
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-accent/50 group-hover:bg-accent-bg/30 flex items-center justify-center transition-all duration-300">
                  <ArrowRight
                    size={16}
                    className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-200 text-sm font-medium group"
          >
            View all projects
            <ArrowRight size={14} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
