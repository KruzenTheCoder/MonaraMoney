import { Heart, Brain, Zap, X, Check, Sparkles, Quote } from "lucide-react";
import { Reveal, WordReveal } from "./Reveal";

export function Story() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 50% 50%, rgba(46, 143, 217, 0.12), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #FDBA74 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-20 -z-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #5FB1E3 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Eyebrow */}
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark shadow-sm backdrop-blur">
            <Sparkles className="h-3 w-3" /> The Story
          </span>
        </Reveal>

        {/* Animated headline */}
        <h2 className="mt-6 text-center font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-[88px]">
          <WordReveal
            text="Most apps reward you for"
            stagger={80}
            className="block"
          />
          <span className="mt-2 block">
            <WordReveal
              text="spending."
              baseDelay={500}
              stagger={0}
              y={48}
              wordClassName="text-gradient-coral italic"
            />
          </span>
          <span className="mt-6 block">
            <WordReveal
              text="We reward you for"
              baseDelay={900}
              stagger={80}
            />
          </span>
          <span className="mt-2 block">
            <WordReveal
              text="showing up."
              baseDelay={1500}
              stagger={150}
              y={48}
              wordClassName="text-gradient-brand italic"
            />
          </span>
        </h2>

        {/* Decorative divider */}
        <Reveal delay={1700} className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ink/30" />
          <Sparkles className="h-4 w-4 text-brand" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ink/30" />
        </Reveal>

        {/* Body intro */}
        <Reveal delay={100}>
          <p className="mt-12 text-center font-display text-2xl font-medium leading-snug text-ink/80 md:text-3xl">
            We built MonaraMoney after watching the same story play out — to everyone we know,
            including ourselves.
          </p>
        </Reveal>

        {/* Before / After comparison */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-[28px] border border-rose-200/60 bg-gradient-to-br from-rose-50 to-amber-50/50 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-500/15">
                  <X className="h-4 w-4 text-rose-500" strokeWidth={3} />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-500">
                  The old way
                </p>
              </div>
              <p className="font-display text-xl font-bold text-ink">
                Download on Sunday. Ghost it by Wednesday.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ink/70">
                {[
                  "Apps that reward you for being already perfect",
                  "Charts that require a finance degree to read",
                  "Resolution → guilt → uninstall, every January",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1 w-3 rounded-full bg-rose-400/70" />
                    <span className="line-through decoration-rose-400/60 decoration-2">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div
              className="relative h-full overflow-hidden rounded-[28px] p-8 text-white shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #1565C0 0%, #2E8FD9 60%, #5FB1E3 100%)",
              }}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20 backdrop-blur">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/85">
                    The Monara way
                  </p>
                </div>
                <p className="font-display text-xl font-bold">
                  Open the app. Earn points. Come back tomorrow.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-white/90">
                  {[
                    "Log one expense, earn points — immediately",
                    "Show up tomorrow, your streak grows",
                    "Miss a day? Progress doesn't reset, only the count",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pull quote */}
        <Reveal delay={200} className="mt-24">
          <figure className="relative mx-auto max-w-4xl rounded-[40px] bg-white/65 p-10 text-center shadow-xl ring-1 ring-white/60 backdrop-blur md:p-16">
            <Quote
              className="absolute left-8 top-8 h-10 w-10 -rotate-12 text-brand/20 md:h-16 md:w-16"
              strokeWidth={1.5}
            />
            <Quote
              className="absolute bottom-8 right-8 h-10 w-10 rotate-180 text-coral/30 md:h-16 md:w-16"
              strokeWidth={1.5}
            />
            <blockquote className="relative">
              <p className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-gradient-brand">Reward</span>{" "}
                <span className="text-ink">consistency,</span>
                <br />
                <span className="text-ink/40">not</span>{" "}
                <span className="text-gradient-coral italic">intensity.</span>
              </p>
              <figcaption className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-ink/55">
                — The thesis. The whole thesis.
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>

        {/* Closing kicker */}
        <Reveal delay={200}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-lg leading-relaxed text-ink/70 md:text-xl">
            Five seconds a day beats five hours once a month. The compound effect of showing up —
            <span className="font-bold text-ink"> that's where the magic is.</span>
          </p>
        </Reveal>

        {/* Three pillars */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          <Reveal delay={0}>
            <Pillar
              icon={<Heart className="h-6 w-6 text-rose-500" />}
              bg="bg-rose-100"
              ring="ring-rose-200"
              title="Built with empathy"
              body="No guilt trips. No red warnings. We meet you where you are."
            />
          </Reveal>
          <Reveal delay={140}>
            <Pillar
              icon={<Brain className="h-6 w-6 text-lilac" />}
              bg="bg-lilac/20"
              ring="ring-lilac/30"
              title="Designed with behavioural science"
              body="The same loops that make games work — pointed at your goals."
            />
          </Reveal>
          <Reveal delay={280}>
            <Pillar
              icon={<Zap className="h-6 w-6 text-gold" />}
              bg="bg-gold/15"
              ring="ring-gold/30"
              title="Optimised for the long game"
              body="A year from now, you'll remember the holiday you paid for in cash."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  icon,
  bg,
  ring,
  title,
  body,
}: {
  icon: React.ReactNode;
  bg: string;
  ring: string;
  title: string;
  body: string;
}) {
  return (
    <div className="glass-card group h-full rounded-3xl p-7 transition hover:-translate-y-1">
      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${bg} ring-4 ${ring}/60`}>
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
    </div>
  );
}
