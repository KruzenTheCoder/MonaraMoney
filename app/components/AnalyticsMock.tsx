import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Activity, ZapOff, TrendingUp, TrendingDown, BarChart, Sparkles, PieChart as PieIcon, Home, BarChart3, PieChart, Plus, Star } from "lucide-react";

export function AnalyticsMock({ small }: { small?: boolean }) {
  const wrap = small ? "scale-[0.72] origin-top" : "";
  return (
    <div className={wrap}>
      <PhoneFrame>
        <div className="px-5 pt-3 pb-24">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Analytics</h3>
              <p className="text-[11px] text-ink/65">Insights for tracking your progress</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-ink">
              <ChevronLeft className="h-3 w-3" /> May 2026
            </span>
          </div>

          {/* Overview */}
          <div className="mt-4 flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold text-ink/60">Overview</p>
              <p className="font-display text-3xl font-bold text-ink">$50.00</p>
              <p className="text-[10px] text-ink/55">Net negative this month</p>
              <p className="mt-1 flex items-center gap-1 text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-mint" /> Income · $0.00 (0%)</p>
              <p className="flex items-center gap-1 text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Expenses · $50.00 (100%)</p>
            </div>
            <div className="relative grid h-20 w-20 place-items-center rounded-full" style={{ background: "conic-gradient(#EF4444 0% 100%, #fee2e2 0%)" }}>
              <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-center">
                <div>
                  <p className="text-[10px] font-bold text-ink">$50.00</p>
                  <p className="text-[8px] text-ink/55">Total</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity / Missed */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-white/55 p-3 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="grid h-6 w-6 place-items-center rounded-lg bg-sky-100">
                  <Activity className="h-3 w-3 text-brand" />
                </div>
                <span className="text-[10px] font-semibold text-ink/70">Activity</span>
              </div>
              <p className="mt-1 text-lg font-bold text-ink">1 days</p>
              <p className="text-[9px] text-ink/55">vs 4 last month</p>
            </div>
            <div className="rounded-2xl bg-white/55 p-3 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="grid h-6 w-6 place-items-center rounded-lg bg-gold/15">
                  <ZapOff className="h-3 w-3 text-gold" />
                </div>
                <span className="text-[10px] font-semibold text-ink/70">Missed</span>
              </div>
              <p className="mt-1 text-lg font-bold text-ink">13 days</p>
              <p className="text-[9px] text-ink/55">130 pts missed</p>
            </div>
          </div>

          {/* Income / Expenses / Saved */}
          <div className="mt-2 grid grid-cols-3 gap-2">
            <Mini label="INCOME" value="$0.00" color="text-mint" icon={<TrendingUp className="h-3 w-3 text-mint" />} iconBg="bg-emerald-100" />
            <Mini label="EXPENSES" value="$50.00" color="text-rose-500" icon={<TrendingDown className="h-3 w-3 text-rose-500" />} iconBg="bg-rose-100" />
            <Mini label="SAVED" value="0%" color="text-brand" icon={<BarChart className="h-3 w-3 text-brand" />} iconBg="bg-sky-100" />
          </div>

          {/* Insights */}
          <h4 className="mt-3 text-sm font-bold text-ink">Key Insights</h4>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-white/55 p-3 backdrop-blur-md">
              <div className="grid h-6 w-6 place-items-center rounded-lg bg-sky-100">
                <Sparkles className="h-3 w-3 text-brand" />
              </div>
              <p className="mt-1 text-[10px] font-semibold text-ink/65">Daily Avg Spend</p>
              <p className="text-base font-bold text-ink">$3.57</p>
            </div>
            <div className="rounded-2xl bg-white/55 p-3 backdrop-blur-md">
              <div className="grid h-6 w-6 place-items-center rounded-lg bg-gold/15">
                <PieIcon className="h-3 w-3 text-gold" />
              </div>
              <p className="mt-1 text-[10px] font-semibold text-ink/65">Monthly Trend</p>
              <p className="text-base font-bold text-mint">-98.8%</p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-3 left-1/2 flex w-[88%] -translate-x-1/2 items-center justify-between rounded-full bg-ink/95 px-6 py-3 shadow-2xl">
            <Home className="h-4 w-4 text-white/60" />
            <BarChart3 className="h-4 w-4 text-brand" />
            <span className="grid h-12 w-12 -translate-y-3 place-items-center rounded-full fab-gradient">
              <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <PieChart className="h-4 w-4 text-white/60" />
            <Star className="h-4 w-4 text-white/60" />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function Mini({ label, value, color, icon, iconBg }: { label: string; value: string; color: string; icon: React.ReactNode; iconBg: string }) {
  return (
    <div className="rounded-2xl bg-white/55 p-2.5 backdrop-blur-md">
      <div className={`grid h-6 w-6 place-items-center rounded-lg ${iconBg}`}>{icon}</div>
      <p className="mt-1 text-[8px] font-bold text-ink/55">{label}</p>
      <p className={`text-sm font-bold ${color}`}>{value}</p>
    </div>
  );
}
