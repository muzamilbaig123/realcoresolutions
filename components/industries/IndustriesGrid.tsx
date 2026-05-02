import { HoverEffect } from "@/components/ui/card-hover-effect";
import SectionHeading from "@/components/Sectionheading";

const industries = [
  {
    title: "Real Estate & Construction",
    description:
      "Property development, sales pipelines, lease management, construction tracking, and client portals — all in one connected platform.",
    link: "/industries",
  },
  {
    title: "Retail & Trading",
    description:
      "POS, inventory management, multi-branch operations, customer loyalty, and real-time sales analytics for modern retail businesses.",
    link: "/industries",
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Hotel management, booking systems, guest experience tools, kitchen operations, and billing automation for hospitality businesses.",
    link: "/industries",
  },
  {
    title: "Logistics & Distribution",
    description:
      "Fleet tracking, route optimisation, warehouse management, shipment tracking, and delivery automation at scale.",
    link: "/industries",
  },
  {
    title: "Manufacturing",
    description:
      "Production planning, quality control, supply chain management, BOQ tracking, and contractor management for manufacturers.",
    link: "/industries",
  },
  {
    title: "Education",
    description:
      "Student information systems, course management, attendance tracking, fee collection, and institutional reporting platforms.",
    link: "/industries",
  },
  {
    title: "Healthcare",
    description:
      "Patient management, appointment scheduling, medical records, billing, and compliance tools for healthcare providers.",
    link: "/industries",
  },
  {
    title: "Import & Export",
    description:
      "Trade documentation, customs compliance, shipment tracking, vendor management, and financial reporting for trade businesses.",
    link: "/industries",
  },
  {
    title: "Finance & Banking",
    description:
      "Account management, transaction processing, compliance reporting, and client communication tools built for financial institutions.",
    link: "/industries",
  },
  {
    title: "Professional Services",
    description:
      "Project delivery, resource planning, client billing, time tracking, and contract management for service-based businesses.",
    link: "/industries",
  },
  {
    title: "Food & Beverage",
    description:
      "Menu management, kitchen order systems, inventory tracking, multi-outlet operations, and customer loyalty for F&B businesses.",
    link: "/industries",
  },
  {
    title: "E-Commerce",
    description:
      "B2B and B2C order management, payment processing, inventory sync, customer portals, and marketing automation for online businesses.",
    link: "/industries",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-white dark:bg-[#060d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="All Industries"
          title="Built for your sector,"
          highlight="ready from day one"
          description="Every industry has unique challenges. R-Core comes pre-configured for your sector — so you spend less time on setup and more time running your business."
        />
        <HoverEffect items={industries} />
      </div>
    </section>
  );
}
