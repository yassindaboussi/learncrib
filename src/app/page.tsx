import Link from "next/link";
import { ArrowRight, PenLine, PlayCircle, Award } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-clay-dark">
              Career growth through quality education
            </span>
            <h1 className="mt-4 font-display text-[2.75rem] sm:text-6xl leading-[1.05] tracking-tight text-ink">
              Advance your career with professional courses.
            </h1>
            <div className="mt-6 w-20 stitch-rule" />
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl">
               Industry-standard learning designed for all levels. Build valuable skills with guidance from experienced instructors, track your progress, and earn recognized credentials.            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-moss text-paper px-6 py-3.5 text-[15px] font-medium hover:bg-moss-dark transition-colors"
              >
                Browse courses
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full border border-parchment-dark px-6 py-3.5 text-[15px] font-medium text-ink hover:bg-paper-dim transition-colors"
              >
                Create a free account
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-parchment-dark/60 bg-paper-dim/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-display text-2xl text-ink">How it works</h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-10">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-parchment-dark/70">
                  <PenLine className="h-5 w-5 text-moss" />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  Industry experts teach
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  Learn from experienced professionals who bring real-world knowledge and current industry practices directly to your learning.
                </p>
              </div>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-parchment-dark/70">
                  <PlayCircle className="h-5 w-5 text-moss" />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  Work at your speed
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  Study whenever it fits your schedule. Access all materials anytime and progress at your own pace without pressure or time limits.
                </p>
              </div>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-parchment-dark/70">
                  <Award className="h-5 w-5 text-clay" />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  Gain credentials
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  Earn recognized certificates that validate your expertise and strengthen your professional profile when you complete courses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course grid */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl sm:text-3xl text-ink">
              Explore professional courses
            </h2>
            <Link
              href="/courses"
              className="text-sm text-moss hover:text-moss-dark font-medium inline-flex items-center gap-1 whitespace-nowrap"
            >
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
