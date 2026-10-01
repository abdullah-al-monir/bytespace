import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarStackProps = {
  avatars: string[];
  badge: string;
  size: number;
  step: number;
  badgeTone?: "lime" | "black";
  className?: string;
  badgeClassName?: string;
};

export function AvatarStack({
  avatars,
  badge,
  size,
  step,
  badgeTone = "lime",
  className,
  badgeClassName,
}: AvatarStackProps) {
  const total = avatars.length + 1;
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size + step * (total - 1), height: size }}
    >
      {avatars.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt=""
          width={size * 2}
          height={size * 2}
          className="absolute top-0 rounded-full object-cover"
          style={{ left: i * step, width: size, height: size, zIndex: i }}
        />
      ))}
      <span
        className={cn(
          "absolute top-0 flex items-center justify-center rounded-full font-body font-semibold leading-none",
          badgeTone === "lime" ? "bg-lime text-ink" : "bg-black text-white",
          badgeClassName,
        )}
        style={{
          left: avatars.length * step,
          width: size,
          height: size,
          zIndex: avatars.length,
        }}
      >
        {badge}
      </span>
    </div>
  );
}
