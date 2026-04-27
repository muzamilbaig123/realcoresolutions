"use client";

import { useState } from "react";
import { User, Mail, Phone, Briefcase, MessageSquare, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConsultationFormProps {
  onSubmit: (name: string) => void;
}

const CONSULTATION_TYPES = [
  "ERP Implementation",
  "Software Integration",
  "Business Process Audit",
  "Inventory Management",
  "Payroll & HR System",
  "General Tech Advice",
  "Other",
];

const CONTACT_METHODS = [
  { value: "call", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "video", label: "Video Call" },
  { value: "email", label: "Email" },
];

const inputCls = cn(
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40",
  "transition-colors duration-150",
  "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
  "dark:border-white/[0.08] dark:bg-[#060d1f] dark:text-foreground dark:placeholder:text-foreground/30",
  "dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
);

interface FieldProps {
  label: string;
  icon: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, icon, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
        {icon}
        {label}
        {required && <span className="text-blue-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ConsultationForm({ onSubmit }: ConsultationFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    contactMethod: "",
    message: "",
  });

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const isValid =
    form.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.consultationType !== "" &&
    form.contactMethod !== "";

  const handleSubmit = async () => {
    if (!isValid) return;
    setLoading(true);
    // TODO: wire to API / email
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    onSubmit(form.name.split(" ")[0]);
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" icon={<User size={11} />} required>
          <input
            className={inputCls}
            type="text"
            placeholder="Muzamil Baig"
            value={form.name}
            onChange={set("name")}
          />
        </Field>
        <Field label="Email" icon={<Mail size={11} />} required>
          <input
            className={inputCls}
            type="email"
            placeholder="ali@company.com"
            value={form.email}
            onChange={set("email")}
          />
        </Field>
      </div>

      {/* Phone */}
      <Field label="Phone Number" icon={<Phone size={11} />}>
        <input
          className={inputCls}
          type="tel"
          placeholder="+92 300 0000000"
          value={form.phone}
          onChange={set("phone")}
        />
      </Field>

      {/* Consultation Type */}
      <Field label="What do you need help with?" icon={<Briefcase size={11} />} required>
        <select
          className={inputCls}
          value={form.consultationType}
          onChange={set("consultationType")}
        >
          <option value="" disabled>Select a topic</option>
          {CONSULTATION_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>

      {/* Preferred Contact Method */}
      <Field label="Preferred Contact Method" icon={<Phone size={11} />} required>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CONTACT_METHODS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, contactMethod: value }))}
              className={cn(
                "rounded-xl border py-2.5 text-xs font-medium transition-all duration-150",
                form.contactMethod === value
                  ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
                  : "border-gray-200 bg-white text-foreground hover:border-blue-300 dark:border-white/[0.08] dark:bg-[#060d1f] dark:hover:border-blue-500/40"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Field>

      {/* Message */}
      <Field label="Tell us about your challenge" icon={<MessageSquare size={11} />}>
        <textarea
          className={cn(inputCls, "min-h-[90px] resize-none")}
          placeholder="Briefly describe your business challenge or what you'd like to discuss..."
          value={form.message}
          onChange={set("message")}
        />
      </Field>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!isValid || loading}
        className={cn(
          "flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 mt-1",
          isValid && !loading
            ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/20"
            : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-white/20"
        )}
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Request Free Consultation
            <ArrowRight size={14} />
          </>
        )}
      </button>

      <p className="text-xs text-foreground/40 text-center">
        Fields marked <span className="text-blue-500">*</span> are required.
        We never share your information.
      </p>
    </div>
  );
}