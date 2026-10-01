import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/courses/CourseIcons";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  pages: number;
  hrefFor: (page: number) => string;
};

const arrow =
  "flex h-12 w-14 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand";

export function Pagination({ page, pages, hrefFor }: PaginationProps) {
  if (pages <= 1) return null;
  const prev = page > 1 ? page - 1 : null;
  const next = page < pages ? page + 1 : null;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center xl:relative xl:left-6.25"
    >
      {prev ? (
        <Link href={hrefFor(prev)} aria-label="Previous page" className={arrow}>
          <ChevronLeftIcon className="h-5.25 w-3.5" />
        </Link>
      ) : (
        <span aria-disabled className={cn(arrow, "opacity-50")}>
          <ChevronLeftIcon className="h-5.25 w-3.5" />
        </span>
      )}

      <ul className="mx-2.25 mr-3.25 flex items-center">
        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <Link
              href={hrefFor(n)}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "flex h-9 w-9 items-center justify-center text-[18px] font-semibold leading-none",
                n === page ? "text-line" : "text-ink hover:text-brand",
              )}
            >
              {n}
            </Link>
          </li>
        ))}
      </ul>

      {next ? (
        <Link href={hrefFor(next)} aria-label="Next page" className={arrow}>
          <ChevronRightIcon className="h-5.25 w-3.5" />
        </Link>
      ) : (
        <span aria-disabled className={cn(arrow, "opacity-50")}>
          <ChevronRightIcon className="h-5.25 w-3.5" />
        </span>
      )}
    </nav>
  );
}
