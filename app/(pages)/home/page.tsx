import { SignOutButton } from "@components/sign-out-button";
import { auth } from "@services/auth";

import { headers } from "next/headers";

export default async function Auth() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex h-dvh w-full flex-col items-center">
      <header className="flex h-20 w-full items-center justify-end px-3">
        <SignOutButton />
      </header>
      <h1>Home</h1>
      {session && (
        <div>
          <p>Session:</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
