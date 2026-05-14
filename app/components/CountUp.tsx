"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  from?: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  threshold?: number;
};

export function CountUp({
  to,
  from = 0,
  decimals = 0,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
  threshold = 0.35,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const t0 = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
              setValue(from + (to - from) * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, from, duration, threshold]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
