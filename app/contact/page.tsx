import { createMetadata } from "@/lib/metadata";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with RealCore Solutions.",
  path: "/contact",
});

const INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: "connect@realcoresolutions.com",
    href: "mailto:connect@realcoresolutions.com",
    sub: "support@realcoresolutions.com",
    subHref: "mailto:support@realcoresolutions.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 309 8882727",
    href: "tel:+923098882727",
    sub: "+92 21 34507271",
    subHref: "tel:+922134507271",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "RealCore Solutions",
    href: "https://maps.google.com/?q=RealCore+Solutions+Karachi",
    sub: "Karachi, Pakistan",
    subHref: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM",
    href: null,
    sub: "Sat: 10:00 AM – 2:00 PM",
    subHref: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12">

          {/* LEFT */}
          <div className="flex flex-col gap-8">

            {/* Header */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                Get in Touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                Contact Us
              </h1>
              <p className="text-base text-foreground max-w-md leading-relaxed">
                Have a question or ready to get started? Our team is here to help.
                Fill out the form and we'll get back to you within 1 business day.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {INFO.map(({ icon: Icon, label, value, href, sub, subHref }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-[#0b1628] p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10 mb-3">
                    <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground mb-1.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="block text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                  )}
                  {sub && (
                    subHref ? (
                      <a
                        href={subHref}
                        className="block text-sm text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-0.5"
                      >
                        {sub}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground mt-0.5">{sub}</p>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border border-gray-100 dark:border-white/[0.07] bg-gray-50 dark:bg-[#0b1628] p-8 h-fit">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Send us a message
            </h2>
            <p className="text-sm text-foreground mb-7">
              Fill in the form and our team will be in touch shortly.
            </p>
            <ContactForm />
          </div>

        </div>

        {/* Google Maps */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
            Our Office Location
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-white/[0.07]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.150202924124!2d67.17520621130673!3d24.926952542500793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f6cb9aa9ead%3A0xc431a2d66015d96!2sRealcore%20Solutions!5e0!3m2!1sen!2s!4v1777095419768!5m2!1sen!2s"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RealCore Solutions Office Location"
            />
          </div>
        </div>

      </div>
    </div>
  );
}