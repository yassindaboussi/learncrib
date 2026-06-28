"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Plus, LogOut, Users, Settings } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutGrid },
  { href: "/admin/courses/new", label: "Add course", icon: Plus },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex-1 grid lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-parchment-dark/60 bg-paper-dim/40 p-5 flex flex-col">
        <Link href="/" className="flex items-center gap-2.5 px-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-moss text-paper font-display text-base rotate-[-2deg]">
            L
          </span>
          <span className="font-display text-lg text-ink">LearnCrib</span>
        </Link>
        <span className="mt-1 px-1 text-xs text-ink-soft">Admin</span>

        <nav className="mt-8 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-ink bg-card border border-parchment-dark/60"
                    : "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:text-ink hover:bg-card/70 transition-colors"
                }
              >
                <Icon className={active ? "h-4 w-4 text-moss" : "h-4 w-4"} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="mt-auto flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:text-ink transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Back to site
        </Link>
      </aside>
      <div className="px-6 sm:px-10 py-10">{children}</div>
    </div>
  );
}
