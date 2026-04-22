"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function PlatformShowcase() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-[#060d1f]">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
              One Platform
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
              Everything Connected,
              <br />
              <span className="text-gray-400 dark:text-white/30">
                Nothing Left Behind
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-base text-foreground leading-relaxed">
              See how R-Core unifies your entire business from sales and
              finance to HR, inventory, and customer communications in a
              single intelligent platform.
            </p>
          </div>
        }
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
        >
          <source src="/videos/platform-demo.mp4" type="video/mp4" />
        </video>
      </ContainerScroll>
    </div>
  );
}