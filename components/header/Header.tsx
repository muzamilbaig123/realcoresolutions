"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import TopBar from "./TopBar";
import MainNav from "./MainNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 border",
        scrolled && "shadow-lg shadow-black/10 dark:shadow-black/40"
      )}
    >
      <TopBar />
      <MainNav />
    </header>
  );
}