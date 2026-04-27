import { createMetadata } from "@/lib/metadata";
import { Shield } from "lucide-react";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for RealCore Solutions — learn how we collect, use, and protect your information.",
  path: "/privacy",
});

const sections = [
  {
    title: "Overview",
    content: `At realcoresolutions.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by realcoresolutions.com and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or was collected on realcoresolutions.com. This policy is not applicable to any information collected offline or via channels other than this website.`,
  },
  {
    title: "Consent",
    content: `By using our website, you hereby consent to our Privacy Policy and agree as well as abide to its terms.`,
  },
  {
    title: "Information We Collect",
    content: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
  },
  {
    title: "How We Use Your Information",
    items: [
      "Provide, operate, and maintain our website",
      "Improve, personalize, and expand our website",
      "Understand and analyze how you use our website",
      "Develop new products, services, features, and functionality",
      "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
      "Send you emails",
      "Find and prevent fraud",
    ],
  },
  {
    title: "Log Files",
    content: `realcoresolutions.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
  },
  {
    title: "Advertising Partners Privacy Policies",
    content: `You may consult this list to find the Privacy Policy for each of the advertising partners of realcoresolutions.com.

Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on realcoresolutions.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

Note that realcoresolutions.com has no access to or control over these cookies that are used by third-party advertisers.`,
  },
  {
    title: "Third Party Privacy Policies",
    content: `realcoresolutions.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.`,
  },
  {
    title: "Refund and Cancellation Policy",
    content: `If a user is availing of the online payment services, it will be assumed that the user is in acceptance of our online payment policies and terms and conditions.

In these Terms and Conditions, the term "Charge Back" shall mean, approved and settled credit card or net banking purchase transaction(s) which are at any time refused, debited or charged back to merchant account by the acquiring bank or credit card company for any reason whatsoever, together with the bank fees, penalties and other charges incidental thereto.

Server Slow Down/Session Timeout: In case the Website or Payment Service Provider's webpage is experiencing any server related issues like 'slow down' or 'failure' or 'session timeout', the User shall, before initiating the second payment, check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options:`,
    subItems: [
      "In case the Bank Account appears to be debited, ensure that he/she does not make the payment twice and immediately thereafter contact the company via e-mail or any other mode of contact as provided by the company to confirm payment.",
      "In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment.",
    ],
    note: "RealCore Solutions assumes no liability whatsoever for any monetary or other damage suffered by the User on account of the delay, failure, interruption, or corruption of any data or other information transmitted in connection with use of the Payment Gateway or Services.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      {/* Hero */}
      <div className="border-b border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#03070f] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
              <Shield size={18} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Legal
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-foreground">
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
                      className="text-sm leading-relaxed text-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {section.items && (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm text-foreground"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.subItems && (
                <ul className="mt-4 space-y-2">
                  {section.subItems.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm text-foreground ml-4"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-gray-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <div className="mt-5 rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 px-5 py-4">
                  <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-400/80">
                    <span className="font-semibold">NOTE: </span>
                    {section.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02] p-8 text-center">
          <p className="text-sm text-foreground mb-2">
            Questions about this policy?
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
