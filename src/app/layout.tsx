"use client";

import "./globals.css";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <html lang="th">
      <body className="min-h-screen bg-white">
      {/* Topbar */}
      <header className="h-[80px] bg-sky-200 flex justify-end items-center px-15 ">
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
              ${collapsed ? "w-[80px]" : "w-[260px]"}
              border-r border-gray-200 p-5 relative
              transition-all duration-300
            `}
          >
          <nav className="flex flex-col gap-8">
            <button className="w-full mb-5  py-5 px-4 rounded-full text-left hover:bg-sky-200 transition">
              
              {!collapsed && <span> MY PROJECT</span>}
            </button>

            <button className="w-full mb-5  py-5 px-4 rounded-full text-left hover:bg-sky-200 transition">
              <img src="/icon/CALENDAR.svg" className="w-5 h-5 inline mr-2" /> 
              {!collapsed && <span>CALENDAR</span>}
            </button>

            <button className="w-full mb-5  py-5 px-4 rounded-full text-left hover:bg-sky-200 transition">
          
              {!collapsed && <span>MY WORK</span>}
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

