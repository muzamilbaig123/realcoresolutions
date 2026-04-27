"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionHeading from "@/components/Sectionheading";

const STORY = [
  {
    badge: "2018 The Beginning",
    title: "Founded with a Purpose",
    description: (
      <>
        <p>
          RealCore Solutions was established in Karachi, Pakistan, with a single
          clear vision — to give growing businesses access to the same quality
          of enterprise software that only large corporations could afford.
        </p>
        <p>
          Our founders identified a massive gap in the market: local businesses
          were struggling with outdated systems, spreadsheets, and disconnected
          tools. RealCore was built to solve that — from day one.
        </p>
      </>
    ),
    image: "/images/story/founding.webp",
  },
  {
    badge: "2019 First Major Launch",
    title: "R-Core ERP Goes Live",
    description: (
      <>
        <p>
          After months of development and client research, R-Core ERP v1.0 was
          launched — covering sales, procurement, finance, and inventory in one
          unified platform.
        </p>
        <p>
          Our first clients immediately saw results: reduced manual work,
          faster reporting, and a single source of truth for their entire
          business operation.
        </p>
      </>
    ),
    image: "/images/story/erp-launch.webp",
  },
  {
    badge: "2021 — Real Estate Expansion",
    title: "Introducing R-Core REMS",
    description: (
      <>
        <p>
          Recognising the unique needs of Pakistan's booming real estate sector,
          we launched the R-Core Data Suite — a dedicated platform for property
          developers, brokers, and agents.
        </p>
        <p>
          REMS brought property management, lease tracking, sales pipelines, and
          client portals together for the first time in one seamless solution.
        </p>
      </>
    ),
    image: "/images/story/rems-launch.webp",
  },
  {
    badge: "2022 Communications Layer",
    title: "SMS & WhatsApp Solutions",
    description: (
      <>
        <p>
          We expanded beyond ERP to launch our communications platform —
          enabling businesses to send bulk SMS, OTP messages, WhatsApp
          broadcasts, and automated notifications directly from within their
          workflows.
        </p>
        <p>
          This made RealCore a full-stack business platform — not just software,
          but the communication layer that ties operations to customers.
        </p>
      </>
    ),
    image: "/images/story/communications.webp",
  },
  {
    badge: "2023 Scaling Fast",
    title: "300+ Businesses & Counting",
    description: (
      <>
        <p>
          By 2023, RealCore had crossed 300 active business clients across
          retail, hospitality, logistics, manufacturing, and education — with a
          98% retention rate that speaks to the quality of our product and
          support.
        </p>
        <p>
          We grew our team, expanded our support infrastructure, and launched
          the Customer Portal — giving clients a self-service experience for the
          first time.
        </p>
      </>
    ),
    image: "/images/story/growth.webp",
  },
  {
    badge: "2024 Global Reach",
    title: "500+ Clients, 10+ Countries",
    description: (
      <>
        <p>
          Today, RealCore Solutions serves 500+ businesses across 15+ industries
          in 10+ countries. Our platform continues to evolve — with AI-powered
          modules, advanced analytics, and integrations built for the future.
        </p>
        <p>
          We're just getting started. Our mission remains the same as day one:
          to power real businesses with software that actually works.
        </p>
      </>
    ),
    image: "/images/story/global.webp",
  },
];

export default function OurStorySection() {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Story"
          title="From Pakistan to the World"
          highlight="A journey built on trust"
          description="Every milestone in our journey was shaped by our clients' needs and our commitment to building software that makes a real difference."
        />
      </div>

      <TracingBeam className="px-6">
        <div className="mx-auto max-w-2xl antialiased pt-4 relative">
          {STORY.map((item, index) => (
            <div key={index} className="mb-14">
              {/* Badge */}
              <span className="inline-block rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold px-4 py-1 mb-4">
                {item.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>

              {/* Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={600}
                  className="rounded-2xl mb-6 w-full object-cover border border-gray-100 dark:border-white/[0.07]"
                />
              )}

              {/* Description */}
              <div className="space-y-3 text-sm leading-relaxed text-foreground [&_p]:text-sm [&_p]:leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}