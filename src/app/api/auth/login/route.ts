export const runtime = "nodejs";



import { users } from "@/src/backend/store";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email);
  if (!user) {
    return Response.json({ error: "User not found" }, { status: 400 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return Response.json({ error: "Wrong password" }, { status: 400 });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: "1d" }
  );

  const response = Response.json({ message: "Login success" });

  response.headers.set(
    "Set-Cookie",
    `token=${token}; HttpOnly; Path=/; Max-Age=86400`
  );

  return response;
}