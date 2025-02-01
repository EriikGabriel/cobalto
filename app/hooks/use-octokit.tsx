"use client";

import { useCookies } from "next-client-cookies";
import { Octokit } from "octokit";

export function useOctokit() {
  const cookieStore = useCookies();

  const accessToken = cookieStore.get(
    process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME as string,
  );

  return new Octokit({ auth: accessToken });
}
