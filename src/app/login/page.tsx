"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — simulates a successful login.
    router.push("/dashboard");
  }

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2.5 justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-moss text-paper font-display text-lg rotate-[-2deg]">
            L
          </span>
          <span className="font-display text-xl tracking-tight text-ink">
            LearnCrib
          </span>
        </Link>

        <h1 className="mt-8 font-display text-2xl text-ink text-center">
          Welcome back
        </h1>
        <p className="mt-1.5 text-sm text-ink-soft text-center">
          Log in to continue your courses.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-ink"
              >
                Password
              </label>
              <Link
                href="#"
                className="text-xs text-moss hover:text-moss-dark"
              >
                Forgot?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-moss text-paper font-medium py-3 hover:bg-moss-dark transition-colors"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-soft">
          New here?{" "}
          <Link href="/signup" className="text-moss font-medium hover:text-moss-dark">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
