export interface TagCategory {
  label: string
  items: string[]
}

export const tagCategories: TagCategory[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'Rust', 'Go', 'C++', 'JavaScript'],
  },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'XGBoost', 'FAISS', 'LangChain', 'OpenAI', 'Hugging Face'],
  },
  {
    label: 'Infrastructure',
    items: ['FastAPI', 'Cloudflare', 'Docker', 'Redis', 'PostgreSQL', 'Kubernetes'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Vue', 'Electron', 'TailwindCSS', 'Framer Motion', 'Three.js'],
  },
]
