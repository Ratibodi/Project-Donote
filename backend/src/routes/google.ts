import { Hono } from "hono"
import { OAuth2Client } from "google-auth-library"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const app = new Hono()

app.post("/google", async (c) => {
  const { token } = await c.req.json()

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  })

  const payload = ticket.getPayload()

  return c.json(payload)
})

export default app