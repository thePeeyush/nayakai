import React from 'react'
import Auth from '../../components/Auth'

const page = () => {
  return (
    <div className='w-full'>
    <h1 className='font-bold text fixed w-full p-6 text-xl'>NAYAK <span className='font-thin'>AI</span></h1>
    <div className='w-full h-full flex justify-center items-center flex-col'>
        <Auth/>
    </div>
    </div>
  )
}

export default page