// Central registry that maps JSON `id` -> icon component + default brand color.
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiPrisma,
  SiVite,
  SiDocker,
  SiGit,
  SiGithub,
  SiVuedotjs
} from "react-icons/si";

import type { IconType } from "react-icons";

export type TechKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "node"
  | "graphql"
  | "postgresql"
  | "prisma"
  | "vue"
  | "vite"
  | "docker"
  | "git"
  | "github";

export type TechIconMeta = {
  icon: IconType;
  label: string;
  color: string; // default brand color (light mode); dark handled via classes
};

export const TECH_ICON_REGISTRY: Record<TechKey, TechIconMeta> = {
  react:       { icon: SiReact,       label: "React",        color: "#61DAFB" },
  nextjs:      { icon: SiNextdotjs,   label: "Next.js",      color: "#000000" },
  typescript:  { icon: SiTypescript,  label: "TypeScript",   color: "#3178C6" },
  tailwind:    { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  node:        { icon: SiNodedotjs,   label: "Node.js",      color: "#5FA04E" },
  graphql:     { icon: SiGraphql,     label: "GraphQL",      color: "#E10098" },
  postgresql:  { icon: SiPostgresql,  label: "PostgreSQL",   color: "#4169E1" },
  prisma:      { icon: SiPrisma,      label: "Prisma",       color: "#2D3748" },
  vue:         { icon: SiVuedotjs,    label: "Vue",          color: "#42B883" },
  vite:        { icon: SiVite,        label: "Vite",         color: "#646CFF" },
  docker:      { icon: SiDocker,      label: "Docker",       color: "#2496ED" },
  git:         { icon: SiGit,         label: "Git",          color: "#F05032" },
  github:      { icon: SiGithub,      label: "GitHub",       color: "#d0c6c6ff" },
};
