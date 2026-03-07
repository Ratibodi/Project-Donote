import { Hono } from "hono"
import { cors } from "hono/cors"

import auth from "./routes/auth"
import boards from "./routes/boards"

const app = new Hono()
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
)

app.route("/auth", auth)
app.route("/boards", boards)

export default app