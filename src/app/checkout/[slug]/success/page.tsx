import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, PlayCircle, Receipt } from "lucide-react";
import { courses, getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CheckoutSuccessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const orderId = `LC-${slug.slice(0, 4).toUpperCase()}-2026`;

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-moss/10">
          <CheckCircle2 className="h-8 w-8 text-moss" />
        </span>

        <h1 className="mt-6 font-display text-3xl text-ink">
          You're enrolled
        </h1>
        <p className="mt-2 text-ink-soft leading-relaxed">
          Your payment for <span className="text-ink font-medium">{course.title}</span>{" "}
          went through. A receipt is on its way to your inbox.
        </p>

        <div className="mt-8 rounded-xl border border-parchment-dark/70 bg-card p-5 text-left">
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-soft">Order ID</span>
            <span className="text-ink font-medium">{orderId}</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-ink-soft">Amount paid</span>
            <span className="text-ink font-medium">${course.price}</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-ink-soft">Access</span>
            <span className="text-ink font-medium">Lifetime</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href={`/learn/${course.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-moss text-paper font-medium py-3.5 hover:bg-moss-dark transition-colors"
          >
            <PlayCircle className="h-4 w-4" />
            Start learning
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-parchment-dark px-5 py-3 text-sm font-medium text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
          >
            <Receipt className="h-4 w-4" />
            Go to my courses
          </Link>
        </div>
      </div>
    </main>
  );
}
