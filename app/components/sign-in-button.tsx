"use client";

import { ErrorContext } from "@better-fetch/fetch";
import { cn } from "@lib/utils";
import { authClient } from "@services/auth-client";
import RippleButton from "@ui/ripple-button";
import { Spinner } from "@ui/spinner";

import { useState } from "react";

export function SignInButton({}) {
  const [pending, setPending] = useState(false);

  async function handleSignInWithGithub() {
    await authClient.signIn.social(
      { provider: "github", callbackURL: "/" },
      {
        onRequest: () => setPending(true),
        onError: (ctx: ErrorContext) => console.error(ctx.error),
      },
    );
  }

  return (
    <RippleButton
      onClick={handleSignInWithGithub}
      type="button"
      className={cn(
        "delay-50 text-md my-5 w-7/12 rounded-md bg-primary-100 p-2 tracking-tighter text-primary-900 transition-all hover:bg-primary-200",
        pending &&
          "cursor-not-allowed bg-primary-100/50 hover:bg-primary-100/50",
      )}
      disabled={pending}
    >
      <span className="flex items-center justify-center gap-3">
        {pending && (
          <Spinner className="h-4 w-4 fill-primary-900 text-primary-100/40" />
        )}
        Sign-in with GitHub
      </span>
    </RippleButton>
  );
}
