"use client";

import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  label: string;
  duration: "30min" | "1hour";
}

interface TimeSlotSelectorProps {
  selectedDate: Date | null;
  selectedDuration: "30min" | "1hour" | null;
  selectedTime: string | null;
  onDurationChange: (d: "30min" | "1hour") => void;
  onTimeSelect: (time: string) => void;
}

const SLOTS_30: TimeSlot[] = [
  { time: "09:00", label: "9:00 AM", duration: "30min" },
  { time: "09:30", label: "9:30 AM", duration: "30min" },
  { time: "10:00", label: "10:00 AM", duration: "30min" },
  { time: "10:30", label: "10:30 AM", duration: "30min" },
  { time: "11:00", label: "11:00 AM", duration: "30min" },
  { time: "11:30", label: "11:30 AM", duration: "30min" },
  { time: "12:00", label: "12:00 PM", duration: "30min" },
  { time: "14:00", label: "2:00 PM", duration: "30min" },
  { time: "14:30", label: "2:30 PM", duration: "30min" },
  { time: "15:00", label: "3:00 PM", duration: "30min" },
  { time: "15:30", label: "3:30 PM", duration: "30min" },
  { time: "16:00", label: "4:00 PM", duration: "30min" },
  { time: "16:30", label: "4:30 PM", duration: "30min" },
  { time: "17:00", label: "5:00 PM", duration: "30min" },
];

const SLOTS_1H: TimeSlot[] = [
  { time: "09:00", label: "9:00 AM", duration: "1hour" },
  { time: "10:00", label: "10:00 AM", duration: "1hour" },
  { time: "11:00", label: "11:00 AM", duration: "1hour" },
  { time: "12:00", label: "12:00 PM", duration: "1hour" },
  { time: "14:00", label: "2:00 PM", duration: "1hour" },
  { time: "15:00", label: "3:00 PM", duration: "1hour" },
  { time: "16:00", label: "4:00 PM", duration: "1hour" },
];

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
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

export default function TimeSlotSelector({
  selectedDate,
  selectedDuration,
  selectedTime,
  onDurationChange,
  onTimeSelect,
}: TimeSlotSelectorProps) {
  const slots = selectedDuration === "1hour" ? SLOTS_1H : SLOTS_30;

  const formattedDate = selectedDate
    ? `${WEEKDAYS[selectedDate.getDay()]}, ${MONTHS_SHORT[selectedDate.getMonth()]} ${selectedDate.getDate()}`
    : "";

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
          Step 2 of 3
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Select a Time
        </h2>
        {selectedDate && (
          <p className="mt-1 text-sm text-gray-500 dark:text-white/40">
            Available slots for{" "}
            <span className="font-medium text-gray-700 dark:text-white/70">
              {formattedDate}
            </span>
          </p>
        )}
      </div>

      {/* Duration Toggle */}
      <div>
        <p className="text-xs font-medium text-gray-500 dark:text-white/40 mb-2.5 uppercase tracking-wider">
          Session Duration
        </p>
        <div className="flex gap-2">
          {(["30min", "1hour"] as const).map((dur) => (
            <button
              key={dur}
              onClick={() => {
                onDurationChange(dur);
                onTimeSelect(""); // reset time on duration change
              }}
              className={cn(
                "flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                selectedDuration === dur
                  ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 dark:border-white/10 dark:bg-[#0b1628] dark:text-white/70 dark:hover:border-blue-500/40",
              )}
            >
              <Clock size={13} />
              {dur === "30min" ? "30 Minutes" : "1 Hour"}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <p className="text-xs font-medium text-gray-500 dark:text-white/40 mb-2.5 uppercase tracking-wider">
          Available Times (PKT)
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {slots.map((slot) => (
            <button
              key={slot.time}
              onClick={() => onTimeSelect(slot.time)}
              className={cn(
                "rounded-xl border py-2.5 text-sm font-medium transition-all duration-150",
                selectedTime === slot.time
                  ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
                  : "border-gray-100 bg-gray-50 text-gray-700 hover:border-blue-300 hover:bg-white dark:border-white/[0.07] dark:bg-[#0b1628] dark:text-white/70 dark:hover:border-blue-500/40",
              )}
            >
              {slot.label}
            </button>
          ))}
        </div>
      </div>

      {selectedTime && selectedDuration && (
        <div className="flex items-center gap-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 px-4 py-3">
          <Clock
            size={14}
            className="text-blue-600 dark:text-blue-400 shrink-0"
          />
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <span className="font-semibold">
              {slots.find((s) => s.time === selectedTime)?.label}
            </span>{" "}
            · {selectedDuration === "30min" ? "30 minutes" : "1 hour"} ·{" "}
            {formattedDate}
          </p>
        </div>
      )}
    </div>
  );
}
