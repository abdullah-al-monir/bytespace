import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn(
        "flex items-start gap-[8.84px]",
        tone === "light" ? "text-chip" : "text-ink",
        className,
      )}
    >
      <LogoMark className="h-[31.5px] w-[28.88px] shrink-0" />
      <Wordmark className="mt-[13.68px] h-[20.4px] w-[132.5px] shrink-0" />
    </Link>
  );
}
