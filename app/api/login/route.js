import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";

export async function POST(req) {
  const { username, password } = await req.json();

  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await new SignJWT({ username: user.username })
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET || "supersecret"));

  // Token als httpOnly-Cookie setzen
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    maxAge: 60 * 60, // Token läuft in 1 Stunde ab
    path: "/",
  });

  return response;
}
