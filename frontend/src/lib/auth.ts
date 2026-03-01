import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecretkey";

export function verifyToken(request: Request) {
  const cookie = request.headers.get("cookie");
  if (!cookie) return null;

  const token = cookie
    .split("; ")
    .find((c) => c.startsWith("token="))
    ?.split("=")[1];

  if (!token) return null;

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}