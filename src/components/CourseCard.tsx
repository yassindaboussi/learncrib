import Link from "next/link";
import { BookOpen, Award } from "lucide-react";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card-tab group block rounded-xl bg-card border border-parchment-dark/70 p-6 pt-7 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(31,42,36,0.15)] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-moss">
          {course.category}
        </span>
        {course.hasCertificate && (
          <Award className="h-4 w-4 text-clay" strokeWidth={2} />
        )}
      </div>

      <h3 className="mt-3 font-display text-xl text-ink leading-snug group-hover:text-moss-dark transition-colors">
        {course.title}
      </h3>

      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
        {course.description}
      </p>

      <div className="mt-5 stitch-rule" />

      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
          <BookOpen className="h-3.5 w-3.5" />
          {course.lessons} lessons
        </span>
        <span className="font-display text-base text-ink">
          {course.price === 0 ? "Free" : `$${course.price}`}
        </span>
      </div>
    </Link>
  );
}
