import Image from 'next/image'
import React from 'react'
import { useOurStore } from '@/store/states';

const PeerCard = () => {
  const setChatContactDisplay = useOurStore(s=>s.setChatContactDisplay)
  return (
    <div onClick={()=>setChatContactDisplay(false)} className="flex flex-col rounded-md shadow-sm my-2 w-full hover:bg-base-200 md:max-w-[350px] overflow-hidden">
        <div className="flex flex-row items-center gap-4 p-3 cursor-pointer">
            <Image src="/logo.png" width={100} height={100} className='bg-gray-800 w-12 rounded-full' alt='profile picture' />
            <div className='flex flex-col justify-center'>
            <h2 className='font-medium text-lg'>NayakAI</h2>
            <h3 className='font-light text-sm'>Your Legal Chatbot</h3>
            </div>
        </div>
    </div>
  )
}

export default PeerCard