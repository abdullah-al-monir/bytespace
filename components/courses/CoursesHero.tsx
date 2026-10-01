import { NavbarSpacer } from "@/components/layout/NavbarSpacer";
import { GridBackground } from "@/components/ui/Backgrounds";
import { SearchIcon } from "@/components/ui/icons";
import { ChevronDownIcon } from "@/components/courses/CourseIcons";

type CoursesHeroProps = { q?: string; type?: string };

export function CoursesHero({ q, type }: CoursesHeroProps) {
  return (
    <section className="relative bg-brand pb-12 text-chip lg:h-90 lg:pb-0">
      <GridBackground />
      <NavbarSpacer />

      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <h1 className="mt-4 font-heading text-[clamp(28px,4vw,37px)] font-semibold leading-[1.2] tracking-[-0.02em] text-white lg:mt-12">
          Find Your Next Course
        </h1>

        <form
          role="search"
          action="/courses"
          method="get"
          className="mt-6 flex w-full max-w-156 items-start gap-3 sm:gap-4 lg:mt-8"
        >
          <label className="relative block min-w-0 flex-1">
            <span className="sr-only">Search</span>
            <SearchIcon className="pointer-events-none absolute left-7 top-4.25 h-[17.5px] w-[17.5px] text-muted" />
            <input
              name="q"
              type="search"
              defaultValue={q}
              placeholder="Search"
              className="h-13 w-full rounded-full bg-white pl-14 pr-5 text-[18px] text-ink outline-none placeholder:text-muted"
            />
          </label>

          <div className="relative shrink-0">
            <select
              name="type"
              defaultValue={type ?? "courses"}
              aria-label="Search in"
              className="h-12 w-30.5 cursor-pointer appearance-none rounded-full bg-lime pl-5 pr-9 text-[18px] text-ink outline-none sm:w-36.5 sm:pl-6"
            >
              <option value="courses">Courses</option>
              <option value="creators">Creators</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 text-ink sm:right-7.25" />
          </div>
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
