"use client"

import { GoHome, GoHomeFill } from 'react-icons/go';
import { RiContactsFill, RiContactsLine } from 'react-icons/ri';
import { BsFillChatLeftTextFill, BsChatLeftText, BsTelephoneFill, BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PostBtn from './PostBtn';
import { IoCreateOutline } from 'react-icons/io5';
import { toggleCreatePostModal } from './ModalForPost';
import { HiOutlineSparkles, HiSparkles } from "react-icons/hi2";
import { toggleAiModal } from './ModalForAi';


export default function Nav({children}) {
    const pathname = usePathname();
  return (
    <nav className={` fixed border border-base-200 h-fit w-full min-w-fit lg:max-w-[222px] lg:h-screen lg:py-6 bottom-0 pb-2 pt-3 lg:relative z-10 ${pathname === "/chat" && "hidden lg:block"} ${pathname === "/auth"     && "hidden"} bg-base-100`}>
        <h1 className='font-bold text-nowrap text-2xl px-8 pt-2 pb-10 hidden lg:block '>NAYAK <span className='font-thin'>AI</span></h1>
        <ul className='flex flex-row lg:px-4  lg:flex-col lg:gap-5 w-full h-full cursor-pointer lg:menu'>
          <li className={` w-1/4 lg:w-auto ease-in-out rounded-full  text-center ${pathname === "/" &&         "font-bold"}`}><Link href="/"         className='flex flex-col lg:px-4 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl lg:text-2xl'>{pathname === "/" ? <GoHomeFill/> : <GoHome/>}<p className={`text-xs font-light lg:font-normal  text-[8px] lg:text-[16px]`}>Home</p></Link></li>
          <li className={` w-1/4 lg:w-auto ease-in-out rounded-full  text-center ${pathname === "/lawyers"  && "font-bold"}`}><Link href="/lawyers"  className='flex flex-col lg:px-4 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl lg:text-2xl'>{pathname === "/lawyers" ? <RiContactsFill/> : <RiContactsLine/>}<p className={`text-xs text-[8px] lg:text-[16px] font-light lg:font-normal`}>Lawyers</p></Link></li>
          <li className={` w-1/4 lg:w-auto ease-in-out rounded-full  text-center ${pathname === "/chat"     && "font-bold"}`} onClick={() => toggleAiModal()}><div className='flex flex-col lg:px-4 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl lg:text-2xl '>{<HiSparkles className='text-blue-500'/>}<p className={`text-xs text-[8px] lg:text-[16px] font-light lg:font-normal bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500`}>Ask AI</p></div></li>
          <li className={` w-1/4 lg:w-auto ease-in-out rounded-full  text-center ${pathname === "/contacts" && "font-bold"}`}><Link href="/contacts" className='flex flex-col lg:px-4 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl lg:text-2xl'>{pathname === "/contacts" ? <BsTelephoneFill/> : <BsTelephone/>}<p className={`text-xs text-[8px] lg:text-[16px] font-light lg:font-normal`}>Contacts</p></Link></li>
          <li className={` w-1/4 lg:w-auto ease-in-out rounded-full  text-center ${pathname === "/chat"     && "font-bold"}`}><Link href="/chat"     className='flex flex-col lg:px-4 lg:py-2 lg:flex-row justify-center lg:justify-start lg:gap-4 gap-1 items-center text-xl lg:text-2xl'>{pathname === "/chat" ? <BsFillChatLeftTextFill/> : <BsChatLeftText/>}<p className={`text-xs text-[8px] lg:text-[16px] font-light lg:font-normal`}>Chat</p></Link></li>
          <div className={` w-0 lg:w-auto grow`}> <div className="hidden lg:flex flex-col justify-end items-start gap-4 h-[80%] ">{children}</div> </div>
        </ul>
      </nav>
  )
}
