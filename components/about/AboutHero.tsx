// import React from "react";
// import { cn } from "@/lib/utils";
// import { Spotlight } from "@/components/ui/spotlight";

// export default function AboutHeroSection() {
//   return (
//     <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
//       <div
//         className={cn(
//           "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
//           "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
//         )}
//       />

//       <Spotlight
//         className="-top-40 left-0 md:-top-20 md:left-60"
//         fill="white"
//       />

//       <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
//         <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-blue-400">
//           About RealCore Solutions
//         </p>
//         <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
//           Built to Power <br /> Enterprise Growth.
//         </h1>
//         <p className="mx-auto mt-4 max-w-2xl text-center text-base font-normal text-neutral-400 leading-relaxed">
//           RealCore Solutions is a Karachi-based enterprise software company
//           delivering ERP, CRM, POS, and communication platforms to 500+
//           businesses across 15+ industries worldwide. We build software that
//           actually works for real businesses, at real scale.
//         </p>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

interface AboutHeroSectionProps {
  badge?: string;
  title1?: React.ReactNode;
  title2?: React.ReactNode;
  description?: string;
  spotlightFill?: string;
  height?: string;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function GlobalHeroSection({
  badge = "About RealCore Solutions",
  title1 = (
    <>
      Built to Power <br /> Enterprise Growth.
    </>
  ),
  title2 = (
    <>
      Built to Power <br /> Enterprise Growth.
    </>
  ),
  description = `RealCore Solutions is a Karachi-based enterprise software company delivering ERP, CRM, POS, and communication platforms to 500+ businesses across 15+ industries worldwide. We build software that actually works for real businesses, at real scale.`,
  spotlightFill = "white",
  height = "h-[40rem]",
  className,
  badgeClassName,
  titleClassName,
  descriptionClassName,
}: AboutHeroSectionProps) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center",
        height,
        className
      )}
    >
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill={spotlightFill}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        {/* Badge */}
        <p
          className={cn(
            "mb-4 text-center text-xs font-semibold uppercase tracking-widest text-blue-400",
            badgeClassName
          )}
        >
          {badge}
        </p>

        {/* Title */}
        <h1
          className={cn(
            "bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl",
            titleClassName
          )}
        >
          {title1} <br /> {title2} 
        </h1>

        {/* Description */}
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-center text-base font-normal leading-relaxed text-neutral-400",
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}