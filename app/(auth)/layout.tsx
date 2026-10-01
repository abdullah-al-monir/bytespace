import Link from "next/link";
import { GridBackground } from "@/components/ui/Backgrounds";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden bg-brand [--k:.66] lg:min-h-256 xl:[--k:1]">
      <GridBackground />
      <Container className="relative pb-12 pt-6 lg:pb-30 lg:pt-8.75">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="flex w-fit xl:ml-0.5"
        >
          <LogoMark className="h-[31.5px] w-[28.88px]" />
        </Link>
        {children}
      </Container>
    </main>
  );
}
