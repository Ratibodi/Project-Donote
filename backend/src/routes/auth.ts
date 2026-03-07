import { Hono } from "hono"
import bcrypt from "bcryptjs"
import { nanoid } from "nanoid"

import type { Env } from "../types"
import { generateOTP } from "../services/otp"
import { sendOTP } from "../services/mail"
import { createToken } from "../services/jwt"

const app = new Hono<{ Bindings: Env }>()

// ========================
// REGISTER
// ========================
app.post("/register", async (c) => {

  const { email, password, name } = await c.req.json()

  // check email ซ้ำ
  const existing = await c.env.DB.prepare(
    "SELECT id FROM users WHERE email=?"
  )
  .bind(email)
  .first()

  if (existing) {
    return c.json({ error: "Email already registered" }, 400)
  }

  const hash = await bcrypt.hash(password, 10)

  const id = nanoid()

  const otp = generateOTP()

  await c.env.DB.prepare(
    "INSERT INTO users (id,email,password,name,verified) VALUES (?,?,?,?,0)"
  )
  .bind(id, email, hash, name)
  .run()

  await c.env.DB.prepare(
    "INSERT INTO otp_codes (email,code,expire_at) VALUES (?,?,datetime('now','+5 minutes'))"
  )
  .bind(email, otp)
  .run()

  await sendOTP(email, otp)

  return c.json({
    message: "OTP sent to email"
  })

})


// ========================
// VERIFY OTP
// ========================
app.post("/verify", async (c) => {

  const { email, code } = await c.req.json()

  const otp = await c.env.DB.prepare(
    "SELECT * FROM otp_codes WHERE email=? AND code=?"
  )
  .bind(email, code)
  .first()

  if (!otp) {
    return c.json({ error: "Invalid OTP" }, 400)
  }

  await c.env.DB.prepare(
    "UPDATE users SET verified=1 WHERE email=?"
  )
  .bind(email)
  .run()

  // ลบ otp หลังใช้
  await c.env.DB.prepare(
    "DELETE FROM otp_codes WHERE email=?"
  )
  .bind(email)
  .run()

  return c.json({
    message: "Email verified"
  })

})


// ========================
// LOGIN
// ========================
app.post("/login", async (c) => {

  const { email, password } = await c.req.json()

  const user = await c.env.DB.prepare(
    "SELECT * FROM users WHERE email=?"
  )
  .bind(email)
  .first<any>()

  if (!user) {
    return c.json({ error: "User not found" }, 404)
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return c.json({ error: "Wrong password" }, 401)
  }

  if (!user.verified) {
    return c.json({ error: "Verify email first" }, 403)
  }

  const token = await createToken(user.id)

  return c.json({
    token
  })

})

export default app