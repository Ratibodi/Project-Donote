"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"

export default function login(){

    return(
        <div className="bg-[#bae5f4] min-h-screen flex items-center justify-center">
            <div className='flex flex-col items-center justify-center w-[750px] h-[550px] bg-white border rounded-2xl'>
                <img src="/icon/logo.png" className='w-[180px] h-[175px]'/>
                <div className='flex gap-3'>
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
                                focus:border-indigo-600
                                focus:ring-2
                                focus:ring-indigo-200
                            "
                        />

                        <span className='text-[13px] font-bold'>รหัสผ่าน</span>
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
                                focus:border-indigo-600
                                focus:ring-2
                                focus:ring-indigo-200
                            "
                        />

                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}               