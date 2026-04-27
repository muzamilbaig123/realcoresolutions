import { getArticles } from "@/lib/strapi";
import { createMetadata } from "@/lib/metadata";
import BlogGrid from "@/components/blog/Bloggrid";
import Pagination from "@/components/blog/Pagination";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Industry insights, ERP guides, and business growth strategies from the RealCore Solutions team.",
  path: "/blog",
});

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const { articles, meta } = await getArticles(currentPage, 6);

  return (
    <section className="bg-white dark:bg-[#060d1f] min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Insights & Resources
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Our Blog
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground">
            Stay up-to-date with the latest industry trends, ERP guides, and
            business growth strategies from our team.
          </p>
        </div>

        {/* Grid */}
        <BlogGrid articles={articles} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          pageCount={meta.pageCount}
          basePath="/blog"
        />
      </div>
    </section>
  );
}
