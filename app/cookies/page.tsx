import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "Cookie Policy for RealCore Solutions — learn how we use cookies to improve your browsing experience.",
  path: "/cookies",
});

const sections = [
  {
    title: "What Are Cookies?",
    content: `Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences over time, so you don't have to re-enter information every time you visit or navigate between pages.

Cookies cannot be used to run programs or deliver viruses to your computer. They are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie.`,
  },
  {
    title: "How We Use Cookies",
    content: `RealCore Solutions uses cookies to enhance your experience on our website. We use cookies to remember your preferences and settings, keep you signed in during your session, understand how you navigate and use our website, improve the performance and functionality of our platform, and analyse traffic and usage patterns to make better decisions.`,
  },
  {
    title: "Types of Cookies We Use",
    items: [
      {
        title: "Essential Cookies",
        desc: "These cookies are required for the website to function properly. They enable core features such as security, session management, and accessibility. You cannot opt out of these cookies.",
      },
      {
        title: "Performance Cookies",
        desc: "These cookies collect anonymous information about how visitors use our website — such as which pages are visited most often and how long users spend on each page. This helps us improve our website over time.",
      },
      {
        title: "Functional Cookies",
        desc: "These cookies allow our website to remember choices you make — such as your language preference or theme setting — and provide enhanced, more personalised features.",
      },
      {
        title: "Analytics Cookies",
        desc: "We use analytics tools to understand visitor behaviour and improve our content. These cookies track information such as your IP address, browser type, pages visited, and time on site.",
      },
      {
        title: "Third-Party Cookies",
        desc: "Some cookies on our website are set by third-party services we use, such as embedded maps, live chat tools, or analytics providers. These third parties have their own cookie policies, which we encourage you to review.",
      },
    ],
  },
  {
    title: "Managing Your Cookie Preferences",
    content: `You have the right to accept or decline optional cookies at any time. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.

Please note that disabling cookies may affect the functionality of our website and your user experience. Essential cookies cannot be disabled as they are required for the site to operate correctly.`,
  },
  {
    title: "How to Control Cookies in Your Browser",
    items: [
      {
        title: "Google Chrome",
        desc: "Settings → Privacy and Security → Cookies and other site data",
      },
      {
        title: "Mozilla Firefox",
        desc: "Settings → Privacy & Security → Cookies and Site Data",
      },
      { title: "Safari", desc: "Preferences → Privacy → Manage Website Data" },
      {
        title: "Microsoft Edge",
        desc: "Settings → Cookies and site permissions → Manage and delete cookies",
      },
    ],
  },
  {
    title: "Third-Party Services",
    content: `Our website may include content or tools from third-party providers such as Google Maps, live chat, and analytics platforms. These services may set their own cookies on your device. RealCore Solutions does not control these cookies and is not responsible for the data practices of third-party providers.

We encourage you to review the privacy and cookie policies of any third-party services used on our website.`,
  },
  {
    title: "Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we use cookies.`,
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      <div className="border-b border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#03070f] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Cookie Policy
          </h1>
          <p className="text-base text-gray-500 dark:text-white/40">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <div
              key={i}
              className="border-b border-gray-100 dark:border-white/[0.06] pb-12 last:border-0"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-3">
                  {section.content.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-gray-600 dark:text-white/50"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {section.items && (
                <ul className="mt-4 space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Related links */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/privacy"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            Privacy Policy →
          </Link>
          <Link
            href="/terms"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            Terms & Conditions →
          </Link>
        </div>

        {/* Contact */}
        <div className="mt-10 rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02] p-8 text-center">
          <p className="text-sm text-gray-500 dark:text-white/40 mb-2">
            Questions about our cookie practices?
          </p>
          <a
            href="mailto:connect@realcoresolutions.com"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            connect@realcoresolutions.com
          </a>
        </div>
      </div>
    </div>
  );
}
