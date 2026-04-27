"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  basePath?: string;
}

export default function Pagination({
  currentPage,
  pageCount,
  basePath = "/blog",
}: PaginationProps) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < pageCount;

  return (
    <div className="flex items-center justify-center gap-1.5 mt-14">
      <Link
        href={hasPrev ? `${basePath}?page=${currentPage - 1}` : "#"}
        aria-disabled={!hasPrev}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors duration-150",
          hasPrev
            ? "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
            : "border-gray-100 dark:border-white/5 text-gray-300 dark:text-white/20 pointer-events-none",
        )}
      >
        <ChevronLeft size={15} />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors duration-150",
            page === currentPage
              ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
              : "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400",
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={hasNext ? `${basePath}?page=${currentPage + 1}` : "#"}
        aria-disabled={!hasNext}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors duration-150",
          hasNext
            ? "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
            : "border-gray-100 dark:border-white/5 text-gray-300 dark:text-white/20 pointer-events-none",
        )}
      >
        <ChevronRight size={15} />
      </Link>
    </div>
  );
}
