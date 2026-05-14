"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.65);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-500 ${
          scrolled ? "pt-4" : "pt-3"
        }`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass-card" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #5FB1E3 0%, #1565C0 100%)" }}
            >
              <span className="font-display text-base font-bold">M</span>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              Monara<span className="text-brand">Money</span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-ink/70 md:flex">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#rewards" className="hover:text-ink">Rewards</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-ink-soft sm:text-sm"
          >
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
