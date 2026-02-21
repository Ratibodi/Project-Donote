"use client";

import { useRouter } from "next/navigation";
import { LayoutDashboard, Calendar, Briefcase } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  const menu = [
    {
      label: "MY PROJECT",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      label: "CALENDAR",
      icon: Calendar,
      path: "/calendar",
    },
    {
      label: "MY WORK",
      icon: Briefcase,
      path: "/MyWork",
    },
  ];

  return (
    <div className="flex h-screen">
      <aside className="group h-[530px] bg-white rounded-2xl w-[75px] hover:w-64 ml-3 mt-3 transition-all duration-300 overflow-hidden shadow-md">
        <nav className="mt-6 flex flex-col gap-2">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => router.push(item.path)}
                className="group/item relative flex items-center gap-4 px-4 py-3 mx-2 rounded-r-lg cursor-pointer hover:bg-[#c5e8f5] transition"
              >
                {/* Active bar */}
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
    </div>
  );
}