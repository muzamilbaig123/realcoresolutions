"use client";
import { Tabs } from "@/components/ui/tabs";
import { motion } from "motion/react";
import Image from "next/image";

const TabCard = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-foreground to-blue-900">
      <Image
        src={img}
        alt={title}
        fill
        unoptimized
        className="object-cover object-center opacity-40"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-white/80 max-w-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function IndustryTabs() {
  const VP = { once: true, margin: "-80px" } as const;

  const tabs = [
    {
      title: "Real Estate",
      value: "real-estate",
      content: (
        <TabCard
          title="Real Estate"
          description="Smart property management, tenant portals & digital listings all in one platform."
          img="/images/industries/realstate.png"
        />
      ),
    },
    {
      title: "Retail",
      value: "retail",
      content: (
        <TabCard
          title="Retail"
          description="Unified POS, inventory tracking & customer loyalty tools to grow your retail brand."
          img="/images/industries/retaill.png"
        />
      ),
    },
    {
      title: "Hospitality",
      value: "hospitality",
      content: (
        <TabCard
          title="Hospitality"
          description="Seamless bookings, guest experience management & kitchen ops all digitized."
          img="/images/industries/hospitality.png"
        />
      ),
    },
    {
      title: "Logistics",
      value: "logistics",
      content: (
        <TabCard
          title="Logistics"
          description="Real-time fleet tracking, route optimization & warehouse automation at scale."
          img="/images/industries/logistics.png"
        />
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <TabCard
          title="Education"
          description="LMS platforms, student portals & e-learning tools built for modern institutions."
          img="/images/industries/education.png"
        />
      ),
    },
    {
      title: "Healthcare",
      value: "healthcare",
      content: (
        <TabCard
          title="Healthcare"
          description="Patient management, appointment scheduling & telemedicine secure & compliant."
          img="/images/industries/healthcare.png"
        />
      ),
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-950 mb-24">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400"
        >
          Industries We Serve
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mx-auto mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          Powering Every Sector One,{" "} <br /> Solution at a Time

        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mx-auto mt-4 max-w-xl text-base text-gray-500 dark:text-gray-400"
        >
          From real estate to healthcare tailored digital solutions that drive
          growth, streamline operations, and deliver real results.
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full bg-red-7--00">
        <Tabs
          tabs={tabs}
          containerClassName="justify-center gap-1 mb-2"
          tabClassName="text-sm font-medium transition-colors px-5 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-700/50 hover:bg-gray-300 dark:hover:bg-gray-600/70"
          activeTabClassName="!rounded-[6px]"
        />
      </div>
    </section>
  );
}