import React from 'react'
import Auth from '../../components/Auth'
import { redirect } from 'next/dist/server/api-utils';
import { auth } from '../../auth';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full'>
    <Link href={'/'}><h1 className='font-bold text fixed w-full p-6 text-xl'>NAYAK <span className='font-thin'>AI</span></h1></Link>
    <div className='w-full h-full flex justify-center items-center flex-col'>
        <Auth/>
    </div>
    </div>
  )
}

export default page