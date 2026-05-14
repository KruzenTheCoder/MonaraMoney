import { Star } from "lucide-react";

const quotes = [
  {
    name: "Amara K.",
    role: "Designer · Cape Town",
    initial: "A",
    color: "#5FB1E3",
    quote:
      "I've started and quit four finance apps. MonaraMoney is the only one where I actually want to open it. The streaks got me — I'm on day 41.",
  },
  {
    name: "Dean R.",
    role: "Founder · Austin",
    initial: "D",
    color: "#F97316",
    quote:
      "Genuinely the first app that made me feel rewarded for the boring stuff. Hit my emergency fund goal three months early.",
  },
  {
    name: "Priya N.",
    role: "PM · London",
    initial: "P",
    color: "#A78BFA",
    quote:
      "The badges sound silly until you've got one. Now I'm chasing 'Bill Slayer' like it's a Strava segment.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            People are sticking with it.
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            The average MonaraMoney user logs 4.2 days a week — and keeps doing it past day 90.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="glass-card flex h-full flex-col rounded-3xl p-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full font-bold text-white"
                  style={{ background: q.color }}
                >
                  {q.initial}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{q.name}</p>
                  <p className="text-xs text-ink/55">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
