"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clipboard } from "lucide-react";

export default function HomePage() {
  const [user] = useState({
    isLogin: true,
    avatar: "/user/user01.jpg",
  });

  const menu = [
    { label: "MY PROJECT", icon: BookOpen },
    { label: "CALENDAR", icon: Calendar },
    { label: "MY WORK", icon: Clipboard },
  ];

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <header className="h-[80px] bg-white flex justify-between items-center px-15">
        <div className="flex items-center gap-3">
          <img src="/icon/logo2.png" alt="Logo" className="h-[225px] w-[225px]" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/user/login" className="inline-flex items-center">
            <button className="flex items-center justify-center bg-[#131376] text-white text-[15px] h-[40px] w-[120px] rounded-2xl gap-2 cursor-pointer hover:bg-gray-500">
              Log in
            </button>
          </Link>

          {user.isLogin && user.avatar && (
            <img
              src={user.avatar}
              className="h-[40px] w-[40px] rounded-full"
              alt="avatar"
            />
          )}
        </div>
      </header>

      <div className="flex h-screen">
        <aside className="group h-[530px] bg-white rounded-2xl w-[75px] hover:w-64 ml-3 mt-3 transition-all duration-300 overflow-hidden">
          <nav className="mt-6 flex flex-col gap-2">
            {menu.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group/item relative flex items-center gap-4 px-4 py-3 mx-2 rounded-r-lg cursor-pointer hover:bg-[#c5e8f5] transition"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[48px] w-[8px] bg-[#131376] opacity-0 group-hover/item:opacity-100 transition" />

                  <Icon className="w-6 h-6 text-black shrink-0" />

                  <span className="whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-5 overflow-auto">
          <div className="w-[230px] h-[230px] bg-white rounded-2xl flex items-center justify-center hover:bg-gray-200">
            <button className="flex items-center justify-center w-[200px] h-[200px] border-2 border-dashed border-gray-500 rounded-2xl text-sm transition">
              <div className="flex items-center justify-center mb-5">
                <img src="/icon/add.png" className="w-[60px] h-[60px]" />
              </div>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}