import { PhoneFrame } from "./PhoneFrame";
import { Wallet, PiggyBank, Target, Calendar, Plus, Pencil, Home, BarChart3, PieChart, Star } from "lucide-react";

export function BudgetMock({ small }: { small?: boolean }) {
  const wrap = small ? "scale-[0.72] origin-top" : "";
  return (
    <div className={wrap}>
      <PhoneFrame>
        <div className="px-5 pt-3 pb-24">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Budget</h3>
              <p className="text-[11px] text-ink/65">Track spending limits and savings goals</p>
            </div>
            <span className="text-xs font-bold text-ink">May 2026</span>
          </div>

          {/* Target budget */}
          <div className="mt-4 rounded-3xl bg-white/55 p-4 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-100">
                <Wallet className="h-4 w-4 text-brand" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-ink/60">Target Budget</p>
                <p className="font-display text-xl font-bold text-ink">$10,000.00</p>
              </div>
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white/70">
                <Pencil className="h-3 w-3 text-ink/60" />
              </div>
            </div>
            <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-wider text-ink/55">Spent</p>
            <p className="text-center text-lg font-bold text-ink">$50.00</p>
            <div className="mt-2 h-1.5 rounded-full bg-slate-200">
              <div className="h-full w-[1%] rounded-full bg-mint" />
            </div>
            <p className="mt-1 text-center text-[10px] text-ink/60">1% used · $50.00 / $10,000.00</p>
          </div>

          {/* Savings goals */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100">
                <PiggyBank className="h-3.5 w-3.5 text-mint" />
              </div>
              <h4 className="text-sm font-bold text-ink">Savings Goals</h4>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-coral">
              <Plus className="h-3 w-3" /> New Goal
            </span>
          </div>

          <div className="mt-2 rounded-2xl bg-white/65 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-ink">Total Progress</span>
              <span className="text-sm font-bold text-coral">120.0%</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-slate-200">
              <div className="h-full w-full rounded-full bg-brand" />
            </div>
            <p className="mt-1 text-center text-[10px] text-ink/55">$3,000.00 of $2,500.00</p>
          </div>

          <div className="mt-2 rounded-2xl bg-white/55 p-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-lilac/20">
                <Target className="h-4 w-4 text-lilac" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-ink">Holiday</p>
                <p className="text-[10px] text-ink/55">Target: Jan 1, 2027</p>
              </div>
              <span className="flex items-center gap-1 rounded-full border border-ink/15 px-2 py-0.5 text-[10px] font-bold text-ink">
                <Plus className="h-2.5 w-2.5" /> Fund
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px]">
              <span className="font-bold text-lilac">$3,000.00 / $2,500.00</span>
              <span className="font-bold text-lilac">100%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-slate-200">
              <div className="h-full w-full rounded-full" style={{ background: "#A78BFA" }} />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-rose-100">
                <Calendar className="h-3.5 w-3.5 text-rose-500" />
              </div>
              <h4 className="text-sm font-bold text-ink">Upcoming Bills</h4>
            </div>
            <span className="text-xs font-bold text-coral">Manage</span>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-3 left-1/2 flex w-[88%] -translate-x-1/2 items-center justify-between rounded-full bg-ink/95 px-6 py-3 shadow-2xl">
            <Home className="h-4 w-4 text-white/60" />
            <BarChart3 className="h-4 w-4 text-white/60" />
            <span className="grid h-12 w-12 -translate-y-3 place-items-center rounded-full fab-gradient">
              <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <PieChart className="h-4 w-4 text-brand" />
            <Star className="h-4 w-4 text-white/60" />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
