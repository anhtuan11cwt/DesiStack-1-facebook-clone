import { NextResponse } from "next/server";

// Route cần đăng nhập — chặn nếu thiếu cookie authToken
const protectedRoutes = [
  "/",
  "/friends-list",
  "/video-feed",
  "/user-profile",
  "/profile",
  "/messages",
  "/notifications",
  "/settings",
];

// Route auth — chỉ dành cho người chưa đăng nhập
const authRoutes = ["/user-login", "/user-register"];

export function proxy(request) {
  const token = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some(
    (route) =>
      pathname === route || (route !== "/" && pathname.startsWith(`${route}/`)),
  );

  const isAuth = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  // Chưa đăng nhập → đẩy về login
  if (!token && isProtected) {
    const loginUrl = new URL("/user-login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Đã đăng nhập → khỏi vào trang auth
  if (token && isAuth) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
