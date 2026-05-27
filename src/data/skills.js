import {
  Code,
  Type,
  Database,
  Cpu,
  Code2,
  Terminal,      // Fallback for React/Vue
  Layers,
  Server,
  Zap,
  Wind,
  Globe,         // Fallback for CMS/Wordpress
  ShoppingBag,
  Store,
  GitBranch,
  ArrowUpRight,
  HardDrive,
  Package,
  Wrench,        // Replaced Tool with Wrench
  Cloud,
  Activity,
  Star,
  Check,
} from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: Code },
      { name: 'TypeScript', icon: Type },
      { name: 'PHP', icon: Code },
      { name: 'SQL', icon: Database },
      { name: 'C', icon: Cpu },
      { name: 'C++', icon: Code2 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: Terminal },
      { name: 'Vue.js', icon: Terminal },
      { name: 'Laravel', icon: Layers },
      { name: 'Node.js', icon: Server },
      { name: 'CodeIgniter', icon: Zap },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'jQuery', icon: Code },
    ],
  },
  {
    category: 'CMS & eCommerce',
    items: [
      { name: 'WordPress', icon: Globe },
      { name: 'WooCommerce', icon: ShoppingBag },
      { name: 'Shopify', icon: Store },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: Database },
      { name: 'MongoDB', icon: Cloud },
      { name: 'PostgreSQL', icon: Server },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Check },
      { name: 'Vercel', icon: ArrowUpRight },
      { name: 'Render', icon: HardDrive },
      { name: 'Postman', icon: Package },
      { name: 'Make', icon: Wrench },
      { name: 'Scrum/Agile', icon: Layers },
      { name: 'Supabase', icon: Cloud },
    ],
  },
  {
    category: 'AI & Automations',
    items: [
      { name: 'n8n', icon: Zap },
      { name: 'Make', icon: Wrench },
      { name: 'Claude', icon: Cpu },
      { name: 'OpenAI', icon: Activity },
      { name: 'Gemini', icon: Star },
    ],
  },
];

export default skills;