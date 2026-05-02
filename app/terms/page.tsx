import { createMetadata } from "@/lib/metadata";
import { FileText } from "lucide-react";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for RealCore Solutions — rules and regulations for using our website and services.",
  path: "/terms",
});

const sections = [
  {
    title: "Overview",
    content: `Welcome to realcoresolutions.com! These terms and conditions outline the rules and regulations for the use of RealCore Solutions' Website, located at realcoresolutions.com.

By accessing this website, we assume you accept these terms and conditions. Do not continue to use realcoresolutions.com if you do not agree to take all of the terms and conditions stated on this page.`,
  },
  {
    title: "Cookies",
    content: `The website uses cookies to help personalize your online experience. By accessing realcoresolutions.com, you agreed to use the required cookies.

A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.

We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website.`,
  },
  {
    title: "License",
    content: `Unless otherwise stated, RealCore Solutions and/or its licensors own the intellectual property rights for all material on realcoresolutions.com. All intellectual property rights are reserved. You may access this from realcoresolutions.com for your own personal use subjected to restrictions set in these terms and conditions.`,
    prohibitions: [
      "Copy or republish material from realcoresolutions.com",
      "Sell, rent, or sub-license material from realcoresolutions.com",
      "Reproduce, duplicate or copy material from realcoresolutions.com",
      "Redistribute content from realcoresolutions.com",
    ],
    prohibitionsLabel: "You must not:",
  },
  {
    title: "Comments",
    content: `Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. RealCore Solutions does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of RealCore Solutions, its agents, and/or affiliates.

RealCore Solutions reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.`,
    items: [
      "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so",
      "The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party",
      "The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy",
      "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity",
    ],
    itemsLabel: "You warrant and represent that:",
  },
  {
    title: "Hyperlinking to Our Content",
    content: `The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors, and System-wide Accredited Businesses.

We may consider and approve other link requests from commonly-known consumer and/or business information sources, dot.com community sites, associations or other groups representing charities, online directory distributors, internet portals, accounting, law, and consulting firms, and educational institutions and trade associations.

If you are interested in linking to our website, you must inform us by sending an e-mail to support@realcoresolutions.com with your name, organization name, contact information, the URL of your site, and the URLs from which you intend to link.`,
  },
  {
    title: "Reservation of Rights",
    content: `We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.`,
  },
  {
    title: "Removal of Links",
    content: `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly.

We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`,
  },
  {
    title: "Disclaimer",
    content: `To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, limit or exclude our or your liability for fraud or fraudulent misrepresentation, limit any of our or your liabilities in any way that is not permitted under applicable law, or exclude any of our or your liabilities that may not be excluded under applicable law.

As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      <div className="border-b border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#03070f] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Terms &amp; Conditions
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

              {section.prohibitions && (
                <div className="mt-5">
                  {section.prohibitionsLabel && (
                    <p className="text-sm font-semibold text-foreground mb-3">
                      {section.prohibitionsLabel}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {section.prohibitions.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm text-foreground"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-red-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.items && (
                <div className="mt-5">
                  {section.itemsLabel && (
                    <p className="text-sm font-semibold text-foreground mb-3">
                      {section.itemsLabel}
                    </p>
                  )}
                  <ul className="space-y-2">
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
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02] p-8 text-center">
          <p className="text-sm text-foreground mb-2">
            Questions about these terms?
          </p>
          <a
            href="mailto:support@realcoresolutions.com"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            support@realcoresolutions.com
          </a>
        </div>
      </div>
    </div>
  );
}
