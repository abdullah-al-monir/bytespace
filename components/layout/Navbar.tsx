"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BagIcon } from "@/components/ui/icons";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const link =
  "text-[16px] leading-5 text-chip transition-[opacity,transform] hover:opacity-80";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-30 h-19 lg:h-28.75">
      <Container className="relative flex items-start justify-between pt-6 lg:pt-8.75 xl:pl-0.5 xl:pr-1">
        <Logo tone="light" />

        <nav
          aria-label="Main"
          className="absolute left-1/2 top-12.5 hidden -translate-x-1/2 gap-6.5 md:flex"
        >
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(link, active && "-translate-y-0.75 text-white")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-start gap-6.5 pt-3 md:flex">
          <Link href="/login" className={`${link} mt-0.75`}>
            Sign In
          </Link>
          <Link href="/register" className={`${link} mt-0.75`}>
            Join Us
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="ml-[3.6px] mt-0.75 text-chip"
          >
            <BagIcon className="h-5 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.25 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-chip transition-transform ${open ? "translate-y-1.75 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-chip transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-chip transition-transform ${open ? "-translate-y-1.75 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      {open && (
        <div className="absolute inset-x-5 top-18 z-40 rounded-2xl bg-white p-5 shadow-xl md:hidden">
          <ul className="flex flex-col gap-4 text-[18px] text-ink">
            {[
              ...navLinks.map((l) => ({
                label: l.label,
                href: l.href as string,
              })),
              { label: "Sign In", href: "/login" },
              { label: "Join Us", href: "/register" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
