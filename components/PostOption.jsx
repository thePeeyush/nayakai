'use client'
import React from 'react'
import { PiDotsThreeVertical } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { useOurStore } from '../store/states';
import { deletePost } from '../server/action';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PostOptions = ({ postID, autherID }) => {
  const userProfile = useOurStore((state) => state.userProfile);
  const router  = useRouter();
  const [deleted, setDeleted] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const isMyPost = userProfile?._id === autherID;

  const handleDelete = async () => {
    setDeleting(true);
    const result = await deletePost(postID);
    if(!result) return;
    setDeleting(false);
    setDeleted(true);
    router.refresh();
  }
  if (!isMyPost) return;
  return (
    <div className="dropdown dropdown-end grow">
      <label tabIndex={0} role='button'> 
        {deleted ? <p className='text-red-500 float-right'>Deleted ✔️</p> : <PiDotsThreeVertical className="text-lg cursor-pointer hover:text-gray-700 hover:rounded-full float-right" />}
        </label>
      {
        !deleted && (
          <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              onClick={handleDelete}
              className="text-red-500 bg-base-200 hover:bg-red-500 hover:bg-opacity-30 backdrop-blur-md"
              disabled={deleting}
            >
            <span><MdDelete className="text-red-500 text-xl" /></span>
              {deleting ? "Deleting... " : "Delete"}
            </button>
          </li>
        </ul>
        )
      }
    </div>
  )
}

export default PostOptions