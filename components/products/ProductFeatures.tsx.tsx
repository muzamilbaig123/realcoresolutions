"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3, ShieldCheck, Zap, Users, Globe, Layers,
  ArrowUpRight, Lock, Bell, Settings, Database, Headphones,
} from "lucide-react";
import type { ProductFeature } from "@/lib/products-data";

const ICONS = [
  BarChart3, ShieldCheck, Zap, Users, Globe, Layers,
  ArrowUpRight, Lock, Bell, Settings, Database, Headphones,
];

function FeatureCard({
  feature,
  index,
}: {
  feature: ProductFeature;
  index: number;
}) {
  const Icon = ICONS[index % ICONS.length];
  const isTopRow = index < 3;

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        "lg:border-r border-gray-200 dark:border-white/[0.08]",
        (index === 0 || index === 3) && "lg:border-l border-gray-200 dark:border-white/[0.08]",
        isTopRow && "lg:border-b border-gray-200 dark:border-white/[0.08]"
      )}
    >
      {/* Hover gradient */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full pointer-events-none",
          isTopRow
            ? "bg-gradient-to-t from-gray-50 dark:from-white/[0.03] to-transparent"
            : "bg-gradient-to-b from-gray-50 dark:from-white/[0.03] to-transparent"
        )}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-gray-400 dark:text-white/30 group-hover/feature:text-blue-500 dark:group-hover/feature:text-blue-400 transition-colors duration-200">
        <Icon size={22} strokeWidth={1.6} />
      </div>

      {/* Title */}
      <div className="text-base font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 dark:bg-white/10 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900 dark:text-white">
          {feature.title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500 dark:text-white/40 max-w-xs relative z-10 px-10">
        {feature.description}
      </p>
    </div>
  );
}

export default function ProductFeatures({
  features,
}: {
  features: ProductFeature[];
}) {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-24 border-t border-gray-100 dark:border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Key Features
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Everything you need,
            <span className="text-gray-400 dark:text-white/30"> nothing you don't</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-6 max-w-7xl mx-auto border-t border-l border-gray-200 dark:border-white/[0.08]">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}