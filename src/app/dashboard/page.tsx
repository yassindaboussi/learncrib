import Link from "next/link";
import { PlayCircle, Award, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getEnrolledCourses } from "@/lib/courses";

export default function DashboardPage() {
  const enrolled = getEnrolledCourses();
  const inProgress = enrolled.filter((c) => !c.finished);
  const finished = enrolled.filter((c) => c.finished);

  return (
    <>
      <SiteHeader loggedIn />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-14 pb-6">
          <span className="text-xs font-medium uppercase tracking-wider text-clay-dark">
            Welcome back
          </span>
          <h1 className="mt-3 font-display text-4xl text-ink tracking-tight">
            My courses
          </h1>
          <div className="mt-5 w-16 stitch-rule" />
        </section>

        {enrolled.length === 0 ? (
          <section className="mx-auto max-w-5xl px-6 py-16 text-center">
            <p className="font-display text-xl text-ink">
              Nothing here yet
            </p>
            <p className="mt-2 text-ink-soft">
              Once you enroll in a course, it will show up on this page.
            </p>
            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-moss text-paper text-sm font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors"
            >
              Browse courses
            </Link>
          </section>
        ) : (
          <>
            {inProgress.length > 0 && (
              <section className="mx-auto max-w-5xl px-6 py-6">
                <h2 className="font-display text-xl text-ink">
                  Continue learning
                </h2>
                <div className="mt-5 space-y-4">
                  {inProgress.map((course) => {
                    const pct = Math.round(
                      (course.lessonsCompleted / course.lessons) * 100
                    );
                    return (
                      <div
                        key={course.slug}
                        className="rounded-xl border border-parchment-dark/70 bg-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5"
                      >
                        <div className="flex-1">
                          <span className="text-xs font-medium uppercase tracking-wider text-moss">
                            {course.category}
                          </span>
                          <h3 className="mt-1.5 font-display text-lg text-ink">
                            {course.title}
                          </h3>
                          <div className="mt-3 flex items-center gap-3">
                            <div className="h-1.5 flex-1 max-w-xs rounded-full bg-parchment overflow-hidden">
                              <div
                                className="h-full bg-moss rounded-full"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-xs text-ink-soft whitespace-nowrap">
                              {course.lessonsCompleted}/{course.lessons}{" "}
                              lessons
                            </span>
                          </div>
                        </div>
                        <Link
                          href={`/learn/${course.slug}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-moss text-paper text-sm font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors whitespace-nowrap"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Continue
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {finished.length > 0 && (
              <section className="mx-auto max-w-5xl px-6 py-10">
                <h2 className="font-display text-xl text-ink">Completed</h2>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  {finished.map((course) => (
                    <div
                      key={course.slug}
                      className="rounded-xl border border-parchment-dark/70 bg-card p-5 flex items-center gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-light">
                        <CheckCircle2 className="h-5 w-5 text-clay-dark" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-base text-ink">
                          {course.title}
                        </p>
                        <p className="text-xs text-ink-soft mt-0.5">
                          All {course.lessons} lessons completed
                        </p>
                      </div>
                      {course.hasCertificate && (
                        <Link
                          href="/certificate"
                          className="inline-flex items-center gap-1.5 text-sm text-moss hover:text-moss-dark font-medium whitespace-nowrap"
                        >
                          <Award className="h-4 w-4" />
                          Certificate
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
