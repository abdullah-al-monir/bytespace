import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutTab } from "@/components/course-details/AboutTab";
import { CourseHero } from "@/components/course-details/CourseHero";
import { CourseSidebar } from "@/components/course-details/CourseSidebar";
import { CourseTabs } from "@/components/course-details/CourseTabs";
import { LessonsTab } from "@/components/course-details/LessonsTab";
import { ReviewsTab } from "@/components/course-details/ReviewsTab";
import { Container } from "@/components/ui/Container";
import { getCourse, getCourseDetails, type TabId } from "@/lib/course-details";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string; rating?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const details = getCourseDetails(slug);
  return {
    title: details
      ? `${details.title} – ByteSpace`
      : "Course not found – ByteSpace",
  };
}

export default async function CourseDetailsPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { tab, rating } = await searchParams;

  const course = getCourse(slug);
  const details = getCourseDetails(slug);
  if (!course || !details) notFound();

  const active: TabId = tab === "lessons" || tab === "reviews" ? tab : "about";

  return (
    <div className="relative">
      <CourseHero course={course} details={details} />
      <Container className="pointer-events-none relative z-10 mt-8 lg:absolute lg:inset-x-0 lg:top-104.75 lg:mt-0">
        <div className="pointer-events-auto lg:ml-auto lg:mr-px lg:w-102.5">
          <CourseSidebar course={course} details={details} />
        </div>
      </Container>

      <section className="lg:min-h-[125">
        <Container className="pt-12 lg:pt-19.5">
          <div className="lg:pr-110.5 xl:pr-119.25">
            <CourseTabs slug={slug} active={active} />
            {active === "about" && <AboutTab details={details} />}
            {active === "lessons" && <LessonsTab details={details} />}
            {active === "reviews" && (
              <ReviewsTab
                details={details}
                average={details.reviewSummary.average}
                rating={rating}
                hrefFor={(r) =>
                  `/courses/${slug}?tab=reviews${r ? `&rating=${r}` : ""}`
                }
              />
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
