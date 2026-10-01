import Image from "next/image";
import { CheckCircle } from "@/components/ui/icons";
import type { CourseDetails } from "@/lib/course-details";

export const h3 =
  "font-heading text-[20px] font-semibold leading-6 tracking-[-0.02em] text-ink";
export const body = "text-[16px] leading-[26px] text-body";

export function AboutTab({ details }: { details: CourseDetails }) {
  return (
    <div className="pb-16 lg:pb-17">
      <h2 className={`${h3} mt-10`}>Description</h2>
      <div className={`${body} mt-6.5 space-y-6.5`}>
        {details.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2 className={`${h3} mt-5.5`}>Sneak Peak</h2>
      <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {details.sneakPeek.map((src, i) => (
          <li
            key={src}
            className="relative h-31.5 overflow-hidden rounded-xl bg-chip"
          >
            <Image
              src={src}
              alt={`Sneak peek ${i + 1}`}
              fill
              sizes="(min-width:1280px) 167px, 45vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className={`${h3} mt-5.75`}>Key Points</h2>
      <ul className="mt-6.5 space-y-4">
        {details.keyPoints.map((k) => (
          <li
            key={k}
            className="flex h-5.5 items-center gap-2.5 text-[16px] leading-5.5 text-body"
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-brand" />
            {k}
          </li>
        ))}
      </ul>
    </div>
  );
}
