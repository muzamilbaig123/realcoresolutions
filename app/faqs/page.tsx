import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getFaqs } from "@/lib/strapi";
import { createMetadata } from "@/lib/metadata";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata = createMetadata({
  title: "FAQs",
  description:
    "Frequently asked questions about RealCore Solutions — ERP setup, pricing, integrations, support, and more.",
  path: "/faq",
});

export default async function FaqPage() {
  const { faqs } = await getFaqs(1, 100);

  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      {/* Hero */}
      <div className="border-b border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#03070f] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Support
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-3">
            Frequently Asked
            <br />
            <span className="text-gray-400 dark:text-white/30">Questions</span>
          </h1>
          <p className="text-base text-foreground max-w-lg">
            Everything you need to know about RealCore Solutions — our products,
            setup process, pricing, and support. Can't find your answer?{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline underline-offset-2"
            >
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 sm:py-28">
        {faqs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-white/30 text-sm">
              No FAQs available yet. Check back soon.
            </p>
          </div>
        ) : (
          <FaqAccordion faqs={faqs} />
        )}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#03070f] py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-500/10 mx-auto mb-5">
            <MessageCircle
              size={20}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Still have questions?
          </h2>
          <p className="text-sm text-foreground mb-7">
            Our team is ready to help. Reach out and we'll get back to you
            within 1 business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-8 text-sm font-semibold text-white transition-colors duration-200"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-8 text-sm font-semibold text-gray-700 dark:text-white transition-all duration-200"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
