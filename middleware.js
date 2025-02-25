import { NextResponse } from "next/server";
import { supabase } from "./lib/supabaseClient";

export async function middleware(req) {
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect ke login jika tidak ada sesi
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
  