"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToogle";
import MegaMenuContent from "./MegaMenuContent";
import { navMenus } from "./nav-data";
import { useTheme } from "next-themes";
import lightLogo from "@/public/images/lightlogo.png";
import darkLogo from "@/public/images/darklogo.png";

export default function MainNav() {
    const { resolvedTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted) return null;

    const logo = resolvedTheme === "dark" ? darkLogo : lightLogo;

    const handleMouseEnter = (trigger: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(trigger);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const activeMenuData = navMenus.find((m) => m.trigger === activeMenu);

    return (
        <div className="bg-white dark:bg-background">
            <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-6">

                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image
                        src={logo}
                        alt="RealCore Solutions"
                        width={160}
                        height={40}
                        className="h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop  */}
                <nav ref={navRef} className="hidden lg:flex items-center gap-0">
                    {navMenus.map((menu) => (
                        <div
                            key={menu.trigger}
                            onMouseEnter={() => handleMouseEnter(menu.trigger)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150
                                    ${activeMenu === menu.trigger
                                        ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-white/5"
                                        : "text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                                    }`}
                            >
                                {menu.trigger}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${activeMenu === menu.trigger ? "rotate-180" : ""}`}
                                />
                            </button>
                        </div>
                    ))}

                    {/* Mega Menu */}
                    {activeMenuData && (
                        <div
                            className="fixed left-0 top-[116px] w-screen z-50 flex justify-center"
                            onMouseEnter={() => handleMouseEnter(activeMenuData.trigger)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-full max-w-6xl bg-white dark:bg-background border border-gray-100 dark:border-white/10 shadow-2xl rounded-xl overflow-hidden p-3">
                                <MegaMenuContent columns={activeMenuData.columns} />
                            </div>
                        </div>
                    )}
                </nav>

                <div className="flex items-center gap-2 shrink-0">
                    <ThemeToggle />
                    <Button
                        asChild
                        className="hidden sm:flex bg-blue-600 hover:!bg-foreground text-white hover:text-background text-sm px-5 h-9"
                    >
                        <Link href="/contact">Contact Sales</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                                aria-label="Open menu"
                            >
                                {open ? <X size={20} /> : <Menu size={20} />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-80 bg-white dark:bg-[#060d1f] border-gray-200 dark:border-white/10 overflow-y-auto p-0"
                        >
                            <div className="p-5">
                                <Accordion type="multiple" className="space-y-0.5">
                                    {navMenus.map((menu) => (
                                        <AccordionItem
                                            key={menu.trigger}
                                            value={menu.trigger}
                                            className="border-gray-100 dark:border-white/10"
                                        >
                                            <AccordionTrigger className="text-sm font-medium text-gray-800 dark:text-white/80 hover:text-gray-900 dark:hover:text-white py-3 hover:no-underline">
                                                {menu.trigger}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-3">
                                                <div className="space-y-5">
                                                    {menu.columns.map((col) => (
                                                        <div key={col.heading}>
                                                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">
                                                                {col.heading}
                                                            </p>
                                                            <div className="space-y-1.5">
                                                                {col.items.map((item) => (
                                                                    <Link
                                                                        key={item.href}
                                                                        href={item.href}
                                                                        onClick={() => setOpen(false)}
                                                                        className="block text-sm text-gray-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 py-0.5"
                                                                    >
                                                                        {item.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10 space-y-3">
                                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10">
                                        <Link href="/contact" onClick={() => setOpen(false)}>Contact Sales</Link>
                                    </Button>
                                    <div className="flex justify-between text-sm text-gray-500 dark:text-white/50">
                                        <Link href="/support" onClick={() => setOpen(false)} className="hover:text-gray-900 dark:hover:text-white transition-colors">Support</Link>
                                        <Link href="/login" onClick={() => setOpen(false)} className="hover:text-gray-900 dark:hover:text-white transition-colors">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}