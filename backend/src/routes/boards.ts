import { Hono } from "hono"


import { authMiddleware } from "../middleware/auth"
import { nanoid } from "nanoid"

const app = new Hono()

app.use("*", authMiddleware)

app.get("/", async (c) => {

  const userId = c.get("userId")

  const boards = await c.env.DB.prepare(
    "SELECT * FROM boards WHERE user_id=?"
  )
    .bind(userId)
    .all()

  return c.json(boards.results)
})


app.post("/", async (c) => {

  const userId = c.get("userId")

  const { name } = await c.req.json()

  const id = nanoid()

  await c.env.DB.prepare(
    "INSERT INTO boards (id,name,user_id) VALUES (?,?,?)"
  )
    .bind(id, name, userId)
    .run()

  return c.json({
    id,
    name
  })
})


app.delete("/:id", async (c) => {

  const id = c.req.param("id")

  const userId = c.get("userId")

  await c.env.DB.prepare(
    "DELETE FROM boards WHERE id=? AND user_id=?"
  )
    .bind(id, userId)
    .run()

  return c.json({ message: "deleted" })
})

export default app