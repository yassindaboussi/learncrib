import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-parchment-dark/60 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-moss text-paper font-display text-sm rotate-[-2deg]">
            L
          </span>
          <span className="font-display text-base text-ink">LearnCrib</span>
          <span className="text-ink-soft text-sm ml-1">
            — one teacher, a few good courses.
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-ink-soft">
          <Link href="/courses" className="hover:text-ink transition-colors">
            Courses
          </Link>
          <Link href="/login" className="hover:text-ink transition-colors">
            Log in
          </Link>
        </div>
      </div>
    </footer>
  );
}
