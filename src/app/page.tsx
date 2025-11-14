import Image from 'next/image';
import Card from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import TechIconGrid from '@/components/tech-icon-grid';
import { Mail, FileText, MapPin, HandshakeIcon } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import MotionFade from '@/components/MotionFade';
import { ExperienceSection } from '@/components/ExperienceSection';
import { experience } from '@/data/experience';

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main className='bg-background text-foreground min-h-screen'>
    <MotionFade
      className="min-h-screen">
      {/* Header */}
      <header className="border-foreground/10 bg-background/75 sticky top-0 z-40 border-b backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3">
          <span className="text-foreground/80 text-sm">ryanlecours.dev</span>
          <span className="text-foreground/60 text-xs">Portfolio</span>
        </div>
      </header>

      {/* Grid */}
      <div className="mx-auto max-w-[1600px] px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-[1fr_2fr] auto-rows-min">
          {/* LEFT COLUMN */}
          <div className="xl:col-start-1 xl:row-start-1">
          <Card className="p-4 md:p-6">
            {/* Profile */}
            <div className="grid grid-cols-[1fr_auto] items-start gap-4 md:gap-6">
              {/* Left: info */}
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-300" />
                  Open to Frontend & Full-Stack Roles
                </span>

                <h1 className="mt-2 text-xl font-semibold">Ryan LeCours</h1>
                <p className="text-foreground/70 text-sm">
                  Frontend-leaning Full-Stack Engineer
                </p>
                <p className="text-foreground/60 mt-1 inline-flex items-center gap-1 text-xs">
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
              <a
                href="https://linkedin.com/in/ryan-lecours/"
                className="border-foreground/10 bg-background/20 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 transition-colors hover:bg-emerald-400/15"
              >
                <SiLinkedin className="size-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@ryanlecours.dev"
                className="border-foreground/10 bg-background/20 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 transition-colors hover:bg-emerald-400/15"
              >
                <Mail className="size-4" /> Email
              </a>
              <a
                href="https://github.com/ryanlecours"
                target="_blank"
                rel="noreferrer"
                className="border-foreground/10 bg-background/20 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 transition-colors hover:bg-emerald-400/15"
              >
                <SiGithub className="size-4" />
                GitHub
              </a>
              <a
                href="/ryan_lecours_resume.pdf"
                download="/ryan_lecours_resume.pdf"
                className="col-span-3 flex items-center justify-center mx-auto gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-8 py-2 text-emerald-300 transition-colors hover:bg-emerald-400/15"
              >
                <FileText className="size-4" /> Resume
              </a>
            </div>
          </Card>

          {/* SIDEBAR STACK (moves under left card at xl) */}
           <div className="flex flex-col gap-6 mt-6">

            <Card className="p-5">
              <SectionHeader title="Metrics" subtitle="Quick stats" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { n: '19+', label: 'Projects' },
                  { n: '2', label: 'Enterprise Employers' },
                  { n: '8+', label: 'Years Expertise' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-white/3 p-4 text-center ring-1 ring-white/10"
                  >
                    <div className="text-2xl font-semibold">{m.n}</div>
                    <div className="text-foreground/60 text-xs">{m.label}</div>
                  </div>
                ))}
              </div>
            </Card>
            {/* PROJECTS */}
            <Card className="p-5">
              <SectionHeader
                title="Projects"
                subtitle="My current personal work"
                right={
                  <a
                    href="/projects"
                    className="border-foreground/10 bg-background/20 rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-emerald-400/15"
                  >
                    View All
                  </a>
                }
              />

              <div className="mt-4 flex flex-col gap-4">
                {/* Loam Logger */}
                <a
                  href="https://loamlogger.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video w-full overflow-hidden rounded-xl bg-white/3 ring-1 ring-white/10 transition-all duration-300 hover:ring-emerald-400/40"
                >
                  <Image
                    src="/loamlogger.png"
                    alt="Loam Logger app preview"
                    className="absolute inset-0 size-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    fill
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">
                      Loam Logger
                    </h3>
                    <p className="text-sm text-neutral-300">
                      A Strava-style mountain bike analytics app
                    </p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
          
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6 xl:col-start-2 xl:row-start-1">
            <Card className="p-5">
              <SectionHeader title="Work Experience" />
              <ExperienceSection experience={experience} />
            </Card>
            <Card className="p-5">
              <SectionHeader
                title="My Tech Stack"
                subtitle="Technologies I use most"
              />
              <TechIconGrid />
            </Card>

          </div>

          {/* CTA */}
          <Card className="p-6 xl:col-span-2">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <HandshakeIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold">Let’s Work Together</h3>
              <p className="text-foreground/60 mt-1 text-sm">
                Have an open frontend or full stack role? I’d love to help.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="mailto:hello@ryanlecours.dev"
                  className="border-foreground/10 bg-background/20 rounded-xl border px-3 py-2 transition-colors hover:bg-emerald-400/15"
                >
                  Email
                </a>
                <a
                  href="/ryan_lecours_resume.pdf"
                  download="/ryan_lecours_resume.pdf"
                  className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-300 transition-colors hover:bg-emerald-400/15"
                >
                  Resume
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-foreground/60 mt-10 py-8 text-center text-xs">
          © {year} Ryan LeCours • Built with Next.js & Tailwind
        </footer>
      </div>
    </MotionFade>
    </main>
  );
}
