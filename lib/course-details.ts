import { avatar, courses, type Course } from "@/lib/data";

export type TabId = "about" | "lessons" | "reviews";

export type CourseReview = {
  name: string;
  role: string;
  avatar: string;
  ago: string;
  rating: number;
  text: string;
};

export type CourseDetails = {
  title: string;
  subtitle: string;
  thumbnail: string;
  hasPlayButton: boolean;
  reviewCount: number;
  totalLessons: number;
  totalHours: number;
  previewLessons: { number: string; title: string; duration: string }[];
  moreVideos: number;
  tagline: string;
  includes: {
    icon: "resources" | "videos" | "certificate" | "consultation";
    label: string;
  }[];
  creator: { name: string; role: string; avatar: string; bio: string };
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  modulesIntro: string;
  modules: { title: string; description: string }[];
  lessonContent: string;
  progressText: string;
  progress: number;
  reviewsIntro: string;
  reviewSummary: {
    average: number;
    breakdown: { stars: number; count: number; percent: number }[];
  };
  reviews: CourseReview[];
};

const img = (name: string) => `/images/course-details/${name}.webp`;
const TAGLINE =
  "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

const sharedIncludes: CourseDetails["includes"] = [
  { icon: "resources", label: "Learning Resources" },
  { icon: "videos", label: "Quality Lesson Videos" },
  { icon: "certificate", label: "Certificate of Completion" },
  { icon: "consultation", label: "Private Consultation" },
];

const creator = {
  name: "PurePearl Studio",
  role: "Professional Creator",
  avatar: img("creator"),
  bio: TAGLINE,
};

const reviewSummary: CourseDetails["reviewSummary"] = {
  average: 4.7,
  breakdown: [
    { stars: 5, count: 720, percent: 92 },
    { stars: 4, count: 120, percent: 36 },
    { stars: 3, count: 21, percent: 9 },
    { stars: 2, count: 12, percent: 3 },
    { stars: 1, count: 16, percent: 4 },
  ],
};

const digitalAsset: CourseDetails = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  thumbnail: img("video-thumb"),
  hasPlayButton: true,
  reviewCount: 172,
  totalLessons: 112,
  totalHours: 24,
  previewLessons: [
    {
      number: "01",
      title: "Introduction to Digital Assets",
      duration: "12 mins",
    },
    {
      number: "02",
      title: "Design Principles for Impacts",
      duration: "21 mins",
    },
    {
      number: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ],
  moreVideos: 99,
  tagline: TAGLINE,
  includes: sharedIncludes,
  creator,
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [1, 2, 3, 4].map((n) => img(`sneak-${n}`)),
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modulesIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressText:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progress: 55,
  reviewsIntro:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  reviewSummary,
  reviews: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: img("reviewer-1"),
      ago: "a year ago",
      rating: 5,
      text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: img("reviewer-2"),
      ago: "a year ago",
      rating: 5,
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: img("reviewer-3"),
      ago: "a year ago",
      rating: 4,
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: img("reviewer-4"),
      ago: "a year ago",
      rating: 5,
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
};

function generic(course: Course): CourseDetails {
  const t = course.title;
  return {
    ...digitalAsset,
    title: `${t}: A Comprehensive Guide`,
    subtitle: `Master ${t} with Expert Guidance`,
    thumbnail: course.image,
    hasPlayButton: false,
    description: [
      `Welcome to "${t}". This course walks you step by step through the ideas, tools and workflows you need, from the very first lesson to a finished, portfolio-ready result.`,
      `Each module builds on the previous one, mixing short video lessons with hands-on exercises so you can apply what you learn immediately.`,
      `By the end you will have the confidence and the practical experience to put ${t.toLowerCase()} to work in your career or your business.`,
    ],
    reviewsIntro: `Discover what our learners have to say about their experience with '${t}'.`,
    modules: digitalAsset.modules.map((m, i) => ({
      ...m,
      title: m.title.replace(
        /^(Module \d+:).*/,
        `$1 ${["Getting Started", "Core Concepts", "Practical Techniques", "Real-World Projects", "Advanced Workflows", "Wrapping Up"][i]}`,
      ),
    })),
    reviewSummary: { ...reviewSummary, average: course.rating },
  };
}

export function getCourseDetails(id: string): CourseDetails | null {
  const course = courses.find((c) => c.id === id);
  if (!course) return null;
  return id === "digital-asset" ? digitalAsset : generic(course);
}

export function getCourse(id: string) {
  return courses.find((c) => c.id === id) ?? null;
}

export { avatar };
