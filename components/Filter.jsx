import { useOurStore } from '@/store/states';
import React from 'react'
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
    const setSort = useOurStore((state)=>state.setSort);
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-transparent border-none shadow-none"> <VscSettings className="text-2xl cursor-pointer hover:text-gray-700" /></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li onClick={e=>setSort(e.target.innerText)}> <a>Alphanumeric</a> </li>
        <li onClick={e=>setSort(e.target.innerText)}> <a>Rating</a> </li>
        <li onClick={e=>setSort(e.target.innerText)}> <a>AgeAscending</a> </li>
        <li onClick={e=>setSort(e.target.innerText)}> <a>AgeDescending</a> </li>
      </ul>
    </div>
  )
}

export default Filter