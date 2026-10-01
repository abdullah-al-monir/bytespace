export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
] as const;

export const avatar = (n: number) => `/images/avatars/a${n}.webp`;

export const studentAvatars = [1, 2, 3, 4, 5, 6, 7].map(avatar);

export const courseAvatars = [2, 8, 9, 10].map(avatar);

export const categoryChips: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export type Level = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: Level;
  price: number;
  studentCount: string;
  students: number;
  categories: string[];
  publishedAt: string;
};

const base = {
  author: "purepearl studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  studentCount: "26+",
};

export const courses: Course[] = [
  {
    ...base,
    id: "figma",
    title: "Learn Figma from Basic",
    image: "/images/courses/figma.webp",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: 1240,
    publishedAt: "2023-05-12",
    categories: ["UI/UX Design", "Graphic Design"],
  },
  {
    ...base,
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.webp",
    rating: 4.8,
    level: "Intermediate",
    price: 25,
    students: 199,
    publishedAt: "2023-08-20",
    categories: [
      "Digital Illustration",
      "Graphic Design",
      "Animation",
      "Drawing & Painting",
    ],
  },
  {
    ...base,
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.webp",
    rating: 4.6,
    level: "Advanced",
    price: 39,
    students: 860,
    publishedAt: "2023-03-02",
    categories: ["Data Science", "Web Development"],
  },
  {
    ...base,
    id: "productivity",
    title: "Balancing Productivity and Time Management",
    image: "/images/courses/productivity.webp",
    rating: 4.3,
    level: "Beginner",
    price: 19,
    students: 2100,
    publishedAt: "2023-07-11",
    categories: ["Productivity"],
  },
  {
    ...base,
    id: "money",
    title: "Mastering Money Management",
    image: "/images/courses/money.webp",
    rating: 4.7,
    level: "Intermediate",
    price: 29,
    students: 640,
    publishedAt: "2023-09-05",
    categories: ["Freelance & Entrepreneurship", "Productivity"],
  },
  {
    ...base,
    id: "startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.webp",
    rating: 4.4,
    level: "Beginner",
    price: 35,
    students: 980,
    publishedAt: "2023-01-18",
    categories: [
      "Freelance & Entrepreneurship",
      "Marketing",
      "Creative Marketing",
      "Social Media",
    ],
  },
];
export const learningPaths = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "development" },
  { label: "IT & Software", icon: "it" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
] as const;

export const platformStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: avatar(9),
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: avatar(11),
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: avatar(12),
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
