import { RepoDialog } from "@/app/components/repo-dialog";
import { SignOutButton } from "@components/sign-out-button";
import { octokit } from "@services/octokit";

export default async function Auth() {
  const { data: user } = await octokit.request("GET /user");

  // const accessToken = await getAccessToken();

  return (
    <main className="flex h-dvh w-full flex-col items-center">
      <header className="flex h-20 w-full items-center justify-end px-3">
        <SignOutButton />
      </header>
      <h1>Home</h1>

      <RepoDialog user={user.login ?? ""} />
    </main>
  );
}
