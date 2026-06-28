import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PlayCircle,
  Award,
  Clock,
  Users,
  CheckCircle2,
  Lock,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { courses, getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

const sampleLessons = [
  "Welcome & what you'll build",
  "Setting up your tools",
  "The first core technique",
  "Putting it into practice",
  "Common mistakes to avoid",
  "Finishing your first project",
];

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Left: details */}
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-moss">
              {course.category}
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-[2.75rem] leading-[1.1] text-ink tracking-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-xl">
              {course.description}
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {course.durationHours}h total
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4" /> {course.studentCount} students
              </span>
              {course.hasCertificate && (
                <span className="inline-flex items-center gap-1.5 text-clay-dark">
                  <Award className="h-4 w-4" /> Certificate included
                </span>
              )}
            </div>

            {/* Video preview placeholder */}
            <div className="mt-9 aspect-video rounded-xl bg-ink/90 border border-parchment-dark/70 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-moss-dark/40 to-transparent" />
              <button
                type="button"
                aria-label="Play preview"
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 hover:bg-paper transition-colors"
              >
                <PlayCircle className="h-8 w-8 text-moss-dark" />
              </button>
              <span className="absolute bottom-4 left-4 text-paper/80 text-xs">
                Preview — Lesson 1
              </span>
            </div>

            {/* Curriculum */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-ink">Curriculum</h2>
              <div className="mt-2 w-12 stitch-rule" />
              <ul className="mt-6 divide-y divide-parchment-dark/60 rounded-xl border border-parchment-dark/60 overflow-hidden bg-card">
                {sampleLessons.slice(0, Math.min(6, course.lessons)).map(
                  (lesson, i) => (
                    <li
                      key={lesson}
                      className="flex items-center gap-4 px-5 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-dim text-xs font-medium text-ink-soft">
                        {i + 1}
                      </span>
                      <span className="text-[15px] text-ink flex-1">
                        {lesson}
                      </span>
                      {i === 0 ? (
                        <PlayCircle className="h-4 w-4 text-moss" />
                      ) : (
                        <Lock className="h-4 w-4 text-ink-soft/50" />
                      )}
                    </li>
                  )
                )}
                {course.lessons > 6 && (
                  <li className="px-5 py-4 text-sm text-ink-soft bg-paper-dim/60">
                    + {course.lessons - 6} more lessons
                  </li>
                )}
              </ul>
            </div>

            {course.hasCertificate && (
              <div className="mt-10 rounded-xl border border-clay/30 bg-clay-light/40 px-6 py-5 flex items-center gap-4">
                <Award className="h-8 w-8 text-clay-dark shrink-0" />
                <div>
                  <p className="font-display text-base text-ink">
                    Finish this course, get certified
                  </p>
                  <p className="text-sm text-ink-soft mt-0.5">
                    Complete every lesson and a certificate is yours to keep.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: purchase card */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-xl border border-parchment-dark/70 bg-card p-6">
              <p className="font-display text-3xl text-ink">
                {course.price === 0 ? "Free" : `$${course.price}`}
              </p>
              <p className="text-sm text-ink-soft mt-1">
                {course.price === 0
                  ? "Enroll any time, no card needed."
                  : "One-time payment, yours for life."}
              </p>

              <Link
                href={
                  course.price === 0
                    ? `/learn/${course.slug}`
                    : `/checkout/${course.slug}`
                }
                className="mt-6 block w-full text-center rounded-full bg-moss text-paper font-medium py-3.5 hover:bg-moss-dark transition-colors"
              >
                {course.price === 0 ? "Enroll for free" : "Buy this course"}
              </Link>

              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  {course.lessons} lessons · {course.durationHours} hours
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  Watch on your own schedule
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  {course.hasCertificate
                    ? "Certificate on completion"
                    : "No certificate for this one"}
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
