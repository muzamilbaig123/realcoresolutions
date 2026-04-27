"use client";

import { CheckCircle2, Calendar, Clock, User } from "lucide-react";

interface SuccessScreenProps {
  date: Date | null;
  time: string | null;
  duration: "30min" | "1hour" | null;
  name: string;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TIME_LABELS: Record<string, string> = {
  "09:00": "9:00 AM",
  "09:30": "9:30 AM",
  "10:00": "10:00 AM",
  "10:30": "10:30 AM",
  "11:00": "11:00 AM",
  "11:30": "11:30 AM",
  "12:00": "12:00 PM",
  "14:00": "2:00 PM",
  "14:30": "2:30 PM",
  "15:00": "3:00 PM",
  "15:30": "3:30 PM",
  "16:00": "4:00 PM",
  "16:30": "4:30 PM",
  "17:00": "5:00 PM",
};

export default function SuccessScreen({
  date,
  time,
  duration,
  name,
}: SuccessScreenProps) {
  const formattedDate = date
    ? `${WEEKDAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    : "";

  return (
    <div className="flex flex-col items-center gap-8 py-8 text-center">
      {/* Icon */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
        <CheckCircle2
          size={40}
          className="text-blue-600 dark:text-blue-400"
          strokeWidth={1.5}
        />
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-100 dark:bg-blue-500/10 opacity-60" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Demo Booked!
        </h2>
        <p className="text-sm text-foreground max-w-xs mx-auto leading-relaxed">
          Thank you{name ? `, ${name}` : ""}! Our team will confirm your demo
          shortly and send a calendar invite to your email.
        </p>
      </div>

      {/* Booking summary */}
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-[#0b1628] divide-y divide-gray-100 dark:divide-white/[0.06]">
        <div className="flex items-center gap-3 px-5 py-4">
          <Calendar
            size={15}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground">
              Date
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-4">
          <Clock
            size={15}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground">
              Time & Duration
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {time ? TIME_LABELS[time] : ""} ·{" "}
              {duration === "30min" ? "30 minutes" : "1 hour"} (PKT)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-4">
          <User
            size={15}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground">
              Contact
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              connect@realcoresolutions.com
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-foreground">
        Need to change something? Email us at{" "}
        <a
          href="mailto:connect@realcoresolutions.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          connect@realcoresolutions.com
        </a>
      </p>
    </div>
  );
}
