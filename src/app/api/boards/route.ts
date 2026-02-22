
import { boards } from "../backend/store";

export async function GET() {
  return Response.json(boards);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newBoard = {
    id: crypto.randomUUID(),
    name: body.name,
    tasks: [],
  };

  boards.push(newBoard);

  return Response.json(newBoard);
}