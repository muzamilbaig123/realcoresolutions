"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../Sectionheading";

const IMG = {
  erp: "/images/offers/growtherp.png",
  rems: "/images/offers/realestate.png",
  portal: "/images/offers/customerportalverticle.png",
  pos: "/images/offers/POS.png",
  sms: "/images/offers/sms.png",
  custom: "/images/offers/dev.png",
};

const VP = { once: true, margin: "-80px" } as const;

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-gray-200 dark:bg-white/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40">
      {label}
    </span>
  );
}

function LearnMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
    >
      Learn more <ArrowRight size={13} />
    </Link>
  );
}

export default function WhatWeOffer() {
  return (
    <section className="bg-white py-24 dark:bg-[#060d1f] sm:py-0 sm:pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <SectionHeading
          badge="What We Offer"
          title="Everything your business"
          highlight="needs to scale"
        />

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="group relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 lg:rounded-l-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <Badge label="Core Product" />
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Growth ERP &amp; CRM
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  End-to-end enterprise resource planning with CRM built in.
                  Manage sales, procurement, finance, HR, and operations from a
                  single platform — customised for your industry.
                </p>
                <LearnMore href="/products/erp-crm" />
              </div>
              <div className="relative min-h-64 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <Image
                  src={IMG.erp}
                  alt="ERP Dashboard"
                  fill
                  className="object-cover object-top"
                  sizes="33vw"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] lg:rounded-l-[2rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.17, ease: "easeOut" }}
            className="group relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 max-lg:rounded-t-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <Badge label="Real Estate" />
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  R-Core Data Suite (REMS)
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  Property management, developer tools, lease tracking, and
                  client pipelines built for real estate professionals.
                </p>
                <LearnMore href="/products/rems" />
              </div>
              <div className="flex flex-1 items-end overflow-hidden px-8 pt-6 max-lg:pb-10 sm:px-10">
                <Image
                  src={IMG.rems}
                  alt="Real Estate Suite"
                  width={400}
                  height={200}
                  className="w-full rounded-t-xl object-cover object-top max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] max-lg:rounded-t-[2rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="group relative max-lg:row-start-3 lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 lg:rounded-r-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <Badge label="Self-Service" />
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Customer Portal
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  Give your clients a branded self-service portal. Manage
                  accounts, raise tickets, track orders, and access documents —
                  without calling support.
                </p>
                <LearnMore href="/products/portal" />
              </div>
              <div className="relative min-h-64 w-full grow">
                <Image
                  src={IMG.portal}
                  alt="Customer Portal"
                  fill
                  className="object-cover object-top"
                  sizes="33vw"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] lg:rounded-r-[2rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="group relative max-lg:row-start-2 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <Badge label="Retail" />
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Point of Sale (POS)
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  Fast, reliable POS for retail and hospitality. Inventory sync,
                  multi-branch support, and real-time sales reporting.
                </p>
                <LearnMore href="/products/pos" />
              </div>
              <div className="flex flex-1 items-end overflow-hidden px-8 pt-6 max-lg:pb-10 sm:px-10">
                <Image
                  src={IMG.pos}
                  alt="Point of Sale"
                  width={360}
                  height={180}
                  className="w-full rounded-t-xl object-cover object-top max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07]" />
          </motion.div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.37, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <Badge label="Communications" />
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  SMS &amp; WhatsApp Solutions
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  Bulk SMS, OTP, A2P messaging, and WhatsApp Business API — one
                  communications layer that plugs directly into your ERP
                  workflows.
                </p>
                <LearnMore href="/products/sms" />
              </div>
              <div className="flex flex-1 items-end overflow-hidden px-8 pt-6 pb-0 sm:px-10">
                <Image
                  src={IMG.sms}
                  alt="SMS & WhatsApp"
                  width={500}
                  height={180}
                  className="w-full rounded-t-xl object-cover object-top max-lg:max-w-sm"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] lg:rounded-bl-[2rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.43, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <Badge label="Services" />
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Custom Development
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  Need something bespoke? Our team builds tailored modules,
                  integrations, and full custom solutions on top of the R-Core
                  platform — delivered on time.
                </p>
                <LearnMore href="/products/erp-crm" />
              </div>
              <div className="flex flex-1 items-end overflow-hidden px-8 pt-6 pb-0 sm:px-10">
                <Image
                  src={IMG.custom}
                  alt="Custom Development"
                  width={500}
                  height={180}
                  className="w-full rounded-t-xl object-cover object-top max-lg:max-w-sm"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] lg:rounded-br-[2rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
