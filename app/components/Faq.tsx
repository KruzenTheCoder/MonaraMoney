const faqs = [
  {
    q: "Does MonaraMoney connect to my bank?",
    a: "Manual-first by design — log in seconds, no bank linking required. Bank sync is coming for users who want it, with read-only Plaid integration and full opt-out.",
  },
  {
    q: "How much will it cost?",
    a: "Free forever for the core features. MonaraMoney Pro launches alongside the public app with advanced analytics, unlimited goals, and a few power-user perks. Waitlist members get Pro on us.",
  },
  {
    q: "What about my privacy?",
    a: "Your data is yours. Stored encrypted on-device first, syncing optional and end-to-end. We do not sell, share, or train on your financial data — ever.",
  },
  {
    q: "iOS, Android, web?",
    a: "Native iOS and Android at launch. A read-only web companion is on the roadmap for Q3.",
  },
  {
    q: "What if I miss a day?",
    a: "Streaks have one freebie a week — life happens. Beyond that, missing a day resets the count, but never your progress. Every log still counts.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Questions, answered.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="glass-card group rounded-3xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <h3 className="text-base font-bold text-ink">{f.q}</h3>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/80 text-ink transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
