import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import {
  HappyStudentsCard,
  ProgressCard,
  RevenueCard,
  YearCard,
} from "@/components/cards/FloatingCards";
import { Blob } from "@/components/ui/Backgrounds";
import { Container } from "@/components/ui/Container";
import { CheckCircle } from "@/components/ui/icons";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { Shape } from "@/components/ui/Shape";
import { courses, creatorPerks, platformStats } from "@/lib/data";

export function Showcase() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 [--k:.52] sm:[--k:.85] md:[--k:1] lg:py-30 lg:[--k:.78] xl:[--k:1]">
      <Blob tone="lime" r={568.5} opacity={0.4} x={416.5} y={102.5} />
      <Blob
        tone="blue"
        r={568.5}
        opacity={0.08}
        x={60.5}
        y={110.5}
        anchor="right"
      />
      <Blob tone="blue" r={568.5} opacity={0.16} x={60.5} y={751.5} />
      <Blob
        tone="blue"
        r={568.5}
        opacity={0.24}
        x={149.5}
        y={1356.5}
        anchor="right"
      />
      <Blob tone="lime" r={336} opacity={0.6} x={49} y={1282} />

      <Container className="relative flex flex-col gap-16 lg:gap-18">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-8">
          <div className="lg:pl-px">
            <h2 className="h2-display max-w-140 text-ink lg:relative lg:top-0.5">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 max-w-120 text-[clamp(16px,2.4vw,18px)] leading-[1.6] text-body lg:relative lg:-top-px lg:mt-11.25">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey.
              <br className="hidden xl:block" /> Whether you are looking to
              sharpen specific skills, gain industry expertise, or embark on a
              new career path entirely, we have the resources you need.
            </p>
            <dl className="mt-8 flex gap-x-14.5 lg:relative lg:-top-0.5 lg:mt-11">
              {platformStats.map((s) => (
                <div key={s.label}>
                  <dd className="relative -top-0.75 text-[36px] font-medium leading-11 text-brand">
                    {s.value}
                  </dd>
                  <dt className="text-[18px] leading-6 text-body">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <ScaledStage
            w={620}
            h={552}
            className="mx-auto lg:mx-0 lg:mr-[calc(var(--k)*-58px)]"
          >
            <CourseCard
              course={courses[0]}
              variant="showcase"
              className="absolute left-0 top-0 w-93.25 xl:h-96"
            />
            <Image
              src="/images/student.webp"
              alt=""
              width={516}
              height={483}
              className="drop-shadow-student absolute left-0 top-[11.5px] h-135 w-144.25 max-w-none"
            />
            <ProgressCard tall className="left-86.25 top-[212.5px]" />
            <Shape
              fixed
              name="squiggle-a"
              tone="lime"
              x={404}
              y={66.5}
              size={216}
            />
          </ScaledStage>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-12 xl:gap-20">
          <ScaledStage w={541} h={596} className="mx-auto lg:mx-0">
            <RevenueCard className="left-0 top-11" />
            <YearCard className="left-0 top-48.5" />
            <Image
              src="/images/creator.webp"
              alt="Smiling creator wearing headphones and holding a tablet"
              width={318}
              height={436}
              className="drop-shadow-student absolute left-7 top-0 h-149 w-108.75 max-w-none"
            />
            <HappyStudentsCard tall className="left-70.75 top-103.25" />
            <Shape
              fixed
              name="squiggle-b"
              tone="lime"
              x={303}
              y={114}
              size={216}
            />
          </ScaledStage>

          <div>
            <h2 className="h2-display max-w-115 text-ink lg:relative lg:top-0.75">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-6 max-w-140 text-[clamp(16px,2.4vw,18px)] leading-[1.6] text-body lg:mt-10.75">
              <strong className="font-semibold text-ink">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-5 lg:relative lg:-top-0.75 lg:mt-11.25">
              {creatorPerks.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2.5 text-[18px] leading-5 text-ink"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
