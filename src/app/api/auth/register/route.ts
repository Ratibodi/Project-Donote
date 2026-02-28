import bcrypt from "bcryptjs";
import { queryD1 } from "../../../lib/db";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const hashed = await bcrypt.hash(password, 10);

    await queryD1(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashed]
    );

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}