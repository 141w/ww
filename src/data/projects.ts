export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  conclusion: string
  tags: string[]
  highlights: string[]
  links: {
    github?: string
    demo?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'dawn',
    title: 'Dawn',
    tagline: 'AI 浏览器运行时',
    description:
      '下一代浏览器运行时，内置 AI 编排能力，支持自主 Web Agent 大规模导航、提取和交互网页内容。',
    conclusion: '让 AI Agent 拥有眼睛和双手——在真实浏览器中自主完成复杂任务链',
    tags: ['TypeScript', 'Electron', 'Chrome Extension', 'AI Agents'],
    highlights: [
      '自主网页导航',
      '视觉 DOM 理解',
      '多 Agent 编排',
      '会话持久化与回放',
    ],
    links: {
      github: '#',
    },
    featured: true,
  },
  {
    id: 'phoenix',
    title: 'Phoenix IDS',
    tagline: '智能入侵检测',
    description:
      '基于机器学习的入侵检测系统，集成集成学习与实时流量分析，识别零日威胁和高级持续性威胁。',
    conclusion: '集成学习驱动的网络威胁检测，在 CIC-IDS2017 数据集上误报率降低 40%',
    tags: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn'],
    highlights: [
      '实时数据包检测',
      '集成异常检测',
      '零日威胁狩猎',
      '仪表盘与告警',
    ],
    links: {
      github: '#',
    },
  },
  {
    id: 'unsafe-miner',
    title: 'Rust Unsafe Ecosystem Miner',
    tagline: '安全静态分析',
    description:
      '一款静态分析工具，用于挖掘和审计 Rust 生态系统中的 unsafe 代码块，提供风险评分和迁移建议。',
    conclusion: '扫描 crates.io 前 10K 包，自动定位 unsafe 代码并给出修复建议',
    tags: ['Rust', 'MIR', 'Static Analysis', 'CLI'],
    highlights: [
      '跨 crate unsafe 追踪',
      '风险评分引擎',
      '自动修复建议',
      'Cargo 插件集成',
    ],
    links: {
      github: '#',
    },
  },
  {
    id: 'study-copilot',
    title: 'Study Copilot',
    tagline: 'RAG 学习助手',
    description:
      '基于检索增强生成（RAG）的智能学习伴侣，通过上下文问答和个性化学习路径帮助学生理解复杂知识点。',
    conclusion: '多源 RAG 管道 + 引文溯源，让 AI 回答有据可查',
    tags: ['Python', 'FAISS', 'LLM', 'React', 'FastAPI'],
    highlights: [
      '多源 RAG 管道',
      '引文溯源回答',
      '个性化测验生成',
      '跨文档推理',
    ],
    links: {
      github: '#',
    },
  },
]
