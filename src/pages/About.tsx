import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from '../components/SectionHeading'
import { ArrowRight } from 'phosphor-react'

export function About() {
  const ref = useReveal()

  return (
    <section className="pt-32 pb-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div ref={ref} className="reveal">
          <SectionHeading kicker="About" title="Background" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          <div className="space-y-8">
            <div className="reveal aspect-[3/4] bg-surface rounded-2xl border border-border overflow-hidden">
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

          <div className="space-y-8">
            <div className="space-y-6">
              <p className="reveal text-[clamp(1.1rem,1.5vw+0.5rem,1.25rem)] text-text leading-relaxed">
                I am a 5th-year computer science and networks engineering student
                at EMSI Rabat. I build software because I like making things that
                work — not demos, not prototypes, but systems that solve actual
                problems.
              </p>
              <p className="reveal reveal-delay-1 text-text-dim leading-relaxed max-w-[65ch]">
                My internship at Morocco Customs Administration taught me that
                the gap between "it works on my machine" and "it works in
                production" is where real engineering happens. I built automated
                testing pipelines with Selenium and Cucumber that caught regressions
                before they reached staging. That experience shaped how I think
                about software quality.
              </p>
              <p className="reveal reveal-delay-2 text-text-dim leading-relaxed max-w-[65ch]">
                Outside of coursework, I build projects that interest me. A
                gesture-controlled camera tracker using OpenCV and MediaPipe. A
                Morocco History chatbot running a local LLM through Ollama. A
                festival management platform in .NET. Each project teaches me
                something I could not learn from a textbook.
              </p>
              <p className="reveal reveal-delay-3 text-text-dim leading-relaxed max-w-[65ch]">
                I am currently seeking a PFE internship where I can contribute
                to a serious engineering team and continue building things that
                matter.
              </p>
            </div>

            <div className="reveal border-t border-border pt-8">
              <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-accent mb-6">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-text font-medium">
                    Engineering Degree — Computer Science & Networks
                  </p>
                  <p className="text-sm text-text-dim">
                    EMSI Rabat · 2021 — 2026 (expected)
                  </p>
                </div>
                <div>
                  <p className="text-text font-medium">
                    Baccalaureate — Mathematics
                  </p>
                  <p className="text-sm text-text-dim">
                    2021
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal border-t border-border pt-8">
              <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-accent mb-6">
                Beyond code
              </h3>
              <p className="text-text-dim leading-relaxed max-w-[65ch]">
                I read about distributed systems and programming language design.
                I contribute to open-source tools when I find bugs I can fix. I
                think the best engineers are the ones who stay curious about
                things outside their immediate domain.
              </p>
            </div>

            <div className="reveal">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dim transition-colors duration-200 text-sm font-medium"
              >
                Get in touch
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
