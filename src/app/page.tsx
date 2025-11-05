import Image from "next/image";

type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

const experience: Experience[] = [
  {
    company: "DCS Corp",
    role: "Software Engineer III",
    period: "May 2023 – Present · Bellingham, WA",
    bullets: [
      "Led front-end for secure flight-planning systems in React within a monorepo (Nx, Yarn Workspaces).",
      "Built shared geospatial UI packages and reusable time-input control adopted across teams.",
      "Improved CI/CD, type-safety, and testing (TypeScript, RTL/Jest) while mentoring new engineers.",
    ],
    tags: ["React", "TypeScript", "Monorepo", "CI/CD", "Testing"],
  },
  {
    company: "Fidelity Investments",
    role: "Senior Software Engineer",
    period: "2018 – 2023",
    bullets: [
      "Delivered performant web apps in Vue and Angular modernizing benefits platforms.",
      "Built and maintained 13 Node.js GraphQL subgraphs on AWS Lambda replacing legacy REST.",
      "Drove migration of 70+ apps from Bitbucket to GitHub; set standards for Vue/Angular micro-frontends.",
    ],
    tags: ["Vue", "Angular", "Node.js", "GraphQL", "AWS"],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-neutral-950/70">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-neutral-300">ryanlecours.dev</span>
          <span className="text-xs text-neutral-400">Portfolio</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-sm mb-4">
              <span className="inline-block size-2 rounded-full bg-emerald-300" />
              Open to senior frontend roles
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Ryan LeCours
            </h1>
            <p className="mt-2 text-lg text-neutral-300">
              Frontend-Leaning Full-Stack Engineer
            </p>
            <p className="mt-4 text-neutral-300">
              I specialize in React/TypeScript, GraphQL, and developer
              experience - building fast, accessible UI platforms that help teams
              ship with confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@ryanlecours.dev"
                className="rounded-xl bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200"
              >
                Email
              </a>
              <a
                href="https://github.com/ryanlecours"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-white/25 hover:bg-white/5"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-lecours/"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-white/25 hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href="/ryan_lecours_resume.pdf"
                className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:border-white/25 hover:bg-white/5"
              >
                Resume
              </a>
            </div>

            <div className="mt-6 text-xs text-neutral-400">
              Bellingham, WA • React • TypeScript • GraphQL • Monorepos • CI/CD
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="relative aspect-square w-64 md:w-80 rounded-2xl border border-white/10 overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Portrait of Ryan LeCours"
                fill
                priority
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Work Experience</h2>
        <div className="mt-8 grid gap-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  {job.role} - {job.company}
                </h3>
                <span className="text-xs text-neutral-400">{job.period}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-200">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {job.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-16 text-xs text-neutral-500">
        © {new Date().getFullYear()} Ryan LeCours • Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
