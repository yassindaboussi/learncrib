"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Trash2, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const tabs = ["Profile", "Password", "Danger zone"] as const;
type Tab = (typeof tabs)[number];

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("Profile");
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <>
      <SiteHeader loggedIn />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-14 pb-6">
          <span className="text-xs font-medium uppercase tracking-wider text-clay-dark">
            Account
          </span>
          <h1 className="mt-3 font-display text-4xl text-ink tracking-tight">
            Settings
          </h1>
          <div className="mt-5 w-16 stitch-rule" />
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20 grid sm:grid-cols-[180px_1fr] gap-8">
          {/* Tabs */}
          <nav className="flex sm:flex-col gap-1 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={
                  t === tab
                    ? "text-left rounded-lg px-3 py-2.5 text-sm font-medium text-ink bg-card border border-parchment-dark/60 whitespace-nowrap"
                    : "text-left rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:text-ink hover:bg-paper-dim/60 transition-colors whitespace-nowrap"
                }
              >
                {t}
              </button>
            ))}
          </nav>

          {/* Panel */}
          <div>
            {tab === "Profile" && (
              <form
                onSubmit={handleSave}
                className="rounded-xl border border-parchment-dark/70 bg-card p-6 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-moss-light/40 text-moss-dark">
                    <User className="h-7 w-7" />
                  </span>
                  <div>
                    <button
                      type="button"
                      className="rounded-full border border-parchment-dark px-4 py-2 text-sm font-medium text-ink hover:bg-paper-dim transition-colors"
                    >
                      Change photo
                    </button>
                    <p className="mt-1.5 text-xs text-ink-soft">
                      JPG or PNG, up to 2MB
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    defaultValue="Yassin Daboussi"
                    className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="yassin@example.com"
                    className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-moss text-paper text-sm font-medium px-6 py-2.5 hover:bg-moss-dark transition-colors"
                  >
                    Save changes
                  </button>
                  {saved && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-moss">
                      <Check className="h-4 w-4" />
                      Saved
                    </span>
                  )}
                </div>
              </form>
            )}

            {tab === "Password" && (
              <form
                onSubmit={handleSave}
                className="rounded-xl border border-parchment-dark/70 bg-card p-6 space-y-5"
              >
                <div>
                  <label
                    htmlFor="current"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Current password
                  </label>
                  <input
                    id="current"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="new"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    New password
                  </label>
                  <input
                    id="new"
                    type="password"
                    placeholder="At least 8 characters"
                    className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Confirm new password
                  </label>
                  <input
                    id="confirm"
                    type="password"
                    placeholder="Repeat new password"
                    className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-moss text-paper text-sm font-medium px-6 py-2.5 hover:bg-moss-dark transition-colors"
                  >
                    Update password
                  </button>
                  {saved && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-moss">
                      <Check className="h-4 w-4" />
                      Updated
                    </span>
                  )}
                </div>
              </form>
            )}

            {tab === "Danger zone" && (
              <div className="rounded-xl border border-danger/30 bg-danger/5 p-6">
                <h2 className="font-display text-lg text-ink">
                  Delete account
                </h2>
                <p className="mt-1.5 text-sm text-ink-soft max-w-md">
                  This permanently removes your account, your purchased
                  courses, and any certificates you've earned. This cannot be
                  undone.
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-danger text-paper text-sm font-medium px-5 py-2.5 hover:bg-danger/90 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete my account
                </button>
              </div>
            )}

            <p className="mt-6 text-sm text-ink-soft">
              Need help instead?{" "}
              <Link href="/dashboard" className="text-moss hover:text-moss-dark font-medium">
                Back to my courses
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
