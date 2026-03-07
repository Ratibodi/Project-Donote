"use client"

import React, { useState } from 'react'

export default function Signup(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = () => {

        let newErrors = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        if (!username.trim()) {
            newErrors.username = "กรุณากรอกชื่อผู้ใช้"
        }

        if (!email.includes("@") || email.includes(" ")) {
            newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง"
        }

        if (password.length < 8) {
            newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัว"
        }

        if (password.includes(" ")) {
            newErrors.password = "รหัสผ่านห้ามมีช่องว่าง"
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน"
        }

        setErrors(newErrors)

        if (!newErrors.username && !newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
        alert("สมัครสมาชิกสำเร็จ")
        }
    }

    return(
        <div className="bg-[#bae5f4] min-h-screen flex items-center justify-center">
            <div className='flex flex-col items-center justify-center w-[750px] h-[600px] bg-white border rounded-2xl'>
                <img src="/icon/logo.png" className='w-[150px] h-[150px]'/>
                    <div className='group flex flex-col'>
                        <span className='text-[13px] font-bold'>ชื่อผู้ใช้</span>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-[500px] h-[48px] px-5 rounded-full border border-gray-400 outline-none"
                        />
                        {errors.username && (
                            <span className="text-[#CC0000] text-[11px] mt-1 ml-3">
                            {errors.username}
                            </span>
                        )}
                    </div>
                    <div className='group flex flex-col mt-2'>
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
                    <div className='group flex flex-col mt-2'>
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
                    <div className='group flex flex-col mt-2'>
                        <span className='text-[13px] font-bold'>ยืนยันรหัสผ่าน</span>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-[500px] h-[48px] px-5 rounded-full border border-gray-400 outline-none"
                        />
                        {errors.confirmPassword && (
                            <span className="text-[#CC0000] text-[11px] mt-1 ml-3">
                            {errors.confirmPassword}
                            </span>
                        )}
                    </div>

                    <button onClick={handleSubmit} className='w-[200px] h-[40px] bg-[#131376] rounded-2xl text-white text-[14px] font-bold mt-[20px]'>สมัครสมาชิก</button>
            </div>
        </div>      
    )
}