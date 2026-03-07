import { Context, Next } from "hono"
import { verifyToken } from "../services/jwt"

type Variables = {
  userId: string
}

export async function authMiddleware(
  c: Context<{ Variables: Variables }>,
  next: Next
) {

  const auth = c.req.header("Authorization")

  if (!auth) {
    return c.json({ error: "Unauthorized" }, 401)
  }

  const token = auth.split(" ")[1]

  try {

    const payload: any = verifyToken(token)

    c.set("userId", payload.userId)

    await next()

  } catch {

    return c.json({ error: "Invalid token" }, 401)

  }
}