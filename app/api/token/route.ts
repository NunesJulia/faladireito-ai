import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = jwt.sign(
    {
      email: session.user?.email,
      name: session.user?.name,
    },
    process.env.NEXTAUTH_SECRET!,
    { expiresIn: "5m" }
  );

  return NextResponse.json({ token });
}
