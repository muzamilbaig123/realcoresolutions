"use client";

import { CheckCircle2, Mail, Phone, Clock } from "lucide-react";

interface ConsultationSuccessProps {
  name: string;
}

export default function ConsultationSuccess({
  name,
}: ConsultationSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-8 py-6 text-center">
      {/* Icon */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
        <CheckCircle2
          size={40}
          className="text-blue-600 dark:text-blue-400"
          strokeWidth={1.5}
        />
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-100 dark:bg-blue-500/10 opacity-60" />
      </div>

      {/* Message */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Request Received!
        </h2>
        <p className="text-sm text-foreground max-w-xs mx-auto leading-relaxed">
          Thank you{name ? `, ${name}` : ""}! Our team will reach out to you
          shortly via your preferred contact method.
        </p>
      </div>

      {/* What's next */}
      <div className="w-full rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-[#0b1628] divide-y divide-gray-100 dark:divide-white/[0.06]">
        <div className="flex items-center gap-3 px-5 py-4">
          <Clock
            size={15}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-white/30">
              Response Time
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Within 2 business hours
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-4">
          <Phone
            size={15}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-white/30">
              Phone
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              +92 309 8882727
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-4">
          <Mail
            size={15}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-white/30">
              Email
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              connect@realcoresolutions.com
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-foreground">
        Need urgent help?{" "}
        <a
          href="tel:+923098882727"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Call us directly
        </a>
      </p>
    </div>
  );
}
