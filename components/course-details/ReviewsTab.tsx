import Image from "next/image";
import Link from "next/link";
import { body, h3 } from "@/components/course-details/AboutTab";
import { StarIcon } from "@/components/ui/icons";
import type { CourseDetails } from "@/lib/course-details";
import { cn } from "@/lib/utils";

function Stars({
  value,
  size,
  gap,
}: {
  value: number;
  size: number;
  gap: number;
}) {
  return (
    <span
      className="flex"
      style={{ gap }}
      aria-label={`${value} out of 5 stars`}
      role="img"
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          className={n <= value ? "text-body" : "text-line"}
          style={{ width: size, height: size }}
        />
      ))}
    </span>
  );
}

type ReviewsTabProps = {
  details: CourseDetails;
  average: number;
  rating?: string;
  hrefFor: (rating?: string) => string;
};

export function ReviewsTab({
  details,
  average,
  rating,
  hrefFor,
}: ReviewsTabProps) {
  const { breakdown } = details.reviewSummary;
  const reviews = rating
    ? details.reviews.filter((r) => r.rating === Number(rating))
    : details.reviews;
  const chip =
    "flex h-[43px] items-center rounded-full text-[16px] leading-none transition-colors";

  return (
    <div className="pb-16 lg:pb-23">
      <h2 className={`${h3} mt-10`}>What Learners Are Saying</h2>
      <p className={`${body} mt-6.5`}>{details.reviewsIntro}</p>

      <div className="mt-5.5 flex flex-col gap-6 rounded-3xl border border-line px-5 py-6 sm:flex-row sm:items-center sm:px-9.75 sm:py-10.5">
        <div className="flex h-35 w-full shrink-0 flex-col items-center justify-center rounded-2xl bg-lime text-ink sm:w-32.25">
          <p className="text-[14px] leading-4.5">Ratings</p>
          <p className="text-[40px] font-semibold leading-11">{average}</p>
        </div>
        <ul className="min-w-0 flex-1 space-y-2.5">
          {breakdown.map((b) => (
            <li
              key={b.stars}
              className="grid h-5 grid-cols-[1fr_auto_38px] items-center gap-x-3 sm:grid-cols-[1fr_130px_38px] sm:gap-x-5"
            >
              <span
                className="h-2 overflow-hidden rounded-full bg-[#e6e6e8]"
                aria-hidden
              >
                <span
                  className="block h-full rounded-full bg-lime"
                  style={{ width: `${b.percent}%` }}
                />
              </span>
              <Stars value={b.stars} size={20} gap={7.5} />
              <span className="text-right text-[16px] leading-5 text-body">
                {b.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className={`${h3} mt-6`}>Individual Reviews:</h3>
      <div className="mt-6.25 flex flex-wrap items-start gap-4">
        <Link
          href={hrefFor(undefined)}
          scroll={false}
          className={cn(
            chip,
            "px-4.5",
            !rating ? "bg-lime text-ink" : "bg-chip text-body hover:bg-lime/60",
          )}
        >
          All rating
        </Link>
        {[5, 4, 3, 2, 1].map((n) => (
          <Link
            key={n}
            href={hrefFor(String(n))}
            scroll={false}
            className={cn(
              chip,
              "h-12 gap-2 px-5",
              rating === String(n)
                ? "bg-lime text-ink"
                : "bg-chip text-body hover:bg-lime/60",
            )}
          >
            <StarIcon className="h-4 w-4 text-ink" />
            {n}
          </Link>
        ))}
      </div>

      {reviews.length > 0 ? (
        <ul className="mt-7.25 space-y-6">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="rounded-3xl border border-line p-5 sm:p-9.75"
            >
              <div className="flex items-start gap-3">
                <Image
                  src={r.avatar}
                  alt=""
                  width={104}
                  height={104}
                  className="h-13 w-13 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[18px] font-medium leading-6 text-ink">
                      {r.name}
                    </p>
                    <p className="shrink-0 text-[16px] leading-6 text-muted">
                      {r.ago}
                    </p>
                  </div>
                  <p className="text-[16px] leading-6 text-body">{r.role}</p>
                </div>
              </div>
              <div className="mt-6.5">
                <Stars value={r.rating} size={20} gap={8} />
              </div>
              <p className={`${body} mt-6.5`}>{r.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-[18px] text-muted">
          No reviews with this rating yet.
        </p>
      )}
    </div>
  );
}
