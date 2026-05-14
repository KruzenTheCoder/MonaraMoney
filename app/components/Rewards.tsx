import { Flame, Star, Award, Sparkles } from "lucide-react";
import { RewardsMock } from "./RewardsMock";
import { BudgetMock } from "./BudgetMock";

export function Rewards() {
  return (
    <section id="rewards" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(255, 237, 213, 0.35) 50%, transparent 100%)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-coral/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral">
            <Sparkles className="h-3 w-3" /> Gamified
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Money habits, <span className="text-gradient-coral">that feel like a game.</span>
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Levels, streaks, badges, Monara Points. Every log, every paid bill, every saved dollar earns you something.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[520px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <RewardsMock />
            </div>
          </div>

          <div className="space-y-4">
            <Stat
              icon={<Star className="h-5 w-5 fill-gold text-gold" />}
              bg="bg-gold/15"
              title="Levels &amp; MP"
              body="Earn Monara Points for showing up. Climb levels. Unlock surprises along the way."
            />
            <Stat
              icon={<Flame className="h-5 w-5 text-coral" />}
              bg="bg-coral/15"
              title="Streaks that protect themselves"
              body="A 1-day streak feels good. A 30-day streak changes lives. We help you keep it alive."
            />
            <Stat
              icon={<Award className="h-5 w-5 text-lilac" />}
              bg="bg-lilac/20"
              title="16 badges to collect"
              body="First Step. Budget Master. Streak Hero. Each one a milestone you'll actually remember."
            />
            <Stat
              icon={<Sparkles className="h-5 w-5 text-brand" />}
              bg="bg-sky-100"
              title="Weekly consistency rings"
              body="See your week at a glance. Close the rings. Reset on Monday. Repeat."
            />
          </div>
        </div>

        {/* Budget split */}
        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark backdrop-blur">
              Budget &amp; Goals
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Spend with <span className="text-gradient-brand">a plan.</span> Save without thinking.
            </h3>
            <p className="mt-4 text-base text-ink/70">
              Set a monthly target. Spin up named savings goals — a holiday, an emergency fund, a new bike — and watch the progress bars fill themselves as you log.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/75">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" /> One target budget, multiple goals</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lilac" /> Fund goals manually or auto-route a % of income</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" /> Upcoming bills, always one tap away</li>
            </ul>
          </div>
          <div className="relative order-1 h-[520px] lg:order-2">
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <BudgetMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, bg, title, body }: { icon: React.ReactNode; bg: string; title: string; body: string }) {
  return (
    <div className="glass-card flex items-start gap-4 rounded-3xl p-5">
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${bg}`}>{icon}</div>
      <div>
        <h4 className="font-bold text-ink" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="mt-1 text-sm text-ink/65">{body}</p>
      </div>
    </div>
  );
}
