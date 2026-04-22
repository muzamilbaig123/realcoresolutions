import HeroParallax from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WorldMapSection from "@/components/home/WorldMapSection";
import IndustryTabs from "@/components/IndustryTabs";
import PlatformShowcase from "@/components/PlatformShowcase";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <WhatWeOffer />
      <StatsSection />
      <WorldMapSection />
      <IndustryTabs />
      <PlatformShowcase />
    </>
  );
}

