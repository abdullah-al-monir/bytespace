"use client";

import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export function RegisterForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-5.75">
        <TextField
          label="Full Name"
          name="name"
          autoComplete="name"
          placeholder="Jamie Davis"
          required
        />
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
          autoComplete="new-password"
          placeholder="********"
          required
        />
      </div>
      <div className="mt-6 flex justify-end">
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}
