import { Hono } from "hono"
import bcrypt from "bcryptjs"
import { generateOTP } from "../services/otp"
import { sendOTP } from "../services/mail"

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.post("/register", async (c) => {
  const { email, password, name } = await c.req.json()

  const hash = await bcrypt.hash(password, 10)

  const otp = generateOTP()

  await c.env.DB.prepare(
    "INSERT INTO users (email,password,name) VALUES (?,?,?)"
  ).bind(email, hash, name).run()

  await c.env.DB.prepare(
    "INSERT INTO otp_codes (email,code,expire_at) VALUES (?,?,datetime('now','+5 minutes'))"
  ).bind(email, otp).run()

  await sendOTP(email, otp)

  return c.json({ message: "OTP sent to email" })
})

app.post("/verify", async (c) => {
  const { email, code } = await c.req.json()

  const otp = await c.env.DB.prepare(
    "SELECT * FROM otp_codes WHERE email=? AND code=?"
  ).bind(email, code).first()

  if (!otp) {
    return c.json({ error: "Invalid code" }, 400)
  }

  await c.env.DB.prepare(
    "UPDATE users SET verified=1 WHERE email=?"
  ).bind(email).run()

  return c.json({ message: "Email verified" })
})

export default app