"use client";

import { cn } from "@lib/utils";
import { authClient } from "@services/auth-client";
import RippleButton from "@ui/ripple-button";
import { Spinner } from "@ui/spinner";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOutButton() {
  const [pending, setPending] = useState(false);

  const router = useRouter();

  async function handleSignOut() {
    try {
      setPending(true);

      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setPending(false);
    }
  }

  return (
    <RippleButton
      onClick={handleSignOut}
      type="button"
      className={cn(
        "delay-50 text-md my-5 w-7/12 max-w-40 rounded-md bg-primary-100 p-2 tracking-tighter text-primary-900 transition-all hover:bg-primary-200",
        pending &&
          "cursor-not-allowed bg-primary-100/50 hover:bg-primary-100/50",
      )}
      disabled={pending}
    >
      <span className="flex items-center justify-center gap-3">
        {pending && (
          <Spinner className="h-4 w-4 fill-primary-900 text-primary-100/40" />
        )}
        Sign-out
      </span>
    </RippleButton>
  );
}
