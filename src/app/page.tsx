import Image from "next/image";
import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import TechIconGrid from "@/components/tech-icon-grid";
import { Mail, FileText, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";

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
    period: "May 2023 – Present | Remote",
    bullets: [
      "Built reusable React + TypeScript packages supporting map-layer rendering, geospatial overlays, and interactive drawing tools used in mission-critical systems.",
      "Optimized CI/CD pipelines through Azure Blob Storage caching, cutting build times by 91 percent (~50 minutes per build).",
      "Created a reusable React time-input component adopted by 4 teams across 3 applications, improving UX consistency and delivery speed.",
      "Maintained > 95 percent unit-test coverage with Jest and React Testing Library; mentored engineers to uphold testing standards.",
    ],
    tags: ["React", "TypeScript", "Monorepo", "CI/CD", "Cypress", "Jest"],
  },
  {
    company: "Fidelity Investments",
    role: "Senior Software Engineer",
    period: "2018 – 2023 | Merrimack, NH",
    bullets: [
      "Delivered performant web apps in Vue and Angular modernizing 14 benefits platforms.",
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
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/75 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3">
          <span className="text-sm text-foreground/80">ryanlecours.dev</span>
          <span className="text-xs text-foreground/60">Portfolio</span>
        </div>
      </header>

      {/* Grid */}
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:py-10">
        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            items-start
          "
        >
          {/* LEFT COLUMN */}
          <Card className="p-4 xl:sticky xl:top-24">
            {/* Profile */}
            <div className="grid grid-cols-[1fr_auto] items-start gap-4 md:gap-6">
              {/* Left: info */}
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-300" />
                  Open to Frontend & Full-Stack Roles
                </span>

                <h1 className="mt-2 text-xl font-semibold">Ryan LeCours</h1>
                <p className="text-sm text-foreground/70">Frontend-leaning Full-Stack Engineer</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-foreground/60">
                  <MapPin className="size-3" /> Bellingham, WA
                </p>
              </div>

              {/* Right: photo */}
              <Image
                src="/me.jpg"
                alt="Ryan LeCours"
                width={128}
                height={128}
                className="shrink-0 rounded-xl object-cover ring-1 ring-white/15"
              />
            </div>

            {/* Quick actions */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <a href="https://linkedin.com/in/ryan-lecours/" className="flex items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-background/20 px-3 py-2 hover:bg-emerald-400/15">
                <Mail className="size-4" /> Email
              </a>
              <a href="mailto:hello@ryanlecours.dev" className="flex items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-background/20 px-3 py-2 hover:bg-emerald-400/15">
                <Mail className="size-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/ryanlecours"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-foreground/10 bg-background/20 px-3 py-2 hover:bg-emerald-400/15"
              >
                <SiGithub className="size-4" />
                GitHub
              </a>
              <a href="/resume.pdf" className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-300 hover:bg-emerald-400/15">
                <FileText className="size-4" /> Resume
              </a>
            </div>
          </Card>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6 xl:col-start-2">
            <Card className="p-5">
              <SectionHeader title="My Tech Stack" subtitle="Technologies I use most" />
              <TechIconGrid />
            </Card>

            <Card className="p-5">
              <SectionHeader title="Metrics" subtitle="Quick stats" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { n: "19+", label: "Projects" },
                  { n: "3", label: "Clients" },
                  { n: "8+", label: "Yrs Expertise" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-4 text-center">
                    <div className="text-2xl font-semibold">{m.n}</div>
                    <div className="text-xs text-foreground/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </Card>
            {/* PROJECTS */}
            <Card className="p-5 md:col-span-2 xl:col-start-2">
              <SectionHeader
                title="Projects"
                subtitle="A few things I’ve worked on"
                right={
                  <a
                    href="/projects"
                    className="rounded-lg border border-foreground/10 bg-background/20 px-3 py-1.5 text-sm hover:bg-background/30 transition-colors"
                  >
                    View All
                  </a>
                }
              />

              <div className="flex flex-col gap-4 mt-4">
                {/* Loam Logger */}
                <a
                  href="https://loamlogger.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all duration-300"
                >
                  <img
                    src="/loamlogger.png"
                    alt="Loam Logger app preview"
                    className="absolute inset-0 size-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">Loam Logger</h3>
                    <p className="text-sm text-neutral-300">A Strava-style mountain bike analytics app</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <Card className="p-5">
            <SectionHeader title="Work Experience" />

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
          </Card>

          {/* CTA */}
          <Card className="p-6 xl:col-span-3">
            <div className="text-center">
              <div className="mx-auto mb-4 size-12 rounded-2xl bg-white/10" />
              <h3 className="text-lg font-semibold">Let’s Work Together</h3>
              <p className="mt-1 text-sm text-foreground/60">Have an open frontend or full stack role? I’d love to help.</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a href="mailto:hello@ryanlecours.dev" className="rounded-xl border border-foreground/10 bg-background/20 px-3 py-2 hover:bg-background/30">Email</a>
                <a href="/ryan_lecours_resume.pdf" className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-300 hover:bg-emerald-400/15">Resume</a>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-10 py-8 text-center text-xs text-foreground/60">
          © {year} Ryan LeCours • Built with Next.js & Tailwind
        </footer>
      </div>
    </main>
  );
}
