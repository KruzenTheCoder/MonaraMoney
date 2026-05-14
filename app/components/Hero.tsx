import { ArrowRight, Sparkles, Star } from "lucide-react";
import { DashboardMock } from "./DashboardMock";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient bubbles */}
      <div className="bubble left-[8%] top-[18%] h-32 w-32" />
      <div className="bubble right-[12%] top-[40%] h-24 w-24" style={{ animationDelay: "2s" }} />
      <div className="bubble left-[20%] bottom-[10%] h-20 w-20" style={{ animationDelay: "4s" }} />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-2 md:pt-32 lg:pt-36">
        <div className="fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Now in early access · iOS &amp; Android
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Reward
            <br />
            <span className="text-gradient-brand">consistency,</span>
            <br />
            not intensity.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            MonaraMoney turns the hard parts of budgeting — showing up every day — into something you actually look forward to. Track spending, build streaks, level up, and watch the small wins compound.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 text-base font-bold text-white shadow-xl shadow-ink/25 transition hover:-translate-y-0.5"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-ink/15 bg-white/50 px-6 py-4 text-base font-semibold text-ink backdrop-blur transition hover:bg-white/80"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-2">
              {["#5FB1E3", "#F97316", "#A78BFA", "#10B981"].map((c) => (
                <span key={c} className="h-8 w-8 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xs font-semibold text-ink/70">2,400+ on the waitlist</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[60px] opacity-50 blur-3xl" style={{ background: "radial-gradient(circle, #5FB1E3 0%, transparent 70%)" }} />
          <div className="float-y">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
