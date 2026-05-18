export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  highlights: string[]
  links: {
    github?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'dawn',
    title: 'Dawn',
    tagline: 'AI Browser Runtime',
    description:
      'A next-generation browser runtime with built-in AI orchestration, enabling autonomous web agents to navigate, extract, and interact with web content at scale.',
    tags: ['TypeScript', 'Electron', 'Chrome Extension', 'AI Agents'],
    highlights: [
      'Autonomous web navigation',
      'Visual DOM understanding',
      'Multi-agent orchestration',
      'Session persistence & replay',
    ],
    links: {
      github: '#',
    },
  },
  {
    id: 'phoenix',
    title: 'Phoenix IDS',
    tagline: 'Intelligent Intrusion Detection',
    description:
      'An ML-powered intrusion detection system that leverages ensemble learning and real-time traffic analysis to identify zero-day threats and advanced persistent threats.',
    tags: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn'],
    highlights: [
      'Real-time packet inspection',
      'Ensemble anomaly detection',
      'Zero-day threat hunting',
      'Dashboard & alerting',
    ],
    links: {
      github: '#',
    },
  },
  {
    id: 'unsafe-miner',
    title: 'Rust Unsafe Ecosystem Miner',
    tagline: 'Static Analysis for Safety',
    description:
      'A static analysis tool that mines and audits unsafe code blocks across the Rust ecosystem, providing risk scores and migration recommendations for safer systems programming.',
    tags: ['Rust', 'MIR', 'Static Analysis', 'CLI'],
    highlights: [
      'Cross-crate unsafe tracking',
      'Risk scoring engine',
      'Auto-fix suggestions',
      'Cargo plugin integration',
    ],
    links: {
      github: '#',
    },
  },
  {
    id: 'study-copilot',
    title: 'Study Copilot',
    tagline: 'RAG Learning Assistant',
    description:
      'An intelligent study companion powered by Retrieval-Augmented Generation that helps students understand complex topics through contextual Q&A and personalized learning paths.',
    tags: ['Python', 'FAISS', 'LLM', 'React', 'FastAPI'],
    highlights: [
      'Multi-source RAG pipeline',
      'Citation-grounded answers',
      'Personalized quiz generation',
      'Cross-document reasoning',
    ],
    links: {
      github: '#',
    },
  },
]
