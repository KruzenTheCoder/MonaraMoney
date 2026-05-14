import { PhoneFrame } from "./PhoneFrame";
import { Star, Sparkles, Rocket, Calendar, Check, Award, Plus, Home, BarChart3, PieChart, Star as StarIcon } from "lucide-react";

export function RewardsMock({ small }: { small?: boolean }) {
  const wrap = small ? "scale-[0.72] origin-top" : "";
  return (
    <div className={wrap}>
      <PhoneFrame>
        <div className="px-5 pt-3 pb-24">
          <h3 className="font-display text-2xl font-bold text-ink">Rewards</h3>
          <p className="text-xs text-ink/70">Reward consistency, not intensity.</p>

          {/* Level card */}
          <div className="mt-4 rounded-3xl bg-white/55 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold/15">
                <Star className="h-5 w-5 fill-gold text-gold" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-ink">Level 2</p>
                <p className="text-xs font-semibold text-gold">Getting Started</p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-gold/15 px-2 py-1 text-[10px] font-bold text-gold">
                <Sparkles className="h-3 w-3" /> 50 MP
              </span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-slate-200">
              <div className="h-full w-[3%] rounded-full bg-gold" />
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-ink/60">
              <span>0 / 70 MP</span>
              <span>0%</span>
            </div>
            <div className="mt-3 rounded-2xl bg-gold/10 py-2 text-center text-xs font-bold text-gold">
              ✨ 70 MP to Level 3
            </div>
          </div>

          {/* Streak */}
          <div className="mt-3 rounded-3xl bg-white/55 p-4 backdrop-blur-md">
            <h4 className="text-sm font-bold text-ink">Current Streak</h4>
            <div className="mt-1 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-coral" />
              <span className="text-sm font-bold text-ink">1 days</span>
            </div>
            <p className="mt-0.5 text-[10px] text-ink/55">Longest: 1 days</p>
            <div className="mt-2 flex gap-1.5 text-[10px]">
              {["1d", "3d", "7d", "14d", "30d"].map((d, i) => (
                <span
                  key={d}
                  className={`rounded-full px-2 py-1 font-bold ${
                    i === 0 ? "bg-coral/15 text-coral" : "bg-white/60 text-ink/50"
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Weekly consistency */}
          <div className="mt-3 rounded-3xl bg-white/55 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-sky-100">
                <Calendar className="h-3.5 w-3.5 text-brand" />
              </div>
              <h4 className="text-sm font-bold text-ink">Weekly Consistency</h4>
            </div>
            <div className="mt-3 flex justify-between px-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  {i === 3 ? (
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-mint">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-white/40" />
                  )}
                  <span className="text-[9px] font-semibold text-ink/60">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-ink" />
              <h4 className="text-sm font-bold text-ink">Badges</h4>
            </div>
            <span className="text-xs font-bold text-ink/50">2/16</span>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-3 left-1/2 flex w-[88%] -translate-x-1/2 items-center justify-between rounded-full bg-ink/95 px-6 py-3 shadow-2xl">
            <Home className="h-4 w-4 text-white/60" />
            <BarChart3 className="h-4 w-4 text-white/60" />
            <span className="grid h-12 w-12 -translate-y-3 place-items-center rounded-full fab-gradient">
              <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <PieChart className="h-4 w-4 text-white/60" />
            <StarIcon className="h-4 w-4 text-brand" />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
