"use client";

import Link from "next/link";
import "./style.css";
import Image from "next/image";
import lightLogo from "@/public/images/lightlogo.png";
import darkLogo from "@/public/images/darklogo.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const footerLinks = {
  Pages: [
    { label: "All Products", href: "/products" },
    { label: "Studio", href: "/studio" },
    { label: "Clients", href: "/clients" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  Socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  Register: [
    { label: "Sign Up", href: "/signup" },
    { label: "Login", href: "/login" },
    { label: "Forgot Password", href: "/forgot-password" },
  ],
};

export default function Footer() {


  const { theme, resolvedTheme } = useTheme();


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logo = resolvedTheme === "dark" ? darkLogo : lightLogo;


  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-background">
      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3">

              <Image
                src={logo}
                alt="RealCore Solutions"
                width={160}
                height={40}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              © {new Date().getFullYear()} RealCore Solutions.
              <br />
              All rights reserved Design by Digitize Bird​.

            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
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
        RealCoreSolutions.
      </p>
    </footer>
  );
}