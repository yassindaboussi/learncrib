"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import AdminShell from "@/components/AdminShell";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <AdminShell>
      <div>
        <h1 className="font-display text-3xl text-ink">Settings</h1>
        <p className="text-ink-soft mt-1 text-sm">
          How your school looks and gets paid.
        </p>
      </div>

      <form onSubmit={handleSave} className="mt-8 max-w-2xl space-y-8">
        <div className="rounded-xl border border-parchment-dark/70 bg-card p-6 space-y-5">
          <h2 className="font-display text-lg text-ink">General</h2>
          <div>
            <label
              htmlFor="schoolname"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              School name
            </label>
            <input
              id="schoolname"
              type="text"
              defaultValue="LearnCrib"
              className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="tagline"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Tagline
            </label>
            <input
              id="tagline"
              type="text"
              defaultValue="A small, personal home for courses."
              className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
            />
          </div>
        </div>

        <div className="rounded-xl border border-parchment-dark/70 bg-card p-6 space-y-5">
          <h2 className="font-display text-lg text-ink">Payouts</h2>
          <div>
            <label
              htmlFor="payout-email"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Payout email
            </label>
            <input
              id="payout-email"
              type="email"
              defaultValue="yassin@example.com"
              className="w-full rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
            />
            <p className="mt-1.5 text-xs text-ink-soft">
              Course payments are sent here.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-parchment-dark/70 bg-card p-6 space-y-4">
          <h2 className="font-display text-lg text-ink">Certificates</h2>
          <div className="flex items-center gap-3">
            <input
              id="auto-cert"
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded accent-moss"
            />
            <label htmlFor="auto-cert" className="text-sm text-ink">
              Automatically issue certificates when a student finishes a
              course that has one
            </label>
          </div>
          <div>
            <label
              htmlFor="issuer"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Issuer name shown on certificates
            </label>
            <input
              id="issuer"
              type="text"
              defaultValue="LearnCrib"
              className="w-full max-w-sm rounded-lg border border-parchment-dark bg-paper px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-full bg-moss text-paper text-sm font-medium px-6 py-2.5 hover:bg-moss-dark transition-colors"
          >
            Save settings
          </button>
          {saved && (
            <span className="inline-flex items-center gap-1.5 text-sm text-moss">
              <Check className="h-4 w-4" />
              Saved
            </span>
          )}
        </div>
      </form>
    </AdminShell>
  );
}
