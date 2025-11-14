'use client'

import * as React from 'react'
import { motion, type Variants } from 'motion/react'

type Job = {
  company: string
  role: string
  period: string
  bullets: string[]
  tags?: string[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

// Use a cubic-bezier easing (iOS-y). Or swap for a spring transition.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // <<< fixed: array instead of 'easeOut'
    },
  },
}

export function ExperienceSection({ experience }: { experience: Job[] }) {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(m.matches)
    onChange()
    m.addEventListener('change', onChange)
    return () => m.removeEventListener('change', onChange)
  }, [])

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6"
    >
      {experience.map((job) => (
        <motion.article
          key={`${job.company}-${job.role}`}
          variants={reduced ? undefined : cardVariants}
          className="border-foreground/10 bg-background/30 rounded-2xl border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_-12px_rgba(0,0,0,0.6)] supports-backdrop-filter:backdrop-blur-sm"
        >
          <header className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold md:text-xl">
              {job.role} — {job.company}
            </h3>
            <span className="text-foreground/60 text-xs">{job.period}</span>
          </header>

          {!!job.bullets?.length && (
            <ul className="text-foreground/90 mt-4 list-disc space-y-2 pl-5">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {!!job.tags?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="border-foreground/10 bg-background/20 text-foreground/80 rounded-full border px-2.5 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </motion.article>
      ))}
    </motion.div>
  )
}
