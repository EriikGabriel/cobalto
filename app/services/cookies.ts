import { getCookies } from "next-client-cookies/server";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

type CookieOptions = Partial<ResponseCookie | undefined>;

export async function getAccessToken() {
  const cookieStore = await getCookies();
  const accessToken = cookieStore.get(
    process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME as string,
  );

  return accessToken;
}

export async function setAccessToken(
  accessToken: string,
  cookieOptions: CookieOptions,
) {
  const cookieStore = await cookies();
  const defaultExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365); // 1 year

  cookieStore.set(
    process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME as string,
    accessToken,
    {
      expires: cookieOptions?.expires ?? defaultExpiresAt,
      ...cookieOptions,
    },
  );
}

export async function setCookie(key: string, value: string) {
  const cookieStore = await cookies();
  const defaultExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365); // 1 year

  cookieStore.set(key, value, { expires: defaultExpiresAt });
}

export async function getCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key);
}

export async function removeCookie(key: string) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}
