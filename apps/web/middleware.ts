import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";
  const currentHost = hostname.replace("." + rootDomain, "").replace(":3000", "");

  if (
    currentHost === hostname ||
    currentHost === "localhost" ||
    currentHost === "www" ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  url.pathname = "/tenant/" + currentHost + url.pathname;
  
  const response = NextResponse.rewrite(url);
  response.headers.set("x-tenant-subdomain", currentHost);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
