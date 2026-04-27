import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products-data";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ProductFeatures from "@/components/products/ProductFeatures.tsx";
import ProductHowItWorks from "@/components/products/ProductHowItWorks";
import ProductIndustries from "@/components/products/ProductIndustries";
import ProductRelated from "@/components/products/ProductRelated";
import CTA from "@/components/home/CTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return createMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product.relatedSlugs);

  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      <div className="relative overflow-hidden bg-gray-950 dark:bg-[#03070f] py-24 sm:py-32">
        {/* Subtle grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Blue glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-blue-600/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-white hover:text-white transition-colors duration-150 mb-10"
          >
            <ArrowLeft size={14} /> All Products
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white mb-5">
                {product.badge}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-5 leading-[1.08]">
                {product.name}
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-lg">
                {product.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/request-demo"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-8 text-sm font-semibold text-white transition-colors duration-200"
                >
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-8 text-sm font-semibold text-white transition-colors duration-200"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/5">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  width={700}
                  height={440}
                  className="w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-b border-gray-100 dark:border-white/[0.06]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
              What is {product.name}?
            </h2>
            <p className="text-base text-gray-500 dark:text-white/40 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-white/50"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProductFeatures features={product.features} />
      <ProductHowItWorks steps={product.steps} />
      <ProductIndustries industries={product.industries} />
      <ProductRelated products={relatedProducts} />
      <CTA />
    </div>
  );
}
