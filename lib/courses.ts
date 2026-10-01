import { courses, type Course } from "@/lib/data";

export const PAGE_SIZE = 18;

const MOCK_CYCLES = 15;

export type Option = { value: string; label: string };

export const LEVEL_OPTIONS: Option[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
].map((v) => ({ value: v, label: v }));
export const CATEGORY_OPTIONS: Option[] = [
  ...new Set(courses.flatMap((c) => c.categories)),
]
  .sort()
  .map((v) => ({ value: v, label: v }));
export const SORT_OPTIONS: Option[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "students", label: "Most students" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];
export const PRICE_OPTIONS: Option[] = [
  { value: "under-20", label: "Under $20" },
  { value: "20-30", label: "$20 – $30" },
  { value: "over-30", label: "Over $30" },
];
export const RATING_OPTIONS: Option[] = [
  { value: "4", label: "4.0 & up" },
  { value: "4.5", label: "4.5 & up" },
  { value: "4.7", label: "4.7 & up" },
];

export type CourseFilters = {
  q?: string;
  type?: string;
  category?: string;
  level?: string;
  price?: string;
  rating?: string;
  sort?: string;
  page?: string;
};

const priceRules: Record<string, (price: number) => boolean> = {
  "under-20": (p) => p < 20,
  "20-30": (p) => p >= 20 && p <= 30,
  "over-30": (p) => p > 30,
};

const sorters: Record<string, (a: Course, b: Course) => number> = {
  rating: (a, b) => b.rating - a.rating,
  students: (a, b) => b.students - a.students,
  newest: (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

export function queryCourses(f: CourseFilters) {
  const term = (f.q ?? "").trim().toLowerCase();

  const list = courses
    .filter((c) => {
      if (term) {
        const haystack =
          f.type === "creators"
            ? c.author
            : [c.title, c.author, ...c.categories].join(" ");
        if (!haystack.toLowerCase().includes(term)) return false;
      }
      if (
        f.category &&
        f.category !== "Featured" &&
        !c.categories.includes(f.category)
      )
        return false;
      if (f.level && c.level !== f.level) return false;
      if (f.price && priceRules[f.price] && !priceRules[f.price](c.price))
        return false;
      if (f.rating && c.rating < Number(f.rating)) return false;
      return true;
    })
    .sort(sorters[f.sort ?? ""] ?? (() => 0));

  const total = list.length * MOCK_CYCLES;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(
    Math.max(Number.parseInt(f.page ?? "1", 10) || 1, 1),
    pages,
  );
  const start = (page - 1) * PAGE_SIZE;
  const items = Array.from(
    { length: Math.max(0, Math.min(PAGE_SIZE, total - start)) },
    (_, i) => list[(start + i) % list.length],
  );

  return { items, total, pages, page };
}

export function buildHref(
  path: string,
  params: Record<string, string | undefined>,
) {
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v) qs.set(k, v);
  const s = qs.toString();
  return s ? `${path}?${s}` : path;
}
