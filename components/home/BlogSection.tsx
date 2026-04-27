import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestArticles } from "@/lib/strapi";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogSection() {
  const articles = await getLatestArticles(6);
  if (articles.length === 0) return null;

  return (
    <section className="bg-gray-50 dark:bg-[#060d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
              Latest Insights
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              From our blog
            </h2>
            <p className="mt-3 text-base text-foreground max-w-lg">
              Industry insights, ERP guides, and business growth strategies from
              the RealCore Solutions team.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all duration-200 shrink-0"
          >
            View all articles <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
