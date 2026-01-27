"use client";

import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    
      <html lang="th">
      <body className="min-h-screen bg-white">
      {/* Topbar */}
      <header className="h-[80px] bg-sky-200 flex justify-between items-center px-15 ">
        <div className="flex items-center gap-3">
    <img src="/icon/DonoteLogo.svg" alt="Logo" className="h-10 w-auto" />
    <span className="font-bold text-lg">MY APP</span>
    </div>




        <div className="flex items-center gap-6">
          <span className="text-xl cursor-pointer">🔔</span>

          <button className="bg-indigo-900 text-white px-4 py-2 rounded-full text-sm">
            Log in
          </button>

          <span className="text-xl cursor-pointer">👤</span>
        </div>
      </header>

      {/* Body */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside  className={`
              ${collapsed ? "w-[100px]" : "w-[300px]"}
              border-r border-gray-200 p-5 mb-5 relative
              transition-all duration-300
            `}
          >
          <nav className="flex flex-col gap-8">
            <button className="flex items-center gap-3 py-4 px-4 rounded-full hover:bg-sky-200 transition">
              <img src="/icon/MYPROJECT.svg" className="w-5 h-5 shrink-0" />
              <span
                className={`
                  transition-all duration-300
                  ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
                `}>
                MY PROJECT
              </span>
            </button>

            <button className="flex items-center gap-3 py-4 px-4 rounded-full hover:bg-sky-200 transition">
              <img src="/icon/CALENDAR.svg" className="w-5 h-5 shrink-0" />
              <span
                className={`
                  transition-all duration-300
                  ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
                `}>
                CALENDAR
              </span>
            </button>

            <button className="flex items-center gap-3 py-4 px-4 rounded-full hover:bg-sky-200 transition">
              <img src="/icon/MYWORK.svg" className="w-5 h-5 shrink-0" />
              <span
                className={`
                  transition-all duration-300
                  ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
                `}>
                MY WORK
              </span>
            </button>
          </nav>

          {/* Collapse button */}
          <button
              onClick={() => setCollapsed(!collapsed)}
              className="absolute bottom-5 left-5 w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              {collapsed ? "›" : "‹"}
            </button>

        </aside>
          {/* 🔥 ตรงนี้สำคัญ */}
          <main className="flex-1 p-10 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}