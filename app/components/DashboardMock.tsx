import { PhoneFrame } from "./PhoneFrame";
import { Briefcase, Car, ShoppingBag, Sparkles, Home, BarChart3, PieChart, Star, Plus } from "lucide-react";

export function DashboardMock() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-3 pb-24">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-ink/70">Good Afternoon</p>
            <h3 className="font-display text-2xl font-bold leading-tight text-ink">
              Kruz M <span className="inline-block">🚀</span>
            </h3>
            <p className="mt-1 text-[10px] text-ink/50">Thursday, May 14</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-white/60 backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand" />
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-white/40 text-[10px] font-bold text-ink">
              KM
            </div>
          </div>
        </div>

        {/* Balance card */}
        <div
          className="relative mt-4 overflow-hidden rounded-3xl p-4 text-white"
          style={{ background: "linear-gradient(150deg, #5FB1E3 0%, #2E8FD9 60%, #1565C0 100%)" }}
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15" />
          <div className="absolute -left-3 -bottom-6 h-20 w-20 rounded-full bg-white/10" />
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Total Balance</p>
          <p className="mt-1 font-display text-3xl font-bold tracking-tight">$3,758.65</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-2xl border border-white/30 bg-white/15 p-2.5 backdrop-blur">
              <div className="mb-1 h-1.5 w-1.5 rounded-full bg-white" />
              <p className="text-[9px] text-white/85">Income</p>
              <p className="text-sm font-bold">$0.00</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/15 p-2.5 backdrop-blur">
              <div className="mb-1 h-1.5 w-1.5 rounded-full bg-white" />
              <p className="text-[9px] text-white/85">Expenses</p>
              <p className="text-sm font-bold">$50.00</p>
            </div>
          </div>
        </div>

        {/* Recent transactions */}
        <div className="mt-4 flex items-center justify-between">
          <h4 className="text-base font-bold text-ink">Recent Transactions</h4>
          <span className="text-xs font-semibold text-brand">See All</span>
        </div>
        <div className="mt-2 space-y-2">
          <TxRow icon={<Car className="h-3.5 w-3.5 text-brand" />} bg="bg-sky-100" label="Office" date="May 14 · 4:51 PM" amount="-$50.00" />
          <TxRow icon={<Briefcase className="h-3.5 w-3.5 text-mint" />} bg="bg-emerald-100" label="Website" date="Apr 12 · 1:14 AM" amount="+$500.00" positive />
          <TxRow icon={<ShoppingBag className="h-3.5 w-3.5 text-rose-500" />} bg="bg-rose-100" label="Work clothes" date="Apr 6 · 3:44 PM" amount="-$500.00" />
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-3 left-1/2 flex w-[88%] -translate-x-1/2 items-center justify-between rounded-full bg-ink/95 px-6 py-3 shadow-2xl">
          <Home className="h-4 w-4 text-brand" />
          <BarChart3 className="h-4 w-4 text-white/60" />
          <span className="grid h-12 w-12 -translate-y-3 place-items-center rounded-full fab-gradient">
            <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <PieChart className="h-4 w-4 text-white/60" />
          <Star className="h-4 w-4 text-white/60" />
        </div>
      </div>
    </PhoneFrame>
  );
}

function TxRow({
  icon,
  bg,
  label,
  date,
  amount,
  positive,
}: {
  icon: React.ReactNode;
  bg: string;
  label: string;
  date: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/55 px-3 py-2 backdrop-blur-sm">
      <div className={`grid h-8 w-8 place-items-center rounded-full ${bg}`}>{icon}</div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-ink">{label}</p>
        <p className="text-[10px] text-ink/55">{date}</p>
      </div>
      <p className={`text-xs font-bold ${positive ? "text-mint" : "text-ink"}`}>{amount}</p>
    </div>
  );
}
