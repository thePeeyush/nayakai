
import Image from 'next/image'
import React from 'react'
import { BiCaretRight, BiChat, BiPhoneCall, BiVideo, BiVolumeFull } from 'react-icons/bi'

const LawyerCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md my-2 max-w-[350px] w-full overflow-hidden">
        <div className="flex flex-row justify-between items-center gap-3 p-3 bg-gray-50">
            <div className="flex flex-row items-center gap-4 w-full">
            <Image src="/logo.png" width={100} height={100} className='bg-gray-800 w-12 rounded-full' alt='profile picture'/>
            <div className='flex flex-col justify-center'>
            <h2 className='font-medium text-lg'>Namesh Mehta</h2>
            <h3 className='font-light text-sm text-gray-700'>Harrai, Chhindwara</h3>
            </div>
            </div>
            <div className=' min-w-fit'>
                4.2 ⭐
            </div>
        </div>
        <div className="flex flex-row bg-yellow-100 text-2xl p-3 justify-between">
            <div className='bg-green-700 text-white py-1 px-3 rounded-full text-xs'>online</div>
            <div className=' flex flex-row gap-3 cursor-pointer'>
            <BiPhoneCall className=' hover:text-green-700 '/>
            <BiVideo className=' hover:text-green-700 '/>
            <BiChat className=' hover:text-green-700 '/>
            </div>
        </div>
    </div>
  )
}

export default LawyerCard