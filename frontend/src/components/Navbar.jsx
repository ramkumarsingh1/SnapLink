import React, { useState, useEffect } from 'react'
import { HiOutlineBell, HiOutlineInformationCircle, HiOutlineMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";
import Drawer from './Drawer';
import Button from './Button';

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
                    {/* <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                        <HiOutlineBell className="text-2xl text-gray-700" />
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                    </button> */}
                    <Button
                        className="relative p-2 rounded-full hover:bg-gray-100 transition"
                    >
                    <HiOutlineBell className="text-2xl text-gray-700" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                    </Button>
                    {/* <button className='hidden md:block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition'>
                        Login
                    </button> */}
                    <Button 
                        className='hidden md:block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition'
                        children="Login"
                    />
                    {/* <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition md:hidden">

                        {menuOpen ? (<HiOutlineX className='text-3xl text-gray-700' />) : (<HiOutlineMenu className="text-3xl text-gray-700" />)}
                    </button> */}
                    <Button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition md:hidden"
                     children={menuOpen ? (<HiOutlineX className='text-3xl text-gray-700' />) : (<HiOutlineMenu className="text-3xl text-gray-700" />)}
                    />
                </div>
            </div>

            {/* Mobile Menu yahan aayega */}
                <Drawer menuOpen={menuOpen} 
                setMenuOpen={setMenuOpen}
                menuItems={menuItems}
                />
        </>
    )
}
