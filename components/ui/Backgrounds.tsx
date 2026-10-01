import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.12]",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(to right,#fff 2px,transparent 2px),linear-gradient(to bottom,transparent 118px,#fff 118px)",
        backgroundSize: "120px 120px",
      }}
    />
  );
}

type BlobProps = {
  tone: "lime" | "blue";
  r: number;
  opacity: number;
  x: number;
  y: number;
  anchor?: "left" | "right" | "center";
};

export function Blob({ tone, r, opacity, x, y, anchor = "left" }: BlobProps) {
  const rgb = tone === "lime" ? "203,252,1" : "0,59,226";
  const horizontal =
    anchor === "left"
      ? { left: x - r }
      : anchor === "right"
        ? { right: x - r }
        : { left: `calc(50% + ${x}px)`, marginLeft: -r };
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={{
        width: r * 2,
        height: r * 2,
        top: y - r,
        ...horizontal,
        opacity,
        filter: "blur(20px)",
        background: `radial-gradient(closest-side, rgba(${rgb},1) 0%, rgba(${rgb},.23) 53%, rgba(${rgb},.06) 75%, rgba(${rgb},0) 100%)`,
      }}
    />
  );
}
