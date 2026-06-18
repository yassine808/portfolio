import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ArrowRight, DownloadSimple } from 'phosphor-react'

export function About() {
  const ref = useReveal()

  return (
    <section className="pt-28 pb-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="About" title="Background" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
          {/* Photo */}
          <div className="reveal">
            <div className="aspect-[3/4] bg-surface rounded-2xl border border-border/50 overflow-hidden">
              <img
                src="/photo_0.jpeg"
                alt="Magri Mohammed Yassine"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="reveal text-[1.1rem] text-text leading-[1.8]">
                I am a 5th-year computer science and networks engineering student
                at EMSI Rabat. I build software because I like making things that
                work — not demos, not prototypes, but systems that solve actual
                problems.
              </p>
              <p className="reveal reveal-delay-1 text-text-secondary leading-[1.8] max-w-[62ch]">
                My internship at Morocco Customs Administration taught me that
                the gap between "it works on my machine" and "it works in
                production" is where real engineering happens. I built automated
                testing pipelines with Selenium and Cucumber that caught
                regressions before they reached staging.
              </p>
              <p className="reveal reveal-delay-2 text-text-secondary leading-[1.8] max-w-[62ch]">
                Outside of coursework, I build projects that interest me: a
                gesture-controlled camera tracker using OpenCV and MediaPipe, a
                Morocco History chatbot running a local LLM through Ollama, and
                a festival management platform in .NET. Each project teaches me
                something I could not learn from a textbook.
              </p>
              <p className="reveal reveal-delay-3 text-text-secondary leading-[1.8] max-w-[62ch]">
                I am currently seeking a PFE internship where I can contribute
                to a serious engineering team and continue building things that
                matter.
              </p>
            </div>

            <div className="reveal border-t border-border/50 pt-8">
              <h3 className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-6">
                Education
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-text font-semibold text-[0.95rem]">
                    Engineering Degree — Computer Science & Networks
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    EMSI Rabat · 2021 — 2026 (expected)
                  </p>
                </div>
                <div>
                  <p className="text-text font-semibold text-[0.95rem]">
                    Baccalaureate — Mathematics
                  </p>
                  <p className="text-sm text-text-secondary mt-1">2021</p>
                </div>
              </div>
            </div>

            <div className="reveal border-t border-border/50 pt-8">
              <h3 className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-6">
                Beyond code
              </h3>
              <p className="text-text-secondary leading-[1.8] max-w-[62ch]">
                I read about distributed systems and programming language design.
                I contribute to open-source tools when I find bugs I can fix. I
                think the best engineers stay curious about things outside their
                immediate domain.
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-200 text-sm font-medium group"
              >
                Get in touch
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
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
        </div>
      </div>
    </section>
  )
}
