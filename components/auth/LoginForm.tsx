"use client";

import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { SocialButtons } from "@/components/auth/SocialButtons";

export function LoginForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-5.75">
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
          required
        />
      </div>

      <div className="mt-6 flex justify-end">
        <Button type="submit">Sign In</Button>
      </div>

      <div className="mt-19.5 flex items-center gap-3 pr-3.5 text-[16px] leading-5 text-muted">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-10.75">
        <SocialButtons />
      </div>
    </form>
  );
}
