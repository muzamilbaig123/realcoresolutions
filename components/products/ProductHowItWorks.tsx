"use client";

import { motion } from "motion/react";
import type { ProductStep } from "@/lib/products-data";

const VP = { once: true, margin: "-60px" } as const;

export default function ProductHowItWorks({ steps }: { steps: ProductStep[] }) {
  return (
    <section className="bg-gray-50 dark:bg-[#03070f] py-24 border-t border-gray-100 dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            How It Works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Up and running
            <span className="text-gray-400 dark:text-white/30">
              {" "}
              in 3 simple steps
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 relative">
          <div className="hidden lg:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-blue-100 dark:border-blue-500/20 bg-white dark:bg-[#0b1628] mb-6 relative z-10">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-white/40">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
