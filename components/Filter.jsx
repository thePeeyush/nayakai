import { useOurStore } from '@/store/states';
import Link from 'next/link';
import React from 'react'
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
    const setSort = useOurStore((state)=>state.setSort);
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-transparent border-none shadow-none"> <VscSettings className="text-2xl cursor-pointer hover:text-gray-700" /></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li onClick={e=>setSort(e.target.innerText)}> <Link>Alphanumeric</Link> </li>
        <li onClick={e=>setSort(e.target.innerText)}> <Link>Rating</Link> </li>
        <li onClick={e=>setSort(e.target.innerText)}> <Link>AgeAscending</Link> </li>
        <li onClick={e=>setSort(e.target.innerText)}> <Link>AgeDescending</Link> </li>
      </ul>
    </div>
  )
}

export default Filter