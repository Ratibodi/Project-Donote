"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const user = {
    isLogin: true,
    avatar: "/user/user01.jpg",
  };

  return (
    <div className="h-screen bg-[#f5f7fa] overflow-hidden">

      {/* ================= Topbar ================= */}
      <header className="h-[80px] bg-white flex justify-between items-center px-15">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/icon/logo2.png" alt="Logo" className="h-[225] w-[225]"/>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center bg-[#131376] h-[40] w-[120] rounded-2xl gap-2">
            <div className="text-[15] text-white">Log In</div>
          </button>

          <Link href="/user/login" className="inline-flex items-center">
            {user.isLogin ? (
              <img src="/user/account.png" className="h-[40px] w-[40px]"/>
            ) : (
              <span className="bg-indigo-900 text-white px-4 py-2 rounded-full text-sm">
                Log in
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* ================= Body ================= */}
      <div className="flex h-screen">

        {/* ---------- Sidebar ---------- */}
        <aside
          className={`
            h-[520] w-[300]
            bg-white rounded-[20px]
            border-r border-gray-200 p-5 relative
            transition-all duration-300 ml-5 mt-3
          `}
        >
        </aside>

        {/* ---------- Main Content ---------- */}
        <main className="flex-1 p-5 overflow-auto">
          <div className="w-[230] h-[230] bg-white rounded-2xl flex items-center justify-center">
            <button className="items-center justify-center w-[200] h-[200] border-2 border-dashed border-gray-500 rounded-2xl text-sm hover:bg-gray-400 transition">
              <div className="flex items-center justify-center mb-5">
                <img src="/icon/add.png " className="w-[60] h-[60]"/>
              </div>
              <div className="text-xl text-gray-400">CREATE CARD</div>
            </button>
          </div>
        </main>

      </div>
    </div>
  );
}
