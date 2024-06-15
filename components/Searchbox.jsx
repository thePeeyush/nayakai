'use client'
import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Filter from './Filter';
import { usePathname, useRouter } from 'next/navigation';
import { RxCrossCircled } from "react-icons/rx";


const Searchbox = ({ text }) => {
  const [inputText,setInputText] = useState('');
  const searchText = useDebounce(inputText,500);

  useEffect(() => {
    handleClick()
  }, [searchText])
  
  
  const inputRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();


  const handleClick = () =>{
    if(searchText === ''){
      router.push(pathname)
    }else router.push(`?search=${searchText}`)
  }

  return (
    <div className="flex items-center gap-2">
      <div className='flex flex-row w-full items-center justify-end md:max-w-[810px] lg:max-w-md rounded-full border py-2 px-3 my-4'>
        <BiSearch onClick={(e) => handleClick(e)} className='text-2xl cursor-pointer' />
        <input 
          ref={inputRef}
          value={inputText}
          onChange={(e)=>{setInputText(e.target.value)}}
          onKeyDown={e=> {e.key === 'Enter' && handleClick(e)}}
          type="text"
          placeholder={`Search ${text} . . .`} 
          className=' text-left w-full pl-3 outline-none' />
        <RxCrossCircled onClick={()=>{setInputText('')}} className={searchText?'block text-xl cursor-pointer':'hidden'}/>
      </div>
      {/* <Filter /> */}
    </div>
  )
}
export default Searchbox

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};