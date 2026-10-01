# ByteSpace – Online Course Marketplace

A modern, fully responsive e-learning landing site built with **Next.js (App Router)** and **Tailwind CSS v4**.
It includes a marketing home page, a searchable / filterable course catalogue, course detail pages with tabs,
login & register screens, and a custom 404 page – all matched closely to the original Figma designs.

## 🔗 Live Demo

**https://bytespace-mocha.vercel.app**


---

## 📄 Pages

| Route | Description |
| --- | --- |
| `/` | Home – hero, partners, featured courses, learning paths, creator CTA, testimonials |
| `/courses` | Course catalogue with search, filters, sorting, category chips and pagination |
| `/courses/[slug]` | Course details with **About / Lessons / Reviews** tabs (e.g. `/courses/digital-asset`) |
| `/login` | Sign in screen |
| `/register` | Create account screen |
| *any unknown URL* | Custom 404 page |

---

## 🛠 Technology Used

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) – App Router, Server Components, route groups |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config with `@theme` design tokens) |
| Fonts | [Poppins](https://fonts.google.com/specimen/Poppins) via `next/font/google` + [Satoshi](https://www.fontshare.com/fonts/satoshi) via `next/font/local` |
| Images | `next/image` with optimised `.webp` assets |
| Icons | Custom inline SVG React components |
| Deployment | [Vercel](https://vercel.com/) |

No UI component library is used – every component is hand-built and reusable.

---

## ✨ Features

**General**
- Pixel-matched to the 1440px design on desktop, and responsive down to mobile (stacked layouts, mobile menu)
- Route groups: `(public)` layout (navbar + footer) and `(auth)` layout (blue grid, no navbar/footer)
- Route-aware navbar (highlights the current page) with a mobile hamburger menu
- Reusable component system: `Button`, `Container`, `TextField`, `AvatarStack`, `ProgressBar`, `CourseCard`, …
- Design tokens (colors, fonts) defined once in `app/globals.css`
- SEO-friendly: per-page metadata and semantic HTML, accessible labels and keyboard-friendly dropdowns

**Courses page**
- 🔍 Search by title / category, or by creator (Courses ⟷ Creators selector)
- 🎛 Working **Filter** (price, rating), **Level**, **Category** and **Sort** dropdowns
- 🏷 Category chips, "Clear all" button and empty-state message
- 📄 Pagination (18 cards per page)
- Every filter lives in the URL (`?level=Beginner&sort=rating`), so results are shareable and work with the back button

**Course details page**
- Hero with title, meta chips, native **Share** button (Web Share API with copy-link fallback) and video preview
- Sticky-style purchase card: lessons preview, price, *Enroll Now*, what's included, creator info
- **About** tab – description, sneak peek gallery, key points
- **Lessons** tab – module list, lesson content, progress tracking card
- **Reviews** tab – rating summary, star-rating filter, individual reviews
- Tabs are plain links (`?tab=lessons`), so they work without client-side JavaScript

**Auth pages**
- Login & Register screens with reusable form fields and social sign-in buttons (UI ready to connect to your auth provider)

---

## 📁 Folder Structure

```text
├── app/                                # Next.js App Router
│   ├── (auth)/                         # Auth pages – blue grid layout, no navbar/footer
│   │   ├── login/
│   │   │   └── page.tsx                # Login  →  /login
│   │   ├── register/
│   │   │   └── page.tsx                # Register  →  /register
│   │   └── layout.tsx                  # Blue grid background + logo mark
│   ├── (public)/                       # Public pages – shared navbar + footer layout
│   │   ├── courses/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            # Course details (tabs)  →  /courses/:slug
│   │   │   └── page.tsx                # Courses listing + filters  →  /courses
│   │   ├── layout.tsx                  # Floating navbar + <main> + footer
│   │   └── page.tsx                    # Home  →  /
│   ├── fonts/                          # ⚠ add Satoshi-Variable.woff2 here (see Installation)
│   ├── globals.css                     # Tailwind v4 import + design tokens (@theme)
│   ├── layout.tsx                      # Root layout – fonts (Poppins + Satoshi), <html>/<body>
│   └── not-found.tsx                   # Global 404 page
├── components/
│   ├── auth/                           # Login / Register UI
│   │   ├── AuthShell.tsx
│   │   ├── AuthShowcase.tsx
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── SocialButtons.tsx
│   ├── cards/                          # Reusable cards (course, floating stat cards, testimonial…)
│   │   ├── CourseCard.tsx
│   │   ├── FloatingCards.tsx
│   │   ├── LearningPathCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── course-details/                 # Course details page: hero, sidebar, tabs
│   │   ├── AboutTab.tsx
│   │   ├── CourseHero.tsx
│   │   ├── CourseSidebar.tsx
│   │   ├── CourseTabs.tsx
│   │   ├── DetailIcons.tsx
│   │   ├── LessonsTab.tsx
│   │   ├── ReviewsTab.tsx
│   │   └── ShareButton.tsx
│   ├── courses/                        # Courses page: hero, filter bar, chips, pagination
│   │   ├── CategoryTabs.tsx
│   │   ├── CourseIcons.tsx
│   │   ├── CoursesHero.tsx
│   │   ├── FilterBar.tsx
│   │   └── Pagination.tsx
│   ├── layout/                         # Navbar, NavbarSpacer, Footer
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── NavbarSpacer.tsx
│   ├── sections/                       # Home page sections
│   │   ├── CreatorCta.tsx
│   │   ├── FeaturedCourses.tsx
│   │   ├── Hero.tsx
│   │   ├── LearningPaths.tsx
│   │   ├── Partners.tsx
│   │   ├── Showcase.tsx
│   │   └── Testimonials.tsx
│   └── ui/                             # Design-system primitives (Button, Container, Logo, icons…)
│       ├── AvatarStack.tsx
│       ├── Backgrounds.tsx
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── icons.tsx
│       ├── Logo.tsx
│       ├── ProgressBar.tsx
│       ├── ScaledStage.tsx
│       ├── Shape.tsx
│       └── TextField.tsx
├── lib/
│   ├── course-details.ts               # Course details content (modules, reviews, sidebar…)
│   ├── courses.ts                      # Filtering / sorting / pagination logic (mock catalog)
│   ├── data.ts                         # Course type + static site content
│   └── utils.ts                        # cn() class joiner
├── public/                             # Static assets
│   └── images/
│       ├── auth/                       # 3 optimised .webp images
│       ├── avatars/                    # 12 optimised .webp images
│       ├── course-details/             # 10 optimised .webp images
│       ├── courses/                    # 6 optimised .webp images
│       ├── shapes/                     # 11 optimised .webp images
│       ├── creator.webp
│       └── student.webp
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🚀 Installation

### Prerequisites
- **Node.js 20.9 or newer** (check with `node -v`)
- **npm** (comes with Node.js) – or `pnpm` / `yarn` if you prefer

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/bytespace.git
cd bytespace
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add the Satoshi font
Satoshi is a free font from Fontshare (it is not on Google Fonts), so it is loaded locally:

1. Download it from **https://www.fontshare.com/fonts/satoshi** (click *Download family*).
2. From the zip, copy `Satoshi-Variable.woff2` (inside the *web fonts* folder).
3. Put it here: `app/fonts/Satoshi-Variable.woff2`

> Poppins loads automatically from Google Fonts – no action needed.

### 4. Start the development server
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.

### 5. Build for production (optional)
```bash
npm run build
npm run start
```

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm run start` | Run the production build locally |

---

## ☁️ Deploy to Vercel

1. Push the project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the defaults – Vercel detects **Next.js** automatically (no environment variables are required).
4. Click **Deploy**, then copy your live URL into the [Live Demo](#-live-demo) section above.

> Make sure `app/fonts/Satoshi-Variable.woff2` is committed to Git, otherwise the build will fail.

---

## 🔗 URL Parameters

**`/courses`**

| Param | Example | Purpose |
| --- | --- | --- |
| `q` | `?q=figma` | Search text |
| `type` | `?type=creators` | Search in `courses` (default) or `creators` |
| `category` | `?category=Animation` | Filter by category |
| `level` | `?level=Beginner` | `Beginner`, `Intermediate`, `Advanced` |
| `price` | `?price=under-20` | `under-20`, `20-30`, `over-30` |
| `rating` | `?rating=4.5` | Minimum rating |
| `sort` | `?sort=price-asc` | `rating`, `students`, `newest`, `price-asc`, `price-desc` |
| `page` | `?page=2` | Page number |

**`/courses/[slug]`**

| Param | Example | Purpose |
| --- | --- | --- |
| `tab` | `?tab=reviews` | `about` (default), `lessons`, `reviews` |
| `rating` | `?tab=reviews&rating=5` | Filter reviews by star rating |

---

## 🧩 Customising the Data

- Course list and site content: `lib/data.ts`
- Course details (modules, reviews, sidebar content): `lib/course-details.ts`
- Filtering / sorting / pagination: `lib/courses.ts`

The project currently uses **mock data** (the 6 sample courses are repeated to fill 5 pages).
To connect a real backend, replace `queryCourses()` in `lib/courses.ts` and `getCourseDetails()` in
`lib/course-details.ts` with your API or database calls – the UI components do not need to change.

---


## 👤 Author

**AbdullAh Al Monir** – [GitHub](https://github.com/abdullah-al-monir) · [LinkedIn](https://linkedin.com/in/aam364) · [Portfolio](https://abdullahalmonir.com)
