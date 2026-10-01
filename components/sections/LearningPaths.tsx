import { LearningPathCard } from "@/components/cards/LearningPathCard";
import { Container } from "@/components/ui/Container";
import { learningPaths } from "@/lib/data";

export function LearningPaths() {
  return (
    <section className="bg-white pb-16 pt-14 lg:pb-30 lg:pt-18">
      <Container>
        <div className="text-center">
          <h2 className="h2-sub text-navy">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-227.5 text-[clamp(16px,2.4vw,18px)] leading-[1.6] text-muted lg:mt-4.5">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16.5 lg:grid-cols-6 lg:gap-6 xl:gap-10">
          {learningPaths.map((p) => (
            <LearningPathCard key={p.label} label={p.label} icon={p.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
