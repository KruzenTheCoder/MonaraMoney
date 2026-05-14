import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

type Stat = {
  prefix?: string;
  to: number;
  decimals?: number;
  suffix?: string;
  unit?: string;
  label: string;
  accent: string;
  glow: string;
};

const stats: Stat[] = [
  {
    to: 4.2,
    decimals: 1,
    unit: "days/week",
    label: "average user logs",
    accent: "#2E8FD9",
    glow: "rgba(46,143,217,0.35)",
  },
  {
    to: 73,
    suffix: "%",
    label: "still active at day 90",
    accent: "#F97316",
    glow: "rgba(249,115,22,0.35)",
  },
  {
    prefix: "$",
    to: 3.4,
    decimals: 1,
    suffix: "k",
    unit: "/ year",
    label: "median new savings",
    accent: "#10B981",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    to: 0,
    label: "ads. ever.",
    accent: "#A78BFA",
    glow: "rgba(167,139,250,0.35)",
  },
];

export function Impact() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-[40px] p-10 md:p-14">
            {/* Soft accent glows */}
            {stats.map((s, i) => (
              <div
                key={i}
                aria-hidden
                className="pointer-events-none absolute h-48 w-48 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`,
                  top: i < 2 ? "-40px" : "auto",
                  bottom: i >= 2 ? "-40px" : "auto",
                  left: `${(i * 25) + 5}%`,
                  opacity: 0.55,
                }}
              />
            ))}

            <div className="relative grid gap-10 md:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={i} delay={i * 120} className="text-center">
                  <StatBlock stat={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="relative">
      <p
        className="font-display text-6xl font-bold leading-none tracking-tight md:text-7xl"
        style={{ color: stat.accent }}
      >
        <CountUp
          to={stat.to}
          from={0}
          decimals={stat.decimals ?? 0}
          duration={stat.to === 0 ? 600 : 1800}
          prefix={stat.prefix ?? ""}
          suffix={stat.suffix ?? ""}
        />
        {stat.unit && (
          <span className="ml-1 align-baseline text-xl font-semibold text-ink/50 md:text-2xl">
            {stat.unit}
          </span>
        )}
      </p>
      <p className="mt-3 text-sm font-semibold text-ink/65">{stat.label}</p>
      <div
        className="mx-auto mt-4 h-0.5 w-12 rounded-full"
        style={{ background: stat.accent, opacity: 0.5 }}
      />
    </div>
  );
}
