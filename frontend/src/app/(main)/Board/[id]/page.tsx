import { notFound } from "next/navigation";

type Board = {
  id: string;
  name: string;
  tasks: string[];
};

async function getBoard(id: string) {
  const res = await fetch("http://localhost:3000/api/boards", {
    cache: "no-store",
  });

  const boards: Board[] = await res.json();
  return boards.find((b) => b.id === id);
}

export default async function BoardPage({
  params,
}: {
  params: { id: string };
}) {
  const board = await getBoard(params.id);

  if (!board) return notFound();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        {board.name}
      </h1>

      <div className="bg-gray-100 p-6 rounded-xl">
        ยังไม่มี Task
      </div>
    </div>
  );
}