"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  otherSubject: string;
  message: string;
  agree: boolean;
}

const SUBJECTS = [
  "General Inquiry",
  "Request a Demo",
  "ERP & CRM Solutions",
  "Real Estate Software (REMS)",
  "Point of Sale (POS)",
  "SMS & WhatsApp Solutions",
  "Customer Portal",
  "Custom Development",
  "Pricing & Plans",
  "Technical Support",
  "Partnership & Affiliate",
  "Other",
];

const inputClass =
  "block w-full rounded-lg border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-colors duration-150";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    otherSubject: "",
    message: "",
    agree: false,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const set = (k: keyof FormData, v: string | boolean) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Api endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 dark:bg-green-500/10">
          <CheckCircle
            size={28}
            className="text-green-600 dark:text-green-400"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Message Sent!
        </h3>
        <p className="text-sm text-foreground max-w-xs">
          Thank you for reaching out. Our team will get back to you within 1
          business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              firstName: "",
              lastName: "",
              company: "",
              email: "",
              phone: "",
              subject: "",
              otherSubject: "",
              message: "",
              agree: false,
            });
          }}
          className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            First Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Muzamil"
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Last Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Baig"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Your company"
          value={form.company}
          onChange={(e) => set("company", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Email Address <span className="text-blue-500">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="ali@company.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+92 300 0000000"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Subject <span className="text-blue-500">*</span>
        </label>
        <select
          required
          value={form.subject}
          onChange={(e) => set("subject", e.target.value)}
          className={inputClass}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Other subject — only when "Other" selected */}
      {form.subject === "Other" && (
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Please specify <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Tell us your subject..."
            value={form.otherSubject}
            onChange={(e) => set("otherSubject", e.target.value)}
            className={inputClass}
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Message <span className="text-blue-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your business and what you're looking for..."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Agree */}
      <div className="flex items-start gap-3">
        <input
          id="agree"
          type="checkbox"
          required
          checked={form.agree}
          onChange={(e) => set("agree", e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 dark:border-white/20 accent-blue-600"
        />
        <label
          htmlFor="agree"
          className="text-xs text-gray-500 dark:text-white/40 leading-relaxed"
        >
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            Terms of Service
          </Link>
          .
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 px-6 h-11 text-sm font-semibold text-white transition-colors duration-200"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={14} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
