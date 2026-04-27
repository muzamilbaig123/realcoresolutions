"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import type { Product } from "@/lib/products-data";

export default function ProductRelated({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  const items = products.map((p) => ({
    title: p.name,
    description: p.description,
    link: `/products/${p.slug}`,
  }));

  return (
    <section className="bg-gray-50 dark:bg-[#03070f] py-24 border-t border-gray-100 dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
              Related Products
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              You might also need
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all duration-200"
          >
            View all products <ArrowRight size={14} />
          </Link>
        </div>

        <HoverEffect items={items} />
      </div>
    </section>
  );
}
