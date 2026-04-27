"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";
import SectionHeading from "../Sectionheading";

const ROW_ONE = [
  {
    quote:
      "R-Core completely transformed how we manage our real estate portfolio. From property listings to lease tracking, everything is now in one place. Our team efficiency improved by 60% in the first quarter alone.",
    name: "Ahmed Raza",
    title: "CEO, Landmark Developers — Karachi",
  },
  {
    quote:
      "The ERP implementation was smooth and the onboarding team was exceptional. We went live within 3 weeks with zero downtime. The financial reporting module alone saved us hours every month.",
    name: "Sara Khan",
    title: "CFO, Al-Hafeez Trading Co. — Lahore",
  },
  {
    quote:
      "We tried two other ERP systems before R-Core. None of them understood our hospitality workflow. R-Core built exactly what we needed — booking management, billing, and guest CRM all connected.",
    name: "Imran Sheikh",
    title: "Operations Director, Grand Luxury Hotels — Dubai",
  },
  {
    quote:
      "The WhatsApp and SMS integration is a game-changer for our customer communication. Automated order updates, payment reminders, and marketing campaigns — all from one dashboard.",
    name: "Fatima Malik",
    title: "Head of Marketing, RetailPro Stores — Islamabad",
  },
  {
    quote:
      "R-Core's inventory and supply chain module gave us real-time visibility across 12 warehouses. We reduced stock discrepancies by 85% and cut procurement costs significantly.",
    name: "Usman Tariq",
    title: "Supply Chain Manager, FastLog Logistics — Karachi",
  },
];

const ROW_TWO = [
  {
    quote:
      "The customer portal feature is outstanding. Our clients can raise tickets, track orders, and download invoices on their own — our support workload dropped by 40% immediately.",
    name: "Nadia Hussain",
    title: "Customer Success Lead, TechBridge Solutions — Lahore",
  },
  {
    quote:
      "As a manufacturing company, we needed something that connected production planning with inventory and finance. R-Core delivered that seamlessly. The BOQ module is particularly powerful.",
    name: "Khalid Mehmood",
    title: "Plant Manager, PakSteel Industries — Faisalabad",
  },
  {
    quote:
      "We manage 300+ contractors across multiple sites. R-Core's contractors management module keeps everything tracked — contracts, payments, performance. It's become central to our operations.",
    name: "Zainab Siddiqui",
    title: "Project Director, BuildRight Construction — Karachi",
  },
  {
    quote:
      "The educational management system handled everything from student enrollment to exam results. Parents, teachers, and admin staff — everyone has the right access to the right information.",
    name: "Dr. Asif Mirza",
    title: "Principal, Beacon House Academy — Rawalpindi",
  },
  {
    quote:
      "R-Core's POS integrated perfectly with our inventory. Every sale updates stock in real-time across all 8 branches. The sales reporting dashboards give us exactly the insights we need daily.",
    name: "Hassan Ali",
    title: "Retail Director, Style Avenue — Karachi",
  },
];

const VP = { once: true, margin: "-60px" } as const;

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-24 sm:py-32 overflow-hidden">
      <SectionHeading
        badge="Client Stories"
        title="Trusted by businesses"
        highlight="that demand results"
      />

      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <InfiniteMovingCards
          items={ROW_ONE}
          direction="left"
          speed="slow"
          pauseOnHover
        />
        <InfiniteMovingCards
          items={ROW_TWO}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
