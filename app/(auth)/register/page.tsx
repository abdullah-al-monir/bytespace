import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Create an Account – ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      heading="Welcome to ByteSpace"
      footerClassName="lg:pb-[52px]"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-brand hover:underline">
            Login
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
