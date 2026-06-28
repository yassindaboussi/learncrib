import Link from "next/link";
import {
  Pencil,
  Eye,
  Award,
  Users,
  DollarSign,
  BookOpen,
  ShoppingCart,
  UserPlus,
  TrendingUp,
} from "lucide-react";
import AdminShell from "@/components/AdminShell";
import {
  courses,
  recentActivity,
  getTotalStudents,
  getTotalRevenue,
  getCertificatesIssuedEstimate,
  getTopCoursesByRevenue,
  getCourse,
} from "@/lib/courses";

const activityIcon = {
  purchase: ShoppingCart,
  enrollment: UserPlus,
  certificate: Award,
};

const activityLabel = {
  purchase: "bought",
  enrollment: "enrolled in",
  certificate: "earned a certificate for",
};

export default function AdminDashboard() {
  const totalStudents = getTotalStudents();
  const totalRevenue = getTotalRevenue();
  const certificatesIssued = getCertificatesIssuedEstimate();
  const topCourses = getTopCoursesByRevenue();

  return (
    <AdminShell>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-ink">Dashboard</h1>
          <p className="text-ink-soft mt-1 text-sm">
            Here's how LearnCrib is doing.
          </p>
        </div>
        <Link
          href="/admin/courses/new"
          className="inline-flex items-center gap-2 rounded-full bg-moss text-paper text-sm font-medium px-5 py-2.5 hover:bg-moss-dark transition-colors whitespace-nowrap"
        >
          Add course
        </Link>
      </div>

      {/* Stat cards */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-parchment-dark/60 bg-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
              Revenue
            </span>
            <DollarSign className="h-4 w-4 text-moss" />
          </div>
          <p className="mt-3 font-display text-2xl text-ink">
            ${totalRevenue.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-ink-soft inline-flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-moss" />
            All-time, paid courses
          </p>
        </div>

        <div className="rounded-xl border border-parchment-dark/60 bg-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
              Students
            </span>
            <Users className="h-4 w-4 text-moss" />
          </div>
          <p className="mt-3 font-display text-2xl text-ink">
            {totalStudents.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-ink-soft">Across all courses</p>
        </div>

        <div className="rounded-xl border border-parchment-dark/60 bg-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
              Courses
            </span>
            <BookOpen className="h-4 w-4 text-moss" />
          </div>
          <p className="mt-3 font-display text-2xl text-ink">
            {courses.length}
          </p>
          <p className="mt-1 text-xs text-ink-soft">Published</p>
        </div>

        <div className="rounded-xl border border-parchment-dark/60 bg-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
              Certificates
            </span>
            <Award className="h-4 w-4 text-clay" />
          </div>
          <p className="mt-3 font-display text-2xl text-ink">
            {certificatesIssued.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-ink-soft">Issued so far</p>
        </div>
      </div>

      {/* Top courses + recent activity */}
      <div className="mt-8 grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="rounded-xl border border-parchment-dark/60 bg-card p-6">
          <h2 className="font-display text-lg text-ink">
            Top courses by revenue
          </h2>
          <div className="mt-5 space-y-4">
            {topCourses.map((course, i) => {
              const maxRevenue = topCourses[0].revenue || 1;
              const pct = Math.max(
                6,
                Math.round((course.revenue / maxRevenue) * 100)
              );
              return (
                <div key={course.slug}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink font-medium">
                      {i + 1}. {course.title}
                    </span>
                    <span className="text-ink-soft whitespace-nowrap">
                      ${course.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-parchment overflow-hidden">
                    <div
                      className="h-full bg-moss rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-parchment-dark/60 bg-card p-6">
          <h2 className="font-display text-lg text-ink">Recent activity</h2>
          <ul className="mt-5 space-y-4">
            {recentActivity.map((event) => {
              const Icon = activityIcon[event.type];
              const course = getCourse(event.courseSlug);
              return (
                <li key={event.id} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-dim text-moss">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="text-sm">
                    <p className="text-ink">
                      <span className="font-medium">{event.studentName}</span>{" "}
                      <span className="text-ink-soft">
                        {activityLabel[event.type]}
                      </span>{" "}
                      <span className="font-medium">{course?.title}</span>
                    </p>
                    <p className="text-xs text-ink-soft mt-0.5">
                      {event.timestamp}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* All courses table */}
      <div className="mt-8">
        <h2 className="font-display text-lg text-ink mb-4">All courses</h2>
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
