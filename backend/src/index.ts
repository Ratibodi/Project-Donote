import { Hono } from "hono"
import auth from "./routes/auth"
import google from "./routes/google"

const app = new Hono()

app.route("/auth", auth)
app.route("/google", google)

export default app