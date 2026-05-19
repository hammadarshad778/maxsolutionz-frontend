export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Web Development" | "WordPress" | "SEO" | "E-Commerce" | "Design";
  tags: string[];
  author: string;
  date: string;
  readTime: number;
  featured: boolean;
  coverGradient: string; // CSS gradient string for placeholder cover
};

export const blogPosts: BlogPost[] = [
  // Web Development (3)
  {
    id: "1",
    slug: "next-js-performance-optimization-2026",
    title: "Next.js Performance Optimization: The Complete 2026 Guide",
    excerpt:
      "Discover advanced techniques to squeeze every millisecond out of your Next.js application — from streaming SSR and React Server Components to image optimization and edge caching.",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    author: "Muhammad Shakir",
    date: "May 10, 2026",
    readTime: 9,
    featured: true,
    coverGradient: "linear-gradient(135deg, #1AECBB22 0%, #1a80e522 100%)",
  },
  {
    id: "2",
    slug: "react-server-components-deep-dive",
    title: "React Server Components: What Every Developer Needs to Know",
    excerpt:
      "RSC fundamentally changes how you think about data fetching and rendering. We break down the mental model, show real examples, and explain when to use them vs client components.",
    category: "Web Development",
    tags: ["React", "RSC", "Next.js"],
    author: "Muhammad Shakir",
    date: "Apr 25, 2026",
    readTime: 7,
    featured: false,
    coverGradient: "linear-gradient(135deg, #667eea22 0%, #764ba222 100%)",
  },
  {
    id: "3",
    slug: "full-stack-typescript-best-practices",
    title: "Full-Stack TypeScript Best Practices for Scalable Applications",
    excerpt:
      "From shared types across your Next.js frontend and Node.js backend to robust API schemas with Zod — learn how to build truly type-safe full-stack apps.",
    category: "Web Development",
    tags: ["TypeScript", "Node.js", "Architecture"],
    author: "Muhammad Shakir",
    date: "Apr 12, 2026",
    readTime: 8,
    featured: false,
    coverGradient: "linear-gradient(135deg, #3178C622 0%, #1AECBB22 100%)",
  },

  // WordPress (2)
  {
    id: "4",
    slug: "wordpress-headless-cms-guide-2026",
    title: "Going Headless: Using WordPress as a CMS with Next.js",
    excerpt:
      "Combine WordPress's powerful content management with Next.js's performance. We'll set up WPGraphQL, build dynamic pages, and configure ISR for lightning-fast delivery.",
    category: "WordPress",
    tags: ["WordPress", "Next.js", "WPGraphQL"],
    author: "Hammad Arshad",
    date: "May 2, 2026",
    readTime: 11,
    featured: true,
    coverGradient: "linear-gradient(135deg, #21759B22 0%, #0073AA22 100%)",
  },
  {
    id: "5",
    slug: "woocommerce-conversion-rate-optimization",
    title: "WooCommerce CRO: 10 Proven Tactics to Boost Sales",
    excerpt:
      "Cart abandonment, slow checkout, and poor product pages are revenue killers. Here are 10 data-backed WooCommerce optimizations that can lift your conversion rate by 30%.",
    category: "WordPress",
    tags: ["WooCommerce", "CRO", "E-Commerce"],
    author: "Hammad Arshad",
    date: "Mar 28, 2026",
    readTime: 6,
    featured: false,
    coverGradient: "linear-gradient(135deg, #96588A22 0%, #7f4b7622 100%)",
  },

  // SEO (3)
  {
    id: "6",
    slug: "technical-seo-checklist-2026",
    title: "The Ultimate Technical SEO Checklist for 2026",
    excerpt:
      "Core Web Vitals, structured data, crawl budget, canonical tags — this checklist covers every technical SEO factor that can impact your rankings in 2026.",
    category: "SEO",
    tags: ["SEO", "Core Web Vitals", "Technical"],
    author: "Muhammad Shakir",
    date: "May 15, 2026",
    readTime: 10,
    featured: true,
    coverGradient: "linear-gradient(135deg, #f59e0b22 0%, #ef444422 100%)",
  },
  {
    id: "7",
    slug: "local-seo-for-small-business",
    title: "Local SEO Strategies That Actually Work for Small Businesses",
    excerpt:
      "Google Business Profile, local citations, review management, and geo-targeted content — master these fundamentals and dominate your local search results.",
    category: "SEO",
    tags: ["Local SEO", "Google Business", "Small Business"],
    author: "Muhammad Shakir",
    date: "Apr 18, 2026",
    readTime: 7,
    featured: false,
    coverGradient: "linear-gradient(135deg, #22c55e22 0%, #16a34a22 100%)",
  },
  {
    id: "8",
    slug: "ai-and-seo-whats-changing",
    title: "AI & SEO: How Generative Search is Changing Rankings",
    excerpt:
      "Google's AI Overviews and Bing Copilot are reshaping organic traffic. Learn how to adapt your content strategy to stay visible in the age of generative AI.",
    category: "SEO",
    tags: ["AI", "SEO", "Google SGE"],
    author: "Muhammad Shakir",
    date: "Mar 5, 2026",
    readTime: 8,
    featured: false,
    coverGradient: "linear-gradient(135deg, #8b5cf622 0%, #7c3aed22 100%)",
  },

  // E-Commerce (2)
  {
    id: "9",
    slug: "shopify-vs-woocommerce-2026",
    title: "Shopify vs WooCommerce in 2026: Which Platform Wins?",
    excerpt:
      "An in-depth comparison of Shopify and WooCommerce across cost, scalability, customization, and SEO in 2026. We help you make the right call for your business.",
    category: "E-Commerce",
    tags: ["Shopify", "WooCommerce", "Platform Comparison"],
    author: "Hammad Arshad",
    date: "Apr 30, 2026",
    readTime: 9,
    featured: true,
    coverGradient: "linear-gradient(135deg, #96BF4822 0%, #5c6bc022 100%)",
  },
  {
    id: "10",
    slug: "ecommerce-email-automation-guide",
    title: "E-Commerce Email Automation: Sequences That Drive Revenue",
    excerpt:
      "From welcome series to abandoned cart recovery and post-purchase flows — learn how to build automated email sequences that consistently generate sales on autopilot.",
    category: "E-Commerce",
    tags: ["Email Marketing", "Automation", "Klaviyo"],
    author: "Hammad Arshad",
    date: "Apr 8, 2026",
    readTime: 6,
    featured: false,
    coverGradient: "linear-gradient(135deg, #f9731622 0%, #ef444422 100%)",
  },

  // Design (2)
  {
    id: "11",
    slug: "ui-design-trends-2026",
    title: "UI Design Trends That Will Dominate 2026",
    excerpt:
      "Glassmorphism, bento grids, variable fonts, and spatial design are shaping the next era of digital interfaces. Stay ahead with this curated trend report.",
    category: "Design",
    tags: ["UI Design", "Trends", "Figma"],
    author: "Muhammad Shakir",
    date: "May 8, 2026",
    readTime: 5,
    featured: true,
    coverGradient: "linear-gradient(135deg, #f43f5e22 0%, #e11d4822 100%)",
  },
  {
    id: "12",
    slug: "design-system-for-web-agencies",
    title: "Building a Scalable Design System for Web Agencies",
    excerpt:
      "A well-structured design system saves agencies hundreds of hours per project. Learn how to build tokens, components, and documentation that your whole team can use.",
    category: "Design",
    tags: ["Design Systems", "Figma", "Component Library"],
    author: "Muhammad Shakir",
    date: "Mar 20, 2026",
    readTime: 8,
    featured: false,
    coverGradient: "linear-gradient(135deg, #0ea5e922 0%, #38bdf822 100%)",
  },
];

export const blogCategories = [
  "All",
  "Web Development",
  "WordPress",
  "SEO",
  "E-Commerce",
  "Design",
] as const;

export type BlogCategory = (typeof blogCategories)[number];
