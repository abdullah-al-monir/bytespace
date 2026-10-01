import { Container } from "@/components/ui/Container";
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
} from "@/components/ui/icons";

const logos = [Partner1, Partner2, Partner3, Partner4, Partner5];

export function Partners() {
  return (
    <section
      aria-label="Trusted by"
      className="bg-chip py-10 lg:h-50.5 lg:py-20.25"
    >
      <Container>
        <ul className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:flex lg:justify-between lg:px-8.5">
          {logos.map((Logo, i) => (
            <li key={i} className="text-muted">
              <Logo className="h-8 w-auto lg:h-10" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
