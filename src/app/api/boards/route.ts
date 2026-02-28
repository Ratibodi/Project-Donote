export const runtime = "edge";

/**
 * GET  /api/boards
 * ดึงรายการ boards ทั้งหมด
 */
export async function GET(
  request: Request,
  context: { env: any }
) {
  try {
    const { env } = context;

    if (!env?.DB) {
      return Response.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const { results } = await env.DB
      .prepare(
        `SELECT id, title, user_id, created_at
         FROM boards
         ORDER BY created_at DESC`
      )
      .all();

    return Response.json(results, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/boards
 * เพิ่ม board ใหม่
 * body: { title: string, user_id?: string }
 */
export async function POST(
  request: Request,
  context: { env: any }
) {
  try {
    const { env } = context;

    if (!env?.DB) {
      return Response.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();

    if (!body?.title || body.title.trim() === "") {
      return Response.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();
    const title = body.title.trim();
    const userId = body.user_id ?? null;

    await env.DB.prepare(
      `INSERT INTO boards (id, title, user_id)
       VALUES (?, ?, ?)`
    )
      .bind(id, title, userId)
      .run();

    return Response.json(
      {
        success: true,
        id,
        title,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/boards?id=xxx
 * ลบ board ตาม id
 */
export async function DELETE(
  request: Request,
  context: { env: any }
) {
  try {
    const { env } = context;

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return Response.json(
        { error: "Board id is required" },
        { status: 400 }
      );
    }

    await env.DB.prepare(
      `DELETE FROM boards WHERE id = ?`
    )
      .bind(id)
      .run();

    return Response.json(
      { success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}