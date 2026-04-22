"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays, PhoneCall } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const TRUST_ITEMS = [
  "No credit card required",
  "Setup in under 3 weeks",
  "Dedicated onboarding team",
  "Cancel anytime",
];

const VP = { once: true, margin: "-60px" } as const;

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-[#03070f] py-32 sm:py-40">

      <DottedGlowBackground
        className="pointer-events-none"
        opacity={0.5}
        gap={18}
        radius={1.4}
        color="rgba(0,0,0,0.18)"
        darkColor="rgba(255,255,255,0.18)"
        glowColor="rgba(37,99,235,0.7)"
        darkGlowColor="rgba(96,165,250,0.85)"
        backgroundOpacity={0}
        speedMin={0.25}
        speedMax={1.1}
        speedScale={1}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px]" />
      </div>


      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3"
          >
            Start Today Free Consultation

          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Ready to transform

            <br />
            <span className="text-gray-400 dark:text-white/30">your business operations?</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-800 dark:text-white/80 sm:text-lg"
        >
          Join 500+ businesses across 15+ industries that use R-Core to unify
          their ERP, CRM, and communications. Book a free demo and see the
          platform live tailored to your industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/request-demo"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-9 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 sm:w-auto"
          >
            <CalendarDays size={15} />
            Request a Free Demo
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 hover:border-blue-500 dark:hover:border-white/30 hover:bg-blue-50 dark:hover:bg-white/10 px-9 text-sm font-semibold text-gray-800 dark:text-white transition-all duration-200 sm:w-auto"
          >
            <PhoneCall size={15} />
            Talk to Sales
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-xs text-foreground font-medium "
            >
              {item}
            </span>
          ))}
        </motion.div>

      </div>

    </section>
  );
}