import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Card from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdHandshake } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi2';
import MotionFade from '@/components/MotionFade';
import { experience } from '@/data/experience';

const TechIconGrid = dynamic(() => import('@/components/tech-icon-grid'), {
  ssr: true,
});

const ExperienceSection = dynamic(() => import('@/components/ExperienceSection').then(mod => ({ default: mod.ExperienceSection })), {
  ssr: true,
});

export const dynamicParams = false;
export const revalidate = false;

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
                  <MdLocationOn className="size-3" /> Bellingham, WA
                </p>
              </div>

              {/* Right: photo */}
              <Image
                src="/me.jpg"
                alt="Ryan LeCours"
                width={128}
                height={128}
                priority
                className="shrink-0 rounded-xl object-cover ring-1 ring-white/15"
              />
            </div>

            {/* Quick actions */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <a
                href="https://linkedin.com/in/ryan-lecours/"
                className="border-foreground/10 bg-background/20 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 transition-colors hover:bg-emerald-400/15"
              >
                <FaLinkedin className="size-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@ryanlecours.dev"
                className="border-foreground/10 bg-background/20 flex items-center justify-center gap-2 rounded-xl border px-3 py-2 transition-colors hover:bg-emerald-400/15"
              >
                <MdEmail className="size-4" /> Email
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
                href="/RyanLeCours_Resume.pdf"
                download="/RyanLeCours_Resume.pdf"
                className="col-span-3 flex items-center justify-center mx-auto gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-8 py-2 text-emerald-300 transition-colors hover:bg-emerald-400/15"
              >
                <HiDocumentText className="size-4" /> Resume
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
                  <Link
                    href="/projects"
                    className="border-foreground/10 bg-background/20 rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-emerald-400/15"
                  >
                    View All
                  </Link>
                }
              />

              <div className="mt-4 flex flex-col gap-4">
                {/* Loam Logger */}
                <a
                  href="https://loamlogger.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-[#2d3e2f] to-[#1a241b] ring-1 ring-white/10 transition-all duration-500 hover:ring-emerald-400/50 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)]"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src="/loamlogger.png"
                      alt="Loam Logger app preview"
                      className="absolute inset-0 size-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/80" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 backdrop-blur-sm">
                          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                          <span className="text-xs font-medium text-emerald-300">Live Project</span>
                        </div>

                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                          Loam Logger
                        </h3>

                        <p className="max-w-md text-sm leading-relaxed text-neutral-200/90">
                          A comprehensive web application for cyclists to log rides, analyze performance metrics, and track bike component wear over time.
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {['React', 'TypeScript', 'GraphQL', 'PostgreSQL'].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-medium text-white/80 backdrop-blur-sm ring-1 ring-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Card>
          </div>
          
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6 xl:col-start-2 xl:row-start-1">
            <Card className="p-5">
              <SectionHeader title="About Me" />
              <p className="text-foreground/80 text-sm leading-relaxed">
                Senior Software Engineer with 8+ years building scalable web applications
                in JavaScript, TypeScript, React, and Node.js. I specialize in leading
                front-end architecture, designing GraphQL APIs, and shipping accessible,
                performant user experiences — from enterprise financial platforms serving
                millions of users to mission-critical defense software. Outside of work,
                I build full-stack side projects with modern tooling and AI-assisted
                development, and love mountain biking in the mountains surrounding Bellingham, WA.
              </p>
            </Card>
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
                <MdHandshake className="h-6 w-6 text-emerald-400" />
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
                  href="/RyanLeCours_Resume.pdf"
                  download="/RyanLeCours_Resume.pdf"
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
