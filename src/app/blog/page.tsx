"use client";

import { useQueryState, parseAsString } from "nuqs";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Search, BookOpen, Eye, Users, Tag, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import Link from "next/link";

const categoryColors: Record<string, { pill: string; cover: string }> = {
  "Web Development": {
    pill: "bg-primary/10 text-primary border-primary/20",
    cover: "from-primary/30 to-blue-500/20",
  },
  WordPress: {
    pill: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    cover: "from-blue-600/30 to-cyan-500/20",
  },
  SEO: {
    pill: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    cover: "from-yellow-500/30 to-orange-500/20",
  },
  "E-Commerce": {
    pill: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    cover: "from-purple-500/30 to-pink-500/20",
  },
  Design: {
    pill: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    cover: "from-pink-500/30 to-rose-500/20",
  },
};

function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  const colors = categoryColors[post.category] ?? {
    pill: "bg-white/10 text-white/60 border-white/10",
    cover: "from-white/10 to-transparent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.05, type: "spring", bounce: 0.25 }}
      layout
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="h-full bg-[#0D0F14] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
          {/* Cover */}
          <div
            className={`relative h-44 w-full bg-gradient-to-br ${colors.cover} flex items-end p-5 overflow-hidden`}
          >
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ background: post.coverGradient }}
            />
            {/* Abstract grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

            {post.featured && (
              <span className="absolute top-4 right-4 z-10 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                Featured
              </span>
            )}
            <span
              className={`relative z-10 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${colors.pill}`}
            >
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6 gap-3">
            <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-[#8892B0] leading-relaxed line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#8892B0] group-hover:border-primary/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                  {post.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white/80">{post.author}</span>
                  <span className="text-xs text-white/40">{post.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors font-medium">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


export function BlogPageClient() {
  const [category, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("All")
  );
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  const filtered = blogPosts.filter((p) => {
    const catOk = category === "All" || p.category === category;
    const q = search.toLowerCase().trim();
    const searchOk =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return catOk && searchOk;
  });

  const stats = [
    { label: "Expert Articles", value: "12+", icon: <BookOpen className="w-5 h-5 text-primary" /> },
    { label: "Monthly Views", value: "10K+", icon: <Eye className="w-5 h-5 text-primary" /> },
    { label: "Contributors", value: "2", icon: <Users className="w-5 h-5 text-primary" /> },
    { label: "Categories", value: "5", icon: <Tag className="w-5 h-5 text-primary" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/15 rounded-full blur-[120px] opacity-50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-medium text-white mb-8">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-gray-300">Digital Insights &amp; Industry Updates</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400">
              Blog
            </span>
          </h1>
          <p className="text-xl text-[#8892B0] max-w-2xl mx-auto leading-relaxed">
            Discover expert insights, industry trends, and actionable strategies across web development, SEO, design, and e-commerce.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 container mx-auto max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-2 text-center"
            >
              {stat.icon}
              <span className="text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-xs text-[#8892B0] font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Filters + Search */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 items-center mb-10"
          >
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                id="blog-search"
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value || null)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  id={`cat-${cat.toLowerCase().replace(/\s/g, "-")}`}
                  key={cat}
                  onClick={() => setCategory(cat === "All" ? null : cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${category === cat
                      ? "bg-primary text-[#030D0A] border-primary shadow-md shadow-primary/20"
                      : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-white/40 mb-6">
            Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {category !== "All" ? ` in ${category}` : ""}
            {search ? ` matching "${search}"` : ""}
          </p>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <BookOpen className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/50 text-lg font-medium">No articles found.</p>
                <button
                  onClick={() => { setCategory(null); setSearch(null); }}
                  className="mt-4 text-primary text-sm underline underline-offset-4"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-[#8892B0] text-lg mb-8">
              Get our latest articles and digital strategy insights delivered straight to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-[#030D0A] font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <BlogPageClient />
    </Suspense>
  );
}
