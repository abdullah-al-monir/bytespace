import Image from "next/image";
import Link from "next/link";
import { ShareButton } from "@/components/course-details/ShareButton";
import { UsersIcon } from "@/components/course-details/DetailIcons";
import { LevelBarsIcon } from "@/components/courses/CourseIcons";
import { NavbarSpacer } from "@/components/layout/NavbarSpacer";
import { GridBackground } from "@/components/ui/Backgrounds";
import { Container } from "@/components/ui/Container";
import { StarIcon } from "@/components/ui/icons";
import type { Course } from "@/lib/data";
import type { CourseDetails } from "@/lib/course-details";

const chip =
  "flex h-[42px] items-center gap-3 rounded-full bg-white pl-7 pr-6 text-[16px] leading-none text-ink";

export function CourseHero({
  course,
  details,
}: {
  course: Course;
  details: CourseDetails;
}) {
  return (
    <section className="relative bg-brand pb-10 text-chip lg:pb-15.25">
      <GridBackground />
      <NavbarSpacer />

      <Container>
        <h1 className="mt-4 max-w-225 font-heading text-[clamp(26px,3.6vw,37px)] font-medium leading-[1.2] tracking-[-0.02em] text-white lg:mt-14.25">
          {details.title}
        </h1>
        <p className="mt-1.75 font-heading text-[clamp(16px,2vw,20px)] font-semibold leading-6 tracking-[-0.01em] text-white">
          {details.subtitle}
        </p>
        <p className="mt-4 text-[18px] leading-[28.8px] text-white lg:mt-5.5">
          by{" "}
          <Link href="/creators" className="text-lime hover:underline">
            {course.author}
          </Link>
        </p>

        <ul className="mt-4 flex flex-wrap gap-4 lg:mt-4.75">
          <li className={chip}>
            <LevelBarsIcon className="h-4.25 w-4.25 text-brand" />
            {course.level}
          </li>
          <li className={chip}>
            <StarIcon className="h-4.25 w-4.25 text-brand" />
            {course.rating} ({details.reviewCount} reviews)
          </li>
          <li className={chip}>
            <UsersIcon className="h-5 w-5 text-brand" />
            {course.students} Students
          </li>
        </ul>

        <ShareButton className="mt-5 xl:absolute xl:right-9 xl:top-43.25 xl:mt-0" />

        <div className="mt-8 lg:mt-14.25 lg:pr-110.5 xl:pr-119.25">
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-3xl bg-black/10 xl:ml-1.25 xl:w-180 xl:max-w-none">
            <Image
              src={details.thumbnail}
              alt={`${details.title} – video preview`}
              fill
              priority
              sizes="(min-width:1280px) 720px, 90vw"
              className="object-cover"
            />
            {!details.hasPlayButton && (
              <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-23 w-23 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22px] bg-[#8d7b70]/80 backdrop-blur-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-1 h-6 w-6 text-[#8d7b70]"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M6 4.5v15l13-7.5-13-7.5Z" />
                  </svg>
                </span>
              </span>
            )}
            <button
              type="button"
              aria-label="Play preview video"
              className="absolute inset-0 cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
