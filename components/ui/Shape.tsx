import Image from "next/image";
import { cn } from "@/lib/utils";

export type ShapeName =
  | "squiggle-a"
  | "squiggle-b"
  | "torus"
  | "cylinder"
  | "pyramid"
  | "cone";

type ShapeProps = {
  name: ShapeName;
  tone: "lime" | "white";
  x: number;
  y: number;
  size: number;
  side?: "left" | "right";
  flip?: boolean;
  fixed?: boolean;
  className?: string;
};

export function Shape({
  name,
  tone,
  x,
  y,
  size,
  side = "left",
  flip,
  fixed,
  className,
}: ShapeProps) {
  const u = (n: number) => (fixed ? `${n}px` : `calc(var(--k) * ${n}px)`);
  return (
    <Image
      src={`/images/shapes/${name}-${tone}.webp`}
      alt=""
      aria-hidden
      width={800}
      height={800}
      sizes={`${size}px`}
      className={cn(
        "pointer-events-none absolute max-w-none select-none",
        flip && "-scale-x-100",
        className,
      )}
      style={{
        top: u(y),
        width: u(size),
        height: u(size),
        ...(side === "left" || fixed
          ? { left: u(x) }
          : { right: u(1440 - x - size) }),
      }}
    />
  );
}
