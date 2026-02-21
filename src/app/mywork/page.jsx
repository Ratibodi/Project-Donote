export default function MyWorkPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* Dropdown มุมขวา */}
      <div className="flex justify-end mb-6">
        <select className="bg-gray-200 px-4 py-2 rounded-md">
          <option>สำคัญ</option>
          <option>ทั้งหมด</option>
          <option>ใกล้ครบกำหนด</option>
        </select>
      </div>

      {/* Card โปรเจค */}
      <div className="bg-gray-300 rounded-2xl p-6 w-[420px] shadow-md relative">

        {/* ปุ่มมุมขวา */}
        <div className="absolute top-4 right-4 flex gap-3 text-lg">
          <span>⭐</span>
          <span>🗑️</span>
        </div>

        {/* ชื่อโปรเจค */}
        <h2 className="text-xl font-semibold mb-4">
          ชื่อ : โปรเจ็คของฉัน
        </h2>

        {/* งานย่อย */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-pink-400 shadow-sm">
          <p className="font-medium">UX/UI Design</p>

          <div className="text-sm text-gray-600 mt-2">
            📅 2025-11-11
          </div>

          {/* Progress */}
          <div className="mt-4">
            <p className="text-sm mb-1">การดำเนินงาน</p>

            <div className="flex items-center gap-3">
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="bg-gray-400 h-3 w-0"></div>
              </div>
              <span className="text-sm font-medium">0%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}