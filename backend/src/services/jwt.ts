import jwt from "jsonwebtoken"

const SECRET = "MY_SECRET_KEY"

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as { userId: string }
}