'use client'
import React from 'react'
import { IoCreateOutline } from 'react-icons/io5'
import CreatePost from './CreatePost'

const ModalForPost = () => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={toggleCreatePostModal}>
            <div className="flex">
              <IoCreateOutline className='text-2xl'/>
              <h1 className='hidden md:block pt-[2px]'>Post</h1>
              </div>
            </button>
            <dialog id="createPostModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <CreatePost/>
                </div>
            </dialog>
        </>
    )
}

export default ModalForPost

export async function toggleCreatePostModal() {
    document.getElementById('createPostModal').showModal();
}