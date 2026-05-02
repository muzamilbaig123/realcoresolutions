const STRAPI = (process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337").replace(/\/$/, "");

export type StrapiImage = {
  url?: string;
  alternativeText?: string | null;
  caption?: string | null;
  name?: string | null;
  width?: number;
  height?: number;
  formats?: {
    large?: { url?: string };
    medium?: { url?: string };
    small?: { url?: string };
    thumbnail?: { url?: string };
  };
};

export type BlogBlock =
  | { __component: "shared.rich-text"; id: number; body?: string }
  | { __component: "shared.quote"; id: number; title?: string; body?: string }
  | { __component: "shared.media"; id: number; file?: StrapiImage | null }
  | { __component: "shared.slider"; id: number; files?: StrapiImage[] }
  | Record<string, unknown>;

export type Article = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  cover?: StrapiImage;
  blocks?: BlogBlock[];
};

export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export interface Faq {
  id: number;
  documentId: string;
  Questions: string;
  Answers: string;
  category: string;
  order: number;
}

export const buildUrl = (path?: string | null): string | null => {
  if (!path) return null;
  return path.startsWith("http") ? path : `${STRAPI}${path}`;
};

export const formatDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export function getCoverUrl(article: Article): string | null {
  if (article.cover?.url) return buildUrl(article.cover.url);

  for (const block of article.blocks ?? []) {
    const b = block as any;
    if (b.__component === "shared.media" && b.file?.url)
      return buildUrl(b.file.url);
    if (b.__component === "shared.slider" && b.files?.[0]?.url)
      return buildUrl(b.files[0].url);
  }

  return null;
}

const fetchOpts = { next: { revalidate: 60 } } as const;

const COVER =
  "populate[cover][fields][0]=url" +
  "&populate[cover][fields][1]=alternativeText" +
  "&populate[cover][fields][2]=caption" +
  "&populate[cover][fields][3]=name";

const DEEP = "populate[blocks][populate]=*";

export async function getArticles(
  page = 1,
  pageSize = 6,
): Promise<{ articles: Article[]; meta: PaginationMeta }> {
  const fallback: PaginationMeta = { page, pageSize, pageCount: 1, total: 0 };
  try {
    const res = await fetch(
      `${STRAPI}/api/articles?${COVER}&${DEEP}&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      fetchOpts,
    );
    if (!res.ok) return { articles: [], meta: fallback };
    const { data, meta } = await res.json();
    return { articles: data ?? [], meta: meta?.pagination ?? fallback };
  } catch {
    return { articles: [], meta: fallback };
  }
}

export async function getLatestArticles(limit = 6): Promise<Article[]> {
  try {
    const res = await fetch(
      `${STRAPI}/api/articles?${COVER}&${DEEP}&sort=publishedAt:desc&pagination[pageSize]=${limit}`,
      fetchOpts,
    );
    if (!res.ok) return [];
    const { data } = await res.json();
    return data ?? [];
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${STRAPI}/api/articles?${COVER}&${DEEP}&filters[slug][$eq]=${slug}`,
      fetchOpts,
    );
    if (!res.ok) return null;
    const { data } = await res.json();
    return data?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function getFaqs(
  page = 1,
  pageSize = 18,
): Promise<{
  faqs: Faq[];
  meta: PaginationMeta;
}> {
  try {
    const res = await fetch(
      `${STRAPI}/api/faq?sort=order&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok)
      return { faqs: [], meta: { page: 1, pageSize, pageCount: 1, total: 0 } };
    const json = await res.json();
    return {
      faqs: json.data ?? [],
      meta: json.meta?.pagination ?? {
        page: 1,
        pageSize,
        pageCount: 1,
        total: 0,
      },
    };
  } catch {
    return { faqs: [], meta: { page: 1, pageSize, pageCount: 1, total: 0 } };
  }
}
