import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-40">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
