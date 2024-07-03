'use client'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useOurStore } from '../store/states';

const Theme = () => {
    const changeTheme =  useOurStore((state) => state.changeTheme);
    return (
        <div className='flex hover:bg-transparent px-0'>
            <button className='btn' onClick={() => changeTheme('light')}>
                <CiLight/>
                <p>Light</p>
                </button>
            <button className='btn' onClick={() => changeTheme('black')}>
                 <MdDarkMode/> 
                 <p>Dark</p>
                 </button>
        </div>
    )
}

export default Theme