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
  const [isOpen, setIsOpen] = useState(false);
  const [boardName, setBoardName] = useState("");

  // โหลดบอร์ด
  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/boards");
      const data = await res.json();
      setBoards(data);
    };
    load();
  }, []);

  const createBoard = async () => {
    if (!boardName.trim()) {
      alert("กรุณาใส่ชื่อบอร์ด");
      return;
    }

    const res = await fetch("/api/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: boardName }),
    });

    const newBoard = await res.json();

    setBoards([...boards, newBoard]);
    setBoardName("");
    setIsOpen(false);

    router.push(`/board/${newBoard.id}`);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="flex gap-6 flex-wrap">

        {/* ปุ่มสร้างบอร์ดแบบเดิม */}
        <div
          onClick={() => setIsOpen(true)}
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

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80">
            <h2 className="text-lg font-semibold mb-4">
              ตั้งชื่อบอร์ด
            </h2>

            <input
              type="text"
              placeholder="ชื่อบอร์ด..."
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") createBoard();
              }}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={createBoard}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}