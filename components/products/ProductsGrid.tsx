"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/Sectionheading";

const VP = { once: true, margin: "-80px" } as const;

const PRODUCTS = [
  {
    slug: "erp-crm",
    badge: "Core Product",
    name: "Growth ERP & CRM",
    description:
      "End-to-end enterprise resource planning with CRM built in. Manage sales, procurement, finance, HR, and operations from a single platform — customised for your industry.",
    image: "/images/offers/growtherp.png",
    span: "lg:row-span-2",
    rounded: "lg:rounded-l-[2rem]",
    contentRounded: "lg:rounded-l-[calc(2rem+1px)]",
    imageFill: true,
    imageContainerClass:
      "relative min-h-64 w-full grow max-lg:mx-auto max-lg:max-w-sm",
  },
  {
    slug: "rems",
    badge: "Real Estate",
    name: "R-Core Data Suite (REMS)",
    description:
      "Property management, developer tools, lease tracking, and client pipelines — built for real estate professionals.",
    image: "/images/offers/realestate.png",
    span: "max-lg:row-start-1",
    rounded: "max-lg:rounded-t-[2rem]",
    contentRounded: "max-lg:rounded-t-[calc(2rem+1px)]",
    imageFill: false,
    imageContainerClass:
      "flex flex-1 items-end overflow-hidden px-8 pt-6 max-lg:pb-10 sm:px-10",
  },
  {
    slug: "portal",
    badge: "Self-Service",
    name: "Customer Portal",
    description:
      "Give your clients a branded self-service portal. Manage accounts, raise tickets, track orders, and access documents — without calling support.",
    image: "/images/offers/customerportal.png",
    span: "max-lg:row-start-3 lg:row-span-2",
    rounded: "lg:rounded-r-[2rem]",
    contentRounded: "lg:rounded-r-[calc(2rem+1px)]",
    imageFill: true,
    imageContainerClass: "relative min-h-64 w-full grow",
  },
  {
    slug: "pos",
    badge: "Retail",
    name: "Point of Sale (POS)",
    description:
      "Fast, reliable POS for retail and hospitality. Inventory sync, multi-branch support, and real-time sales reporting.",
    image: "/images/offers/POS.png",
    span: "max-lg:row-start-2 lg:col-start-2 lg:row-start-2",
    rounded: "",
    contentRounded: "",
    imageFill: false,
    imageContainerClass:
      "flex flex-1 items-end overflow-hidden px-8 pt-6 max-lg:pb-10 sm:px-10",
  },
];

const BOTTOM_PRODUCTS = [
  {
    slug: "sms",
    badge: "Communications",
    name: "SMS & WhatsApp Solutions",
    description:
      "Bulk SMS, OTP, A2P messaging, and WhatsApp Business API — one communications layer that plugs directly into your ERP workflows.",
    image: "/images/offers/sms.png",
    rounded: "lg:rounded-bl-[2rem]",
    contentRounded: "lg:rounded-bl-[calc(2rem+1px)]",
  },
  {
    slug: "email",
    badge: "Communications",
    name: "Email Solutions Suite",
    description:
      "Reliable transactional email, marketing campaigns, and SMTP integration — with full delivery analytics and API access.",
    image: "/images/offers/dev.png",
    rounded: "lg:rounded-br-[2rem]",
    contentRounded: "lg:rounded-br-[calc(2rem+1px)]",
  },
];

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-gray-200 dark:bg-white/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40">
      {label}
    </span>
  );
}

export default function ProductsGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <SectionHeading
          badge="All Products"
          title="One ecosystem,"
          highlight="every business need"
          description="Six purpose-built products that work standalone or together — all connected under the R-Core platform."
        />

        {/* Main Grid — 3 cols × 2 rows */}
        <div className="mt-10 grid gap-4 sm:mt-4 lg:grid-cols-3 lg:grid-rows-2">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className={`group relative ${product.span}`}
            >
              <div
                className={`absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 ${product.rounded}`}
              />
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${product.contentRounded}`}
              >
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                  <Badge label={product.badge} />
                  <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    View product <ArrowRight size={13} />
                  </Link>
                </div>

                {product.imageFill ? (
                  <div className={product.imageContainerClass}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-top"
                      sizes="33vw"
                    />
                  </div>
                ) : (
                  <div className={product.imageContainerClass}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full rounded-t-xl object-cover object-top max-lg:max-w-xs"
                    />
                  </div>
                )}
              </div>
              <div
                className={`pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] ${product.rounded}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {BOTTOM_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="group relative"
            >
              <div
                className={`absolute inset-px rounded-lg bg-gray-50 dark:bg-gray-800 ${product.rounded}`}
              />
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${product.contentRounded}`}
              >
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <Badge label={product.badge} />
                  <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    View product <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="flex flex-1 items-end overflow-hidden px-8 pt-6 pb-0 sm:px-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={180}
                    className="w-full rounded-t-xl object-cover object-top max-lg:max-w-sm"
                  />
                </div>
              </div>
              <div
                className={`pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/[0.07] ${product.rounded}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
