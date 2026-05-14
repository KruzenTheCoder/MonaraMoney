export function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/30 py-12 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span
            className="grid h-8 w-8 place-items-center rounded-xl text-white"
            style={{ background: "linear-gradient(135deg, #5FB1E3 0%, #1565C0 100%)" }}
          >
            <span className="font-display text-base font-bold">M</span>
          </span>
          <span className="font-display text-base font-bold tracking-tight text-ink">
            Monara<span className="text-brand">Money</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-ink/70">
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#rewards" className="hover:text-ink">Rewards</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
          <a href="mailto:hello@monaramoney.com" className="hover:text-ink">Contact</a>
        </nav>

        <p className="text-xs text-ink/55">
          © 2026 MonaraMoney. Reward consistency, not intensity.
        </p>
      </div>
    </footer>
  );
}
