import { cn } from "@/lib/utils";

export function ProgressBar({ value, track = "bg-[#f6f6f6]", className }: { value: number; track?: string; className?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full overflow-hidden rounded-full", track, className)}
    >
      <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
    </div>
  );
}
