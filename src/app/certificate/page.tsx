import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function CertificatePage() {
  return (
    <>
      <SiteHeader loggedIn />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-14">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to courses
          </Link>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl text-ink">
                Your certificate
              </h1>
              <p className="text-ink-soft mt-1 text-sm">
                Earned for completing Watercolor Foundations
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-moss text-paper text-sm font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>

          {/* The certificate */}
          <div className="mt-10 rounded-2xl border border-parchment-dark/70 bg-card p-3 sm:p-4">
            <div className="relative rounded-xl border-2 border-moss/80 px-8 sm:px-16 py-14 sm:py-20 text-center bg-paper overflow-hidden">
              {/* corner ticks */}
              <span className="absolute top-5 left-5 h-6 w-6 border-t-2 border-l-2 border-clay" />
              <span className="absolute top-5 right-5 h-6 w-6 border-t-2 border-r-2 border-clay" />
              <span className="absolute bottom-5 left-5 h-6 w-6 border-b-2 border-l-2 border-clay" />
              <span className="absolute bottom-5 right-5 h-6 w-6 border-b-2 border-r-2 border-clay" />

              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-moss text-paper font-display text-xl rotate-[-2deg] mx-auto">
                L
              </span>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
                Certificate of Completion
              </p>

              <h2 className="mt-5 font-display text-2xl sm:text-3xl text-ink">
                Awarded to
              </h2>
              <p className="mt-2 font-display text-4xl sm:text-5xl text-moss-dark">
                Yassin Daboussi
              </p>

              <p className="mt-6 text-ink-soft max-w-md mx-auto leading-relaxed">
                for successfully completing all twelve lessons of
              </p>
              <p className="mt-1 font-display text-xl text-ink">
                Watercolor Foundations
              </p>

              <div className="mt-10 flex items-center justify-center gap-10 text-sm">
                <div>
                  <p className="font-display text-base text-ink">
                    June 28, 2026
                  </p>
                  <div className="mt-1.5 w-24 mx-auto h-px bg-parchment-dark" />
                  <p className="mt-1.5 text-xs text-ink-soft">
                    Date completed
                  </p>
                </div>
                <div>
                  <p className="font-display text-base text-ink italic">
                    LearnCrib
                  </p>
                  <div className="mt-1.5 w-24 mx-auto h-px bg-parchment-dark" />
                  <p className="mt-1.5 text-xs text-ink-soft">
                    Issued by
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-ink-soft">
            This certificate confirms course completion only.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
