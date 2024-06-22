'use client'
import React from 'react'
import { IoCreateOutline } from 'react-icons/io5'
import { toggleCreatePostModal } from './ModalForPost'

const PostBtn = () => {
  return (
    <div onClick={() => toggleCreatePostModal()} className="flex">
    <IoCreateOutline className='text-2xl'/>
    <h1 className='hidden md:block pt-[2px]'>Post</h1>
    </div>
  )
}

export default PostBtn