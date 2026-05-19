export type Job = {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Marketing" | "Operations";
  type: "Full-time" | "Part-time";
  location: "Remote" | "Hybrid" | "On-site";
  experience: string;
  salaryMin: number;
  salaryMax: number;
  tags: string[];
  description: string;
  postedDate: string;
  applyBy: string;
  featured: boolean;
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "3–5 years",
    salaryMin: 17000,
    salaryMax: 20000,
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    description: "We're looking for a talented Senior Full-Stack Developer to lead engineering on high-performance web applications. You'll architect scalable APIs, ship beautiful UIs, and mentor junior engineers.",
    postedDate: "May 1, 2026",
    applyBy: "Jun 1, 2026",
    featured: true,
  },
  {
    id: "2",
    title: "WordPress & WooCommerce Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
    experience: "2–4 years",
    salaryMin: 15000,
    salaryMax: 18000,
    tags: ["WordPress", "PHP", "WooCommerce", "Elementor"],
    description: "Build lightning-fast, custom WordPress themes and WooCommerce plugins for global e-commerce clients. Experience with page builders and REST API is a plus.",
    postedDate: "May 3, 2026",
    applyBy: "Jun 3, 2026",
    featured: true,
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    experience: "2–4 years",
    salaryMin: 14000,
    salaryMax: 17000,
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
    description: "Join our design team to craft beautiful, conversion-focused digital experiences. You'll collaborate closely with developers to translate wireframes into polished products.",
    postedDate: "May 5, 2026",
    applyBy: "Jun 5, 2026",
    featured: true,
  },
  {
    id: "4",
    title: "SEO & Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Remote",
    experience: "2–3 years",
    salaryMin: 13000,
    salaryMax: 16000,
    tags: ["SEO", "Google Analytics", "Content Strategy", "PPC"],
    description: "Drive organic growth for MaxSolutionz clients through strategic SEO, content marketing, and data-driven campaigns. Experience with technical SEO and link-building preferred.",
    postedDate: "May 7, 2026",
    applyBy: "Jun 7, 2026",
    featured: false,
  },
  {
    id: "5",
    title: "Project Manager – Digital Projects",
    department: "Operations",
    type: "Full-time",
    location: "Hybrid",
    experience: "3–5 years",
    salaryMin: 16000,
    salaryMax: 19000,
    tags: ["Agile", "Scrum", "Jira", "Client Management"],
    description: "Oversee end-to-end delivery of web development, SEO, and e-commerce projects. You'll coordinate cross-functional teams, manage timelines, and be the main point of contact for clients.",
    postedDate: "May 9, 2026",
    applyBy: "Jun 9, 2026",
    featured: false,
  },
  {
    id: "6",
    title: "E-Commerce Growth Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Remote",
    experience: "1–3 years",
    salaryMin: 13000,
    salaryMax: 15000,
    tags: ["Shopify", "WooCommerce", "CRO", "Email Marketing"],
    description: "Help our e-commerce clients scale revenue through CRO, product listing optimization, and retention email campaigns. You'll own the metrics that matter: AOV, CVR, and LTV.",
    postedDate: "May 11, 2026",
    applyBy: "Jun 11, 2026",
    featured: false,
  },
];
