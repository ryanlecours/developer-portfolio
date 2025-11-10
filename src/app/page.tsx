import TechIconGrid from "@/components/tech-icon-grid";
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
    tags: ["React", "TypeScript", "Monorepo", "CI/CD", "Cypress", "Jest"],
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
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="text-sm text-foreground/80">ryanlecours.dev</span>
          <span className="text-xs text-foreground/60">Portfolio</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(53,196,143,.35)] bg-[rgba(53,196,143,.12)] px-3 py-1.5 text-sm text-[color:var(--accent)]">
            <span className="size-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_3px_rgba(53,196,143,0.25)]" />
            Open to frontend roles
          </span>

          <h1 className="text-5xl font-semibold tracking-tight">Ryan LeCours</h1>

          <p className="max-w-lg text-lg leading-relaxed text-foreground/70">
            Frontend-leaning full-stack engineer building fast, accessible UI
            platforms that help teams ship with confidence.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:hello@ryanlecours.dev"
              className="rounded-full border border-foreground/10 bg-background/10 px-4 py-2 transition-colors hover:bg-[rgba(53,196,143,.2)]"
            >
              Email
            </a>
            <a
              href="https://github.com/ryanlecours"
              className="rounded-full border border-foreground/10 bg-background/10 px-4 py-2 transition-colors hover:bg-[rgba(53,196,143,.2)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-lecours/"
              className="rounded-full border border-foreground/10 bg-background/10 px-4 py-2 transition-colors hover:bg-[rgba(53,196,143,.2)]"
            >
              LinkedIn
            </a>
            <a
              href="/ryan_lecours_resume.pdf"
              className="rounded-full border border-[rgba(53,196,143,.4)] bg-[rgba(53,196,143,.1)] px-4 py-2 text-[color:var(--accent)] transition-colors hover:bg-[rgba(53,196,143,.2)]"
            >
              Resume
            </a>
          </div>

          <p className="pt-2 text-sm text-foreground/60">Bellingham, WA</p>
        </div>

        {/* Right photo */}
        <div className="justify-self-center">
          <div
            className="
      relative
      w-[320px] md:w-[360px]
      rounded-3xl overflow-hidden
      bg-white/[0.08] ring-2 ring-white/45
      shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]
      p-1
    "
          >

            <Image
              src="/me.jpg"
              alt="Ryan LeCours"
              width={360}
              height={450}
              priority
              sizes="(max-width: 768px) 320px, 360px"
              className="
        block w-full h-auto
        rounded-[22px]
        object-cover
        border border-white/12
        shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]
      "
            />
          </div>
        </div>


      </section>


      {/* Tech Stack & Work Experience */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 text-center shadow-[0_10px_50px_-20px_rgba(0,0,0,0.6)] supports-[backdrop-filter]:backdrop-blur-sm sm:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Tech Stack</h2>
          <p className="mt-2 text-sm text-foreground/60">Click any icon to learn more</p>
          <div className="mt-6">
            <TechIconGrid />
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold md:mt-16 md:text-3xl">Work Experience</h2>

        <div className="mt-8 grid gap-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-2xl border border-foreground/10 bg-background/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_-12px_rgba(0,0,0,0.6)] supports-[backdrop-filter]:backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold md:text-xl">
                  {job.role} — {job.company}
                </h3>
                <span className="text-xs text-foreground/60">{job.period}</span>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/90">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {job.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/10 bg-background/20 px-2.5 py-1 text-xs text-foreground/80"
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
      <footer className="mx-auto max-w-6xl px-4 pb-16 text-xs text-foreground/60">
        © {year} Ryan LeCours • Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
