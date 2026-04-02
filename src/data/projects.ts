export type Project = {
  title: string;
  description: string;
  problem?: string;
  href?: string;
  github?: string;
  image?: string;
  tags: string[];
  status: 'live' | 'in-progress' | 'archived';
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: 'Loam Logger',
    description:
      'Full-stack mountain bike ride tracker and component health platform. Log rides, analyze performance metrics, and track bike component wear over time.',
    problem:
      'Mountain bikers have no single place to track ride data alongside component wear. Strava, Garmin, and WHOOP each capture part of the picture, but none track when your brake pads, chain, or suspension need service. Riders either guess or maintain spreadsheets. Loam Logger unifies ride data from all three platforms and pairs it with a predictive maintenance system that tells you what needs attention before it fails on the trail.',
    href: 'https://loamlogger.app',
    github: 'https://github.com/ryanlecours/loam-logger',
    image: '/loamlogger.png',
    tags: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL', 'React Native', 'Prisma'],
    status: 'live',
    highlights: [
      'Production Nx monorepo with React 19, Node.js, Apollo GraphQL, and Prisma with shared code across web and mobile',
      'Cross-platform React Native mobile app with Expo, JWT auth, Google/Apple OAuth, and push notifications',
      '3 real-time third-party API integrations (Garmin, Strava, WHOOP) via OAuth 2.0 and webhook-based sync',
      'BullMQ job queues with Redis, Stripe billing, transactional email, and predictive component service-health tracking',
      '700+ unit tests using Vitest and React Testing Library',
    ],
  },
  {
    title: 'ryanlecours.dev',
    description:
      'This developer portfolio, a fast, responsive single-page site built with Next.js 15, Tailwind CSS, and Framer Motion.',
    href: 'https://ryanlecours.dev',
    github: 'https://github.com/ryanlecours/developer-portfolio',
    image: '/me.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'live',
    highlights: [
      'Static generation with Next.js App Router for instant page loads',
      'Fully responsive layout with dark-mode-first design',
      'OpenGraph and Twitter card metadata for polished link previews',
      'Deployed on Vercel with analytics and speed insights',
    ],
  },
];
