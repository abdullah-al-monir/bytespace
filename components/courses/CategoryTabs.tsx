import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  categories: string[];
  active: string;
  hrefFor: (category: string) => string;
};

export function CategoryTabs({
  categories,
  active,
  hrefFor,
}: CategoryTabsProps) {
  return (
    <nav
      aria-label="Course categories"
      className="flex flex-wrap gap-3 xl:justify-between xl:gap-x-0"
    >
      {categories.map((c) => (
        <Link
          key={c}
          href={hrefFor(c)}
          aria-current={c === active ? "true" : undefined}
          className={cn(
            "flex h-10.75 items-center rounded-full px-[17.5px] text-[16px] leading-none transition-colors",
            c === active
              ? "bg-lime text-ink"
              : "bg-chip text-body hover:bg-lime/60",
          )}
        >
          {c}
        </Link>
      ))}
    </nav>
  );
}
