import Image from "next/image";
import { NavbarSpacer } from "@/components/layout/NavbarSpacer";
import {
  HappyStudentsCard,
  ProgressCard,
  TopicCard,
} from "@/components/cards/FloatingCards";
import { GridBackground } from "@/components/ui/Backgrounds";
import { Button } from "@/components/ui/Button";
import { SearchIcon } from "@/components/ui/icons";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { Shape } from "@/components/ui/Shape";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-chip [--k:.46] sm:[--k:.6] md:[--k:.8] lg:h-256 lg:[--k:1]">
      <GridBackground />
      <Shape
        name="squiggle-b"
        tone="lime"
        x={-121.6}
        y={221}
        size={386.8}
        className="hidden lg:block lg:z-20"
      />
      <Shape
        name="squiggle-b"
        tone="white"
        x={183.8}
        y={477}
        size={175.8}
        flip
        className="hidden lg:block lg:z-20"
      />
      <Shape
        name="torus"
        tone="white"
        x={14.4}
        y={681.3}
        size={343.7}
        className="hidden lg:block lg:z-20"
      />
      <Shape
        name="cylinder"
        tone="lime"
        x={1227.1}
        y={220.2}
        size={371.8}
        side="right"
        className="hidden lg:block lg:z-20"
      />
      <Shape
        name="pyramid"
        tone="white"
        x={1104}
        y={463.6}
        size={188.9}
        side="right"
        className="hidden lg:block lg:z-20"
      />
      <Shape
        name="squiggle-a"
        tone="white"
        x={1123.9}
        y={672}
        size={331.5}
        side="right"
        className="hidden lg:block lg:z-20"
      />

      <NavbarSpacer />

      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <h1 className="mt-8 max-w-225 font-heading text-[clamp(36px,9vw,70px)] font-semibold leading-[1.2] tracking-[0.006em] text-white lg:mt-14">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-6 max-w-205 text-[clamp(16px,2vw,18px)] leading-[1.6] text-chip lg:mt-8.75">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          role="search"
          action="/courses"
          className="mt-8 flex w-full max-w-145.25 items-start gap-3 sm:gap-4 lg:mt-15"
        >
          <label className="relative block min-w-0 flex-1">
            <span className="sr-only">Search courses</span>
            <SearchIcon className="pointer-events-none absolute left-6.75 top-4.25 h-[17.5px] w-[17.5px] text-muted" />
            <input
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="h-13 w-full rounded-3xl bg-white pl-14 pr-4 text-[18px] text-ink outline-none placeholder:text-muted"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <ScaledStage
        w={1440}
        h={512}
        className="left-1/2 z-10 mt-6 -translate-x-1/2 lg:-mt-0.75"
      >
        <div
          aria-hidden
          className="absolute left-[145.5px] top-17.5 h-287.25 w-287.25 rounded-full border-320 border-solid border-lime-deep"
        />
        <Image
          src="/images/student.webp"
          alt="Smiling student with headphones holding a laptop"
          width={516}
          height={483}
          priority
          className="absolute left-107.75 top-0 h-135.25 w-144.5 max-w-none"
        />
        <TopicCard className="left-101 top-31.75" />
        <ProgressCard className="left-210.5 top-34.75" />
        <HappyStudentsCard className="left-82 top-81.25" />
      </ScaledStage>
    </section>
  );
}
