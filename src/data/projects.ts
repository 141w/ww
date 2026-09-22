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
    tagline: '个性化 AI 浏览器',
    description:
      'Electron 36 + React 19 桌面浏览器，Zen 框架复刻与 Dawn AI 深度融合。内置 18 个浏览器工具，AI 可自主导航、读取页面、点击填表、截图执行脚本，完成真实网页上的多步任务链。',
    conclusion: '让 AI Agent 拥有眼睛和双手——在真实浏览器中自主完成复杂任务链',
    tags: ['TypeScript', 'React 19', 'Electron 36', 'AI Agents'],
    highlights: [
      '18 个浏览器工具统一注册（点击 / 填表 / 截图 / 委托）',
      '跨对话记忆引擎：短期→长期自动提升，相关性衰减排序',
      'Zen UI 复刻 + Firefox 侧栏扩展（dawn-ai.xpi）',
      '多 Provider 故障转移 · 对话压缩 · MCP · 技能系统',
      'Vitest 136 用例 · 28 组件 + 21 hooks',
    ],
    links: {
      github: 'https://github.com/141w/Dawn-Browser',
    },
    featured: true,
  },
  {
    id: 'quorum',
    title: 'Quorum',
    tagline: '多智能体 AI 协作决策平台',
    description:
      '基于 Hermes Agent 构建的独立可移植桌面 AI 助手。状态机驱动 6 个专业 Agent 辩论式决策，支持投票、阈值、辩论三种模式；蜂群系统派多个工蜂并行处理大型任务。',
    conclusion: '数据存在项目本地 .quorum/，零外部依赖，随项目一起迁移',
    tags: ['Python', 'FastAPI', 'LangGraph', 'Electron 36'],
    highlights: [
      '6 专业 Agent 辩论决策：投票 / 阈值 / 辩论三模式',
      '蜂群系统：coding / research / review 工蜂并行',
      '22 个技能类别（77 模块）+ ChromaDB 向量记忆',
      '简体 / 繁体 / 英 / 日 四语言界面',
    ],
    links: {
      github: 'https://github.com/141w/Quorum',
    },
  },
  {
    id: 'phoenix-ids',
    title: 'Phoenix IDS',
    tagline: '智能网络入侵检测系统',
    description:
      '基于机器学习的入侵检测系统。在 UNSW-NB15 + CICIDS2017 融合的 69 万条样本上，用双重特征选择（互信息 + LightGBM 重要性）与折内 SMOTE 训练梯度提升模型，支持 10 种攻击类型实时识别。',
    conclusion: 'SMOTE + LightGBM F1-Macro 0.7279±0.0031，较基线提升 21.6%',
    tags: ['Python', 'LightGBM', 'SHAP', 'FastAPI'],
    highlights: [
      '双重特征选择：191 维 → 30 维',
      'SHAP 单条 Top-5 / 全局 Top-20 可解释性分析',
      'WebSocket + Scapy 真实流量捕获双模式',
      '代价感知 SMOTE：高危攻击 Recall +10~14%',
    ],
    links: {
      github: 'https://github.com/141w/Phoenix-IDS',
    },
  },
  {
    id: 'study-copilot',
    title: 'Study Copilot',
    tagline: 'AI 智能学习助手',
    description:
      '本地优先、可自托管的 AI 学习助手：上传文档 → Agentic RAG 带引用问答 → 自动出题与错题分析。pgvector 语义 + 全文 + RRF 混合检索，ReAct 深度研究 Agent 带多层熔断护栏。',
    conclusion: '719 个后端测试 + 检索评测门禁，recall@10 下降 >2pt 即 CI 失败',
    tags: ['Python', 'FastAPI', 'Vue 3', 'pgvector', 'RAG'],
    highlights: [
      'Agentic RAG：意图路由 · 自适应检索 · 自我反思',
      '深度研究 Agent：ReAct 循环 + 6 只读工具',
      '长期记忆五分类 + pending 确认隔离',
      '自动出题 · 错题本 · 学情分析 · 多角色研讨',
    ],
    links: {
      github: 'https://github.com/141w/Study-copilot',
    },
  },
  {
    id: 'mindflow-ai',
    title: 'MindFlow AI',
    tagline: '随身 AI 学习伙伴',
    description:
      '微信小程序端的随身 AI 学习伙伴：把 PDF、课程资料、笔记变成可对话、可复习、可成长的个人知识系统。Spotify 深色沉浸风格，9 个页面覆盖学习计划、复习机制与知识图谱。',
    conclusion: '知识数据由本地 wiki 解析生成，与知识库体系同源',
    tags: ['TypeScript', '微信小程序', 'AI 导师'],
    highlights: [
      '9 页面：home / library / chat / plan / review / graph 等',
      'AI 导师：OpenAI 兼容 API 流式对话 + 引用卡片',
      '掌握度追踪 + 复习机制 + 知识图谱可视化',
    ],
    links: {},
  },
  {
    id: 'my-wiki',
    title: 'MindOS',
    tagline: '个人知识操作系统',
    description:
      '围绕本地 Markdown Wiki 构建的个人知识操作系统。让 LLM 持续维护一个会成长的知识库：来源整理、实体沉淀、主题综合、交叉引用、矛盾标记、项目记忆、周期反思。',
    conclusion: 'Obsidian 插件 + 本地 Web 服务双入口，七大引擎完整闭环',
    tags: ['TypeScript', 'Obsidian', '知识管理', 'AI'],
    highlights: [
      'Wiki / Ingest / Query / Project / Memory / Reflection / CrossReference 七引擎',
      'Obsidian 插件 + Web SPA（端口 3721）双入口',
      'LLM Providers：OpenAI / Anthropic / Ollama / 自定义',
    ],
    links: {},
  },
]
