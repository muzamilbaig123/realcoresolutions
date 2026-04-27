"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DateSelectorProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function DateSelector({
  selectedDate,
  onSelect,
}: DateSelectorProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    setViewDate((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() - 1);
      return d;
    });
  };

  const nextMonth = () => {
    setViewDate((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() + 1);
      return d;
    });
  };

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    return d < today;
  };

  const isWeekend = (day: number) => {
    const dow = new Date(year, month, day).getDay();
    return dow === 0 || dow === 6;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  const isToday = (day: number) => {
    const d = new Date(year, month, day);
    return d.getTime() === today.getTime();
  };

  const canGoBack =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
          Step 1 of 3
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Pick a Date
        </h2>
        <p className="mt-1 text-sm text-foreground/80">
          Choose a weekday that works best for you.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-[#0b1628] p-5">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={prevMonth}
            disabled={!canGoBack}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
              canGoBack
                ? "border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60 hover:bg-white dark:hover:bg-white/5"
                : "border-transparent text-gray-200 dark:text-white/10 cursor-not-allowed",
            )}
          >
            <ChevronLeft size={15} />
          </button>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {MONTHS[month]} {year}
          </span>
          <button
            onClick={nextMonth}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60 hover:bg-white dark:hover:bg-white/5 transition-colors"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-center text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-white/25 py-1"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((day, i) => {
            if (day === null) return <div key={`empty-${i}`} />;
            const disabled = isPast(day) || isWeekend(day);
            const selected = isSelected(day);
            const todayCell = isToday(day);

            return (
              <button
                key={day}
                disabled={disabled}
                onClick={() => onSelect(new Date(year, month, day))}
                className={cn(
                  "relative mx-auto flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition-all duration-150",
                  selected && "bg-blue-600 text-white dark:bg-blue-500",
                  !selected &&
                    !disabled &&
                    "text-gray-800 dark:text-white/80 hover:bg-white dark:hover:bg-white/5",
                  !selected &&
                    todayCell &&
                    "font-bold text-blue-600 dark:text-blue-400",
                  disabled &&
                    "cursor-not-allowed text-gray-300 dark:text-white/15",
                )}
              >
                {day}
                {todayCell && !selected && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full bg-blue-500 dark:bg-blue-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-foreground text-center">
        Weekends & past dates are unavailable
      </p>
    </div>
  );
}
