"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clipboard } from "lucide-react";
import WorkCard from "../../Components/workCard";


export default function Page() {
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
      <div className="flex h-screen">
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