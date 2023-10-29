"use client"

import { BsMic } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';

export default function ChatInput() {
  
  return (
    <div className='flex flex-row justify-center items-end bg-white p-4 rounded-[15px] max-w-4xl mx-auto border'>
        <div className="mic text-xl text-yellow-700 cursor-pointer"><BsMic/></div>
        <input className='w-full min-h-min outline-none px-4' placeholder='Ask me anything...'/>
        <div className="send text-xl text-yellow-700 cursor-pointer"><BiSend/></div>
    </div>
  )
}
