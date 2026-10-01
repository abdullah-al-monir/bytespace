import Image from "next/image";
import Link from "next/link";
import {
  CertificateIcon,
  ConsultationIcon,
  ResourcesIcon,
  VideosIcon,
} from "@/components/course-details/DetailIcons";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/lib/data";
import type { CourseDetails } from "@/lib/course-details";

const includeIcons = {
  resources: ResourcesIcon,
  videos: VideosIcon,
  certificate: CertificateIcon,
  consultation: ConsultationIcon,
} as const;

const h3 =
  "font-heading text-[20px] font-medium leading-6 tracking-[-0.01em] text-ink";

export function CourseSidebar({
  course,
  details,
}: {
  course: Course;
  details: CourseDetails;
}) {
  return (
    <aside className="rounded-4xl border border-line bg-white p-9.25 text-ink">
      <h2 className={h3}>
        {details.totalLessons} Lessons ({details.totalHours} hours)
      </h2>

      <ul className="mt-6.5 space-y-3">
        {details.previewLessons.map((l) => (
          <li
            key={l.number}
            className="flex items-start text-[16px] leading-4.75"
          >
            <span className="w-8.25 shrink-0">{l.number}</span>
            <span className="min-w-0 flex-1 lg:w-48.75 lg:flex-none">
              {l.title}
            </span>
            <span className="ml-3 shrink-0 whitespace-nowrap pt-0.75 text-brand lg:ml-11">
              {l.duration}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3.75 text-[16px] leading-4.75 text-body">
        {details.moreVideos} more videos
      </p>

      <p className="mt-7.25 text-[16px] leading-6.5 text-body-2">
        {details.tagline}
      </p>

      <p className="mt-5.75 flex items-baseline leading-10">
        <span className="text-[36px] font-bold text-brand">
          ${course.price}
        </span>
        <span className="text-[16px] text-body-2">/lifetime</span>
      </p>

      <Button className="mt-3.5 w-full">Enroll Now</Button>

      <h3 className={`${h3} mt-6`}>This course include</h3>
      <ul className="mt-6.5 space-y-3">
        {details.includes.map((i) => {
          const Icon = includeIcons[i.icon];
          return (
            <li
              key={i.label}
              className="flex h-5.5 items-center text-[16px] leading-5.5 text-body"
            >
              <Icon className="mr-2.75 h-5.5 w-5.5 shrink-0 text-brand" />
              {i.label}
            </li>
          );
        })}
      </ul>

      <hr className="mt-6.75 border-line" />

      <div className="mt-6 flex items-center gap-3">
        <Image
          src={details.creator.avatar}
          alt=""
          width={104}
          height={104}
          className="h-13 w-13 rounded-full object-cover"
        />
        <div>
          <p className="text-[18px] font-medium leading-5.5 text-ink">
            {details.creator.name}
          </p>
          <p className="text-[16px] leading-5 text-body">
            {details.creator.role}
          </p>
        </div>
      </div>
      <p className="mt-6.5 text-[16px] leading-6.5 text-body-2">
        {details.creator.bio}
      </p>
      <Link
        href="/creators"
        className="mt-5.5 inline-flex h-9 items-center rounded-full border border-line px-3.75 text-[16px] leading-none text-ink transition-colors hover:border-brand"
      >
        See Full Profile
      </Link>
    </aside>
  );
}
