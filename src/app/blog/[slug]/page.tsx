import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { articleContent } from "@/data/article-content";
import { ArticleClient } from "./article-client";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | MaxSolutionz Blog`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const content = articleContent[slug] ?? "";
  return <ArticleClient post={post} content={content} />;
}
