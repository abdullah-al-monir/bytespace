import { CreatorCta } from "@/components/sections/CreatorCta";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { Partners } from "@/components/sections/Partners";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <FeaturedCourses />
      <LearningPaths />
      <Showcase />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
