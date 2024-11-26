import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // Kein Token vorhanden, umleiten zur Login-Seite
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    // Token validieren
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET || "supersecret")
    );

    // Wenn das Token gültig ist, Admin-Seite zulassen
    return NextResponse.next();
  } catch (error) {
    // Ungültiges Token, umleiten zur Login-Seite
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

// Admin-Routen schützen
export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
