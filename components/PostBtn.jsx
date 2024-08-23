'use client'
import React from 'react'
import { IoCreateOutline } from 'react-icons/io5'
import { toggleCreatePostModal } from './ModalForPost'

const PostBtn = () => {
  return (
    <div onClick={() => toggleCreatePostModal()} className="flex lg:w-full lg:btn  lg:rounded-full lg:glass">
    <IoCreateOutline className='text-3xl'/>
    <h1 className='hidden md:block pt-[3px] text-base'>Post</h1>
    </div>
  )
}

export default PostBtn