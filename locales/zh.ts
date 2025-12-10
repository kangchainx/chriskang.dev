const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'TailwindCSS',
  'shadcn/ui',
  'Redis',
  'Whisper',
  'FFmpeg',
  'PostgreSQL',
  'Docker',
  'AWS',
];

export const zh = {
  meta: {
    title: 'Chris Kang | 全栈开发者',
    description: 'Chris Kang 的个人作品集，全栈开发者与开源构建者。',
  },
  nav: {
    brand: 'CHRIS KANG',
    items: {
      home: '首页',
      projects: '项目',
      about: '关于',
      blog: '博客',
      contact: '联系',
    },
    languageToggle: {
      toEnglish: 'English',
      toChinese: '中文',
      ariaLabel: '切换语言',
    },
  },
  footer: {
    copyright: '© 2025 Chris Kang. 保留所有权利。',
  },
  home: {
    hero: {
      greeting: '嗨，我是',
      name: 'Chris',
      titleLines: ['全栈开发者', '开源构建者'],
      description: '我从 0 到 1 把想法做成产品，从架构到实现再到迭代。',
      badges: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      primaryCta: '查看项目',
      githubCta: 'GitHub',
    },
    techStack: TECH_STACK,
    openSource: {
      title: '开源动态',
      description: '自 2024 年 10 月起活跃于 GitHub，打造面向开发者和创作者的工具。',
      profileCta: '查看主页',
      chartAlt: 'Chris Kang 的 GitHub 贡献图',
    },
    featured: {
      eyebrow: '精选项目',
      title: 'YouTube 分析工具',
      description: '一款开源工具，旨在为 YouTuber 提供频道数据分析、趋势追踪和性能洞察，帮助创作者了解受众并优化内容策略。',
      points: [
        '频道数据分析',
        '趋势分析',
        '个人频道洞察',
        '视频转录',
      ],
      techStackLabel: '技术栈：',
      techStackValue: 'React、TypeScript、Node.js、Python、PostgreSQL、Minio、FFmpeg、yt-dlp、Tailwind CSS',
      repoCta: 'GitHub 仓库',
      docsCta: '文档',
    },
    otherProjects: {
      title: '其他项目',
      cards: [
        {
          title: 'SpiritFast',
          description: '游戏化轻断食，灵兽陪伴 + 损失厌恶机制，结合 Proof of Body 与 Web3 激励。',
        },
        {
          title: 'NanoIoT',
          description: '基于 EMQX + Kafka 的高并发物联平台，支持 MQTT/CoAP/HTTP，规则引擎与实时控制。',
        },
        {
          title: 'UI-Whisper',
          description: '将 UI 动画想法标准化为 AI 生成代码的任务，快速原型化。',
        },
      ],
    },
  },
  projectsPage: {
    heroTitle: '精选项目',
    hero: {
      badge: '开源',
      title: 'YouTube 分析工具',
      description: '为追求卓越的创作者提供强大的YouTube分析工具，不止是数据。',
      bullets: [
        '频道数据分析',
        '趋势分析',
        '个人频道洞察',
        '视频转录',
      ],
      techStackLabel: '技术栈：',
      techStackValue: 'React、TypeScript、Node.js、Python、PostgreSQL、Tailwind CSS',
      repoCta: 'GitHub 仓库',
      docsCta: '文档',
      demoCta: '演示（即将上线）',
    },
    otherTitle: '其他项目',
    otherCards: [
      {
        title: 'SpiritFast',
        description: '配伴式游戏化轻断食，灵兽羁绊 + Proof of Body + Web3 激励。',
      },
      {
        title: 'NanoIoT',
        description: 'EMQX + Kafka 高并发物联平台，支持 MQTT/CoAP/HTTP，规则与监控齐全。',
      },
      {
        title: 'UI-Whisper',
        description: '将 UI 动画想法标准化为 AI 生成代码的任务，适合快速原型。',
      },
    ],
    contributions: {
      title: '开源贡献',
      lines: [
        '自 2024 年 10 月起活跃于 GitHub。',
        '为开发者和创作者打造工具。',
        '关注 AI、自动化与 Web3 基础设施。',
      ],
    },
  },
  aboutPage: {
    title: '关于我',
    intro:
      '你好，我是 Chris Kang。我是一名全栈开发者和独立开发者，拥有超过 5 年的开发经验，专注于构建端到端的 Web 应用和开源工具。凭借在产品开发和工程技术方面的专业知识，我全程负责项目的整个生命周期——从构思到执行。我在快节奏、敏捷的环境中茁壮成长，在这些环境中，我能够不断推动创意和技术卓越的边界。',
    background: {
      title: '我的背景',
      items: [
        '曾在国内做过企业级系统',
        '有后端服务和大规模 Web 应用经验',
        '2024 年转向独立开发',
        '专注现代技术栈与开源工作',
      ],
    },
    hire: {
      title: '为什么雇佣我',
      lead:
        '在过去的几年里，我作为全栈开发者参与了多个企业级和复杂系统的开发。自 2025 年 10 月转型为独立开发者后，我将过往经验应用于新的项目，持续输出以用户为中心的解决方案。以下是我能带来的价值：',
      bullets: [
        '全栈参与：覆盖从构思、原型到实现与迭代，与跨职能团队协作，兼顾交付效率、用户需求与业务目标。',
        '高效执行与敏捷经验：熟悉敏捷迭代，能在紧凑周期内交付高质量产品；作为独立开发者也保持代码质量与易用性。',
        '跨职能协作：善于在工程与产品/业务之间搭建桥梁，确保交付与整体目标对齐。',
        '以影响为驱动：关注真实价值——优化体验、保证可扩展性，打造支持长期增长的产品。',
      ],
    },
    approach: {
      title: '我的工作方式',
      left: ['✓ 强所有权', '✓ 产品思维'],
      right: ['⚡ 快速迭代', '⚡ 自主 & 异步'],
    },
    offer: {
      title: '我能提供的价值',
      cards: [
        {
          title: '全栈开发',
          description:
            '提供端到端的全栈开发服务，构建可扩展、高性能的 Web 应用；无论是单页应用还是复杂企业平台，都能完成整套交付。',
        },
        {
          title: '自由职业 & 外包',
          description:
            '承接自由职业/外包：从 MVP 到完整产品落地，支持单点功能或整套上线。MVP 快速验证想法；咨询与代码审查，提供架构、可扩展性与最佳实践建议。',
        },
      ],
    },
    skills: {
      title: '我的技能',
      sections: [
        {
          title: '前端',
          description:
            'JavaScript, React, TypeScript, Next.js, TailwindCSS, shadcn/ui, Ant Design, Vite, ECharts, Vue, Uni-App, Element Plus',
        },
        {
          title: '后端',
          description:
            'Java, Spring Boot, Spring Cloud, RESTful APIs, Node.js (Express/Nest.js), Spring WebFlux',
        },
        {
          title: '数据库',
          description:
            'PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch',
        },
        {
          title: 'DevOps',
          description:
            'Linux, Git, Docker, GitHub Actions, Nginx, CI/CD',
        },
        {
          title: '其他',
          description:
            'EVM, Solidity, MQTT, Kafka, RabbitMQ',
        },
      ],
    },
    contact: {
      title: '与我联系',
      items: {
        email: 'kangchehe666@gmail.com',
        github: 'github.com/kangchainx',
        x: 'x.com/ccKang666',
      },
    },
  },
} as const;
