import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MenuColumn } from "./nav-data";

const colClass: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
};

export default function MegaMenuContent({ columns }: { columns: MenuColumn[] }) {
    return (
        <div className={`grid gap-x-8 py-8 px-4 ${colClass[columns.length] ?? "grid-cols-3"}`}>
            {columns.map((col) => (
                <div key={col.heading} className="space-y-4">
                    <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-900 dark:text-white/90 pb-2 border-b border-gray-100 dark:border-white/10">
                        {col.heading}
                    </h3>
                    <div className="space-y-3">
                        {col.items.map((item) => (
                            <Link key={item.id} href={item.href} className="group block">
                                <div className="flex items-center gap-1 text-sm font-medium text-gray-800 dark:text-white/80 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                                    {item.title}
                                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                                </div>
                                <p className="mt-0.5 text-xs text-gray-500 dark:text-white/60 line-clamp-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}