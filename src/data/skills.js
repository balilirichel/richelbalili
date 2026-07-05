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

// const skills = [
//   {
//     category: 'Languages',
//     items: [
//       { name: 'JavaScript', icon: Code },
//       { name: 'TypeScript', icon: Type },
//       { name: 'PHP', icon: Code },
//       { name: 'SQL', icon: Database },
//       { name: 'C', icon: Cpu },
//       { name: 'C++', icon: Code2 },
//     ],
//   },
//   {
//     category: 'Frameworks & Libraries',
//     items: [
//       { name: 'React', icon: Terminal },
//       { name: 'Vue.js', icon: Terminal },
//       { name: 'Laravel', icon: Layers },
//       { name: 'Node.js', icon: Server },
//       { name: 'CodeIgniter', icon: Zap },
//       { name: 'Tailwind CSS', icon: Wind },
//       { name: 'jQuery', icon: Code },
//     ],
//   },
//   {
//     category: 'CMS & eCommerce',
//     items: [
//       { name: 'WordPress', icon: Globe },
//       { name: 'WooCommerce', icon: ShoppingBag },
//       { name: 'Shopify', icon: Store },
//     ],
//   },
//   {
//     category: 'Databases',
//     items: [
//       { name: 'MySQL', icon: Database },
//       { name: 'MongoDB', icon: Cloud },
//       { name: 'PostgreSQL', icon: Server },
//     ],
//   },
//   {
//     category: 'Tools & Platforms',
//     items: [
//       { name: 'Git', icon: GitBranch },
//       { name: 'GitHub', icon: Check },
//       { name: 'Vercel', icon: ArrowUpRight },
//       { name: 'Render', icon: HardDrive },
//       { name: 'Postman', icon: Package },
//       { name: 'Make', icon: Wrench },
//       { name: 'Scrum/Agile', icon: Layers },
//       { name: 'Supabase', icon: Cloud },
//     ],
//   },
//   {
//     category: 'AI & Automations',
//     items: [
//       { name: 'n8n', icon: Zap },
//       { name: 'Make', icon: Wrench },
//       { name: 'Claude', icon: Cpu },
//       { name: 'OpenAI', icon: Activity },
//       { name: 'Gemini', icon: Star },
//     ],
//   },
// ];

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }, // Using MySQL icon as a standard SQL representative
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    ],
  },
  {
    category: 'CMS & eCommerce',
    items: [
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'WooCommerce', icon: 'https://cdn.simpleicons.org/woocommerce/purple' },
     { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/7AB55C' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      { name: 'Render', icon: 'https://cdn.simpleicons.org/render/black' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Make', icon: 'https://cdn.simpleicons.org/make/purple' },
      { name: 'Scrum/Agile', icon: 'https://cdn.simpleicons.org/scrumalliance/red' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    ],
  },
  {
    category: 'AI & Automations',
    items: [
      { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/red' },
      { name: 'Make', icon: 'https://cdn.simpleicons.org/make/purple' },
      { name: 'Claude', icon: 'https://cdn.simpleicons.org/claude/D97B56' },
      { name: 'OpenAI', icon: 'https://icons.getbootstrap.com/assets/icons/openai.svg' },
      { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75FF' },
    ],
  },
];
export default skills;