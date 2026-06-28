import Link from "next/link";
import { notFound } from "next/navigation";
import { UploadCloud, ArrowLeft, Trash2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { courses, getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <AdminShell>
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        My courses
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-ink">Edit course</h1>
          <p className="mt-1 text-sm text-ink-soft">{course.title}</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-danger/30 text-danger text-sm font-medium px-4 py-2 hover:bg-danger/5 transition-colors whitespace-nowrap"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete
        </button>
      </div>

      <form className="mt-8 max-w-2xl space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Course title
          </label>
          <input
            id="title"
            type="text"
            defaultValue={course.title}
            className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            defaultValue={course.description}
            className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors resize-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Category
            </label>
            <select
              id="category"
              defaultValue={course.category}
              className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
            >
              <option>Art</option>
              <option>Code</option>
              <option>Cooking</option>
              <option>Business</option>
              <option>Music</option>
              <option>Lifestyle</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Price (USD)
            </label>
            <input
              id="price"
              type="number"
              defaultValue={course.price}
              className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink focus:border-moss outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-ink mb-1.5">
            Course video
          </span>
          <div className="rounded-xl border-2 border-dashed border-parchment-dark px-6 py-10 text-center hover:border-moss-light transition-colors">
            <UploadCloud className="h-8 w-8 text-ink-soft mx-auto" />
            <p className="mt-3 text-sm text-ink-soft">
              Replace video file, or{" "}
              <span className="text-moss font-medium">browse</span>
            </p>
            <p className="mt-1 text-xs text-ink-soft/70">MP4, up to 2GB</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-parchment-dark/70 bg-paper-dim/50 px-4 py-3.5">
          <input
            id="certificate"
            type="checkbox"
            defaultChecked={course.hasCertificate}
            className="h-4 w-4 rounded accent-moss"
          />
          <label htmlFor="certificate" className="text-sm text-ink">
            This course gives a certificate when finished
          </label>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            className="rounded-full bg-moss text-paper text-sm font-medium px-6 py-3 hover:bg-moss-dark transition-colors"
          >
            Save changes
          </button>
          <Link
            href="/admin"
            className="rounded-full border border-parchment-dark px-6 py-3 text-sm font-medium text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </AdminShell>
  );
}
