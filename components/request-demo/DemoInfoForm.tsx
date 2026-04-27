"use client";

import { User, Mail, Phone, Building2, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  industry: string;
  message: string;
}

interface DemoInfoFormProps {
  data: DemoFormData;
  onChange: (data: DemoFormData) => void;
}

const COMPANY_SIZES = [
  "1 – 10 employees",
  "11 – 50 employees",
  "51 – 200 employees",
  "201 – 500 employees",
  "500+ employees",
];

const INDUSTRIES = [
  "Manufacturing",
  "Retail & E-Commerce",
  "Healthcare",
  "Education",
  "Finance & Banking",
  "Logistics & Supply Chain",
  "Construction & Real Estate",
  "Technology",
  "Food & Beverage",
  "Other",
];

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

const inputCls = cn(
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/50",
  "transition-colors duration-150",
  "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
  "dark:border-white/[0.08] dark:bg-[#060d1f] dark:text-foreground dark:placeholder:text-foreground/40",
  "dark:focus:border-blue-500 dark:focus:ring-blue-500/20",
);

export default function DemoInfoForm({ data, onChange }: DemoInfoFormProps) {
  const set =
    (key: keyof DemoFormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      onChange({ ...data, [key]: e.target.value });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
          Step 3 of 3
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Information
        </h2>
        <p className="mt-1 text-sm text-foreground">
          Tell us a bit about yourself so we can prepare the right demo for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First Name" icon={<User size={11} />} required>
          <input
            className={inputCls}
            type="text"
            placeholder="Muzamil"
            value={data.firstName}
            onChange={set("firstName")}
          />
        </Field>
        <Field label="Last Name" icon={<User size={11} />} required>
          <input
            className={inputCls}
            type="text"
            placeholder="Baig"
            value={data.lastName}
            onChange={set("lastName")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Work Email" icon={<Mail size={11} />} required>
          <input
            className={inputCls}
            type="email"
            placeholder="ali@company.com"
            value={data.email}
            onChange={set("email")}
          />
        </Field>
        <Field label="Phone Number" icon={<Phone size={11} />}>
          <input
            className={inputCls}
            type="tel"
            placeholder="+92 300 0000000"
            value={data.phone}
            onChange={set("phone")}
          />
        </Field>
      </div>

      <Field label="Company Name" icon={<Building2 size={11} />} required>
        <input
          className={inputCls}
          type="text"
          placeholder="Your company name"
          value={data.company}
          onChange={set("company")}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Company Size" icon={<Users size={11} />} required>
          <select
            className={inputCls}
            value={data.companySize}
            onChange={set("companySize")}
          >
            <option value="" disabled>
              Select size
            </option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Industry" icon={<Briefcase size={11} />} required>
          <select
            className={inputCls}
            value={data.industry}
            onChange={set("industry")}
          >
            <option value="" disabled>
              Select industry
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="What would you like to see?" icon={<Briefcase size={11} />}>
        <textarea
          className={cn(inputCls, "min-h-[90px] resize-none")}
          placeholder="E.g. inventory management, payroll, reporting dashboard..."
          value={data.message}
          onChange={set("message")}
        />
      </Field>

      <p className="text-xs text-foreground/50">
        Fields marked <span className="text-blue-500">*</span> are required.
        Your information is kept private and never shared.
      </p>
    </div>
  );
}
