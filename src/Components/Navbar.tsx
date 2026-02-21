"use client";

import Link from "next/link";
import { JSX, useState } from "react";

type User = {
  isLogin: boolean;
  avatar: string;
};

export default function Navbar(): JSX.Element {
  const [user] = useState<User>({
    isLogin: false,
    avatar: "/user/user01.jpg",
  });

  return (
    <header className="h-[80px] bg-white flex justify-between items-center px-10">
      
      <div>
        <img src="/icon/logo2.png" alt="Logo" className="h-[60px]" />
      </div>

      <div className="flex items-center gap-4">
        
        {!user?.isLogin && (
          <>
            <Link
              href="/user/login"
              className="px-4 py-2 rounded-xl border border-[#131376] text-[#131376]"
            >
              เข้าสู่ระบบ
            </Link>

            <Link
              href="/user/register"
              className="px-4 py-2 rounded-xl bg-[#131376] text-white"
            >
              ลงทะเบียน
            </Link>
          </>
        )}

        {user?.isLogin && user?.avatar && (
          <img
            src={user.avatar}
            className="h-[40px] w-[40px] rounded-full"
            alt="avatar"
          />
        )}
      </div>

    </header>
  );
}