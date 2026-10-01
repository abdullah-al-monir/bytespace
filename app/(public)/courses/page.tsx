import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/cards/CourseCard";
import { CategoryTabs } from "@/components/courses/CategoryTabs";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { FilterBar } from "@/components/courses/FilterBar";
import { Pagination } from "@/components/courses/Pagination";
import { Container } from "@/components/ui/Container";
import {
  CATEGORY_OPTIONS,
  LEVEL_OPTIONS,
  PRICE_OPTIONS,
  RATING_OPTIONS,
  SORT_OPTIONS,
  buildHref,
  queryCourses,
  type CourseFilters,
} from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses – ByteSpace",
  description: "Search and filter hundreds of ByteSpace courses.",
};

const CHIPS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<CourseFilters>;
}) {
  const filters = await searchParams;
  const { items, pages, page } = queryCourses(filters);

  const href = (o: Partial<Record<keyof CourseFilters, string | undefined>>) =>
    buildHref("/courses", { ...filters, page: undefined, ...o });

  return (
    <>
      <CoursesHero q={filters.q} type={filters.type} />

      <Container className="pt-10 lg:pt-18">
        <FilterBar
          levels={LEVEL_OPTIONS}
          categories={CATEGORY_OPTIONS}
          sorts={SORT_OPTIONS}
          prices={PRICE_OPTIONS}
          ratings={RATING_OPTIONS}
        />

        <div className="mt-6 lg:mt-8">
          <CategoryTabs
            categories={CHIPS}
            active={filters.category ?? "Featured"}
            hrefFor={(c) =>
              href({ category: c === "Featured" ? undefined : c })
            }
          />
        </div>

        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 lg:mt-19.25">
            {items.map((c, i) => (
              <CourseCard
                key={`${c.id}-${page}-${i}`}
                course={c}
                href={`/courses/${c.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center text-[18px] text-muted">
            <p>No courses match your search or filters.</p>
            <Link
              href="/courses"
              className="mt-3 inline-block text-brand hover:underline"
            >
              Clear all filters
            </Link>
          </div>
        )}

        <div className="pb-16 pt-12 lg:pb-18 lg:pt-18">
          <Pagination
            page={page}
            pages={pages}
            hrefFor={(n) => href({ page: n > 1 ? String(n) : undefined })}
          />
        </div>
      </Container>
    </>
  );
}
