"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-sm mx-auto">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.number;
        const isActive = currentStep === step.number;

        return (
          <div key={step.number} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300",
                  isCompleted &&
                    "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500",
                  isActive &&
                    "border-blue-600 bg-white text-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.12)] dark:border-blue-400 dark:bg-[#0b1628] dark:text-blue-400",
                  !isCompleted &&
                    !isActive &&
                    "border-foreground/30 bg-white text-foreground ",
                )}
              >
                {isCompleted ? (
                  <Check size={13} strokeWidth={2.5} />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300",
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isCompleted
                      ? "text-foreground"
                      : "text-foreground",
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mb-5 h-px w-16 transition-all duration-500 sm:w-20",
                  isCompleted
                    ? "bg-blue-500 dark:bg-blue-500"
                    : "bg-gray-200 dark:bg-white/10",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
