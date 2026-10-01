import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GridBackground } from "@/components/ui/Backgrounds";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "404 – Page not found | ByteSpace" };

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand pb-16 text-chip lg:pb-32">
        <GridBackground />
        <Navbar />

        <div className="relative z-10 flex flex-col items-center px-5 text-center [--s:clamp(110px,32.43vw,467px)]">
          <p
            aria-hidden
            className="ml-[-0.025em] mt-6 select-none bg-clip-text font-heading font-bold leading-none tracking-[-0.01em] text-transparent lg:mt-[calc(var(--s)*0.105)]"
            style={{
              fontSize: "var(--s)",
              backgroundImage:
                "linear-gradient(180deg,rgba(212,251,32,1) 0%,rgba(212,251,32,1) 15%,rgba(212,251,32,.96) 22.7%,rgba(212,251,32,.87) 42%,rgba(212,251,32,.72) 61%,rgba(212,251,32,.56) 74%,rgba(212,251,32,.34) 87%,rgba(212,251,32,.15) 100%)",
            }}
          >
            404
          </p>

          <h1 className="relative -mt-[calc(var(--s)*0.2377-2px)] max-w-230 font-heading text-[clamp(32px,7vw,70px)] font-semibold leading-[1.2] tracking-[0.006em] text-white">
            The page you are looking for doesn’t exist
          </h1>

          <p className="mt-6 text-[clamp(16px,2.4vw,18px)] leading-[1.6] lg:mt-8.75">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Button href="/" className="mt-6 lg:mt-8">
            Back to Home
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
