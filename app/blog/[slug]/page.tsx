import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import {
  getArticleBySlug,
  getLatestArticles,
  formatDate,
  getCoverUrl,
  buildUrl,
  type Article,
  type BlogBlock,
  type StrapiImage,
} from "@/lib/strapi";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  const coverUrl = getCoverUrl(article);

  return {
    title: `${article.title} | RealCore Solutions Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      images: coverUrl
        ? [{ url: coverUrl, width: 1200, height: 630, alt: article.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: coverUrl ? [coverUrl] : [],
    },
  };
}

function getReadingTime(blocks?: BlogBlock[]): number {
  if (!blocks) return 1;
  const text = blocks
    .filter((b: any) => b.__component === "shared.rich-text")
    .map((b: any) => b.body ?? "")
    .join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

type MdNode =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

function parseMarkdown(body: string): MdNode[] {
  const nodes: MdNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushP = () => {
    if (paragraph.length) {
      nodes.push({ type: "p", text: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushL = () => {
    if (list.length) {
      nodes.push({ type: "ul", items: list });
      list = [];
    }
  };

  const escape = (t: string) =>
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const inline = (t: string) =>
    escape(t)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(
        /`(.+?)`/g,
        "<code class='bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono'>$1</code>",
      )
      .replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" target="_blank" rel="noreferrer noopener" class="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">$1</a>',
      );

  for (const raw of body.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) {
      flushP();
      flushL();
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    const h2 = line.match(/^##\s+(.+)$/);
    const h1 = line.match(/^#\s+(.+)$/);
    const li = line.match(/^[-*]\s+(.+)$/);

    if (h3) {
      flushP();
      flushL();
      nodes.push({ type: "h3", text: inline(h3[1]) });
    } else if (h2) {
      flushP();
      flushL();
      nodes.push({ type: "h2", text: inline(h2[1]) });
    } else if (h1) {
      flushP();
      flushL();
      nodes.push({ type: "h1", text: inline(h1[1]) });
    } else if (li) {
      flushP();
      list.push(inline(li[1]));
    } else {
      flushL();
      paragraph.push(inline(line));
    }
  }
  flushP();
  flushL();
  return nodes;
}

function MarkdownBody({ body }: { body: string }) {
  const nodes = parseMarkdown(body);
  return (
    <div className="space-y-5">
      {nodes.map((node, i) => {
        if (node.type === "h1")
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-2"
              dangerouslySetInnerHTML={{ __html: node.text }}
            />
          );
        if (node.type === "h2")
          return (
            <h3
              key={i}
              className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-2"
              dangerouslySetInnerHTML={{ __html: node.text }}
            />
          );
        if (node.type === "h3")
          return (
            <h4
              key={i}
              className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-1"
              dangerouslySetInnerHTML={{ __html: node.text }}
            />
          );
        if (node.type === "ul")
          return (
            <ul
              key={i}
              className="list-disc pl-6 space-y-2 text-gray-600 dark:text-white/60"
            >
              {node.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
        return (
          <p
            key={i}
            className="text-base leading-8 text-gray-600 dark:text-white/60"
            dangerouslySetInnerHTML={{ __html: node.text }}
          />
        );
      })}
    </div>
  );
}

function getImgUrl(img: any): string | null {
  const raw =
    img?.url ??
    img?.formats?.large?.url ??
    img?.formats?.medium?.url ??
    img?.formats?.small?.url ??
    img?.formats?.thumbnail?.url ??
    null;
  return buildUrl(raw);
}

function getImgAlt(img: any): string {
  return img?.alternativeText ?? img?.caption ?? img?.name ?? "Blog image";
}

function Placeholder({ text }: { text: string }) {
  return (
    <div className="my-6 rounded-2xl border border-dashed border-gray-200 dark:border-white/10 p-6 text-sm text-gray-400 dark:text-white/30 italic">
      {text}
    </div>
  );
}

function MediaBlock({ block }: { block: any }) {
  const url = getImgUrl(block.file);
  if (!url) return null;
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={url}
          alt={getImgAlt(block.file)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      {block.file?.caption && (
        <figcaption className="px-5 py-3 text-sm text-center text-gray-500 dark:text-white/40 italic">
          {block.file.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SliderBlock({ block }: { block: any }) {
  const files: StrapiImage[] = Array.isArray(block.files) ? block.files : [];
  const valid = files.filter((img) => !!img?.url);

  if (!valid.length) return <Placeholder text="Gallery: no images attached." />;

  return (
    <div className="my-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/30">
        Gallery
      </p>
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
        {valid.map((img, i) => {
          const url = getImgUrl(img);
          if (!url) return null;
          return (
            <figure
              key={i}
              className="shrink-0 w-[80%] md:w-[45%] snap-start overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={url}
                  alt={getImgAlt(img)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 45vw"
                />
              </div>
              {img.caption && (
                <figcaption className="px-4 py-2 text-sm text-center text-gray-500 dark:text-white/40 italic">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
}

function QuoteBlock({ block }: { block: any }) {
  return (
    <blockquote className="my-10 border-l-4 border-blue-500 pl-6 py-1">
      {block.body && (
        <p className="text-lg italic text-gray-700 dark:text-white/70 leading-8">
          &ldquo;{block.body}&rdquo;
        </p>
      )}
      {block.title && (
        <footer className="mt-3 text-sm font-semibold text-blue-600 dark:text-blue-400">
          &mdash; {block.title}
        </footer>
      )}
    </blockquote>
  );
}

function renderBlock(block: BlogBlock, index: number) {
  const b = block as any;
  switch (b.__component) {
    case "shared.rich-text":
      return (
        <div key={index} className="my-8">
          <MarkdownBody body={b.body ?? ""} />
        </div>
      );
    case "shared.quote":
      return <QuoteBlock key={index} block={b} />;
    case "shared.media":
      return <MediaBlock key={index} block={b} />;
    case "shared.slider":
      return <SliderBlock key={index} block={b} />;
    default:
      return null;
  }
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;

  const [article, related] = await Promise.all([
    getArticleBySlug(slug),
    getLatestArticles(4),
  ]);

  if (!article) notFound();

  const coverUrl = getCoverUrl(article);
  const readingTime = getReadingTime(article.blocks);
  const relatedArticles = related.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      <div className="relative w-full h-[45vh] md:h-[60vh] bg-gray-100 dark:bg-white/5 overflow-hidden">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-900/20">
            <span className="text-[10rem] font-black text-blue-200/60 dark:text-blue-800/30 select-none leading-none">
              {article.title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#060d1f] via-white/10 dark:via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-28">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 mt-10 mb-8"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-white/30 mb-5">
          <span className="flex items-center gap-1.5">
            <Calendar size={11} />
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={11} />
            {readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
          {article.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500 dark:text-white/50 leading-relaxed border-l-2 border-blue-500 pl-4 mb-10">
          {article.description}
        </p>

        <div className="border-t border-gray-100 dark:border-white/[0.06] mb-10" />

        {/* Blocks */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {article.blocks?.length ? (
            article.blocks.map(renderBlock)
          ) : (
            <p className="text-gray-400 dark:text-white/30 text-sm italic text-center py-12">
              No content available for this article.
            </p>
          )}
        </article>

        {/* Share / divider */}
        <div className="mt-16 border-t border-gray-100 dark:border-white/[0.06]" />
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.02] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Keep Reading
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              More from our blog
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((a: Article) => (
                <BlogCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
