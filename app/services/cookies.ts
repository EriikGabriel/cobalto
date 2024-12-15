import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

type CookieOptions = Partial<ResponseCookie | undefined>;

export async function getAccessToken() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(process.env.COOKIE_TOKEN_NAME as string);

  return accessToken;
}

export async function setAccessToken(
  accessToken: string,
  cookieOptions: CookieOptions,
) {
  const cookieStore = await cookies();
  const defaultExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365); // 1 year

  cookieStore.set(process.env.COOKIE_TOKEN_NAME as string, accessToken, {
    expires: cookieOptions?.expires ?? defaultExpiresAt,
    ...cookieOptions,
  });
}
