import Image from "next/image";
import { Sparkles, Cloud, Eye, Zap, Trophy, ArrowDown } from "lucide-react";

type Beat = {
  n: number;
  img: string;
  alt: string;
  outcome: string;
  accent: string;
};

type Act = {
  title: string;
  caption: string;
  icon: React.ReactNode;
  accent: string;
  beats: Beat[];
};

const acts: Act[] = [
  {
    title: "Act I — Arrival",
    caption: "Kruz downloads Monara on a Thursday. No spreadsheet. No envelope of receipts.",
    icon: <Cloud className="h-5 w-5" />,
    accent: "#2E8FD9",
    beats: [
      { n: 1, img: "/story/01-welcome.png", alt: "Welcome — Money, made quieter", outcome: "Anxiety softens. He taps Get started.", accent: "#5FB1E3" },
      { n: 2, img: "/story/02-home.png", alt: "Home dashboard greets Kruz by name", outcome: "One number that matters: $3,808.65.", accent: "#2E8FD9" },
      { n: 3, img: "/story/03-transactions.png", alt: "All transactions, grouped by month", outcome: "The full story, no menu diving.", accent: "#1565C0" },
    ],
  },
  {
    title: "Act II — Understanding",
    caption: "Before he does anything, the app shows him what's already true.",
    icon: <Eye className="h-5 w-5" />,
    accent: "#A78BFA",
    beats: [
      { n: 4, img: "/story/04-analytics.png", alt: "Analytics — the month in one breath", outcome: "Net position, streaks, missed days — no scrolling required.", accent: "#A78BFA" },
      { n: 5, img: "/story/05-patterns.png", alt: "Six months of bars, side by side", outcome: "Half a year of patterns, finally visible.", accent: "#7C3AED" },
    ],
  },
  {
    title: "Act III — The Fifteen Seconds",
    caption: "An office snack costs $50. He pulls out his phone in the queue.",
    icon: <Zap className="h-5 w-5" />,
    accent: "#F97316",
    beats: [
      { n: 6, img: "/story/06-add-sheet.png", alt: "Tap the orange plus", outcome: "Three choices. Nothing else competing for attention.", accent: "#FB923C" },
      { n: 7, img: "/story/07-expense-empty.png", alt: "$0. Type the number.", outcome: "The keypad lives at the bottom. The amount sits up top.", accent: "#F97316" },
      { n: 8, img: "/story/08-expense-filled.png", alt: "$50, Transport, Office", outcome: "Three keystrokes. One tap. Done.", accent: "#EA580C" },
      { n: 9, img: "/story/09-saving.png", alt: "Saving — under fifteen seconds", outcome: "A soft pulse. The dashboard already knows.", accent: "#DC2626" },
      { n: 10, img: "/story/10-home-updated.png", alt: "Home, already updated", outcome: "Balance ticks down. Office appears at the top of the feed.", accent: "#2E8FD9" },
    ],
  },
  {
    title: "Act IV — The Loop Closes",
    caption: "The action is logged. Now the rewards loop kicks in — and tomorrow becomes easier.",
    icon: <Trophy className="h-5 w-5" />,
    accent: "#F59E0B",
    beats: [
      { n: 11, img: "/story/11-budget-goals.png", alt: "Budget & goals — Holiday already 120% funded", outcome: "A $10k target. A holiday already overshot. Quiet progress, visible.", accent: "#A78BFA" },
      { n: 12, img: "/story/12-rewards.png", alt: "Rewards — Reward consistency, not intensity", outcome: "Level 2. 50 MP. One green check. He'll be back tomorrow.", accent: "#F59E0B" },
    ],
  },
];

