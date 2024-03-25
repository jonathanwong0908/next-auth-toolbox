import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./config/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // req.auth

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // no need to protect API auth routes
  const isApiAuthRoute = nextUrl?.pathname?.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl?.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl?.pathname);

  if (isApiAuthRoute) {
    // don't do anything
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/sign-in", nextUrl));
  }

  return;
});
// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
