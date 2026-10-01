"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  CategoryShapesIcon,
  FilterIcon,
  LevelBarsIcon,
  SortIcon,
} from "@/components/courses/CourseIcons";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };
type FilterBarProps = {
  levels: Option[];
  categories: Option[];
  sorts: Option[];
  prices: Option[];
  ratings: Option[];
};
type MenuId = "filter" | "level" | "category" | "sort";

const pill =
  "flex h-12 max-w-[220px] items-center gap-[9px] rounded-full border bg-white px-[17px] text-[16px] leading-none text-body transition-colors hover:border-brand";

function Panel({
  align = "left",
  children,
}: {
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      role="menu"
      className={cn(
        "absolute top-[calc(100%+8px)] z-30 max-h-90 min-w-57.5 overflow-auto rounded-2xl border border-line bg-white p-2 shadow-[0_12px_32px_rgba(0,0,0,.12)]",
        align === "right" ? "right-0" : "left-0",
      )}
    >
      {children}
    </div>
  );
}

function Item({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-left text-[16px] leading-5 hover:bg-chip",
        selected ? "font-medium text-ink" : "text-body",
      )}
    >
      {children}
      {selected && (
        <span aria-hidden className="h-2 w-2 rounded-full bg-brand" />
      )}
    </button>
  );
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pb-1">
      <p className="px-4 pb-1 pt-2 text-[12px] font-semibold uppercase tracking-wide text-muted">
        {title}
      </p>
      {children}
    </div>
  );
}

export function FilterBar({
  levels,
  categories,
  sorts,
  prices,
  ratings,
}: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [open, setOpen] = useState<MenuId | null>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node))
        setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const get = (k: string) => params.get(k) ?? "";
  const label = (opts: Option[], k: string) =>
    opts.find((o) => o.value === get(k))?.label;

  function update(changes: Record<string, string | null>) {
    const next = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(changes)) {
      if (v) next.set(k, v);
      else next.delete(k);
    }
    next.delete("page");
    const qs = next.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    setOpen(null);
  }

  const toggle = (id: MenuId) => setOpen((cur) => (cur === id ? null : id));
  const advancedCount = ["price", "rating"].filter((k) => get(k)).length;
  const anyActive = ["category", "level", "price", "rating"].some((k) =>
    get(k),
  );
  const hasSort = get("sort") && get("sort") !== "relevant";

  return (
    <div ref={root} className="flex flex-wrap items-center gap-3 lg:gap-4">
      <div className="relative">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open === "filter"}
          onClick={() => toggle("filter")}
          className={cn(pill, advancedCount ? "border-brand" : "border-line")}
        >
          <FilterIcon className="h-4.5 w-4.5 text-ink" />
          Filter
          {advancedCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[12px] font-semibold text-white">
              {advancedCount}
            </span>
          )}
        </button>
        {open === "filter" && (
          <Panel>
            <Group title="Price">
              {prices.map((o) => (
                <Item
                  key={o.value}
                  selected={get("price") === o.value}
                  onClick={() =>
                    update({ price: get("price") === o.value ? null : o.value })
                  }
                >
                  {o.label}
                </Item>
              ))}
            </Group>
            <Group title="Rating">
              {ratings.map((o) => (
                <Item
                  key={o.value}
                  selected={get("rating") === o.value}
                  onClick={() =>
                    update({
                      rating: get("rating") === o.value ? null : o.value,
                    })
                  }
                >
                  {o.label}
                </Item>
              ))}
            </Group>
            <button
              type="button"
              onClick={() => update({ price: null, rating: null })}
              className="mt-1 w-full rounded-xl px-4 py-2.5 text-left text-[16px] text-brand hover:bg-chip"
            >
              Clear price &amp; rating
            </button>
          </Panel>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open === "level"}
          onClick={() => toggle("level")}
          className={cn(pill, get("level") ? "border-brand" : "border-line")}
        >
          <LevelBarsIcon className="h-4.25 w-4.25 shrink-0 text-ink" />
          <span className="truncate">{label(levels, "level") ?? "Level"}</span>
        </button>
        {open === "level" && (
          <Panel>
            <Item
              selected={!get("level")}
              onClick={() => update({ level: null })}
            >
              All levels
            </Item>
            {levels.map((o) => (
              <Item
                key={o.value}
                selected={get("level") === o.value}
                onClick={() => update({ level: o.value })}
              >
                {o.label}
              </Item>
            ))}
          </Panel>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open === "category"}
          onClick={() => toggle("category")}
          className={cn(
            pill,
            get("category") && get("category") !== "Featured"
              ? "border-brand"
              : "border-line",
          )}
        >
          <CategoryShapesIcon className="h-4.5 w-4.5 shrink-0 text-ink" />
          <span className="truncate">
            {get("category") && get("category") !== "Featured"
              ? get("category")
              : "Category"}
          </span>
        </button>
        {open === "category" && (
          <Panel>
            <Item
              selected={!get("category")}
              onClick={() => update({ category: null })}
            >
              All categories
            </Item>
            {categories.map((o) => (
              <Item
                key={o.value}
                selected={get("category") === o.value}
                onClick={() => update({ category: o.value })}
              >
                {o.label}
              </Item>
            ))}
          </Panel>
        )}
      </div>

      {anyActive && (
        <button
          type="button"
          onClick={() =>
            update({ category: null, level: null, price: null, rating: null })
          }
          className="h-12 px-2 text-[16px] text-brand hover:underline"
        >
          Clear all
        </button>
      )}

      <div className="relative ml-auto">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open === "sort"}
          onClick={() => toggle("sort")}
          className={cn(pill, hasSort ? "border-brand" : "border-line")}
        >
          <SortIcon className="h-4 w-4.5 shrink-0 text-ink" />
          <span className="truncate">
            {label(sorts, "sort") ?? "Most relevant"}
          </span>
        </button>
        {open === "sort" && (
          <Panel align="right">
            {sorts.map((o) => (
              <Item
                key={o.value}
                selected={(get("sort") || "relevant") === o.value}
                onClick={() =>
                  update({ sort: o.value === "relevant" ? null : o.value })
                }
              >
                {o.label}
              </Item>
            ))}
          </Panel>
        )}
      </div>
    </div>
  );
}
