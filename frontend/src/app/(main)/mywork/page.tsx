"use client";

import { Star, Trash2, CalendarDays } from "lucide-react";

export default function MyWorkPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Dropdown ด้านขวาบน */}
      <div className="flex justify-end mb-6">
        <select className="bg-gray-200 px-4 py-2 rounded-md">
          <option>สำคัญ</option>
          <option>ทั้งหมด</option>
          <option>ใกล้ครบกำหนด</option>
        </select>
      </div>

      {/* Card งาน */}
      <div className="bg-gray-300 rounded-2xl p-6 w-[420px] shadow-md relative">

        {/* ไอคอนขวาบน */}
        <div className="absolute top-4 right-4 flex gap-3">
          <Star className="text-yellow-400 cursor-pointer" />
          <Trash2 className="text-black cursor-pointer" />
        </div>

        {/* หัวข้อโปรเจค */}
        <h2 className="text-xl font-semibold mb-4">
          ชื่อ : โปรเจ็คของฉัน
        </h2>

        {/* กล่องงานย่อย */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-pink-400 shadow-sm">
          <p className="font-medium">UX/UI Desing</p>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <CalendarDays size={16} />
            <span>2025-11-11</span>
          </div>

          {/* Progress */}
          <div className="mt-4">
            <p className="text-sm mb-1">การดำเนินงาน</p>

            <div className="flex items-center gap-3">
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="bg-gray-400 h-3 w-[0%]" />
              </div>
              <span className="text-sm font-medium">0%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}