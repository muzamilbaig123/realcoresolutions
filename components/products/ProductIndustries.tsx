"use client";

import { motion } from "motion/react";
import { Building2 } from "lucide-react";

const VP = { once: true, margin: "-60px" } as const;

export default function ProductIndustries({
  industries,
}: {
  industries: string[];
}) {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-20 border-t border-gray-100 dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          {/* Left */}
          <div className="lg:w-1/3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10 mb-4">
              <Building2
                size={18}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
              Industries
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
              Built for your sector
            </h2>
            <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed">
              This product is trusted across a range of industries — each with
              unique requirements that our platform is designed to meet.
            </p>
          </div>

          {/* Right — pills */}
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] px-5 py-2 text-sm font-medium text-gray-700 dark:text-white/60 hover:border-blue-300 dark:hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all duration-200"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
