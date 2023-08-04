import { NextResponse } from "next/server";

export async function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  if (
    isLoggedIn.value === "false" &&
    request.nextUrl.pathname.startsWith("/profile")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }

  if (
    (isLoggedIn.value === "true" &&
      request.nextUrl.pathname.startsWith("/login")) ||
    (isLoggedIn.value === "true" &&
      request.nextUrl.pathname.startsWith("/signup"))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/profile";
    return NextResponse.redirect(url);
  }
}
