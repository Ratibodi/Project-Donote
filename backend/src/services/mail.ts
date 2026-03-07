import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOTP(email: string, code: string) {
  await resend.emails.send({
    from: "Donote <noreply@donote.app>",
    to: email,
    subject: "Your verification code",
    html: `<h2>Your OTP code: ${code}</h2>`
  })
}