import React from 'react'
import { HiOutlineBell, HiOutlineInformationCircle, HiOutlineMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";
import Button from './Button';
export default function Drawer({ menuOpen, setMenuOpen, menuItems }) {
    return (
        <>
            {
                menuOpen && (
                    <div onClick={() => setMenuOpen(false)}
                        className='fixed inset-0 bg-black/40 md:hidden z-50'>

                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={`ml-auto h-full w-72 bg-white shadow-xl flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                                <h2 className="text-lg font-semibold">SnapLink</h2>
                                {/* <button
                                    onClick={() => setMenuOpen(false)}
                                    className='p-2 rounded-lg hover:bg-gray-100 transition'
                                >
                                    <HiOutlineX className='text-3xl text-gray-700' />
                                </button> */}

                                <Button
                                    onClick={() => setMenuOpen(false)}
                                    className='p-2 rounded-lg hover:bg-gray-100 transition'>
                                    <HiOutlineX className='text-3xl text-gray-700' />
                                </Button>
                            </div>

                            <div className='p-2 flex-1'>
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    return (

                                        // <button
                                        //     key={item.id}
                                        //     className='w-full flex items-center rounded-lg px-4 py-3 bg-white hover:bg-gray-400 transition '>

                                        //     <Icon className='text-xl text-gray-700' />
                                        //     <span className='ml-3 font-medium text-gray-700'>{item.title}</span>
                                        // </button>
                                        <Button
                                        key={item.id}
                                        className="w-full flex items-center rounded-lg px-4 py-3 bg-white hover:bg-gray-400 transition "
                                        >
                                            <Icon className='text-xl text-gray-700' />
                                            <span className='ml-3 font-medium text-gray-700'>{item.title}</span>
                                        </Button>
                                    )
                                })}

                            </div>
                            <div className='border-t border-gray-200 p-4'>
                                <p className='text-center text-sm text-gray-500'>SnapLink v1.0</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
