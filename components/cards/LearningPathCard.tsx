import Link from "next/link";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  ITIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/ui/icons";

const icons = {
  design: { Icon: DesignIcon, cls: "h-[27px] w-[27px]" },
  development: { Icon: DevelopmentIcon, cls: "h-[33px] w-6" },
  it: { Icon: ITIcon, cls: "h-6 w-9" },
  business: { Icon: BusinessIcon, cls: "h-[27px] w-[30px]" },
  marketing: { Icon: MarketingIcon, cls: "h-[30px] w-[30px]" },
  photography: { Icon: PhotographyIcon, cls: "h-[27px] w-[30px]" },
} as const;

export function LearningPathCard({
  label,
  icon,
}: {
  label: string;
  icon: keyof typeof icons;
}) {
  const { Icon, cls } = icons[icon];
  return (
    <Link
      href={`/courses?category=${encodeURIComponent(label)}`}
      className="flex h-41.75 flex-col items-center rounded-3xl border border-line bg-white pt-8.75 transition-colors hover:border-brand"
    >
      <span className="flex h-15 w-15 items-center justify-center rounded-full bg-lime text-ink">
        <Icon className={cls} />
      </span>
      <span className="mt-3 text-[18px] leading-6 text-ink">{label}</span>
    </Link>
  );
}
