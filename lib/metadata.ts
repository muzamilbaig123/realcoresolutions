import type { Metadata } from "next";

const BASE_URL = "https://rcs.realcoresolutions.com";
const SITE_NAME = "RealCore Solutions";
const DEFAULT_OG = "/og-image.png";

export function createMetadata({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_OG,
  path = "/",
}: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}