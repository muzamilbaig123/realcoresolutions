import GlobalHeroSection from "@/components/about/AboutHero";
import AboutHeroSection from "@/components/about/AboutHero";
import CoreValuesSection from "@/components/about/CoreValues";
import MissionVissionSection from "@/components/about/MissionVission";
import OurStorySection from "@/components/about/OurStory";
import CTA from "@/components/home/CTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about RealCore Solutions delivering enterprise ERP and CRM to 500+ businesses across 15+ industries worldwide.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <GlobalHeroSection
        badge="About RealCore Solutions"
        title1="Built to Power "
        title2="Enterprise Growth."
        description="RealCore Solutions is a Karachi-based enterprise software company delivering ERP, CRM, POS, and communication platforms to 500+
  businesses across 15+ industries worldwide. We build software that
 actually works for real businesses, at real scale."
      />
      <MissionVissionSection />
      <OurStorySection />
      <CoreValuesSection />
      <CTA />
    </>
  );
}
