'use client'
import Image from 'next/image'
import React from 'react'
import { BiChat, BiPhoneCall, BiVideo } from 'react-icons/bi'

const LawyerCard = ({ information }) => {
  const { name, phone, address, rating } = information;
  const [open, setOpen] = React.useState(false)
  return (
    <div onClick={() => setOpen(!open)} className={`flex flex-col justify-between bg-white rounded-md ${open ? 'shadow-md' : 'shadow-none'} max-w-[350px] w-full overflow-hidden hover:outline outline-1 outline-gray-200 hover:cursor-pointer hover:shadow-sm`}>
      <div className={`flex flex-row justify-between h-full items-center gap-3 p-3 ${open ? 'bg-yellow-50' : 'bg-slate-5'}`}>
        <div className="flex flex-row items-center gap-4 w-full">
          <Image src="/logo.png" width={100} height={100} className='bg-gray-800 w-12 rounded-full' alt='profile picture' />
          <div className='flex flex-col justify-center'>
            <h2 className='font-medium text-lg'>{name}</h2>
            <h3 className='font-light text-sm text-gray-700 max-h-10 overflow-y-hidden'>{`${address[0]?.city}, ${address[0]?.district}, ${address[0]?.state}`}</h3>
          </div>
        </div>
        <div className=' min-w-fit'>
          {rating} ⭐
        </div>
      </div>
      <div className={`flex flex-row bg-yellow-100 text-2xl p-3 justify-between ${open ? 'flex' : 'hidden'}`}>
        <div className='bg-green-700 text-white py-1 px-3 rounded-full text-xs'>online</div>
        <div className=' flex flex-row gap-3 cursor-pointer'>
          <a href={`tel:+91${phone}`}><BiPhoneCall className=' hover:text-green-700 ' /></a>
          <BiVideo className=' hover:text-green-700 ' />
          <BiChat className=' hover:text-green-700 ' />
        </div>
      </div>
    </div>
  )
}

export default LawyerCard