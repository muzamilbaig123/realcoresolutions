import { createMetadata } from "@/lib/metadata";
import GlobalHeroSection from "@/components/about/AboutHero";
import IndustryTabs from "@/components/IndustryTabs";
import CTA from "@/components/home/CTA";
import StatsSection from "@/components/home/StatsSection";
import IndustriesGrid from "@/components/industries/IndustriesGrid";

export const metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "RealCore Solutions delivers industry-specific ERP, CRM, and communication solutions for real estate, retail, hospitality, logistics, manufacturing, education, and more.",
  path: "/industries",
});

export default function Industries() {
  return (
    <div className="bg-white dark:bg-[#060d1f]">
      <GlobalHeroSection
        badge="Industries We Serve"
        title1="Powering Every Sector, "
        title2="One Solution at a Time."
        description="From real estate to healthcare RealCore Solutions delivers tailored ERP, CRM, and communication platforms built around the specific needs of your industry. 500+ businesses across 15+ sectors trust R-Core to run their operations."
      />

      <IndustryTabs />
      <IndustriesGrid />
      <StatsSection />

      <CTA />
    </div>
  );
}
