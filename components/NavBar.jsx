"use client"

import React from 'react'
import { BsChevronLeft } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { useOurStore } from "@/store/states";



const NavBar = ({children}) => {
  const pathname = usePathname();
  const [clickCount, setClickCount] = useState(0)
  const setChatContactDisplay = useOurStore(s=>s.setChatContactDisplay)

  useEffect(()=>{
   if(clickCount === 2){
    setClickCount(0)
    window.history.back()
   }
   setChatContactDisplay(true)
  },[clickCount])
  return (
     <div className='flex flex-row gap-3 items-center'>
        <div className={`cursor-pointer text-2xl  lg:hidden ${pathname !== "/chat" && 'hidden' }`}>
           <BsChevronLeft onClick={()=>setClickCount((prev)=>prev+1)}/>
        </div>
        {
         children
        }
     </div>
  )
}

export default NavBar