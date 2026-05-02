"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/strapi";

const VP = { once: true, margin: "-60px" } as const;
const PAGE_SIZE = 18;

function getCategories(faqs: Faq[]): string[] {
  const cats = Array.from(new Set(faqs.map((f) => f.category).filter(Boolean)));
  return ["All", ...cats.map((c) => c.charAt(0).toUpperCase() + c.slice(1))];
}

function FaqItem({ faq, index }: { faq: Faq; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="border-b border-gray-100 dark:border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white pr-4">
          {faq.Questions}
        </span>
        <span className="mt-0.5 flex p-2 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] transition-colors duration-200">
          {open ? (
            <Minus size={16} className="text-foreground" />
          ) : (
            <Plus size={16} className="text-foreground" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-lg leading-relaxed text-foreground max-w-3xl">
              {faq.Answers}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const categories = getCategories(faqs);
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);

  // Category filter
  const filtered =
    active === "All"
      ? faqs
      : faqs.filter((f) => f.category?.toLowerCase() === active.toLowerCase());

  // Client-side pagination
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategory = (cat: string) => {
    setActive(cat);
    setPage(1);
  };

  return (
    <div className="px-4 py-2 rounded-lg">
      {/* Category tabs */}
      {categories.length > 2 && (
        <div className="flex flex-wrap gap-2 mb-10 justify-center items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] text-gray-600 dark:text-white/50 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* FAQ list */}
      {paginated.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-white/30 py-10 text-center">
          No FAQs found in this category.
        </p>
      ) : (
        <div className="divide-y divide-gray-100 dark:divide-white/[0.06]">
          {paginated.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      )}

      {pageCount > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-12">
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors duration-150",
              page === 1
                ? "border-gray-100 dark:border-white/5 text-gray-300 dark:text-white/20 cursor-not-allowed"
                : "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400",
            )}
          >
            <ChevronLeft size={15} />
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors duration-150",
                p === page
                  ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
                  : "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400",
              )}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors duration-150",
              page === pageCount
                ? "border-gray-100 dark:border-white/5 text-gray-300 dark:text-white/20 cursor-not-allowed"
                : "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400",
            )}
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
