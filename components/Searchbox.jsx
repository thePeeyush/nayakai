import React from 'react'
import { BiSearch } from 'react-icons/bi';

const Searchbox = ({text}) => {
  return (
    <div className='flex flex-row w-full items-center justify-end max-w-sm rounded-full border py-2 px-3 my-4'>
    <input type="text" placeholder={`Search ${text} . . .`} className=' text-left w-full pl-3 outline-none' />
    <BiSearch className='text-2xl'/>
    </div>
  )
}

export default Searchbox