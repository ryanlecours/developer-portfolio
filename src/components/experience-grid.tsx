"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Boxes,
  Cloud,
  Database,
  Sigma,
  Layout,
  Wind,
  Atom,
} from "lucide-react";

/* ----------------------------- types & helpers ---------------------------- */

export type TechItem = {
  name: string;
  icon: React.ReactNode;
  start: string | Date;      // first professional use
  level?: "Daily" | "Weekly" | "Occasional";
  link?: string;
};

type Props = {
  items?: TechItem[];
  asOf?: string | Date;      // compute years up to this date (defaults to now)
  decimals?: number;         // decimal places for years (default 1)
  showSince?: boolean;       // show "since YYYY"
};

function yearsBetween(start: Date, end: Date, decimals = 1): number {
  const ms = end.getTime() - start.getTime();
  const years = ms / (1000 * 60 * 60 * 24 * 365.2425);
  const p = Math.pow(10, decimals);
  return Math.max(0, Math.round(years * p) / p);
}

function niceSinceLabel(d: Date) {
  return `since ${d.getFullYear()}`;
}

/* -------------------------------- defaults -------------------------------- */

const defaultItems: TechItem[] = [
  { name: "React",     icon: <Code2 className="size-4" />,     start: "2016-01-01", level: "Daily",     link: "https://react.dev" },
  { name: "TypeScript",icon: <Sigma  className="size-4" />,     start: "2016-06-01", level: "Daily",     link: "https://www.typescriptlang.org/" },
  { name: "AWS",       icon: <Cloud  className="size-4" />,     start: "2017-01-01", level: "Occasional",link: "https://aws.amazon.com/" },
  { name: "Angular",   icon: <Layout className="size-4" />,     start: "2016-01-01", level: "Occasional",link: "https://angular.dev" },
  { name: "Node.js",   icon: <Server className="size-4" />,     start: "2019-01-01", level: "Daily",     link: "https://nodejs.org/" },
  { name: "Vue",       icon: <Boxes  className="size-4" />,     start: "2019-01-01", level: "Occasional",link: "https://vuejs.org/" },
  { name: "GraphQL",   icon: <Atom   className="size-4" />,     start: "2018-05-01", level: "Daily",     link: "https://graphql.org/" },
  { name: "Next.js",   icon: <Code2  className="size-4" />,     start: "2024-01-01", level: "Daily",     link: "https://nextjs.org/" },
  { name: "Tailwind",  icon: <Wind   className="size-4" />,     start: "2024-01-01", level: "Daily",     link: "https://tailwindcss.com/" },
  { name: "Prisma",    icon: <Database className="size-4" />,   start: "2023-03-01", level: "Occasional",link: "https://www.prisma.io/" },
  { name: "PostgreSQL",icon: <Database className="size-4" />,   start: "2025-01-01", level: "Weekly",    link: "https://www.postgresql.org/" },
];

/* -------------------------------- component -------------------------------- */

export default function ExperienceGrid({
  items = defaultItems,
  asOf,
  decimals = 1,
  showSince = true,
}: Props) {
  const end = asOf ? new Date(asOf) : new Date();

  const computed = React.useMemo(() => {
    return items
      .map((t) => {
        const start = new Date(t.start);
        return { ...t, start, years: yearsBetween(start, end, decimals) };
      })
      .sort((a, b) => b.years - a.years);
  }, [items, end, decimals]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {computed.map((t, idx) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.25, delay: idx * 0.03 }}
          onMouseMove={(e: { currentTarget: HTMLDivElement; clientX: number; clientY: number; }) => {
            const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            (e.currentTarget as HTMLDivElement).style.setProperty(
              "--mx",
              `${e.clientX - r.left}px`
            );
            (e.currentTarget as HTMLDivElement).style.setProperty(
              "--my",
              `${e.clientY - r.top}px`
            );
          }}
          className={[
            "group relative overflow-hidden rounded-2xl",
            "ring-1 ring-white/12 bg-white/[0.04]",
            "supports-[backdrop-filter]:backdrop-blur-sm",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_-12px_rgba(0,0,0,0.6)]",
            "transition-transform duration-300 will-change-transform",
            "hover:scale-[1.02] hover:shadow-[0_18px_60px_-20px_rgba(0,0,0,0.7)]",
          ].join(" ")}
        >
          {/* soft spotlight on hover (no rainbow/gradients) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(180px 120px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 60%)",
            }}
          />

          <div className="relative z-[1] p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                  {t.icon}
                </div>
                <h3 className="font-semibold tracking-tight">{t.name}</h3>
              </div>
              {t.link && (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-foreground/70 underline-offset-4 hover:underline"
                >
                  docs
                </a>
              )}
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl leading-none font-bold tabular-nums">
                {t.years}
              </span>
              <span className="text-sm text-foreground/70">years</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-foreground/70">
              <span className="capitalize">{t.level ?? ""}</span>
              {showSince && <span>{niceSinceLabel(t.start as Date)}</span>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
