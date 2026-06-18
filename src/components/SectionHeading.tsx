import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  kicker: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, align = 'left' }: SectionHeadingProps) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal mb-14 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-3">
        {kicker}
      </p>
      <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-[-0.02em] text-text leading-tight">
        {title}
      </h2>
    </div>
  )
}
