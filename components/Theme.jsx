'use client'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useOurStore } from '../store/states';
import { useEffect } from 'react';

const Theme = () => {
    const { changeTheme } = useOurStore((state) => state);
    useEffect(() => {
        setInitialTheme()
    }, [])

    const setInitialTheme = () => {
        const userTheme = localStorage.getItem('theme')
        if (userTheme) {
            changeTheme(userTheme);
        } else {
            changeTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'light')
        }
    }

    const handleThemeChange = (theme) => {
        changeTheme(theme)
        localStorage.setItem('theme', theme)
    }

    return (
        <div className='flex px-0 pt-2 w-full gap-2 hover:bg-transparent'>
            <button className='flex flex-col justify-center items-center gap-2 w-full h-full p-2 bg-white text-black hover:bg-gray-200 rounded-lg border-black border' onClick={() => { handleThemeChange('light') }}>
                <CiLight className='text-3xl' />
                <p className='text-[10px]'>Light</p>
            </button>
            <button className='flex flex-col justify-center items-center gap-2 w-full h-full p-2 bg-black text-white hover:bg-stone-900 rounded-md border-gray-800 border' onClick={() => { handleThemeChange('black') }}>
                <MdDarkMode className='text-3xl' />
                <p className='text-[10px]'>Dark</p>
            </button>
        </div>
    )
}

export default Theme