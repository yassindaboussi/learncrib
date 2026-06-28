import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PlayCircle,
  CheckCircle2,
  Circle,
  ArrowLeft,
  Award,
} from "lucide-react";
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

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const lessons = Array.from({ length: course.lessons }, (_, i) =>
    i < sampleLessons.length
      ? sampleLessons[i]
      : `Lesson ${i + 1}`
  );
  const activeIndex = 1; // static demo state: second lesson is "current"

  return (
    <div className="flex-1 flex flex-col">
      {/* Minimal player header */}
      <header className="border-b border-parchment-dark/60 bg-paper px-6 py-3.5 flex items-center justify-between">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Exit course
        </Link>
        <span className="font-display text-base text-ink hidden sm:inline">
          {course.title}
        </span>
        <span className="text-xs text-ink-soft">
          Lesson {activeIndex + 1} of {course.lessons}
        </span>
      </header>

      <div className="flex-1 grid lg:grid-cols-[1fr_320px]">
        {/* Video area */}
        <div className="flex flex-col">
          <div className="aspect-video bg-ink flex items-center justify-center relative">
            <button
              type="button"
              aria-label="Play lesson"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 hover:bg-paper transition-colors"
            >
              <PlayCircle className="h-8 w-8 text-moss-dark" />
            </button>
          </div>

          <div className="px-6 sm:px-10 py-8 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-moss">
              Lesson {activeIndex + 1}
            </span>
            <h1 className="mt-2 font-display text-2xl text-ink">
              {lessons[activeIndex]}
            </h1>
            <p className="mt-3 text-ink-soft leading-relaxed">
              A short note about what this lesson covers would sit here,
              along with any files to download before you start.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-moss text-paper text-sm font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors"
              >
                <CheckCircle2 className="h-4 w-4" />
                Mark lesson as done
              </button>
            </div>

            {course.hasCertificate && (
              <div className="mt-10 rounded-xl border border-parchment-dark/60 bg-paper-dim/60 px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-clay" />
                  <p className="text-sm text-ink-soft">
                    Finish every lesson to unlock your certificate.
                  </p>
                </div>
                <Link
                  href="/certificate"
                  className="text-sm font-medium text-moss hover:text-moss-dark whitespace-nowrap"
                >
                  Preview certificate
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Lesson list sidebar */}
        <aside className="border-t lg:border-t-0 lg:border-l border-parchment-dark/60 bg-paper-dim/40">
          <div className="px-5 py-4 border-b border-parchment-dark/60">
            <p className="text-sm font-medium text-ink">Course content</p>
            <p className="text-xs text-ink-soft mt-0.5">
              {activeIndex} of {course.lessons} lessons done
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-parchment overflow-hidden">
              <div
                className="h-full bg-moss rounded-full"
                style={{
                  width: `${(activeIndex / course.lessons) * 100}%`,
                }}
              />
            </div>
          </div>
          <ul className="divide-y divide-parchment-dark/50">
            {lessons.map((lesson, i) => (
              <li key={lesson}>
                <button
                  type="button"
                  className={
                    i === activeIndex
                      ? "w-full flex items-center gap-3 px-5 py-3.5 text-left bg-card border-l-2 border-moss"
                      : "w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-card/60 transition-colors border-l-2 border-transparent"
                  }
                >
                  {i < activeIndex ? (
                    <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  ) : (
                    <Circle className="h-4 w-4 text-ink-soft/40 shrink-0" />
                  )}
                  <span
                    className={
                      i === activeIndex
                        ? "text-sm text-ink font-medium"
                        : "text-sm text-ink-soft"
                    }
                  >
                    {lesson}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
