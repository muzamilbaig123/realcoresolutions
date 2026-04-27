"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import StepIndicator from "@/components/request-demo/StepIndicator";
import DateSelector from "@/components/request-demo/DateSelector";
import TimeSlotSelector from "@/components/request-demo/TimeSlotSelector";
import DemoInfoForm, {
  DemoFormData,
} from "@/components/request-demo/DemoInfoForm";
import SuccessScreen from "@/components/request-demo/SuccessScreen";
import { Target, Clock, MessageCircle, ShieldCheck } from "lucide-react";

const STEPS = [
  { number: 1, label: "Date" },
  { number: 2, label: "Time" },
  { number: 3, label: "Details" },
];

const EMPTY_FORM: DemoFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  companySize: "",
  industry: "",
  message: "",
};

const PERKS = [
  {
    icon: Target,
    title: "Tailored to You",
    desc: "We walk you through the exact modules relevant to your industry.",
  },
  {
    icon: Clock,
    title: "30 or 60 Minutes",
    desc: "Choose a session length that fits your schedule.",
  },
  {
    icon: MessageCircle,
    title: "Live Q&A",
    desc: "Ask anything — our experts answer in real time.",
  },
  {
    icon: ShieldCheck,
    title: "No Commitment",
    desc: "Zero obligation. Just a conversation to see if we're a fit.",
  },
];

function canProceedStep1(date: Date | null): boolean {
  return date !== null;
}

function canProceedStep2(
  time: string | null,
  duration: "30min" | "1hour" | null,
): boolean {
  return time !== null && time !== "" && duration !== null;
}

function canProceedStep3(form: DemoFormData): boolean {
  return (
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.company.trim() !== "" &&
    form.companySize !== "" &&
    form.industry !== ""
  );
}

export default function RequestDemoPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Step 1
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // Step 2
  const [selectedDuration, setSelectedDuration] = useState<
    "30min" | "1hour" | null
  >("30min");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  // Step 3
  const [formData, setFormData] = useState<DemoFormData>(EMPTY_FORM);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: wire to your API / ERP / email
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const canNext =
    step === 1
      ? canProceedStep1(selectedDate)
      : step === 2
        ? canProceedStep2(selectedTime, selectedDuration)
        : canProceedStep3(formData);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#060d1f] overflow-hidden">
      {/* Background */}
      <DottedGlowBackground
        className="pointer-events-none"
        opacity={0.5}
        gap={18}
        radius={1.4}
        color="rgba(0,0,0,0.18)"
        darkColor="rgba(255,255,255,0.18)"
        glowColor="rgba(37,99,235,0.7)"
        darkGlowColor="rgba(96,165,250,0.85)"
        backgroundOpacity={0}
        speedMin={0.25}
        speedMax={1.1}
        speedScale={1}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_520px]">
          {/* Left */}
          <div className="flex flex-col justify-center gap-10 lg:py-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 px-4 py-1.5">
              <CalendarCheck
                size={13}
                className="text-blue-600 dark:text-blue-400"
              />
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
                Free · No obligation
              </span>
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-[3.25rem] leading-[1.1] mb-4">
                See RealCoreSolutions
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  in Action
                </span>
              </h1>
              <p className="text-base text-foreground max-w-md leading-relaxed">
                Book a live, personalised demo with one of our product experts.
                We'll show you exactly how RealCore fits your business — no
                generic slides, just real answers.
              </p>
            </div>

            {/* Perks */}
            <div className="flex flex-col gap-4">
              {PERKS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10 mt-0.5">
                    <Icon
                      size={15}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact note */}
            <p className="text-xs text-foreground border-t border-gray-100 dark:border-white/[0.06] pt-6">
              Questions before booking?{" "}
              <a
                href="mailto:connect@realcoresolutions.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                connect@realcoresolutions.com
              </a>
            </p>
          </div>

          {/*  Right */}
          <div className="flex flex-col">
            <div className="rounded-3xl border border-gray-100 dark:border-white/[0.07] bg-white/80 dark:bg-[#0b1628]/80 backdrop-blur-sm shadow-xl shadow-gray-100/50 dark:shadow-none">
              {!submitted ? (
                <>
                  {/* Step indicator */}
                  <div className="px-8 pt-8 pb-6 border-b border-gray-100 dark:border-white/[0.06]">
                    <StepIndicator steps={STEPS} currentStep={step} />
                  </div>

                  {/* Step content */}
                  <div className="px-8 py-8 min-h-[420px]">
                    {step === 1 && (
                      <DateSelector
                        selectedDate={selectedDate}
                        onSelect={setSelectedDate}
                      />
                    )}
                    {step === 2 && (
                      <TimeSlotSelector
                        selectedDate={selectedDate}
                        selectedDuration={selectedDuration}
                        selectedTime={selectedTime}
                        onDurationChange={setSelectedDuration}
                        onTimeSelect={setSelectedTime}
                      />
                    )}
                    {step === 3 && (
                      <DemoInfoForm data={formData} onChange={setFormData} />
                    )}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between px-8 pb-8 pt-2">
                    <button
                      onClick={handleBack}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
                        step === 1
                          ? "invisible"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-white/60 dark:hover:bg-white/5",
                      )}
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>

                    {step < 3 ? (
                      <button
                        onClick={handleNext}
                        disabled={!canNext}
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                          canNext
                            ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-white/20",
                        )}
                      >
                        Continue
                        <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!canNext || loading}
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                          canNext && !loading
                            ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-white/20",
                        )}
                      >
                        {loading ? (
                          <>
                            <svg
                              className="h-4 w-4 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                              />
                            </svg>
                            Booking...
                          </>
                        ) : (
                          <>
                            <CalendarCheck size={14} />
                            Book My Demo
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="px-8 py-12">
                  <SuccessScreen
                    date={selectedDate}
                    time={selectedTime}
                    duration={selectedDuration}
                    name={formData.firstName}
                  />
                </div>
              )}
            </div>

            {!submitted && (
              <p className="mt-4 text-center text-xs text-foreground">
                Your data is safe. We never share your information with third
                parties.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
