import { users } from "@/src/backend/store";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = users.find((u) => u.email === email);
  if (existing) {
    return Response.json({ error: "Email already used" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const newUser = {
    id: randomUUID(),
    email,
    password: hashed,
  };

  users.push(newUser);

  return Response.json({ message: "Signup success" });
}