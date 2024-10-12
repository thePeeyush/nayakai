'use client'
import React from 'react'
const ProfileBar = ({profile}) => {
    const [status, setStatus] = React.useState('Posts');
  return (
    <div className="flex w-full border border-x-0 border-base-200">
          <Info status={status} onClick={()=>setStatus('Posts')} label="Posts" value={profile?.posts?.length} />
          <Info status={status} onClick={()=>setStatus('followers')} label="followers" value={profile?.followers.length} />
          <Info status={status} onClick={()=>setStatus('following')} label="following" value={profile?.following.length} />
        </div>
  )
}

const Info = ({label, value, onClick, status}) => { 
    return(
        <div onClick={onClick} className={`flex items-center w-full justify-center p-4 gap-2 cursor-pointer ${status === label ? 'bg-neutral bg-opacity-30' : '' }`}>
          <h1 className='text-sm'>{value}</h1>
          <h1 className='text-sm'>{label}</h1>
        </div>
    )
}




export default ProfileBar