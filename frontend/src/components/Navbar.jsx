import React, { useState, useEffect } from 'react'
import { HiOutlineBell, HiOutlineMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=>{
        if(menuOpen){
            document.body.style.overflow="hidden";
        }else{
            document.body.style.overflow="auto";
        }
    },[menuOpen])

    return (
        <>
            <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm">
                <img src="snaplinklogo.png" alt="logo"
                    className='h-11 w-auto cursor-pointer transition-transform duration-200 hover:scale-105' />

                <div className='flex items-center gap-5'>
                    <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                        <HiOutlineBell className="text-2xl text-gray-700" />

                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                    </button>
                    <button className='hidden md:block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition'>
                        Login
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition md:hidden">

                        {menuOpen ? (<HiOutlineX className='text-3xl text-gray-700' />) : (<HiOutlineMenu className="text-3xl text-gray-700" />)}
                    </button>
                </div>
            </div>

            {/* Mobile Menu yahan aayega */}
                <div className={`fixed inset-0 md:hidden ${menuOpen ? 'bg-black/40':'pointer-events-none'}`}
                onClick={()=> setMenuOpen(false)}
                >
                <div 
                onClick={()=>setMenuOpen(false)}
                className='fixed inset-0 bg-black/40 md:hidden'>
                    <div 
                    
                    onClick={(e)=> e.stopPropagation()}
                    className={`ml-auto h-full w-72 bg-white shadow-xl transition-transform duration-300 ${menuOpen ? 'translate-x-0': 'translate-x-full'}`}>
                    {/* <div className='md:hidden bg-blue-500 border-t border-gray-200 shadow-md'>
                        <button className='block w-full text-left px-4 py-3 hover:bg-gray-100'>

                            Login
                        </button>
                    </div> */}
                    <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                    <h2 className="text-lg font-semibold">SnapLink</h2>
                    <button
                    onClick={()=> setMenuOpen(false)}
                    className='p-2 rounded-lg hover:bg-gray-100 transition'
                    >
                        <HiOutlineX className='text-3xl text-gray-700' />
                    </button>
                    </div>
                    <div className='p-2'>
                        <button className='w-full flex items-center rounded-lg px-4 py-3 bg-blue-300 hover:bg-blue-400 transition '>
                            <HiOutlineUser className='text-xl text-gray-700'/>
                            <span className='ml-3 font-medium text-gray-700'>Login</span>
                            
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
