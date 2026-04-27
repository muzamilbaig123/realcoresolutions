"use client";

import { useState } from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import ConsultationSuccess from "@/components/consultation/ConsultationSuccess";
import {
  Phone,
  MessageSquare,
  Video,
  Mail,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";

const PERKS = [
  {
    icon: MessageSquare,
    title: "Real Conversation",
    desc: "No scripts, no pitches just honest advice for your business.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    desc: "Our team gets back to you within 2 business hours.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Talk directly with someone who understands your industry.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Obligation",
    desc: "Completely free. No commitment, no pressure.",
  },
];

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#060d1f] overflow-hidden">
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center gap-10 lg:py-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 px-4 py-1.5">
              <Phone size={13} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
                Free No obligation
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl leading-[1.1] mb-4">
                Talk to an
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  Expert Free
                </span>
              </h1>
              <p className="text-base text-foreground max-w-md leading-relaxed">
                Not a sales pitch. A real conversation about your business
                challenges and how we can help you solve them.
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
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                      {title}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact note */}
            <p className="text-xs text-foreground border-t border-gray-100 dark:border-white/[0.06] pt-6">
              Prefer to reach us directly?{" "}
              <a
                href="mailto:connect@realcoresolutions.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                connect@realcoresolutions.com
              </a>
            </p>
          </div>

          <div className="flex flex-col">
            <div className="rounded-3xl border border-gray-100 dark:border-white/[0.07] bg-white/80 dark:bg-[#0b1628]/80 backdrop-blur-sm shadow-xl shadow-gray-100/50 dark:shadow-none p-8">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Request a Free Consultation
                    </h2>
                    <p className="text-sm text-foreground">
                      Fill in the details and we'll reach out to you shortly.
                    </p>
                  </div>
                  <ConsultationForm
                    onSubmit={(name) => {
                      setSubmittedName(name);
                      setSubmitted(true);
                    }}
                  />
                </>
              ) : (
                <ConsultationSuccess name={submittedName} />
              )}
            </div>

            {!submitted && (
              <p className="mt-4 text-center text-xs text-foreground">
                Your data is safe. We never share your information.
              </p>
            )}
          </div>
        </div>

        {!submitted && (
          <div className="mt-20">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              What happens next?
            </p>
            <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-10">
              Simple 3-step process
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  icon: Mail,
                  title: "Submit the Form",
                  desc: "Fill in your details and tell us what you need help with.",
                },
                {
                  step: "02",
                  icon: Phone,
                  title: "We Reach Out",
                  desc: "Our expert contacts you via your preferred method within 2 hours.",
                },
                {
                  step: "03",
                  icon: Video,
                  title: "Consultation Happens",
                  desc: "A focused conversations we listen, advise, and guide you forward.",
                },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-[#0b1628] p-6"
                >
                  <span className="absolute top-5 right-5 text-3xl font-bold text-gray-100 dark:text-white/[0.06] select-none">
                    {step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10 mb-4">
                    <Icon
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {title}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
