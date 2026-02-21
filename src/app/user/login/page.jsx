"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"

export default function login(){

    return(
        <div className="bg-[#bae5f4] min-h-screen flex items-center justify-center">
            <div className='flex flex-col items-center justify-center w-[750px] h-[550px] bg-white border rounded-2xl'>
                <img src="/icon/logo.png" className='w-[150px] h-[150px]'/>
                    <div className='group flex flex-col'>
                        <span className='text-[13px] font-bold'>อีเมล</span>
                        <input
                        
                            type="email"
                            placeholder="อีเมล"
                            className="
                                w-[500px]
                                h-[48px]
                                px-5
                                rounded-full
                                border
                                border-gray-400
                                outline-none
                                text-sm
                                placeholder-gray-500
                                focus:ring-indigo-200
                            "
                        />
                    </div>
                    <div className='group flex flex-col mt-8'>
                        <span className='text-[13px] font-bold'>รหัสผ่าน</span>
                        <input
                            type="password"
                            placeholder="รหัสผ่าน"
                            className="
                                w-[500px]
                                h-[48px]
                                px-5
                                rounded-full
                                border
                                border-gray-400
                                outline-none
                                text-sm
                                placeholder-gray-500
                                focus:ring-indigo-200
                            "
                        />
                    </div>
                
                    <span className='text-[13px] font-bold text-[#131376] underline decoration-[#131376] self-end px-[150px] mt-2 cursor-pointer'>ลืมรหัสผ่าน</span>
                    <button className='w-[200px] h-[40px] bg-[#131376] rounded-2xl text-white text-[14px] font-bold mt-[70px]'>เข้าสู่ระบบ</button>
                    <span className='text-[12px] font-bold text-black mt-2'>ยังไม่มีบัญชี? <span className='text-[#131376] underline decoration-[#131376] mt-2 cursor-pointer'>สมัครสมาชิก</span></span>
            </div>
        </div>
    )
}               