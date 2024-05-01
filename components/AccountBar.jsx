import Image from 'next/image'
import React from 'react'
  
const AccountBar = ({text}) => {
    return (
      <div className="hidden md:flex flex-row justify-between items-center gap-3 p-3">
              <div className="flex flex-row items-center gap-4 w-full">
                <Image src="/logo.png" width={100} height={100} className='bg-gray-800 w-8 rounded-full' alt='profile picture'/>
                <h2 className='font-medium text-lg'>{"Hello " + text}</h2>
              </div>
          </div>
    )
  }

export default AccountBar