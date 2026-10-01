import { GridBackground } from "@/components/ui/Backgrounds";
import { Button } from "@/components/ui/Button";
import { Shape } from "@/components/ui/Shape";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 text-center text-chip [--k:.46] sm:[--k:.6] md:[--k:.8] lg:h-122 lg:py-0 lg:pt-21.75 lg:[--k:1]">
      <GridBackground />
      <Shape
        name="pyramid"
        tone="lime"
        x={1078}
        y={-0.4}
        size={188.9}
        side="right"
        className="hidden lg:block"
      />
      <Shape
        name="squiggle-a"
        tone="lime"
        x={1106.9}
        y={289}
        size={331.5}
        side="right"
        className="hidden lg:block"
      />
      <Shape
        name="squiggle-b"
        tone="lime"
        x={-121.6}
        y={-162}
        size={386.8}
        className="hidden lg:block"
      />
      <Shape
        name="squiggle-b"
        tone="white"
        x={178.8}
        y={5}
        size={175.8}
        flip
        className="hidden lg:block"
      />
      <Shape
        name="cone"
        tone="white"
        x={-50}
        y={224.6}
        size={188.9}
        className="hidden lg:block"
      />
      <Shape
        name="torus"
        tone="lime"
        x={16.4}
        y={298.3}
        size={343.7}
        className="hidden lg:block"
      />
      <Shape
        name="cylinder"
        tone="white"
        x={1222}
        y={5.2}
        size={371.8}
        side="right"
        className="hidden lg:block"
      />

      <div className="relative z-10 mx-auto flex max-w-240 flex-col items-center">
        <h2 className="h2-display max-w-150 text-chip">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-6 text-[clamp(16px,2.4vw,18px)] leading-[1.6] lg:mt-9.75">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button href="/register" className="mt-8 lg:mt-10">
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
