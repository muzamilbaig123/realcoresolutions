import BlogSection from "@/components/home/BlogSection";
import CTA from "@/components/home/CTA";
import HeroParallax from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WorldMapSection from "@/components/home/WorldMapSection";
import IndustryTabs from "@/components/IndustryTabs";
import PlatformShowcase from "@/components/PlatformShowcase";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "RealCoreSolutions Enterprise ERP, CRM & Business Software",
  description:
    "Accelerate your business growth with smart, scalable ERP, CRM and communication solutions. Trusted by 500+ businesses worldwide.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroParallax />
      <WhatWeOffer />
      <StatsSection />
      <WorldMapSection />
      <IndustryTabs />
      <PlatformShowcase />
      <Testimonials />
      <BlogSection />
      <CTA />
    </>
  );
}
