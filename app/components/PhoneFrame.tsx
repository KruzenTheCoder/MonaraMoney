import { ReactNode } from "react";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 320, height: 660 }}>
      <div
        className="absolute inset-0 rounded-[48px] phone-shadow"
        style={{
          background: "linear-gradient(160deg, #1f2937 0%, #0f172a 100%)",
          padding: 10,
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[40px]"
          style={{ background: "linear-gradient(180deg, #93CCEF 0%, #BFE0F7 35%, #F0F8FE 100%)" }}
        >
          {/* Status bar */}
          <div className="relative flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-ink">
            <span>9:41</span>
            <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-black/95" />
            <div className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-3.5 rounded-[2px] border border-ink" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
