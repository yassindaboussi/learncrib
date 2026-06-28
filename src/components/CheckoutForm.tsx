"use client";

import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function CheckoutForm({
  slug,
  price,
}: {
  slug: string;
  price: number;
}) {
  const router = useRouter();

  function handlePay(e: React.FormEvent) {
    e.preventDefault();
    // No real payment processor yet — simulates a successful charge.
    router.push(`/checkout/${slug}/success`);
  }

  return (
    <form className="space-y-4" onSubmit={handlePay}>
      <div>
        <label
          htmlFor="cardname"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          Name on card
        </label>
        <input
          id="cardname"
          type="text"
          required
          placeholder="Sarah Bennett"
          className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="cardnumber"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          Card number
        </label>
        <input
          id="cardnumber"
          type="text"
          required
          placeholder="1234 1234 1234 1234"
          className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="expiry"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Expiry
          </label>
          <input
            id="expiry"
            type="text"
            required
            placeholder="MM / YY"
            className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            required
            placeholder="123"
            className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          Receipt email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-parchment-dark bg-card px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-moss outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-moss text-paper font-medium py-3.5 hover:bg-moss-dark transition-colors"
      >
        <Lock className="h-4 w-4" />
        Pay ${price}
      </button>
      <p className="text-xs text-ink-soft text-center flex items-center justify-center gap-1.5">
        <Lock className="h-3 w-3" />
        Payments are encrypted and secure.
      </p>
    </form>
  );
}
