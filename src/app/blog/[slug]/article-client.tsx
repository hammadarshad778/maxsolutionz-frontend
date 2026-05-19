"use client";

import { motion } from "framer-motion";
import { ArrowLeft, User, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { type BlogPost } from "@/data/blog-posts";

const categoryColors: Record<string, string> = {
  "Web Development": "bg-primary/10 text-primary border-primary/20",
  WordPress: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  SEO: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "E-Commerce": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Design: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const coverGradients: Record<string, string> = {
  "Web Development": "from-primary/20 via-blue-500/10 to-transparent",
  WordPress: "from-blue-600/20 via-cyan-500/10 to-transparent",
  SEO: "from-yellow-500/20 via-orange-500/10 to-transparent",
  "E-Commerce": "from-purple-500/20 via-pink-500/10 to-transparent",
  Design: "from-pink-500/20 via-rose-500/10 to-transparent",
};

/** Minimal markdown → HTML renderer (headings, bold, code, tables, lists) */
function renderMarkdown(md: string): string {
  return md
    .trim()
    // Fenced code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_m, code) => `<pre><code>${escHtml(code.trim())}</code></pre>`)
    // Inline code
    .replace(/`([^`]+)`/g, (_m, code) => `<code class="inline-code">${escHtml(code)}</code>`)
    // H2
    .replace(/^## (.+)$/gm, (_m, t) => `<h2>${t}</h2>`)
    // H3
    .replace(/^### (.+)$/gm, (_m, t) => `<h3>${t}</h3>`)
    // Bold
    .replace(/\*\*(.+?)\*\*/g, (_m, t) => `<strong>${t}</strong>`)
    // Tables: header separator body
    .replace(/(\|[^\n]+\|\n)(\|[-| :]+\|\n)((?:\|[^\n]+\|\n?)*)/g, (_m, head, _sep, body) => {
      const hCells = head.trim().split("|").filter(Boolean).map((c: string) => `<th>${c.trim()}</th>`).join("");
      const rows = body.trim().split("\n").filter(Boolean).map((row: string) => {
        const cells = row.split("|").filter(Boolean).map((c: string) => `<td>${c.trim()}</td>`).join("");
        return `<tr>${cells}</tr>`;
      }).join("");
      return `<table><thead><tr>${hCells}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    // Blockquote
    .replace(/^> (.+)$/gm, (_m, t) => `<blockquote>${t}</blockquote>`)
    // Unordered list items
    .replace(/^[-*] (.+)$/gm, (_m, t) => `<li>${t}</li>`)
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    // Paragraphs: double newline → <p>
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>")
    // Clean empty paragraphs and those wrapping block elements
    .replace(/<p>(\s*(<h[23]>|<ul>|<pre>|<table>|<blockquote>))/g, "$2")
    .replace(/(<\/h[23]>|<\/ul>|<\/pre>|<\/table>|<\/blockquote>)\s*<\/p>/g, "$1")
    .replace(/<p>\s*<\/p>/g, "");
}

function escHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function ArticleClient({ post, content }: { post: BlogPost; content: string }) {
  const catClass = categoryColors[post.category] ?? "bg-white/10 text-white/60 border-white/10";
  const coverClass = coverGradients[post.category] ?? "from-white/10 to-transparent";
  const html = renderMarkdown(content);

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <div className={`relative pt-28 pb-20 px-4 bg-gradient-to-br ${coverClass} overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div style={{ background: post.coverGradient }} className="absolute inset-0 opacity-20 pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>

            <div className="mb-6">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${catClass}`}>
                <Tag className="w-3 h-3" /> {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-[#8892B0] leading-relaxed mb-8">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary/70" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary/70" /> {post.date}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#8892B0]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </motion.div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>
      </div>

      <style>{`
        .prose-article { color: #a8b2c9; line-height: 1.85; font-size: 1.05rem; }
        .prose-article h2 { color: #fff; font-size: 1.6rem; font-weight: 700; margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .prose-article h3 { color: #e2e8f0; font-size: 1.2rem; font-weight: 600; margin: 2rem 0 0.75rem; }
        .prose-article p { margin: 1rem 0; }
        .prose-article strong { color: #fff; font-weight: 600; }
        .prose-article ul { list-style: none; padding: 0; margin: 1rem 0; }
        .prose-article ul li { padding: 0.35rem 0 0.35rem 1.5rem; position: relative; }
        .prose-article ul li::before { content: "›"; position: absolute; left: 0; color: #1AECBB; font-weight: 700; }
        .prose-article pre { background: #0a0e14; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.25rem 1.5rem; overflow-x: auto; margin: 1.5rem 0; }
        .prose-article pre code { color: #a8ff78; font-family: 'Fira Code', 'Cascadia Code', monospace; font-size: 0.875rem; background: none; padding: 0; border-radius: 0; }
        .inline-code { background: rgba(26,236,187,0.1); color: #1AECBB; padding: 0.15em 0.4em; border-radius: 4px; font-size: 0.9em; font-family: monospace; }
        .prose-article blockquote { border-left: 3px solid #1AECBB; padding: 0.75rem 1.25rem; background: rgba(26,236,187,0.05); border-radius: 0 8px 8px 0; color: #8892B0; margin: 1.5rem 0; font-style: italic; }
        .prose-article table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
        .prose-article th { background: rgba(26,236,187,0.1); color: #1AECBB; font-weight: 600; padding: 0.75rem 1rem; text-align: left; border: 1px solid rgba(255,255,255,0.08); }
        .prose-article td { padding: 0.65rem 1rem; border: 1px solid rgba(255,255,255,0.06); color: #a8b2c9; }
        .prose-article tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
      `}</style>
    </div>
  );
}
