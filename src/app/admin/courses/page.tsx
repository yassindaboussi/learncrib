import Link from "next/link";
import { Pencil, Eye, Award, Users } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { courses } from "@/lib/courses";

export default function AdminCoursesPage() {
  return (
    <AdminShell>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-ink">Courses</h1>
          <p className="text-ink-soft mt-1 text-sm">
            Manage and edit all your courses.
          </p>
        </div>
        <Link
          href="/admin/courses/new"
          className="inline-flex items-center gap-2 rounded-full bg-moss text-paper text-sm font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors whitespace-nowrap"
        >
          Add course
        </Link>
      </div>

      {/* All courses table */}
      <div className="mt-8">
        <div className="rounded-xl border border-parchment-dark/60 bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-parchment-dark/60 text-left text-ink-soft">
                <th className="px-5 py-3 font-medium">Course</th>
                <th className="px-5 py-3 font-medium hidden sm:table-cell">
                  Price
                </th>
                <th className="px-5 py-3 font-medium hidden sm:table-cell">
                  Certificate
                </th>
                <th className="px-5 py-3 font-medium hidden md:table-cell">
                  Students
                </th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-dark/50">
              {courses.map((course) => (
                <tr key={course.slug}>
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{course.title}</p>
                    <p className="text-xs text-ink-soft mt-0.5">
                      {course.category} · {course.lessons} lessons
                    </p>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell text-ink-soft">
                    {course.price === 0 ? "Free" : `$${course.price}`}
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    {course.hasCertificate ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-clay-dark">
                        <Award className="h-3.5 w-3.5" /> Yes
                      </span>
                    ) : (
                      <span className="text-xs text-ink-soft">No</span>
                    )}
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell text-ink-soft">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {course.studentCount}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-lg hover:bg-paper-dim transition-colors text-ink-soft"
                        aria-label="Preview course"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/courses/${course.slug}/edit`}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-lg hover:bg-paper-dim transition-colors text-ink-soft"
                        aria-label="Edit course"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
