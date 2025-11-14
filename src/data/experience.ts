type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    company: 'DCS Corp',
    role: 'Software Engineer III',
    period: 'May 2023 – Present | Remote',
    bullets: [
      'Built modular React + TypeScript front-end packages in a secure monorepo for flight-planning software, enabling map rendering, geospatial overlays, and interactive tools adopted across multiple teams.',
      'Optimized CI/CD pipelines through Azure Blob Storage caching, cutting build times by 91 percent (~50 minutes per build).',
      'Led front-end standards for architecture, testing, and performance; mentored engineers and shipped reusable components, reducing duplicate UI code ~60% and accelerating new feature delivery ~30%.',
      'Implemented robust state management patterns using Redux and RxJS to streamline complex async workflows and ensure consistency across 17 shared React packages.',
      'Appointed as the sole Technical Lead on a $250M+ federal contract bid, driving technical strategy and ensuring alignment between engineering deliverables and client requirements.',
    ],
    tags: ['React', 'TypeScript', 'Monorepo', 'CI/CD', 'Cypress', 'Jest'],
  },
  {
    company: 'Fidelity Investments',
    role: 'Senior Software Engineer',
    period: '2018 – 2023 | Merrimack, NH',
    bullets: [
      'Built and maintained 4 Vue and 7 Angular micro frontends, defining front-end standards that improved performance, accessibility, and maintainability across enterprise applications',
      'Developed and maintained 13 Node.js GraphQL subgraphs, modernizing legacy Java REST APIs into scalable, federated services powering real-time financial workflows that improved data response times by 40%.',
      'Deployed GraphQL microservices on AWS Lambda, improving scalability, reliability, and deployment speed across multiple product teams.',
      'Led cross-team initiatives including migration of 70+ applications from Bitbucket to GitHub and mentoring programs that elevated engineering standards company-wide.',
    ],
    tags: ['Vue', 'Angular', 'Node.js', 'GraphQL', 'AWS'],
  },
];