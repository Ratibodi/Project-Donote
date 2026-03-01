"use client"

import React, { useState } from 'react'

export default function Forgetpassword(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const handleSubmit = () => {
    
        let newErrors = {
            email: "",
            password: "",
            confirmPassword: ""
        }
    
        if (!email.includes("@") || email.includes(" ")) {
            newErrors.email = "อีเมลไม่ถูกต้อง"
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

        if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
        alert("เปลี่ยนรหัสผ่านสำเร็จ")
        }
    }

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

                    <div className='group flex flex-col mt-3'>
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

                    <div className='group flex flex-col mt-3'>
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

                    
                    <button onClick={handleSubmit} 
                    className='
                    w-[200px] 
                    h-[40px] 
                    bg-[#131376] 
                    rounded-2xl 
                    text-white 
                    text-[14px] 
                    font-bold 
                    mt-[70px]'>
                        เข้าสู่ระบบ
                    </button>
            </div>
        </div>
    )
}