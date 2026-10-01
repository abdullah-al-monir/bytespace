"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/cards/CourseCard";
import { Container } from "@/components/ui/Container";
import { categoryChips, courses } from "@/lib/data";
import { cn } from "@/lib/utils";

const ALL = categoryChips[0][0];

export function FeaturedCourses() {
  const [active, setActive] = useState<string>(ALL);

  const visibleCourses = useMemo(
    () =>
      active === ALL
        ? courses
        : courses.filter((c) => c.categories.includes(active)),
    [active],
  );

  return (
    <section className="bg-white pt-14 lg:pt-18.25">
      <Container>
        <div className="text-center">
          <h2 className="h2-display text-navy">
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-227.5 text-[clamp(16px,2.4vw,18px)] leading-[1.6] text-muted lg:mt-4.25">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-y-3 lg:mt-10.25 lg:gap-y-5.25"
          role="group"
          aria-label="Course categories"
        >
          {categoryChips.map((row, r) => (
            <div
              key={r}
              className="flex flex-wrap justify-center gap-x-3 gap-y-3 lg:gap-x-4"
            >
              {row.map((chip) => {
                const isActive = chip === active;
                return (
                  <button
                    key={chip}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(chip)}
                    className={cn(
                      "h-10.75 rounded-full px-[17.5px] text-[16px] leading-none transition-colors",
                      isActive
                        ? "bg-lime text-ink font-medium"
                        : "bg-chip text-body hover:bg-lime/60",
                    )}
                  >
                    {chip}
                  </button>
                );
              })}
              {r === categoryChips.length - 1 && (
                <button
                  type="button"
                  className="h-10.75 pl-px text-[16px] text-brand"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        {visibleCourses.length > 0 ? (
          <div
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:-mx-0.5 xl:grid-cols-3 xl:gap-x-10.25 xl:gap-y-10 lg:mt-19.25"
            aria-live="polite"
          >
            {visibleCourses.map((c) => (
              <CourseCard key={c.id} course={c} href={`/courses/${c.id}`} />
            ))}
          </div>
        ) : (
          <div
            className="mt-10 rounded-2xl bg-chip px-6 py-14 text-center lg:mt-19.25"
            aria-live="polite"
          >
            <p className="text-[18px] text-body">
              No courses in <span className="font-medium">{active}</span> yet.
            </p>
            <button
              type="button"
              onClick={() => setActive(ALL)}
              className="mt-4 text-[16px] font-medium text-brand"
            >
              Show all courses
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
