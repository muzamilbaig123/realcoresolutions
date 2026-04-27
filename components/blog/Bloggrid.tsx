import { type Article } from "@/lib/strapi";
import BlogCard from "./BlogCard";

export default function BlogGrid({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <div className="col-span-3 py-24 text-center">
        <p className="text-gray-400 dark:text-white/30 text-sm">
          No articles found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
}
