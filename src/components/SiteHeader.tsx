"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, User, LogOut } from "lucide-react";

export default function SiteHeader({
  loggedIn = false,
}: {
  loggedIn?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleLogout() {
    setOpen(false);
    router.push("/");
  }

  return (
    <header className="border-b border-parchment-dark/60 bg-paper/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-18 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-moss text-paper font-display text-lg rotate-[-2deg] group-hover:rotate-0 transition-transform">
            L
          </span>
          <span className="font-display text-xl tracking-tight text-ink">
            LearnCrib
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] text-ink-soft">
          <Link href="/courses" className="hover:text-ink transition-colors">
            Courses
          </Link>
          <Link href="/certificate" className="hover:text-ink transition-colors">
            Certificates
          </Link>
          {loggedIn && (
            <Link href="/dashboard" className="hover:text-ink transition-colors">
              My courses
            </Link>
          )}
        </nav>

        {loggedIn ? (
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/account"
              className="inline-flex items-center gap-2 rounded-full border border-parchment-dark/70 px-3 py-2 text-[15px] text-ink hover:bg-paper-dim transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-moss-light/40 text-moss-dark">
                <User className="h-3.5 w-3.5" />
              </span>
              Yassin
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              aria-label="Log out"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full text-ink-soft hover:bg-paper-dim hover:text-ink transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-[15px] text-ink-soft hover:text-ink transition-colors px-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-moss text-paper text-[15px] font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors"
            >
              Sign up
            </Link>
          </div>
        )}

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-ink hover:bg-paper-dim transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-parchment-dark/60 bg-paper px-6 py-4 flex flex-col gap-1">
          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className="py-2.5 text-[15px] text-ink-soft hover:text-ink transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/certificate"
            onClick={() => setOpen(false)}
            className="py-2.5 text-[15px] text-ink-soft hover:text-ink transition-colors"
          >
            Certificates
          </Link>
          {loggedIn && (
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] text-ink-soft hover:text-ink transition-colors"
            >
              My courses
            </Link>
          )}
          <div className="mt-2 pt-3 border-t border-parchment-dark/60 flex flex-col gap-2">
            {loggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-center rounded-full border border-parchment-dark py-2.5 text-[15px] font-medium text-ink"
              >
                Log out
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-center rounded-full border border-parchment-dark py-2.5 text-[15px] font-medium text-ink"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="text-center rounded-full bg-moss text-paper py-2.5 text-[15px] font-medium"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
