"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  X,
  ArrowRight,
  ExternalLink,
  LifeBuoy,
  User,
  MessageSquare,
  Building2,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import gsap from "gsap";

interface Portal {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  loginLabel: string;
  href: string;
  accent: string;
  accentDark: string;
  iconBg: string;
  iconBgDark: string;
}

const portals: Portal[] = [
  {
    id: "client",
    icon: <User size={20} />,
    title: "Client Portal",
    description:
      "Access and manage your account details, view invoices, proposals, quotations, and memberships.",
    loginLabel: "Login to Client Portal",
    href: "https://erp.realcoresolutions.com/public/webportal/index.php",
    accent: "text-black",
    accentDark: "dark:text-black",
    iconBg: "bg-blue-50",
    iconBgDark: "dark:bg-white",
  },
  {
    id: "sms",
    icon: <MessageSquare size={20} />,
    title: "SMS Portal",
    description:
      "Send, schedule, and manage your SMS campaigns with ease through our platform.",
    loginLabel: "Login to SMS Portal",
    href: "https://sms.realcoresolutions.com/",
    accent: "text-black",
    accentDark: "dark:text-black",
    iconBg: "bg-blue-50",
    iconBgDark: "dark:bg-white",
  },
];

const employeePortal = {
  id: "employee",
  icon: <Building2 size={20} />,
  title: "Employee Portal",
  description:
    "For internal team members to securely access company resources and tools.",
  loginLabel: "Login to Employee Portal",
  href: "https://erp.realcoresolutions.com/",
  accent: "text-black",
  accentDark: "dark:text-black",
  iconBg: "bg-blue-50",
  iconBgDark: "dark:bg-white",
};

interface LoginDrawerProps {
  trigger?: React.ReactNode;
}

export default function LoginDrawer({ trigger }: LoginDrawerProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        if (contentRef.current) {
          const items = contentRef.current.querySelectorAll(".animate-item");
          gsap.fromTo(
            items,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.07,
              ease: "power2.out",
            },
          );
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {trigger ?? (
          <button className="text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Login
          </button>
        )}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:w-[420px] p-0 bg-white dark:bg-[#0a0f1e] border-l border-gray-100 dark:border-white/10 overflow-y-auto"
      >
        {/* Accessibility */}
        <SheetTitle className="sr-only">Portal Access</SheetTitle>
        <SheetDescription className="sr-only">
          Select your portal to login
        </SheetDescription>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0a0f1e] border-b border-gray-100 dark:border-white/10 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
              Portal Access
            </h2>
            <p className="text-xs text-gray-400 dark:text-white/80 mt-0.5">
              Select your portal to continue
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div ref={contentRef} className="px-6 py-6 space-y-6">
          {/* Account Center Section */}
          <div className="animate-item">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-gray-100 dark:bg-white/40" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-800 dark:text-white px-2">
                Account Center
              </span>
              <div className="h-px flex-1 bg-gray-100 dark:bg-white/40" />
            </div>

            <div className="space-y-3">
              {portals.map((portal) => (
                <PortalCard
                  key={portal.id}
                  portal={portal}
                  onClose={() => setOpen(false)}
                />
              ))}
            </div>
          </div>

          {/* Employee Area Section */}
          <div className="animate-item">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-gray-100 dark:bg-white/40" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-800 dark:text-white px-2">
                Employee Area
              </span>
              <div className="h-px flex-1 bg-gray-100 dark:bg-white/40" />
            </div>

            <PortalCard
              portal={employeePortal}
              onClose={() => setOpen(false)}
            />
          </div>

          {/* Need Help */}
          <div className="animate-item">
            <div className="rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/3 p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-50 flex items-center justify-center text-black dark:text-blue-50 shrink-0 mt-0.5">
                  <LifeBuoy size={16} className="text-black" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black dark:text-white">
                    Need Help?
                  </p>
                  <p className="text-xs text-gray-500 dark:text-white mt-0.5 leading-relaxed">
                    If any of the above login links aren't working, please
                    report an issue so we can assist you promptly.
                  </p>
                  <Link
                    href="https://erp.realcoresolutions.com/public/ticket/index.php?entity=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-black dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    Report an Issue
                    <ExternalLink size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function PortalCard({
  portal,
  onClose,
}: {
  portal: Portal;
  onClose: () => void;
}) {
  return (
    <div className="group rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/3 hover:border-gray-200 dark:hover:border-white/20 hover:shadow-sm transition-all duration-200 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div
            className={`w-9 h-9 rounded-lg ${portal.iconBg} ${portal.iconBgDark} flex items-center justify-center ${portal.accent} ${portal.accentDark} shrink-0`}
          >
            {portal.icon}
          </div>
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {portal.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-white mt-0.5 leading-relaxed">
              {portal.description}
            </p>
          </div>
        </div>

        {/* Login Button */}
        <Link
          href={portal.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className={`mt-3 flex items-center gap-1.5 text-xs font-medium ${portal.accent} ${portal.accentDark} hover:opacity-80 transition-opacity group/link`}
        >
          {portal.loginLabel}
          <ArrowRight
            size={11}
            className="transition-transform duration-150 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
