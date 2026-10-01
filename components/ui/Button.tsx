import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex h-[46px] items-center justify-center rounded-full bg-lime px-[25px] font-body text-[18px] font-medium leading-none text-ink transition-[filter,transform] duration-200 hover:brightness-95 active:scale-[0.98]";

type ButtonProps = { className?: string; children: React.ReactNode } & (
  | { href: string; type?: never }
  | ({ href?: undefined } & Pick<
      React.ComponentPropsWithoutRef<"button">,
      "type" | "onClick" | "disabled"
    >)
);

export function Button({ className, children, ...props }: ButtonProps) {
  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={cn(base, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn(base, className)}
    >
      {children}
    </button>
  );
}
