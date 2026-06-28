"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses, type Course } from "@/lib/courses";

const categories = [
  "All",
  ...Array.from(new Set(courses.map((c) => c.category))),
];

export default function CourseBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return courses.filter((course: Course) => {
      const matchesCategory =
        category === "All" || course.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-6">
        <span className="text-xs font-medium uppercase tracking-wider text-clay-dark">
          {courses.length} courses
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink tracking-tight">
          All courses
        </h1>
        <div className="mt-5 w-16 stitch-rule" />

        <div className="mt-8 relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses..."
            className="w-full rounded-full border border-parchment-dark bg-card pl-11 pr-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={
                cat === category
                  ? "rounded-full bg-moss text-paper text-sm font-medium px-4 py-2"
                  : "rounded-full bg-card border border-parchment-dark/70 text-ink-soft text-sm font-medium px-4 py-2 hover:border-moss-light hover:text-ink transition-colors"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <SearchX className="h-8 w-8 text-ink-soft/50 mx-auto" />
            <p className="mt-4 font-display text-lg text-ink">
              No courses match
            </p>
            <p className="mt-1.5 text-sm text-ink-soft">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
