import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { courses, getCourse } from "@/lib/courses";
import CheckoutForm from "@/components/CheckoutForm";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main className="flex-1 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to course
        </Link>

        <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Payment form */}
          <div>
            <h1 className="font-display text-3xl text-ink">Checkout</h1>
            <p className="mt-1.5 text-sm text-ink-soft">
              One payment, no subscription.
            </p>

            <div className="mt-8">
              <h2 className="text-sm font-medium text-ink mb-3">
                Pay with card
              </h2>
              <CheckoutForm slug={course.slug} price={course.price} />
            </div>
          </div>

          {/* Order summary */}
          <aside className="lg:sticky lg:top-12 self-start">
            <div className="rounded-xl border border-parchment-dark/70 bg-card p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-moss">
                {course.category}
              </span>
              <h2 className="mt-2 font-display text-lg text-ink leading-snug">
                {course.title}
              </h2>

              <div className="mt-5 pt-5 border-t border-parchment-dark/60 stitch-rule" />

              <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  {course.lessons} lessons · {course.durationHours} hours
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  Lifetime access
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0" />
                  {course.hasCertificate
                    ? "Certificate on completion"
                    : "No certificate for this one"}
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-parchment-dark/60 flex items-center justify-between">
                <span className="text-sm text-ink-soft">Total</span>
                <span className="font-display text-2xl text-ink">
                  ${course.price}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
