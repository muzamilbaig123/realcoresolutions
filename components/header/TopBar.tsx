"use client";

import Link from "next/link";
import { Mail, Phone, Smartphone } from "lucide-react";
import LoginDrawer from "./LoginDrawer";

const contacts = [
  {
    icon: Mail,
    label: "connect@realcoresolutions.com",
    href: "mailto:connect@realcoresolutions.com",
  },
  { icon: Phone, label: "+92 309 8882727", href: "tel:+923098882727" },
  { icon: Smartphone, label: "+92 21 34507271", href: "tel:+922134507271" },
];

export default function TopBar() {
  return (
    <div className="bg-transparent border-b border-gray-200 dark:border-white/20 text-xs text-black dark:text-white">
      <div className="container mx-auto px-4 lg:px-8 h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0 overflow-hidden">
          <Link
            href="mailto:connect@realcoresolutions.com"
            className="flex sm:hidden items-center gap-1.5 min-w-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Mail size={11} className="shrink-0" />
            <span className="truncate">connect@realcoresolutions.com</span>
          </Link>

          <Link
            href="mailto:connect@realcoresolutions.com"
            className="hidden sm:flex lg:hidden items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Mail size={11} className="shrink-0" />
            <span>connect@realcoresolutions.com</span>
          </Link>
          <Link
            href="tel:+923098882727"
            className="hidden sm:flex lg:hidden items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Phone size={11} className="shrink-0" />
            <span>+92 309 8882727</span>
          </Link>

          {contacts.map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className="hidden lg:flex items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Icon size={11} className="shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="https://erp.realcoresolutions.com/public/ticket/index.php?entity=1"
            className="hidden sm:block whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Support
          </Link>
          <div className="hidden sm:block w-px h-3 bg-gray-300 dark:bg-white/20" />
          <LoginDrawer
            trigger={
              <button className="whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-xs">
                Login
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}
