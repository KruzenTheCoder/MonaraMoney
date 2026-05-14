const steps = [
  {
    n: "01",
    title: "Drop it in",
    body: "Snap a receipt or log a few seconds of typing. MonaraMoney auto-categorises and updates your balance instantly.",
  },
  {
    n: "02",
    title: "Earn the streak",
    body: "Show up tomorrow. And the day after. Your weekly ring fills, your streak grows, MP roll in.",
  },
  {
    n: "03",
    title: "Hit the goal",
    body: "Watch your savings bar fill, budget pace itself, and bills handle themselves. Compound consistency wins.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark backdrop-blur">
            How it works
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Three taps to a better month.
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connector */}
          <div className="absolute left-[16%] right-[16%] top-12 hidden h-px md:block" style={{ background: "linear-gradient(90deg, transparent, #5FB1E3, transparent)" }} />
          {steps.map((s) => (
            <div key={s.n} className="glass-card relative rounded-3xl p-6">
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl font-display text-lg font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #5FB1E3 0%, #1565C0 100%)" }}
              >
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
