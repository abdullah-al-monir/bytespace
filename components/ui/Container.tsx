import { cn } from "@/lib/utils";

/** 1200px content column used across the whole page (matches the Figma grid). */
export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-300 px-5 sm:px-8 xl:px-0", className)}
      {...props}
    />
  );
}
