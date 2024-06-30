'use client'
import React from 'react'
const ProfileBar = ({profile}) => {
    const [status, setStatus] = React.useState('Posts');
  return (
    <div className="flex w-full border border-x-0">
          <Info status={status} onClick={()=>setStatus('Posts')} label="Posts" value={profile?.posts?.length} />
          <Info status={status} onClick={()=>setStatus('liked')} label="liked" value={profile?.likes?.length} />
          <Info status={status} onClick={()=>setStatus('saved')} label="saved" value={0} />
        </div>
  )
}

const Info = ({label, value, onClick, status}) => { 
    return(
        <div onClick={onClick} className={`flex items-center w-full justify-center p-4 gap-2 hover:bg-gray-200 ${status === label ? 'bg-gray-100' : '' }`}>
          <h1 className='text-sm'>{value}</h1>
          <h1 className='text-sm'>{label}</h1>
        </div>
    )
}




export default ProfileBar