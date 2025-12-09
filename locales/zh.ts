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
      description: '一个开源系统，支持视频下载、语音转文字、字幕生成与 AI 总结。',
      points: [
        '反检测策略',
        'Whisper / faster-whisper 音频处理',
        '多语言字幕',
        '后端 API + 总结管线',
      ],
      techStackLabel: '技术栈：',
      techStackValue: 'React, Next.js, Node.js, FFmpeg, Whisper, Redis',
      repoCta: 'GitHub 仓库',
      docsCta: '文档',
    },
    otherProjects: {
      title: '其他项目',
      cards: [
        {
          title: 'Web3 Gas Tracker',
          badge: '开发中',
          description: '以太坊网络实时 gas 监控。',
        },
        {
          title: 'Dev Productivity Scripts',
          description: '自动化日常重复流程的脚本工具。',
        },
        {
          title: 'API Playground',
          description: '在流式、上传、AI 模型等方向的接口实验。',
        },
      ],
    },
  },
  projectsPage: {
    heroTitle: '精选项目',
    hero: {
      badge: '开源',
      title: 'YouTube 分析工具',
      description: '一个开源系统，支持视频下载、语音转文字、字幕生成与 AI 总结。',
      bullets: [
        '通过反检测策略处理 YouTube 频控',
        '使用 Whisper / faster-whisper 处理音频',
        '支持多语言字幕与 SRT/VTT 导出',
        '后端 API + 文件服务 + AI 总结管线',
      ],
      techStackLabel: '技术栈：',
      techStackValue: 'React, Next.js, TailwindCSS, Node.js, FFmpeg, Whisper/faster-whisper',
      repoCta: 'GitHub 仓库',
      docsCta: '文档',
      demoCta: '演示（即将上线）',
    },
    otherTitle: '其他项目',
    otherCards: [
      {
        title: 'Web3 Gas Tracker',
        badge: '开发中',
        description: '以太坊网络实时 gas 监控。',
      },
      {
        title: 'Dev Productivity Scripts',
        description: '自动化日常重复流程的脚本工具。',
      },
      {
        title: 'Personal API Playground',
        description: '端点、流式、上传、限流与 AI 模型的实验。',
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
    intro: '我是 Chris，一名专注于 AI 工具、现代 Web 应用和开源项目的全栈开发者。',
    background: {
      title: '我的背景',
      items: [
        '曾在国内做过企业级系统',
        '有后端服务和大规模 Web 应用经验',
        '2024 年转向独立开发',
        '专注现代技术栈与开源工作',
      ],
    },
    approach: {
      title: '我的工作方式',
      left: ['✓ 强所有权', '✓ 产品思维'],
      right: ['⚡ 快速迭代', '⚡ 自主 & 异步'],
    },
    skills: {
      title: '我的技能',
      sections: [
        { title: '前端', description: 'React, Next.js, TypeScript, TailwindCSS' },
        { title: '后端', description: 'Node.js, Express/Fastify, Redis' },
        { title: 'AI/ML', description: 'Whisper, faster-whisper, FFmpeg pipelines' },
        { title: 'Web3（探索中）', description: 'Solidity, EVM, RPC interactions' },
      ],
    },
    contact: {
      title: '与我联系',
      items: {
        email: 'chris@email.com',
        github: 'github.com/kangchainx',
        x: 'x.com/xxxxx',
      },
    },
  },
} as const;
