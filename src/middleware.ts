import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.armapokras.ru";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";

  // Канонический хост: www. vercel.app и apex → www (чтобы Google не индексировал Vercel)
  if (host === "armapokras.vercel.app" || host === "armapokras.ru") {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
