import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { cn } from "@/lib/utils";

type AuthShellProps = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  footer: React.ReactNode;
  footerClassName?: string;
  children: React.ReactNode;
};

export function AuthShell({
  title,
  description,
  eyebrow,
  heading,
  footer,
  footerClassName,
  children,
}: AuthShellProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-13.25 lg:grid-cols-[1fr_579px] lg:gap-0">
      <div className="relative lg:h-196">
        <div className="lg:-mt-0.5">
          <h2 className="font-heading text-[22px] font-medium leading-7 tracking-[-0.02em] text-white">
            {title}
          </h2>
          <p className="mt-3.75 max-w-120 text-[clamp(16px,2.4vw,18px)] leading-[1.6] text-chip">
            {description}
          </p>
        </div>
        <AuthShowcase className="hidden lg:absolute lg:left-0.5 lg:top-46.25 lg:block" />
      </div>
      <section
        className={cn(
          "flex flex-col rounded-4xl bg-white px-6 pb-10 pt-10 sm:px-15.75 lg:h-196 lg:rounded-[40px] lg:pt-16",
          footerClassName,
        )}
      >
        <p className="text-[18px] leading-6 text-brand">{eyebrow}</p>
        <h1 className="font-heading text-[clamp(32px,5vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink lg:mt-0.75">
          {heading}
        </h1>
        <div className="mt-8 lg:mt-10">{children}</div>
        <p className="mt-auto pt-10 text-center text-[18px] leading-6 text-muted">
          {footer}
        </p>
      </section>
    </div>
  );
}
