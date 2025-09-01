"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
    const [Online, setOnline] = useState(true)
    return (
        <div className='w-full h-15 rounded-tl-2xl rounded-tr-2xl bg-[#212529]'>
            <div className='flex items-center justify-start h-full ml-3'>
                <Image src="/robot.svg" alt="vapi" width={50} height={50} />
                <div className='ml-2 '>
                    <h1 className='text-white font-semibold '>Main Title</h1>
                    <p
                        className={`font-light ${Online ? "text-green-400" : "text-white"
                            }`}
                    >
                        {Online ? "● Online" : "● Offline"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar