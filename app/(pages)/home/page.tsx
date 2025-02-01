import { AppSidebar } from "@/app/components/app-sidebar";
import { SignOutButton } from "@/app/components/sign-out-button";
import { RepoDialog } from "@components/repo-dialog";
import { octokit } from "@services/octokit";

export default async function Auth() {
  const { data: user } = await octokit.request("GET /user");

  // const accessToken = await getAccessToken();

  return (
    <main className="flex h-dvh w-full">
      <RepoDialog user={user.login ?? ""} />

      <AppSidebar />

      <div className="h-full w-full p-2">
        <header className="flex h-20 w-full items-center justify-end px-5">
          <SignOutButton />
        </header>

        <div className="flex h-[calc(100%-5rem)] w-full gap-6 p-2">
          <section className="flex w-1/2 flex-col gap-6 rounded-lg border bg-slate-900/40 p-2 font-inter">
            <div className="rounded bg-[#455176] p-1 text-center font-semibold">
              <h1 className="text-sm">Home</h1>
            </div>
            <div className="text-gray-400">
              <p># Título do Projeto</p>
            </div>
          </section>

          <section className="flex w-1/2 flex-col gap-6 rounded-lg border bg-slate-200 p-2 font-inter">
            <div className="w-1/4 self-center rounded bg-primary-100 p-1 text-center font-semibold text-primary-300">
              <h1 className="text-sm">Raw</h1>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
