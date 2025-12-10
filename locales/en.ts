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
      description: 'An open-source tool designed to support YouTubers with channel data analysis, trend tracking, and performance insights. It helps creators understand their audience and optimize content strategies.',
      points: [
        'Channel data analysis',
        'Trend analysis',
        'Personal channel insights',
        'Video transcription',
      ],
      techStackLabel: 'Tech Stack:',
      techStackValue: 'React, TypeScript, Node.js, Python, PostgreSQL, Minio, FFmpeg, yt-dlp, Tailwind CSS',
      repoCta: 'GitHub Repo',
    },
    otherProjects: {
      title: 'Other Projects',
      cards: [
        {
          title: 'SpiritFast',
          description: 'Companion-style gamified intermittent fasting with a soul-bound beast, loss-aversion hooks, Proof of Body, and Web3 incentives.',
        },
        {
          title: 'NanoIoT',
          description: 'Open-source IoT stack (EMQX + Kafka) for high-concurrency MQTT/CoAP/HTTP devices with rule engine, monitoring, and reverse control.',
        },
        {
          title: 'UI-Whisper',
          description: 'Turns UI animation ideas into AI-ready tasks for code generation—perfect for fast vibecoding prototypes.',
        },
      ],
    },
  },
  projectsPage: {
    heroTitle: 'Featured Project',
    hero: {
      badge: 'Open Source',
      title: 'YouTube Analysis Tool',
      description: 'Powerful YouTube analytics for creators who want more than just numbers.',
      bullets: [
        'Channel Data Analysis',
        'Trend Analysis',
        'Personal Channel Insights',
        'Video Transcription',
      ],
      techStackLabel: 'Tech Stack:',
      techStackValue: 'React, TypeScript, Node.js, Python, PostgreSQL, Tailwind CSS',
      repoCta: 'GitHub Repo',
      docsCta: 'Documentation',
      demoCta: 'Demo (Coming Soon)',
    },
    otherTitle: 'Other Projects',
    otherCards: [
      {
        title: 'SpiritFast',
        description: 'Gamified companion fasting app with soul-bound beast, Proof of Body, and Web3 incentives.',
      },
      {
        title: 'NanoIoT',
        description: 'Open-source IoT stack (EMQX + Kafka) for high-concurrency MQTT/CoAP/HTTP with rules and monitoring.',
      },
      {
        title: 'UI-Whisper',
        description: 'Turns UI animation ideas into AI-ready tasks for code generation—ideal for rapid vibecoding.',
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
    intro: "Hi, I'm Chris Kang. I'm a full-stack developer and independent builder with 5+ years of experience, specializing in building end-to-end web applications and open-source tools. With expertise in both product development and engineering, I take ownership of the entire project lifecycle — from ideation to execution. I thrive in fast-paced, agile environments where I can push the boundaries of creativity and technical excellence.",
    background: {
      title: 'My Background',
      items: [
        'Previously worked on enterprise-level systems in China',
        'Experience in backend services and large-scale web applications',
        'In 2024, transitioned to independent development',
        'Focus on modern tech stacks and open-source work',
      ],
    },
    hire: {
      title: 'Why Hire Me?',
      lead:
        'Over the past few years, I’ve built enterprise solutions and complex systems. Since moving to independent work in Oct 2025, I’ve applied those skills to ship user-centric products. Here’s how I add value:',
      bullets: [
        'End-to-End Involvement: From concept and prototyping to implementation and iteration, working with cross-functional teams to align speed, user needs, and business goals.',
        'Efficient Execution & Agile Experience: Rapid iteration in agile teams, shipping high-quality products on tight timelines, and maintaining code quality and usability as an indie builder.',
        'Cross-Functional Collaboration: Bridging engineering and product/stakeholders to keep delivery aligned with broader business objectives.',
        'Impact-Driven Development: Focused on real value—better UX, scalability, and products that support strategic, long-term growth.',
      ],
    },
    approach: {
      title: 'My Approach to Work',
      left: ['✓ Strong ownership', '✓ Product thinking'],
      right: ['⚡ Fast iteration', '⚡ Autonomous & Async'],
    },
    offer: {
      title: 'What I Offer',
      cards: [
        {
          title: 'Full-Stack Development',
          description:
            "I provide comprehensive full-stack development services, building scalable and high-performance web applications. Whether you're looking to build a single-page app or a complex enterprise platform, I can develop the entire stack from start to finish.",
        },
        {
          title: 'Freelance & Contract Work',
          description:
            'I take on freelance projects and contract work for businesses and individuals needing expertise in web development. From MVP development to full product launches, I help bring your ideas to life, whether it’s a single feature or an entire platform.',
        },
      ],
    },
    skills: {
      title: 'My Skills',
      sections: [
        {
          title: 'Frontend',
          description:
            'JavaScript, React, TypeScript, Next.js, TailwindCSS, shadcn/ui, Ant Design, Vite, ECharts, Vue, Uni-App, Element Plus',
        },
        {
          title: 'Backend',
          description:
            'Java, Spring Boot, Spring Cloud, RESTful APIs, Node.js (Express/Nest.js), Spring WebFlux',
        },
        {
          title: 'Database',
          description:
            'PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch',
        },
        {
          title: 'DevOps',
          description:
            'Linux, Git, Docker, GitHub Actions, Nginx, CI/CD',
        },
        {
          title: 'Extras',
          description:
            'EVM, Solidity, MQTT, Kafka, RabbitMQ',
        },
      ],
    },
    contact: {
      title: 'Let’s Connect',
      items: {
        email: 'kangchehe666@gmail.com',
        github: 'github.com/kangchainx',
        x: 'x.com/ccKang666',
      },
    },
  },
} as const;

export type Dictionary = typeof en;
