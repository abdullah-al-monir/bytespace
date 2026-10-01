import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerColumns } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white lg:flex lg:h-131.25 lg:flex-col">
      <Container className="flex flex-1 flex-col pt-12 lg:pt-17.5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-[621px_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5.25 text-[14px] leading-5 text-ink">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              className="mt-11.5 flex max-w-126 items-start gap-4"
              action="#"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-12.75 min-w-0 flex-1 rounded-full border border-line bg-white px-6.25 text-[16px] text-ink outline-none placeholder:text-ink focus:border-brand"
              />
              <Button type="submit" className="min-w-26">
                Subscribe
              </Button>
            </form>
            <p className="mt-6.25 max-w-117.5 text-[12px] leading-4.5 text-ink">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-8 pt-1 sm:grid-cols-3 xl:grid-cols-[207px_207px_1fr] xl:gap-x-0 lg:pt-12.5"
          >
            {footerColumns.map((col, i) => (
              <ul key={i} className="space-y-4.75 text-[14px] leading-4.75">
                {col.map((t) => (
                  <li key={t}>
                    <Link href="#" className="block text-ink hover:text-brand">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line py-6 text-[12px] leading-4 text-ink sm:flex-row sm:justify-between lg:mt-auto lg:h-22.5 lg:pb-0 lg:pt-5.75">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (t) => (
                <li key={t}>
                  <Link href="#" className="hover:text-brand">
                    {t}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
