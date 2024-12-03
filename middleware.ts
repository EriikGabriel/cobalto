import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "@services/auth";
import { NextResponse, type NextRequest } from "next/server";

const authRoutes = ["/auth"];
const introductionRoutes = ["/"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isIntroductionRoute = introductionRoutes.includes(pathName);

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: process.env.BASE_URL,
      headers: { cookie: request.headers.get("cookie") || "" },
    },
  );

  if (!session) {
    if (isAuthRoute || isIntroductionRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (isAuthRoute || isIntroductionRoute) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg$).*)"],
};
