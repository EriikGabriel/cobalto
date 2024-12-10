import { GithubUser } from "@@types/octokit";
import { betterAuth } from "better-auth";
import { cookies } from "next/headers";

export const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,

      getUserInfo: async (token) => {
        const response = await fetch("https://api.github.com/user", {
          method: "GET",
          headers: {
            Authorization: `bearer ${token.accessToken}`,
          },
        });

        const user = (await response.json()) as GithubUser;
        const cookieStore = await cookies();

        cookieStore.set("@cobalto:accessToken", String(token.accessToken), {
          expires: token.accessTokenExpiresAt,
        });

        return {
          session: {},
          user: {
            email: user.email,
            id: user.id,
            name: user.name,
          },
        };
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
