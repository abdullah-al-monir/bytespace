import { cn } from "@/lib/utils";

export function ScaledStage({
  w,
  h,
  className,
  children,
}: {
  w: number;
  h: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{
        width: `calc(var(--k) * ${w}px)`,
        height: `calc(var(--k) * ${h}px)`,
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: w, height: h, transform: "scale(var(--k))" }}
      >
        {children}
      </div>
    </div>
  );
}
