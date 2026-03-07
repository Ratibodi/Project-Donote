import { sign, verify } from "hono/jwt"

const SECRET = "MY_SECRET"

type TokenPayload = {
  userId: string
}

export async function createToken(userId: string) {
  return await sign({ userId }, SECRET)
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  const payload = await verify(token, SECRET, "HS256")
  return payload as TokenPayload
}