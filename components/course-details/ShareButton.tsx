"use client";

import { useState } from "react";
import { ShareIcon } from "@/components/course-details/DetailIcons";
import { cn } from "@/lib/utils";

export function ShareButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-9.5 items-center gap-2 rounded-full bg-lime px-6.75 text-[16px] leading-none text-ink transition-[filter] hover:brightness-95",
        className,
      )}
    >
      <ShareIcon className="h-4.5 w-4.5" />
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
