import { cookies } from "next/headers";
import { Octokit } from "octokit";

const cookieStore = await cookies();

const accessToken = cookieStore.get("@cobalto:accessToken");

export const octokit = new Octokit({
  auth: accessToken?.value,
});
