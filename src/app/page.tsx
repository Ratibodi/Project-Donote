import Image from "next/image";

export default function Main() {
  return (
    <div className="h-screen bg-white">

        <main className="flex-1 p-10">
          <div className="w-[320px] h-[140px] bg-gray-200 rounded-xl flex items-center justify-center">
            <button className="bg-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-400 transition">
              ➕ สร้างรายการงาน
            </button>
          </div>
        </main>
      </div>
  );
}
