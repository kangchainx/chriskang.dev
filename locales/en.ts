const TECH_STACK = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue 2',
  'Vue 3',
  'Uni-App',
  'Tailwind CSS',
  'shadcn/ui',
  'Ant Design',
  'Element Plus',
  'Vite',
  'ECharts',
  'Java',
  'Spring Boot',
  'Spring Cloud',
  'Spring WebFlux',
  'Netty',
  'Node.js',
  'Express',
  'NestJS',
  'RESTful APIs',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'Elasticsearch',
  'Linux',
  'Docker',
  'Git',
  'GitHub Actions',
  'Nginx',
  'Jenkins',
  'K3s',
  'CI/CD',
  'MQTT',
  'Kafka',
  'RabbitMQ',
  'Solidity',
  'EVM',
];

export const en = {
  meta: {
    title: 'Chris Kang | Full-stack Developer',
    description: 'Portfolio of Chris Kang, Full-stack Developer & Open-source Builder.',
  },
  nav: {
    brand: 'CHRIS KANG',
    items: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    languageToggle: {
      toEnglish: 'English',
      toChinese: '中文',
      ariaLabel: 'Switch language',
    },
  },
  footer: {
    copyright: '© 2025 Chris Kang. All rights reserved.',
  },
  home: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Chris',
      titleLines: ['Full-stack Developer', 'Open-source Builder.'],
      description: 'I build real products end to end — from idea to architecture, implementation, and iteration.',
      badges: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      primaryCta: 'View Projects',
      githubCta: 'GitHub',
    },
    techStack: TECH_STACK,
    openSource: {
      title: 'Open Source Activity',
      description: 'Active on GitHub since Oct 2024. Building tools for developers and creators.',
      profileCta: 'View Profile',
      chartAlt: "Chris Kang's Github Chart",
    },
    featured: {
      eyebrow: 'Featured Project',
      title: 'YouTube Analysis Tool',
      description: 'An open-source system for video downloading, speech-to-text, subtitle generation, and AI summarization.',
      points: [
        'Anti-detection strategies',
        'Whisper / faster-whisper audio',
        'Multi-language subtitles',
        'Backend API + summarization',
      ],
      techStackLabel: 'Tech Stack:',
      techStackValue: 'React, Next.js, Node.js, FFmpeg, Whisper, Redis',
      repoCta: 'GitHub Repo',
      docsCta: 'Documentation',
    },
    otherProjects: {
      title: 'Other Projects',
      cards: [
        {
          title: 'Web3 Gas Tracker',
          badge: 'WIP',
          description: 'Real-time gas usage monitor for Ethereum networks.',
        },
        {
          title: 'Dev Productivity Scripts',
          description: 'Automation utilities for repetitive workflows.',
        },
        {
          title: 'API Playground',
          description: 'Experiments with streaming, uploads, and AI models.',
        },
      ],
    },
  },
  projectsPage: {
    heroTitle: 'Featured Project',
    hero: {
      badge: 'Open Source',
      title: 'YouTube Analysis Tool',
      description: 'An open-source system for video downloading, speech-to-text, subtitle generation, and AI summarization.',
      bullets: [
        'Handles YouTube rate limits with anti-detection strategies',
        'Processes audio using Whisper / faster-whisper',
        'Supports multi-language subtitles & SRT/VTT export',
        'Backend API + file server + AI summarization pipeline',
      ],
      techStackLabel: 'Tech Stack:',
      techStackValue: 'React, Next.js, TailwindCSS, Node.js, FFmpeg, Whisper/faster-whisper',
      repoCta: 'GitHub Repo',
      docsCta: 'Documentation',
      demoCta: 'Demo (Coming Soon)',
    },
    otherTitle: 'Other Projects',
    otherCards: [
      {
        title: 'Web3 Gas Tracker',
        badge: 'WIP',
        description: 'Real-time gas usage monitor for Ethereum networks.',
      },
      {
        title: 'Dev Productivity Scripts',
        description: 'Automation utilities for repetitive workflows.',
      },
      {
        title: 'Personal API Playground',
        description: 'Experiments with endpoints, streaming, uploads, rate limiting, and AI models.',
      },
    ],
    contributions: {
      title: 'Open-source Contributions',
      lines: [
        'Active on GitHub since Oct 2024.',
        'Building tools for developers and creators.',
        'Interested in AI, automation, and Web3 infrastructure.',
      ],
    },
  },
  aboutPage: {
    title: 'About Me',
    intro: "I’m Chris — a full-stack developer focused on building AI-driven tools, modern web apps, and open-source projects.",
    background: {
      title: 'My Background',
      items: [
        'Previously worked on enterprise-level systems in China',
        'Experience in backend services and large-scale web applications',
        'In 2024, transitioned to independent development',
        'Focus on modern tech stacks and open-source work',
      ],
    },
    approach: {
      title: 'My Approach to Work',
      left: ['✓ Strong ownership', '✓ Product thinking'],
      right: ['⚡ Fast iteration', '⚡ Autonomous & Async'],
    },
    skills: {
      title: 'My Skills',
      sections: [
        { title: 'Frontend', description: 'React, Next.js, TypeScript, TailwindCSS' },
        { title: 'Backend', description: 'Node.js, Express/Fastify, Redis' },
        { title: 'AI/ML', description: 'Whisper, faster-whisper, FFmpeg pipelines' },
        { title: 'Web3 (Exploring)', description: 'Solidity, EVM, RPC interactions' },
      ],
    },
    contact: {
      title: 'Let’s Connect',
      items: {
        email: 'chris@email.com',
        github: 'github.com/kangchainx',
        x: 'x.com/xxxxx',
      },
    },
  },
} as const;

export type Dictionary = typeof en;
