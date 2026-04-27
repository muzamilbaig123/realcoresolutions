import { CardSpotlight } from "@/components/ui/card-spotlight";
import {
  Target,
  Telescope,
  Lightbulb,
  Settings2,
  Handshake,
  Rocket,
  Check,
} from "lucide-react";
import SectionHeading from "../Sectionheading";

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses of every size with enterprise-grade ERP, CRM, and communication tools — making powerful technology accessible, affordable, and built for real operations.",
    points: [
      "Simplify complex business processes",
      "Deliver measurable ROI from day one",
      "Support every industry with tailored solutions",
    ],
  },
  {
    icon: Telescope,
    title: "Our Vision",
    description:
      "To become the most trusted enterprise software partner across South Asia and beyond — powering the next generation of businesses with intelligent, scalable platforms.",
    points: [
      "Lead ERP innovation in emerging markets",
      "Expand to 50+ countries by 2030",
      "Set the standard for enterprise software quality",
    ],
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description:
      "We believe great software is built on integrity, innovation, and a genuine commitment to our clients' success — not just feature lists and sales pitches.",
    points: [
      "Client success above everything",
      "Transparency in every engagement",
      "Continuous innovation and improvement",
    ],
  },
  {
    icon: Settings2,
    title: "Our Approach",
    description:
      "We don't believe in one-size-fits-all. Every implementation is tailored to your industry, your workflow, and your team — with dedicated support every step of the way.",
    points: [
      "Industry-specific customisation",
      "Dedicated onboarding & migration team",
      "Ongoing support post-launch",
    ],
  },
  {
    icon: Handshake,
    title: "Our Commitment",
    description:
      "We are committed to long-term partnerships — not just software licenses. Our team is with you from the first demo to full-scale deployment and beyond.",
    points: [
      "24/7 technical support",
      "Regular platform updates & improvements",
      "Proactive account management",
    ],
  },
  {
    icon: Rocket,
    title: "Our Impact",
    description:
      "With 500+ businesses served across 15+ industries in 10+ countries, our platforms have helped clients reduce costs, eliminate inefficiencies, and scale faster.",
    points: [
      "500+ businesses transformed",
      "98% client retention rate",
      "15+ industries powered by R-Core",
    ],
  },
];

export default function MissionVisionSection() {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Who We Are"
          title="Driven by purpose,"
          highlight="built for scale?"
          description="Everything we do at RealCore is grounded in a clear mission, a bold
            vision, and values that put our clients first."
        />

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, description, points }) => (
            <CardSpotlight
              key={title}
              className="h-auto w-full bg-gray-900 dark:bg-gray-900 border border-white/10"
            >
              {/* Icon */}
              <div className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 mb-5">
                <Icon size={18} className="text-white" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <p className="relative z-20 text-lg font-semibold text-white mb-2">
                {title}
              </p>

              {/* Description */}
              <p className="relative z-20 text-sm text-white/80 leading-relaxed mb-5">
                {description}
              </p>

              {/* Points */}
              <ul className="relative z-20 space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check
                      size={14}
                      className="text-blue-400 mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-white">{point}</span>
                  </li>
                ))}
              </ul>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
