import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { LevelIcon, StarIcon } from "@/components/ui/icons";
import { courseAvatars, type Course } from "@/lib/data";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  variant?: "grid" | "showcase";
  href?: string;
  className?: string;
};

export function CourseCard({
  course,
  variant = "grid",
  href,
  className,
}: CourseCardProps) {
  const showcase = variant === "showcase";
  const pill = cn(
    "flex items-center rounded-full bg-[#f6f6f6]/60 px-[12.6px] text-[12.5px] leading-none text-body-2 backdrop-blur-[4px]",
    showcase ? "h-8" : "h-[26px]",
  );
  return (
    <article
      className={cn(
        "flex min-w-0 flex-col rounded-4xl border border-line bg-white p-3.75 xl:h-96",
        href && "relative transition-colors hover:border-brand",
        className,
      )}
    >
      <div className="relative aspect-[341/195.145] w-full shrink-0 overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width:1280px) 341px, (min-width:768px) 45vw, 90vw"
          className="object-cover"
        />
        <div className="absolute bottom-4.75 left-3.25 right-2 flex gap-2 overflow-hidden xl:gap-3">
          <span className={pill}>{course.lessons} Lessons</span>
          <span className={pill}>{course.duration}</span>
          <span className={cn(pill, "hidden sm:flex")}>
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div
        className={cn(
          "flex items-start gap-2.5 px-px",
          showcase ? "mt-5.5" : "mt-5",
        )}
      >
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-heading text-[20px] font-semibold leading-6 tracking-[-0.02em] text-black">
            {href ? (
              <Link
                href={href}
                className="after:absolute after:inset-0 after:content-['']"
              >
                {course.title}
              </Link>
            ) : (
              course.title
            )}
          </h3>
          <p
            className={cn(
              "text-[12px] leading-4 text-body-2",
              showcase ? "mt-1.25" : "mt-0.75",
            )}
          >
            by <span className="text-brand">{course.author}</span>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.25 pr-1.25 pt-1.25 text-lg leading-none text-body-2">
          {course.rating}
          <StarIcon className="h-4 w-4 text-line" />
        </div>
      </div>

      <div
        className={cn(
          "flex items-center gap-3",
          showcase ? "mt-6.25" : "mt-4.25",
        )}
      >
        <span className="flex h-8 items-center gap-2 rounded-full bg-chip px-3.75 text-[12.5px] leading-none text-body">
          <LevelIcon className="h-3.25 w-3" />
          {course.level}
        </span>
        <AvatarStack
          avatars={courseAvatars}
          badge={course.studentCount}
          size={32}
          step={24}
          badgeTone={showcase ? "black" : "lime"}
          badgeClassName={cn("text-[12px]", showcase && "font-medium")}
        />
      </div>

      <p className="mt-3.75 flex items-baseline leading-none">
        <span className="text-[20px] font-bold text-brand">
          ${course.price}
        </span>
        <span className="text-[12px] text-body-2">/lifetime</span>
      </p>
    </article>
  );
}
