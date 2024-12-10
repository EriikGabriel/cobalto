import { octokit } from "@/app/services/octokit";
import { auth } from "@app/services/auth";
import { SignOutButton } from "@components/sign-out-button";
import { headers } from "next/headers";

export default async function Auth() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { data } = await octokit.request("GET /user");

  return (
    <main className="flex h-dvh w-full flex-col items-center">
      <header className="flex h-20 w-full items-center justify-end px-3">
        <SignOutButton />
      </header>
      <h1>Home</h1>

      {session && (
        <div>
          <p>Session:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
