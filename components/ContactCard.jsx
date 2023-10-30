import Image from 'next/image'
import React from 'react'
import { BiCurrentLocation, BiMailSend, BiPhoneCall } from 'react-icons/bi'

const ContactCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md my-2 max-w-[350px] w-full overflow-hidden">
        <div className="flex flex-row items-center gap-4 p-3 bg-gray-50">
            <Image src="/logo.png" width={100} height={100} className='bg-gray-800 w-12 rounded-full' alt='profile picture' />
            <div className='flex flex-col justify-center'>
            <h2 className='font-medium text-lg'>Police</h2>
            <h3 className='font-light text-sm'>Harrai, Chhindwara</h3>
            </div>
        </div>
        <div className="flex flex-row bg-red-100 text-2xl p-3 justify-end gap-3 cursor-pointer">
            <BiPhoneCall className=' hover:text-green-700 '/>
            <BiMailSend className=' hover:text-green-700 '/>
            <BiCurrentLocation className=' hover:text-green-700 '/>
        </div>
    </div>
  )
}

export default ContactCard