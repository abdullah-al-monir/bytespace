import { AvatarStack } from "@/components/ui/AvatarStack";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StarIcon } from "@/components/ui/icons";
import { studentAvatars } from "@/lib/data";
import { cn } from "@/lib/utils";

const card = "absolute rounded-2xl";

export function TopicCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        card,
        "h-17.5 w-52 bg-white pl-4.25 pt-4 text-ink",
        className,
      )}
    >
      <p className="text-[16px] font-medium leading-5">UI/UX Design</p>
      <p className="mt-px flex items-center gap-[9.5px] text-[11px] leading-3.5 text-muted">
        <span>200 Courses</span>
        <span
          aria-hidden
          className="h-[2.7px] w-[2.7px] rounded-full bg-muted"
        />
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

export function ProgressCard({
  className,
  tall,
}: {
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={cn(
        card,
        "w-58 bg-white px-4 text-ink",
        tall ? "h-34.5 pt-4.75" : "h-32.75 pt-4",
        className,
      )}
    >
      <p className="text-[14px] leading-4.5">Learning Progress</p>
      <p
        className={cn(
          "text-5xl font-semibold leading-12",
          tall ? "mt-3.75" : "mt-2.75",
        )}
      >
        55%
      </p>
      <ProgressBar value={56} className="mt-3.5" />
    </div>
  );
}

export function HappyStudentsCard({
  className,
  tall,
}: {
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={cn(
        card,
        "w-64.5 bg-white px-4 pt-4 text-ink",
        tall ? "h-30.75" : "h-30.25",
        className,
      )}
    >
      <p className="text-[16px] font-medium leading-5">Happy Students</p>
      <p className="mt-px flex items-center gap-1 text-[13px] leading-4">
        4.5 <span className="text-muted">(240)</span>
        <StarIcon className="h-3.25 w-3.25 text-lime" />
      </p>
      <AvatarStack
        avatars={studentAvatars}
        badge="2K+"
        size={43}
        step={27}
        className={tall ? "mt-2.75" : "mt-2.25"}
        badgeClassName="text-[13px]"
      />
    </div>
  );
}

/** Blue KPI cards shown next to the creator photo. */
export function RevenueCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        card,
        "h-29.75 w-58 bg-brand px-4 pt-4.5 text-chip",
        className,
      )}
    >
      <p className="text-[16px] leading-5">Total Revenue</p>
      <p className="-mt-px text-[12px] leading-3.5">July 1-28</p>
      <p className="mt-1.75 text-[25px] font-semibold leading-7.5">$120.29</p>
      <ProgressBar value={56} track="bg-white" className="mt-1.75" />
      <span className="absolute left-45 top-14.75 flex h-6 w-9.5 items-center justify-center rounded-full bg-lime-deep text-[11px] font-semibold text-ink">
        +12$
      </span>
    </div>
  );
}

export function YearCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        card,
        "h-33.75 w-33.5 bg-brand px-4 pt-4.5 text-chip",
        className,
      )}
    >
      <p className="text-[16px] leading-5">Year to Date</p>
      <p className="-mt-px text-[12px] leading-3.5">2023</p>
      <p className="mt-1.75 whitespace-nowrap text-[25px] font-semibold leading-7.5">
        $1,200.38
      </p>
      <span className="mt-1.75 flex h-6 w-9.5 items-center justify-center rounded-full bg-lime-deep text-[11px] font-semibold text-ink">
        +12$
      </span>
    </div>
  );
}
