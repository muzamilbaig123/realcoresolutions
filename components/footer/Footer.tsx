"use client";

import Link from "next/link";
import "./style.css";
import Image from "next/image";
import lightLogo from "@/public/images/lightlogo.png";
import darkLogo from "@/public/images/darklogo.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const footerLinks = {
  Products: [
    { label: "Growth ERP & CRM", href: "/products/erp-crm" },
    { label: "R-Core Data Suite (REMS)", href: "/products/rems" },
    { label: "Point of Sale (POS)", href: "/products/pos" },
    { label: "Customer Portal", href: "/products/portal" },
    { label: "SMS & WhatsApp Solutions", href: "/products/sms" },
    { label: "Email Solutions Suite", href: "/products/email" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  Support: [
    { label: "Request a Demo", href: "/request-demo" },
    { label: "Free Consultation", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Documentation", href: "/docs" },
    { label: "Technology Partnerships", href: "/partners" },
    { label: "Affiliate Program", href: "/affiliate" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Login", href: "/login" },
    { label: "Support Portal", href: "/support" },
  ],
};

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const logo = resolvedTheme === "dark" ? darkLogo : lightLogo;

  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-background">

      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">

          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={logo}
                alt="RealCore Solutions"
                width={160}
                height={40}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Enterprise ERP, CRM &amp; communication solutions built to scale
              your business from day one.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} RealCore Solutions.
              <br />
              All rights reserved.
              <br />
              Design by{" "}
              <a
                href="https://sms.digitizebird.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Digitize Bird
              </a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div
              key={category}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      <p className="watermark-text px-6 pb-4 text-center text-[clamp(3rem,12vw,9rem)] font-bold leading-none tracking-tight select-text">
        RealCoreSolutions!
      </p>

    </footer>
  );
}