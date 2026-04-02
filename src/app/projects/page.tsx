import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import MotionFade from '@/components/MotionFade';
import { SiGithub } from 'react-icons/si';
import { HiArrowLeft, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects – Ryan LeCours',
  description:
    'Personal and open-source projects by Ryan LeCours — React, TypeScript, GraphQL, and more.',
};

export default function ProjectsPage() {
  const year = new Date().getFullYear();

  return (
    <main className="bg-background text-foreground min-h-screen">
      <MotionFade className="min-h-screen">
        {/* Header */}
        <header className="border-foreground/10 bg-background/75 sticky top-0 z-40 border-b backdrop-blur">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="text-foreground/80 flex items-center gap-2 text-sm transition-colors hover:text-emerald-400"
            >
              <HiArrowLeft className="size-4" />
              ryanlecours.dev
            </Link>
            <span className="text-foreground/60 text-xs">Projects</span>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] px-4 py-8 md:py-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold md:text-3xl">Projects</h1>
            <p className="text-foreground/60 mt-2 text-sm">
              Personal and open-source work. Enterprise projects at DCS Corp and
              Fidelity Investments are under NDA.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  {project.image && (
                    <div className="relative aspect-video w-full shrink-0 lg:aspect-auto lg:w-80 xl:w-96">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 384px"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-xl font-semibold">
                            {project.title}
                          </h2>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
                            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                            {project.status === 'live'
                              ? 'Live'
                              : project.status === 'in-progress'
                                ? 'In Progress'
                                : 'Archived'}
                          </span>
                        </div>
                        <p className="text-foreground/70 mt-2 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights && (
                      <ul className="text-foreground/80 mt-4 list-disc space-y-1.5 pl-5 text-sm">
                        {project.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-foreground/10 bg-background/20 text-foreground/80 rounded-full border px-2.5 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex items-center gap-3 pt-5">
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300 transition-colors hover:bg-emerald-400/15"
                        >
                          <HiArrowTopRightOnSquare className="size-4" />
                          Visit Site
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-foreground/10 bg-background/20 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors hover:bg-emerald-400/15"
                        >
                          <SiGithub className="size-4" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
