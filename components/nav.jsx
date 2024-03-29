"use client"

import { GoHomeFill } from 'react-icons/go';
import { RiContactsFill } from 'react-icons/ri';
import { BsFillChatLeftTextFill , BsTelephoneFill } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useOurStore } from '@/state-store/Store';
import { useEffect } from 'react';

export default function Nav() {
    const pathname = usePathname();
    const isToggle = useOurStore((state)=>state.navToggle);

  return (
    <nav className={` bg-opacity-50 backdrop-blur-lg fixed lg:border-r lg:mt-16 w-full lg:w-fit lg:h-screen lg:py-6 bottom-0 pb-2 pt-3 lg:relative z-10 ${pathname === "/chat" && "hidden lg:block"}`}>
        <ul className='flex flex-row justify-cente lg:px-4  lg:flex-col lg:gap-4 '>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/"         && "activelink"}`}><Link href="/"         className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-2xl'><GoHomeFill/><p className={`text-xs lg:text-lg ${isToggle && 'hidden'}`}>Home</p></Link></li>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/chat"     && "activelink"}`}><Link href="/chat"     className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-2xl'><BsFillChatLeftTextFill/><p className={`text-xs lg:text-lg ${isToggle && 'hidden'}`}>Chat</p></Link></li>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/lawyers"  && "activelink"}`}><Link href="/lawyers"  className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-2xl'><RiContactsFill/><p className={`text-xs lg:text-lg ${isToggle && 'hidden'}`}>Lawyers</p></Link></li>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/contacts" && "activelink"}`}><Link href="/contacts" className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-2xl'><BsTelephoneFill/><p className={`text-xs lg:text-lg ${isToggle && 'hidden'}`}>Contacts</p></Link></li>
        </ul>
      </nav>
  )
}
