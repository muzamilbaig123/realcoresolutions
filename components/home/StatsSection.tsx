"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const STATS = [
  { value: 500, suffix: "+", label: "Growing businesses\nthat trust us" },
  { value: 15, suffix: "+", label: "Industries served\nacross the globe" },
  { value: 98, suffix: "%", label: "Client retention\nrate year on year" },
  { value: 50, suffix: "+", label: "Successfully completed\nprojects" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white dark:bg-[#060d1f] border-y border-gray-100 dark:border-white/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between gap-6 px-8 py-14
                ${i !== 0 ? "border-l border-gray-100 dark:border-white/20" : ""}
                ${i < 2 ? "max-lg:border-b max-lg:border-gray-100 dark:max-lg:border-white/20" : ""}
              `}
            >
              <p className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-tight text-foreground">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}