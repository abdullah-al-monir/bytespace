import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Sign In – ByteSpace" };

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      heading="Welcome Back"
      footerClassName="lg:pb-[40px]"
      footer={
        <>
          New user?{" "}
          <Link href="/register" className="text-brand hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
