import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth(async (request: NextRequest) => {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/home(.*)", "/members", "/settings", "/event(.*)"],
};