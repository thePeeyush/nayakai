"use client"

import React from 'react'
import { BsChevronLeft } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useOurStore } from '@/state-store/Store';

const NavBar = ({children}) => {
  const pathname = usePathname();
  return (
     <div className='flex flex-row gap-3 items-center'>
        <div className={`cursor-pointer text-2xl text-gray-950 md:hidden ${pathname !== "/chat" && 'hidden' }`}>
           <Link href="/"><BsChevronLeft/></Link>
        </div>
        {
         children
        }
     </div>
  )
}

export default NavBar