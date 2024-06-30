'use client'
import Image from 'next/image'
import React from 'react'
import { useOurStore } from '../store/states';

const ProfilePicture = () => {
    const userProfile = useOurStore((state) => state.userProfile);
    const picture = userProfile?.profilePic;
    const name = userProfile?.name;
    return (
        <div className="flex flex-row items-center gap-4 w-full">
            <Image src={picture || 'https://res.cloudinary.com/dqm3jessx/image/upload/v1717909608/rwoc4fvxe0ik2eqce1ed.png'} width={100} height={100} className='bg-gray-800 min-w-8 w-8 h-8 rounded-full tooltip' alt='profile picture' />
            <h1 className='hidden md:block text-ellipsis overflow-clip text-nowrap ' >{name}</h1>
        </div>

    )
}

export default ProfilePicture