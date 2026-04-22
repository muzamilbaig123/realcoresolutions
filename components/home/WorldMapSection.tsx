"use client";

import { motion } from "motion/react";
import WorldMap from "@/components/ui/world-map";
import { Check } from "lucide-react";

const MAP_DOTS = [
  { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 51.5074, lng: -0.1278 } },
  { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 25.2048, lng: 55.2708 } },
  { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 28.6139, lng: 77.2090 } },
  { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 1.3521, lng: 103.8198 } },
  { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: 40.7128, lng: -74.0060 } },
  { start: { lat: 24.8607, lng: 67.0011 }, end: { lat: -33.8688, lng: 151.2093 } },
];

const WHY_POINTS = [
  { title: "Enterprise-grade security", desc: "Bank-level encryption, role-based access, and audit trails keep your data safe." },
  { title: "Industry-specific customisation", desc: "Pre-built modules for real estate, retail, hospitality, logistics, and 10+ more sectors." },
  { title: "Dedicated onboarding & support", desc: "A dedicated team handles setup, migration, and training so you go live without friction." },
  { title: "Seamless ERP + CRM integration", desc: "Sales, finance, HR, and communications in one unified platform — no data silos." },
  { title: "Real-time data & reporting", desc: "Live dashboards and custom reports give you decisions-ready insights at any time." },
  { title: "Scalability & performance", desc: "Easily scales with your business — from startup to enterprise without performance issues." },
  { title: "Cloud-based accessibility", desc: "Access your system securely from anywhere, anytime, on any device." },
  { title: "Automation & workflows", desc: "Automate repetitive tasks and streamline operations with smart workflows." },
  { title: "Third-party integrations", desc: "Connect with tools like payment gateways, email platforms, and more." },
];

const VP = { once: true, margin: "-60px" } as const;

export default function WorldMapSection() {
  return (
    <section className="bg-white dark:bg-[#060d1f]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Map + Sticky Scroll ─────────────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">

          {/* LEFT — sticky map */}
          <div className="hidden lg:flex items-start">
            <div className="sticky top-24 w-full py-24">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4 }}
                className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3"
              >
                Global Reach
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
              >
                Trusted by businesses <br /> across the globe
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-sm text-gray-500 dark:text-white mb-10 max-w-sm"
              >
                From Karachi to London R-Core powers operations for 500+ businesses
                across 15+ industries worldwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={VP}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <WorldMap dots={MAP_DOTS} lineColor="#3b82f6" />
              </motion.div>
            </div>
          </div>

          <div className="py-24 space-y-10">

            <div className="lg:hidden mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                Global Reach
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                Trusted by businesses across the globe
              </h2>
              <WorldMap dots={MAP_DOTS} lineColor="#3b82f6" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400"
            >
              Why RealCore
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              Built different. <br />
              <span className="text-gray-400 dark:text-white/30">Proven in the field.</span>
            </motion.h3>

            <div className="space-y-0 divide-y divide-gray-100 dark:divide-white/[0.06]">
              {WHY_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                  className="flex gap-4 py-7"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 dark:bg-blue-500/10">
                    <Check size={13} className="text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {point.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-white leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


