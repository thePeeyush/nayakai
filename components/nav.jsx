"use client"

import { GoHome, GoHomeFill } from 'react-icons/go';
import { RiContactsFill, RiContactsLine } from 'react-icons/ri';
import { BsFillChatLeftTextFill, BsChatLeftText, BsTelephoneFill, BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();
  return (
    <nav className={` bg-opacity-40 bg-white backdrop-blur-lg fixed lg:border-r lg:mt-16 w-full lg:w-fit lg:h-screen lg:py-6 bottom-0 pb-2 pt-3 lg:relative z-10 ${pathname === "/chat" && "hidden lg:block"}`}>
        <ul className='flex flex-row justify-cente lg:px-4  lg:flex-col lg:gap-4 '>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/"   && "activelink"}`}><Link href="/"         className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl'>{pathname === "/" ? <GoHomeFill/> : <GoHome/>}<p className={`text-xs lg:text-[16px] ${pathname === "/chat" && "hidden"}`}>Home</p></Link></li>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/chat"     && "activelink"}`}><Link href="/chat"     className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl'>{pathname === "/chat" ? <BsFillChatLeftTextFill/> : <BsChatLeftText/>}<p className={`text-xs lg:text-[16px] ${pathname === "/chat" && "hidden"}`}>Chat</p></Link></li>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/lawyers"  && "activelink"}`}><Link href="/lawyers"  className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl'>{pathname === "/lawyers" ? <RiContactsFill/> : <RiContactsLine/>}<p className={`text-xs lg:text-[16px] ${pathname === "/chat" && "hidden"}`}>Lawyers</p></Link></li>
          <li className={` w-1/4 lg:w-auto text-center text-gray-900 ${pathname === "/contacts" && "activelink"}`}><Link href="/contacts" className='flex flex-col lg:px-8 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl'>{pathname === "/contacts" ? <BsTelephoneFill/> : <BsTelephone/>}<p className={`text-xs lg:text-[16px] ${pathname === "/chat" && "hidden"}`}>Contacts</p></Link></li>
        </ul>
      </nav>
  )
}
