import { HoverEffect } from "@/components/ui/card-hover-effect";
import SectionHeading from "@/components/Sectionheading";

const values = [
  {
    title: "Client First",
    description:
      "Every decision we make starts with one question: does this help our clients succeed? Their growth is our purpose — not just a goal.",
    link: "#",
  },
  {
    title: "Integrity Always",
    description:
      "We operate with full transparency — in our pricing, our timelines, and our commitments. What we promise, we deliver.",
    link: "#",
  },
  {
    title: "Relentless Innovation",
    description:
      "The business world never stops evolving, and neither do we. We continuously improve our platform to stay ahead of what our clients need next.",
    link: "#",
  },
  {
    title: "Built for Scale",
    description:
      "We design every module and every feature to grow with our clients — from 10 users to 10,000, without rebuilding from scratch.",
    link: "#",
  },
  {
    title: "Deep Ownership",
    description:
      "We don't hand off and disappear. Our team takes full ownership of every implementation — from onboarding to long-term support.",
    link: "#",
  },
  {
    title: "Real Partnership",
    description:
      "We see every client relationship as a long-term partnership. Your wins are our wins, and we are invested in your success at every stage.",
    link: "#",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Values"
          title="The principles that"
          highlight="guide everything we do"
          description="Our values aren't words on a wall — they are the foundation of every product decision, every client conversation, and every line of code we ship."
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <HoverEffect items={values} />
      </div>
    </section>
  );
}