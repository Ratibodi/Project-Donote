"use client"

import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    let newErrors = {
      email: "",
      password: "",
    };

    if (!email.includes("@") || email.includes(" ")) {
      newErrors.email = "อีเมลไม่ถูกต้อง";
    }

    if (password.length < 8) {
      newErrors.password = "รหัสผ่านต้องอย่างน้อย 8 ตัว";
    }

    if (password.includes(" ")) {
      newErrors.password = "รหัสผ่านห้ามมีช่องว่าง";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/");
      } else {
        alert(data.error || "เข้าสู่ระบบไม่สำเร็จ");
      }
    }
  };

    return(
        <div className="bg-[#bae5f4] min-h-screen flex items-center justify-center">
            <div className='flex flex-col items-center justify-center w-[750px] h-[550px] bg-white border rounded-2xl'>
                <img src="/icon/logo.png" className='w-[150px] h-[150px]'/>
                    <div className='group flex flex-col'>
                        <span className='text-[13px] font-bold'>อีเมล</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-[500px] h-[48px] px-5 rounded-full border border-gray-400 outline-none"
                        />
                        {errors.email && (
                            <span className="text-[#CC0000] text-[11px] mt-1 ml-2">
                            {errors.email}
                            </span>
                        )}
                    </div>
                    <div className='group flex flex-col mt-8'>
                        <span className='text-[13px] font-bold'>รหัสผ่าน</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-[500px] h-[48px] px-5 rounded-full border border-gray-400 outline-none"
                        />
                        {errors.password && (
                            <span className="text-[#CC0000] text-[11px] mt-1 ml-3">
                            {errors.password}
                            </span>
                        )}
                    </div>
                
                    <Link
                        href="/user/forgetpassword"
                        className="text-[13px] font-bold text-[#131376] underline decoration-[#131376] self-end px-[150px] mt-2 cursor-pointer"
                        >
                        ลืมรหัสผ่าน
                    </Link>
                    <button onClick={handleSubmit} className='w-[200px] h-[40px] bg-[#131376] rounded-2xl text-white text-[14px] font-bold mt-[70px]'>เข้าสู่ระบบ</button>
                    <span className='text-[12px] font-bold text-black mt-2'>ยังไม่มีบัญชี? 
                    <Link href="/user/signup"><span className='text-[#131376] underline decoration-[#131376] mt-2 cursor-pointer'>สมัครสมาชิก</span></Link>
                    </span>
            </div>
        </div>
    )
}               