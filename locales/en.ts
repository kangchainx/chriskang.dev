const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue 2",
  "Vue 3",
  "Uni-App",
  "Tailwind CSS",
  "shadcn/ui",
  "Ant Design",
  "Element Plus",
  "Vite",
  "ECharts",
  "Java",
  "Spring Boot",
  "Spring Cloud",
  "Spring WebFlux",
  "Netty",
  "Node.js",
  "Express",
  "NestJS",
  "RESTful APIs",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Linux",
  "Docker",
  "Git",
  "GitHub Actions",
  "Nginx",
  "Jenkins",
  "K3s",
  "CI/CD",
  "MQTT",
  "Kafka",
  "RabbitMQ",
  "Solidity",
  "EVM",
];

export const en = {
  meta: {
    title: "Chris Kang | Full-stack Developer",
    description:
      "Portfolio of Chris Kang, Full-stack Developer & Open-source Builder.",
  },
  nav: {
    brand: "CHRIS KANG",
    items: {
      home: "Home",
      projects: "Projects",
      about: "About",
      blog: "Blog",
      posts: "Posts",
      contact: "Contact",
    },
    languageToggle: {
      toEnglish: "English",
      toChinese: "中文",
      ariaLabel: "Switch language",
    },
  },
  footer: {
    copyright: "© 2026 Chris Kang. All rights reserved.",
  },
  home: {
    hero: {
      greeting: "Hi, I'm",
      name: "Chris",
      titleLines: ["Full-stack Developer", "Open-source Builder."],
      description:
        "I build real products end to end — from idea to architecture, implementation, and iteration.",
      badges: ["React", "Next.js", "Node.js", "TypeScript"],
      primaryCta: "View Projects",
      githubCta: "GitHub",
    },
    techStack: TECH_STACK,
    openSource: {
      title: "Open Source Activity",
      description:
        "Active on GitHub since Oct 2025. Building tools for developers and creators.",
      profileCta: "View Profile",
      chartAlt: "Chris Kang's Github Chart",
    },
    featured: {
      techStackLabel: "Tech Stack:",
      eyebrow: "Featured Projects",
      repoCta: "GitHub Repo",
      projects: [
        {
          title: "YouTube Analysis Tool",
          description:
            "An open-source tool designed to support YouTubers with channel data analysis, trend tracking, and performance insights. It helps creators understand their audience and optimize content strategies.",
          points: [
            "Channel data analysis",
            "Trend analysis",
            "Personal channel insights",
            "Video transcription",
          ],
          techStackValue:
            "React, TypeScript, Node.js, Python, PostgreSQL, Minio, FFmpeg, yt-dlp, Tailwind CSS",
          repoUrl: "https://github.com/kangchainx/youtube-analysis-project",
        },
        {
          title: "video-text-extension",
          description:
            "An advanced Chrome Side Panel tool that turns videos into text using local AI power. Secure, free, and unlimited.",
          points: [
            "Privacy First",
            "Unlimited",
            "Login Support",
            "Powerful Native Backend",
          ],
          techStackValue:
            "React 19, TypeScript, Chrome Native Messaging, Python, FastAPI, faster-whisper, yt-dlp",
          repoUrl: "https://github.com/kangchainx/video-text-chrome-extension",
        },
        {
          title: "github-readme-studio",
          description:
            "A powerful, visual, drag-and-drop builder for creating professional GitHub Profile READMEs.",
          points: [
            "Visual Editing",
            "Rich Component Library",
            "Premium Aesthetics",
            "One-Click Export",
          ],
          techStackValue:
            "React 19, TypeScript, Vite, Zustand, Tailwind CSS, Markdown Generation",
          repoUrl: "https://github.com/kangchainx/github-readme-studio",
        },
        {
          title: "GitHub Christmas Kit",
          description:
            "Christmas-only SVG icons for decorating your GitHub Profile README.",
          points: [
            "Animated SVG icons",
            "One-click copy",
            "Built-in Contributor Lab",
            "Single-file SPA",
          ],
          techStackValue: "React, Tailwind CSS",
          repoUrl: "https://github.com/kangchainx/github-christmas-kit",
        },
      ],
    },
    otherProjects: {
      title: "Other Projects",
      cards: [
        {
          title: "SoulFast",
          description:
            "Companion-style gamified intermittent fasting with a soul-bound beast, loss-aversion hooks, Proof of Body, and Web3 incentives.",
        },
        {
          title: "NanoIoT",
          description:
            "Open-source IoT stack (EMQX + Kafka) for high-concurrency MQTT/CoAP/HTTP devices with rule engine, monitoring, and reverse control.",
        },
        {
          title: "UI-Whisper",
          description:
            "Turns UI animation ideas into AI-ready tasks for code generation—perfect for fast vibecoding prototypes.",
        },
      ],
    },
  },
  projectsPage: {
    heroTitle: "Featured Projects",
    featuredProjects: [
      {
        badge: "Open Source",
        title: "YouTube Analysis Tool",
        description:
          "Powerful YouTube analytics for creators who want more than just numbers.",
        bullets: [
          "Channel Data Analysis",
          "Trend Analysis",
          "Personal Channel Insights",
          "Video Transcription",
        ],
        techStackLabel: "Tech Stack:",
        techStackValue:
          "React, TypeScript, Node.js, Python, PostgreSQL, Tailwind CSS",
        repoCta: "GitHub Repo",
        demoCta: "Demo (Coming Soon)",
        demoUrl: "",
        repoUrl: "https://github.com/kangchainx/youtube-analysis-project",
        videoSrc: "/project-screenshot/yvap-demo-20251218.mp4",
        posterSrc: "/project-screenshot/home_page.png",
      },
      {
        badge: "Open Source",
        title: "video-text-extension",
        description:
          "An advanced Chrome Side Panel tool that turns videos into text using local AI power. Secure, free, and unlimited.",
        bullets: [
          "Privacy First",
          "Unlimited",
          "Login Support",
          "Powerful Native Backend",
        ],
        techStackLabel: "Tech Stack:",
        techStackValue:
          "React 19, TypeScript, Chrome Native Messaging, Python, FastAPI, faster-whisper, yt-dlp",
        repoCta: "GitHub Repo",
        demoCta: "Demo (Coming Soon)",
        demoUrl: "",
        repoUrl: "https://github.com/kangchainx/video-text-chrome-extension",
        videoSrc: "/project-screenshot/video_text_chrome_extension.mp4",
        posterSrc: "",
      },
      {
        badge: "Open Source",
        title: "github-readme-studio",
        description:
          "A powerful, visual, drag-and-drop builder for creating professional GitHub Profile READMEs.",
        bullets: [
          "Visual Editing",
          "Rich Component Library",
          "Premium Aesthetics",
          "One-Click Export",
        ],
        techStackLabel: "Tech Stack:",
        techStackValue:
          "React 19, TypeScript, Vite, Zustand, Tailwind CSS, Markdown Generation",
        repoCta: "GitHub Repo",
        demoCta: "Demo (Coming Soon)",
        demoUrl: "",
        repoUrl: "https://github.com/kangchainx/github-readme-studio",
        videoSrc: "/project-screenshot/github_studio.mp4",
        posterSrc: "",
      },
      {
        badge: "Open Source",
        title: "GitHub Christmas Kit",
        description:
          "Christmas-only SVG icons for decorating your GitHub Profile README.",
        bullets: [
          "Animated SVG icons",
          "One-click copy",
          "Built-in Contributor Lab",
          "Single-file SPA",
        ],
        techStackLabel: "Tech Stack:",
        techStackValue: "React, Tailwind CSS",
        repoCta: "GitHub Repo",
        demoCta: "Try it Now",
        repoUrl: "https://github.com/kangchainx/github-christmas-kit",
        demoUrl: "https://kangchainx.github.io/github-christmas-kit/",
        videoSrc: "/project-screenshot/github_christmas_kit_demo.mp4",
        posterSrc: "",
      },
    ],
    otherTitle: "Other Projects",
    otherCards: [
      {
        title: "SoulFast",
        description:
          "Gamified companion fasting app with soul-bound beast, Proof of Body, and Web3 incentives.",
      },
      {
        title: "NanoIoT",
        description:
          "Open-source IoT stack (EMQX + Kafka) for high-concurrency MQTT/CoAP/HTTP with rules and monitoring.",
      },
      {
        title: "UI-Whisper",
        description:
          "Turns UI animation ideas into AI-ready tasks for code generation—ideal for rapid vibecoding.",
      },
    ],
    contributions: {
      title: "Open-source Contributions",
      lines: [
        "Active on GitHub since Oct 2025.",
        "Building tools for developers and creators.",
        "Interested in AI, automation, and Web3 infrastructure.",
      ],
    },
  },
  aboutPage: {
    title: "About Me",
    intro:
      "Hi, I’m Chris Kang — a full-stack developer and independent builder. I focus on creating end-to-end web applications and open-source tools, combining product thinking with solid engineering. I enjoy working in fast-paced, iterative environments where ideas turn into real products quickly.",
    background: {
      title: "My Background",
      items: [
        "Previously worked at a major internet company in China, with 5+ years of full-stack development experience.",
        "Held roles in product management and project management, developing strong product thinking and cross-functional collaboration skills.",
        "Deeply involved in the development of 10+ large-scale systems, contributing across multiple phases of the engineering process.",
        "Recently transitioned into independent development, focusing on AI-assisted coding and open-source contributions.",
        "Passionate about travel, music, and French bulldogs, and someone who enjoys life with curiosity and enthusiasm.",
      ],
    },
    hire: {
      title: "Why Hire Me ?",
      lead: "Over the past few years, I’ve built enterprise solutions and complex systems. Since moving to independent work in Oct 2025, I’ve applied those skills to ship user-centric products. Here’s how I add value:",
      bullets: [
        "End-to-End Involvement: From concept and prototyping to implementation and iteration, working with cross-functional teams to align speed, user needs, and business goals.",
        "Efficient Execution & Agile Experience: Rapid iteration in agile teams, shipping high-quality products on tight timelines, and maintaining code quality and usability as an indie builder.",
        "Cross-Functional Collaboration: Bridging engineering and product/stakeholders to keep delivery aligned with broader business objectives.",
        "Impact-Driven Development: Focused on real value—better UX, scalability, and products that support strategic, long-term growth.",
      ],
    },
    approach: {
      title: "My Approach to Work",
      left: ["✓ Strong ownership", "✓ Product thinking"],
      right: ["⚡ Fast iteration", "⚡ Autonomous & Async"],
    },
    offer: {
      title: "What I Offer ?",
      cards: [
        {
          title: "Full-Stack Development",
          description:
            "I provide comprehensive full-stack development services, building scalable and high-performance web applications. Whether you're looking to build a single-page app or a complex enterprise platform, I can develop the entire stack from start to finish.",
        },
        {
          title: "Freelance & Contract Work",
          description:
            "I take on freelance projects and contract work for businesses and individuals needing expertise in web development. From MVP development to full product launches, I help bring your ideas to life, whether it’s a single feature or an entire platform.",
        },
      ],
    },
    skills: {
      title: "My Skills",
      sections: [
        {
          title: "Frontend",
          description:
            "JavaScript, React, TypeScript, Next.js, TailwindCSS, shadcn/ui, Ant Design, Vite, ECharts, Vue, Uni-App, Element Plus",
        },
        {
          title: "Backend",
          description:
            "Java, Spring Boot, Spring Cloud, RESTful APIs, Node.js (Express/Nest.js), Spring WebFlux",
        },
        {
          title: "Database",
          description: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch",
        },
        {
          title: "DevOps",
          description: "Linux, Git, Docker, GitHub Actions, Nginx, CI/CD",
        },
        {
          title: "Extras",
          description: "EVM, Solidity, MQTT, Kafka, RabbitMQ",
        },
      ],
    },
    contact: {
      title: "Let’s Connect",
      items: {
        email: "kangchehe666@gmail.com",
        github: "github.com/kangchainx",
        x: "x.com/kangchainx",
      },
    },
  },
} as const;

export type Dictionary = typeof en;
