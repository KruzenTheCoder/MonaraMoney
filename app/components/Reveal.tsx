"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  y?: number;
  threshold?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  y = 24,
  threshold = 0.15,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            if (once) io.disconnect();
          } else if (!once) {
            setSeen(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const style: React.CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: "900ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    opacity: seen ? 1 : 0,
    transform: seen ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
    filter: seen ? "blur(0)" : "blur(6px)",
    willChange: "opacity, transform, filter",
  };

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}

/**
 * Splits a string into per-word spans that fade/slide/blur in with stagger.
 * Use for headline wow-factor reveals.
 */
export function WordReveal({
  text,
  className = "",
  wordClassName = "",
  stagger = 90,
  baseDelay = 0,
  y = 28,
  highlight,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  baseDelay?: number;
  y?: number;
  /** Map of word (case-insensitive, trailing punctuation stripped) to extra className. */
  highlight?: Record<string, string>;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(/(\s+)/);

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        const key = w.toLowerCase().replace(/[^a-z0-9]/g, "");
        const extra = highlight?.[key] ?? "";
        return (
          <span
            key={i}
            className={`inline-block ${wordClassName} ${extra}`}
            style={{
              transitionProperty: "opacity, transform, filter",
              transitionDuration: "900ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: `${baseDelay + i * stagger}ms`,
              opacity: seen ? 1 : 0,
              transform: seen ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
              filter: seen ? "blur(0)" : "blur(8px)",
              willChange: "opacity, transform, filter",
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}
