import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Blob } from "@/components/ui/Backgrounds";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 lg:pb-15 lg:pt-19.5">
      <Blob
        tone="lime"
        r={568.5}
        opacity={0.4}
        x={29.5}
        y={327.5}
        anchor="right"
      />
      <Blob tone="lime" r={336} opacity={0.6} x={731} y={198} />
      <Blob tone="blue" r={568.5} opacity={0.24} x={126.5} y={717.5} />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-9">
          <h2 className="h2-display text-black lg:mt-9">
            Discover What Our <br className="hidden sm:block" /> Community Is
            Saying
          </h2>
          <p className="max-w-145.5 text-[clamp(16px,2.4vw,18px)] leading-[1.6] text-body-2 lg:relative lg:-top-0.5">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-17.5 lg:-mx-0.5 xl:gap-x-10.25 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
