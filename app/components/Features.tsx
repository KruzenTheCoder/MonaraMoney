import { Wallet, PiggyBank, Calendar, TrendingUp, Bell, Shield } from "lucide-react";
import { AnalyticsMock } from "./AnalyticsMock";

const features = [
  {
    icon: Wallet,
    color: "text-brand",
    bg: "bg-sky-100",
    title: "Effortless tracking",
    body: "Log expenses, income, and bills in two taps. Categories that learn from your habits — not the other way around.",
  },
  {
    icon: PiggyBank,
    color: "text-mint",
    bg: "bg-emerald-100",
    title: "Savings goals that stick",
    body: "Name the dream, set the date. We'll show you the daily number that gets you there — and celebrate every milestone.",
  },
  {
    icon: Calendar,
    color: "text-rose-500",
    bg: "bg-rose-100",
    title: "Never miss a bill",
    body: "Smart reminders before each due date. Mark paid, push later, or auto-roll recurring bills forward.",
  },
  {
    icon: TrendingUp,
    color: "text-gold",
    bg: "bg-amber-100",
    title: "Insights, not spreadsheets",
    body: "Monthly trends, daily averages, and the one number that matters this week — surfaced before you ask.",
  },
  {
    icon: Bell,
    color: "text-coral",
    bg: "bg-orange-100",
    title: "Gentle nudges",
    body: "Streak about to break? Goal off-pace? A friendly tap on the shoulder — never a guilt trip.",
  },
  {
    icon: Shield,
    color: "text-lilac",
    bg: "bg-violet-100",
    title: "Private by design",
    body: "Your data lives on your device first. No selling, no profiling, no ads — ever.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark backdrop-blur">
            Features
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            A whole financial life,{" "}
            <span className="text-gradient-brand">in one calm app.</span>
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Everything you'd expect from a money app. Nothing you'd dread opening.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass-card group rounded-3xl p-6 transition hover:-translate-y-1">
              <div className={`grid h-11 w-11 place-items-center rounded-2xl ${f.bg}`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Analytics showcase */}
        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark backdrop-blur">
              Analytics
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The story behind <span className="text-gradient-coral">every dollar.</span>
            </h3>
            <p className="mt-4 text-base text-ink/70">
              See what you actually spend versus what you think you spend. Monthly trends, daily averages, savings rate — surfaced in plain English, never buried in charts.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/75">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" /> Income vs expenses, at a glance</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-coral" /> Daily average spend, updated live</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mint" /> Month-over-month trend, no math required</li>
            </ul>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <AnalyticsMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
