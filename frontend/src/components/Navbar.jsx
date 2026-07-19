import React, { useState, useEffect } from 'react'
import { HiOutlineBell, HiOutlineInformationCircle, HiOutlineMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";


const guestMenu = [
    {
        id: 1,
        title: "Login",
        icon: HiOutlineUser,
    },
];
const menuItems = guestMenu;
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=>{
        const handleKeyDown =(event) =>{
            console.log(event.key);
            if(event.key === "Escape" && menuOpen){
                setMenuOpen(false);
            }
        }
        window.addEventListener("keydown",handleKeyDown);
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
        };
    },[menuOpen])
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // agar kisi wajh se navbar component remove ho jaye to user scroll kar paye
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen])

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
            <div className={`fixed inset-0 md:hidden ${menuOpen ? 'bg-black/40' : 'pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            >
                <div
                    onClick={() => setMenuOpen(false)}
                    className='fixed inset-0 bg-black/40 md:hidden'>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`ml-auto h-full w-72 bg-white shadow-xl flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        {/* <div className='md:hidden bg-blue-500 border-t border-gray-200 shadow-md'>
                        <button className='block w-full text-left px-4 py-3 hover:bg-gray-100'>

                            Login
                        </button>
                    </div> */}
                        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                            <h2 className="text-lg font-semibold">SnapLink</h2>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className='p-2 rounded-lg hover:bg-gray-100 transition'
                            >
                                <HiOutlineX className='text-3xl text-gray-700' />
                            </button>
                        </div>
                        <div className='p-2 flex-1'>
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (

                                    <button
                                        key={item.id}
                                        className='w-full flex items-center rounded-lg px-4 py-3 bg-white hover:bg-gray-400 transition '>

                                        <Icon className='text-xl text-gray-700' />
                                        <span className='ml-3 font-medium text-gray-700'>{item.title}</span>

                                    </button>
                                )
                            })}

                        </div>
                        <div className='border-t border-gray-200 p-4'>
                            <p className='text-center text-sm text-gray-500'>SnapLink v1.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
