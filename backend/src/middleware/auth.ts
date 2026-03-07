import { Context, Next } from "hono"
import { verifyToken } from "../services/jwt"

type TokenPayload = {
  userId: string
}

export async function authMiddleware(c: Context, next: Next) {

  const auth = c.req.header("Authorization")

  if (!auth) {
    return c.json({ error: "Unauthorized" }, 401)
  }

  const token = auth.split(" ")[1]

  try {

    const payload = await verifyToken(token) as TokenPayload

    c.set("userId", payload.userId)

    await next()

  } catch (err) {

    return c.json({ error: "Invalid token" }, 401)

  }

}