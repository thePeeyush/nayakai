'use client'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useOurStore } from '../store/states';
import { useEffect } from 'react';

const Theme = () => {
    const {changeTheme, theme} =  useOurStore((state) => state);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className='flex px-0 pt-2 w-full gap-2 hover:bg-transparent'>
            <button className='flex flex-col justify-center items-center gap-2 w-full h-full p-2 bg-white text-black hover:bg-gray-200 rounded-lg border-black border' onClick={() => {changeTheme('light')}}>
                <CiLight className='text-3xl' />
                <p className='text-[10px]'>Light</p>
                </button>
            <button className='flex flex-col justify-center items-center gap-2 w-full h-full p-2 bg-black text-white hover:bg-slate-900 rounded-md border-white border' onClick={() => {changeTheme('black')}}>
                 <MdDarkMode className='text-3xl'/> 
                 <p className='text-[10px]'>Dark</p>
                 </button>
        </div>
    )
}

export default Theme