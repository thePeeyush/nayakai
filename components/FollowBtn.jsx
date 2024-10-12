'use client'
import React from 'react'
import { followProfile } from '../server/action';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOurStore } from '../store/states';
import { useEffect } from 'react';

const FollowBtn = ({ profileID }) => {
    const [follow, setFollow] = useState(false);
    const router = useRouter();
    const userProfile = useOurStore((state) => state.userProfile);
    const isUserFollowProfile = userProfile?.following?.includes(profileID);
    useEffect(() => {
        setFollow(isUserFollowProfile);
    }, [isUserFollowProfile])

    const handleFollow = async () => {
        setFollow(!follow);
        const result = await followProfile(profileID);
        if(!result) setFollow(!follow);
        router.refresh();
    }

    if (follow) {
      return (
        <div className='flex flex-row items-center w-full'>
        <div className='w-1/2 pr-2'><button className={`btn ${follow ? "btn-outline text-white" : "bg-white text-black outline-none border-none"} hover:bg-gray-200 hover:bg-opacity-20 md:px-8 lg:px-12 rounded-full w-full`} onClick={handleFollow}>Unfollow</button></div>
        <div className='w-1/2 pl-2'><button className={`btn bg-white text-black outline-none border-none hover:bg-gray-200 hover:bg-opacity-20 md:px-8 lg:px-12  ml-auto rounded-full w-full`}>Message</button></div>
        </div>
      )
    }else {
      return (
        <button className={`btn ${follow ? "btn-outline text-white" : "bg-white text-black outline-none border-none"} hover:bg-gray-200 hover:bg-opacity-20 md:px-8 lg:px-12  ml-auto rounded-full w-full`} onClick={handleFollow}>follow</button>
      )
    }
}

export default FollowBtn