export function VisionBoard() {
  return (
    <section id="vision" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 15% 5%, rgba(46, 143, 217, 0.18), transparent 70%), radial-gradient(800px 500px at 85% 95%, rgba(249, 115, 22, 0.15), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-dark backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> The Storyboard
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
            One Thursday afternoon.
            <br />
            <span className="text-gradient-brand">Twelve beats.</span>{" "}
            <span className="text-gradient-coral">One new habit.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Meet Kruz. He's tried four budgeting apps and quit them all by day three. This is the fifteen minutes that changed how he relates to money — and the loop that keeps him coming back.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-ink/50">
            <span>Scroll the story</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>

        {/* Acts */}
        <div className="mt-20 space-y-24">
          {acts.map((act, ai) => (
            <ActBlock key={act.title} act={act} index={ai} />
          ))}
        </div>

        {/* Closing manifesto */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl glass-card rounded-[36px] p-10 text-center md:p-14">
            <div
              className="mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #5FB1E3 0%, #1565C0 100%)" }}
            >
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="mt-6 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
              "Fifteen seconds today. Fifteen seconds tomorrow.
              <br />
              <span className="text-gradient-brand">A year from now, that's a different life.</span>"
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-ink/55">
              — The MonaraMoney promise
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Outcome stat="15s" label="per log" accent="#2E8FD9" />
              <Outcome stat="73%" label="still active at day 90" accent="#F97316" />
              <Outcome stat="$3.4k" label="median new savings / year" accent="#10B981" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActBlock({ act, index }: { act: Act; index: number }) {
  return (
    <div className="relative">
      {/* Act header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-ink/20" />
          <span
            className="grid h-11 w-11 place-items-center rounded-2xl text-white shadow-lg ring-4 ring-white/60"
            style={{ background: act.accent }}
          >
            {act.icon}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-ink/20" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {act.title}
        </h3>
        <p className="mt-2 max-w-xl text-base text-ink/65">{act.caption}</p>
      </div>

      {/* Beats */}
      <div className="space-y-10">
        {act.beats.map((beat, bi) => (
          <BeatPanel key={beat.n} beat={beat} flip={(index + bi) % 2 === 1} />
        ))}
      </div>
    </div>
  );
}

function BeatPanel({ beat, flip }: { beat: Beat; flip: boolean }) {
  return (
    <article
      className={`relative grid items-center gap-8 rounded-[36px] bg-white/75 p-6 backdrop-blur-md md:gap-12 md:p-10 lg:grid-cols-5 ${
        flip ? "lg:[&>div:first-child]:order-2" : ""
      }`}
      style={{
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.7) inset, 0 30px 60px -25px rgba(11, 61, 110, 0.18), 0 12px 28px -16px rgba(11, 61, 110, 0.12)",
        border: "1px solid rgba(255,255,255,0.7)",
      }}
    >
      {/* Image side */}
      <div className="relative lg:col-span-3">
        <div
          className="absolute -inset-4 -z-10 rounded-[48px] opacity-50 blur-3xl"
          style={{ background: `radial-gradient(circle, ${beat.accent}55, transparent 70%)` }}
        />
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-black/[0.04]">
          <Image
            src={beat.img}
            alt={beat.alt}
            width={2130}
            height={2622}
            sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 92vw"
            className="h-auto w-full"
            priority={beat.n <= 2}
          />
        </div>
      </div>

      {/* Narrative side */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3">
          <span
            className="font-display text-5xl font-bold leading-none md:text-6xl"
            style={{ color: beat.accent }}
          >
            {String(beat.n).padStart(2, "0")}
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">Beat</p>
            <p className="text-sm font-bold text-ink/75">{beat.alt}</p>
          </div>
        </div>

        <div
          className="mt-6 rounded-2xl p-5 text-white shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${beat.accent}, ${beat.accent}CC)`,
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
            Wellbeing shift
          </p>
          <p className="mt-2 text-lg font-bold leading-snug md:text-xl">{beat.outcome}</p>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: beat.accent }} />
          <span className="text-xs font-semibold text-ink/55">
            Story baked into the app — not bolted onto a marketing page.
          </span>
        </div>
      </div>
    </article>
  );
}

function Outcome({ stat, label, accent }: { stat: string; label: string; accent: string }) {
  return (
    <div className="rounded-2xl bg-white/70 p-4 backdrop-blur">
      <p className="font-display text-3xl font-bold" style={{ color: accent }}>
        {stat}
      </p>
      <p className="mt-1 text-xs font-semibold text-ink/65">{label}</p>
    </div>
  );
}
