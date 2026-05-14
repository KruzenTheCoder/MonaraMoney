"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }
      setState("done");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setState("error");
    }
  }

  return (
    <section id="waitlist" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="relative overflow-hidden rounded-[40px] p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, #1565C0 0%, #2E8FD9 50%, #5FB1E3 100%)",
          }}
        >
          {/* Decoration */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10" />
          <div className="absolute right-10 top-10 h-24 w-24 rounded-full" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.6), transparent 70%)" }} />

          <div className="relative">
            <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              Limited early access
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Be one of the first 5,000.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Join the waitlist and we'll send your invite the moment your region opens. Founding members get lifetime Pro at no cost.
            </p>

            {state === "done" ? (
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-6 py-4 text-ink shadow-xl">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-white">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-bold">You're on the list.</p>
                  <p className="text-sm text-ink/65">Keep an eye on your inbox.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === "loading"}
                  className="flex-1 rounded-2xl border border-white/30 bg-white/95 px-5 py-4 text-base text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {state === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Join waitlist
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
            {error && <p className="mt-3 text-sm font-semibold text-rose-100">{error}</p>}

            <p className="mt-4 text-xs text-white/70">
              No spam. Unsubscribe anytime. Your email stays with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
