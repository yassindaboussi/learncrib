import { Award, Mail } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { students, getCourse } from "@/lib/courses";

export default function AdminStudentsPage() {
  return (
    <AdminShell>
      <div>
        <h1 className="font-display text-3xl text-ink">Students</h1>
        <p className="text-ink-soft mt-1 text-sm">
          {students.length} people learning on LearnCrib
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-parchment-dark/60 bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-parchment-dark/60 text-left text-ink-soft">
              <th className="px-5 py-3 font-medium">Student</th>
              <th className="px-5 py-3 font-medium hidden sm:table-cell">
                Course
              </th>
              <th className="px-5 py-3 font-medium">Progress</th>
              <th className="px-5 py-3 font-medium hidden md:table-cell">
                Joined
              </th>
              <th className="px-5 py-3 font-medium text-right">
                Certificate
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-parchment-dark/50">
            {students.map((student) => {
              const course = getCourse(student.enrolledSlug);
              return (
                <tr key={student.id}>
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{student.name}</p>
                    <p className="text-xs text-ink-soft mt-0.5 inline-flex items-center gap-1.5">
                      <Mail className="h-3 w-3" />
                      {student.email}
                    </p>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell text-ink-soft">
                    {course?.title}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5 min-w-[120px]">
                      <div className="h-1.5 flex-1 rounded-full bg-parchment overflow-hidden">
                        <div
                          className="h-full bg-moss rounded-full"
                          style={{ width: `${student.progressPct}%` }}
                        />
                      </div>
                      <span className="text-xs text-ink-soft whitespace-nowrap">
                        {student.progressPct}%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell text-ink-soft">
                    {student.joined}
                  </td>
                  <td className="px-5 py-4 text-right">
                    {student.certificateEarned ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-clay-dark">
                        <Award className="h-3.5 w-3.5" />
                        Earned
                      </span>
                    ) : (
                      <span className="text-xs text-ink-soft">
                        In progress
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
