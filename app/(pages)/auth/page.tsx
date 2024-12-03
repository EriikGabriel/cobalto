import { SignInButton } from "@components/sign-in-button";
import ShineBorder from "@ui/shine-border";
import { Github, Shield } from "lucide-react";

export default function Auth() {
  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <ShineBorder
        className="relative flex h-1/2 w-[30%] flex-col items-center justify-between overflow-hidden rounded-lg border bg-[#101A3C]/30 text-white md:shadow-xl"
        color={["#A07CFE", "#8fc3fe", "#04184d"]}
      >
        <header className="flex flex-col items-center justify-center gap-3">
          <Github className="h-8 w-8 text-primary-300" />
          <h1 className="text-md text-center font-semibold text-primary-200">
            Enter your GitHub credentials to start using the application.
          </h1>
        </header>

        <article className="flex w-full flex-col items-center">
          <SignInButton />
          <p className="flex items-center justify-center gap-5 py-5 text-xs font-bold text-primary-400">
            <Shield className="size-4" />
            Protected by Cobalto
          </p>
        </article>
      </ShineBorder>
    </main>
  );
}
