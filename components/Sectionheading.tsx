"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const VP = { once: true, margin: "-60px" } as const;

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} mb-14 ${className}`}>
      {badge && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3"
        >
          {badge}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.45, delay: badge ? 0.08 : 0 }}
        className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
      >
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-gray-400 dark:text-white/30">{highlight}</span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-4 max-w-xl text-base text-gray-500 dark:text-white/40 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}