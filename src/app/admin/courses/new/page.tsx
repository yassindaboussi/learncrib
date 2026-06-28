import Link from "next/link";
import { UploadCloud, ArrowLeft } from "lucide-react";
import AdminShell from "@/components/AdminShell";

export default function NewCoursePage() {
  return (
    <AdminShell>
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        My courses
      </Link>

      <h1 className="mt-4 font-display text-3xl text-ink">Add a course</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Fill in the basics — you can add lessons after creating it.
      </p>

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
            placeholder="e.g. Watercolor Foundations"
            className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
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
            placeholder="What will students learn?"
            className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors resize-none"
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
              placeholder="0 for free"
              className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
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
              Drag a video file here, or{" "}
              <span className="text-moss font-medium">browse</span>
            </p>
            <p className="mt-1 text-xs text-ink-soft/70">MP4, up to 2GB</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-parchment-dark/70 bg-paper-dim/50 px-4 py-3.5">
          <input
            id="certificate"
            type="checkbox"
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
            Publish course
          </button>
          <button
            type="button"
            className="rounded-full border border-parchment-dark px-6 py-3 text-sm font-medium text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
          >
            Save as draft
          </button>
        </div>
      </form>
    </AdminShell>
  );
}
