import { NextResponse, type NextRequest } from "next/server";
import { getAccessToken } from "./app/services/cookies";

const authRoutes = ["/auth"];
const introductionRoutes = ["/"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isIntroductionRoute = introductionRoutes.includes(pathName);

  const accessToken = await getAccessToken();

  if (!accessToken) {
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
