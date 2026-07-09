import React from 'react'
import { HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
export default function Navbar() {
    return (
        // <nav className="bg-white shadow">
            <div className='bg-white shadow max-w-5xl mx-auto h-16 flex items-center justify-between'>
                <img src="snaplinklogo.png" alt="logo"
                    className='h-35 w-auto cursor-pointer transition-transform duration-200 hover:scale-105' />

                <div className='flex items-center gap-5'>
                    <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                        <HiOutlineBell className="text-2xl text-gray-700" />

                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                    </button>

                    <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                        <HiOutlineMenu className="text-3xl text-gray-700" />
                    </button>
                </div>
            </div>
        // </nav>
    )
}
