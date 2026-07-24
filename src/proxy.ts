import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  console.log("middleware rodando", req.nextUrl.pathname);
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home"],
};
