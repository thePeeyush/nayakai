"use client"

import React from 'react'
import { BsChevronLeft } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AccountBar from './AccountBar';

const NavBar = () => {
  const pathname = usePathname();
  return (
     <div className='flex flex-row gap-3 items-center'>
        <div className='cursor-pointer text-2xl text-gray-950'>
           {pathname === "/chat" ? (<Link href="/"><BsChevronLeft/></Link>): (<CgMenuLeft/>) }
        </div>
        <AccountBar text={"Peeyush"}/>
     </div>
  )
}

export default NavBar