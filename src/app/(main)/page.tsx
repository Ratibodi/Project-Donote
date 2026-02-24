"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Board = {
  id: string;
  name: string;
  tasks: string[];
};

export default function Page() {
  const router = useRouter();
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/boards");
      const data = await res.json();
      setBoards(data);
    };

    load();
  }, []);

  const createBoard = async () => {
    const res = await fetch("/api/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `Project ${boards.length + 1}`,
      }),
    });

    const newBoard = await res.json();

    setBoards([...boards, newBoard]);

    router.push(`/board/${newBoard.id}`);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="flex gap-6 flex-wrap">

        {/* ปุ่มสร้างบอร์ด */}
        <div
          onClick={createBoard}
          className="w-[230px] h-[230px] bg-white rounded-2xl 
          flex items-center justify-center cursor-pointer 
          hover:bg-gray-200"
        >
          + Create Board
        </div>

        {/* แสดงบอร์ด */}
        {boards.map((board) => (
          <div
            key={board.id}
            onClick={() => router.push(`/board/${board.id}`)}
            className="w-[230px] h-[230px] bg-white rounded-2xl 
            flex items-center justify-center cursor-pointer 
            hover:shadow-lg"
          >
            {board.name}
          </div>
        ))}
      </div>
    </div>
  );
}