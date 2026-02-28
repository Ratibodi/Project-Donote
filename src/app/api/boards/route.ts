import type { Env } from "@/src/types/env"

type Board = {
  id: number
  title: string
  content: string
}

type BoardInput = {
  title: string
  content: string
}

// ================= GET =================
export async function GET(
  request: Request,
  context: { env: Env }
) {
  try {
    const { results } = await context.env.DB
      .prepare("SELECT * FROM boards ORDER BY id DESC")
      .all()

    return Response.json(results)
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch boards" },
      { status: 500 }
    )
  }
}

// ================= POST =================
export async function POST(
  request: Request,
  context: { env: Env }
) {
  try {
    const body = (await request.json()) as BoardInput

    if (!body.title || !body.content) {
      return Response.json(
        { error: "Missing title or content" },
        { status: 400 }
      )
    }

    await context.env.DB
      .prepare(
        "INSERT INTO boards (title, content) VALUES (?, ?)"
      )
      .bind(body.title, body.content)
      .run()

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { error: "Failed to create board" },
      { status: 500 }
    )
  }
}