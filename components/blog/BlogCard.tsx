import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { type Article, formatDate, getCoverUrl } from "@/lib/strapi";

export default function BlogCard({ article }: { article: Article }) {
  const coverUrl = getCoverUrl(article);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-white dark:bg-[#0b1628] hover:border-gray-200 dark:hover:border-white/[0.14] transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30"
    >
      {/* Cover */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-white/5 shrink-0">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={article.cover?.alternativeText || article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20">
            <span className="text-5xl font-bold text-blue-200 dark:text-blue-800/60 select-none">
              {article.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/30 mb-3">
          <Calendar size={11} />
          <span>{formatDate(article.publishedAt)}</span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {article.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed line-clamp-2 flex-1">
          {article.description}
        </p>

        <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          Read article <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}
