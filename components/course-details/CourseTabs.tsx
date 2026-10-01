import Link from "next/link";
import type { TabId } from "@/lib/course-details";
import { cn } from "@/lib/utils";

const TABS: { id: TabId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "lessons", label: "Lessons" },
  { id: "reviews", label: "Reviews" },
];

export function CourseTabs({ slug, active }: { slug: string; active: TabId }) {
  return (
    <nav aria-label="Course sections" className="flex flex-wrap gap-4">
      {TABS.map((t) => (
        <Link
          key={t.id}
          href={
            t.id === "about"
              ? `/courses/${slug}`
              : `/courses/${slug}?tab=${t.id}`
          }
          scroll={false}
          aria-current={t.id === active ? "page" : undefined}
          className={cn(
            "flex h-10.75 items-center rounded-full px-4.5 text-[16px] leading-none transition-colors",
            t.id === active
              ? "bg-lime text-ink"
              : "bg-chip text-body hover:bg-lime/60",
          )}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
