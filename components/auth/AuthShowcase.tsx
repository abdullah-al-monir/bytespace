import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { StarIcon } from "@/components/ui/icons";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { courses, studentAvatars } from "@/lib/data";

const shapes = [
  { src: "/images/auth/torus-lime.webp", w: 102, h: 93, cx: 101, cy: 86.5 },
  {
    src: "/images/auth/squiggle-white.webp",
    w: 115,
    h: 122,
    cx: 438.5,
    cy: 411,
    flip: true,
    rotate: -60,
  },
  { src: "/images/auth/pyramid-lime.webp", w: 125, h: 138, cx: 62.5, cy: 487 },
];

export function AuthShowcase({ className }: { className?: string }) {
  return (
    <ScaledStage w={496} h={558} className={className}>
      {/* back card */}
      <div className="absolute left-0 top-22.5">
        <CourseCard
          course={courses[1]}
          variant="showcase"
          className="h-96 w-93.25"
        />
      </div>

      <div className="absolute left-27.75 top-0 [&_svg.text-line]:text-lime">
        <CourseCard
          course={courses[2]}
          variant="showcase"
          className="h-96 w-93.25"
        />
      </div>

      {/* lime "Happy Students" card */}
      <div className="absolute left-56.5 top-108.75 h-30.75 w-64.5 rounded-2xl bg-lime px-4 pt-4 text-ink">
        <p className="text-[16px] font-medium leading-5">Happy Students</p>
        <p className="mt-px flex items-center gap-1 text-3.25 leading-4">
          4.5 <span className="text-ink/50">(240)</span>
          <StarIcon className="h-3.25 w-3.25 text-brand" />
        </p>
        <AvatarStack
          avatars={studentAvatars}
          badge="2K+"
          size={43}
          step={27}
          badgeTone="black"
          className="mt-2.75"
          badgeClassName="text-3.25"
        />
      </div>

      {shapes.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          aria-hidden
          width={s.w * 2}
          height={s.h * 2}
          className="pointer-events-none absolute max-w-none select-none"
          style={{
            left: s.cx - s.w / 2,
            top: s.cy - s.h / 2,
            width: s.w,
            height: s.h,
            rotate: s.rotate ? `${s.rotate}deg` : undefined,
          }}
        />
      ))}
    </ScaledStage>
  );
}
