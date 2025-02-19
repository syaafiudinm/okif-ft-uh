import { NextResponse } from "next/server";
import { supabase } from "./lib/supabaseClient";

export async function middleware(req) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
