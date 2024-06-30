'use client'
import React from 'react'
import { PiDotsThreeVertical } from "react-icons/pi";
import { useOurStore } from '../store/states';
import { deletePost } from '../server/action';
import { useState } from 'react';

const PostOptions = ({ postID }) => {
  const userProfile = useOurStore((state) => state.userProfile);
  const isMyPost = userProfile?.posts?.includes(postID);
  const [deleted, setDeleted] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    setDeleting(true);
    const result = await deletePost(postID);
    if(!result) return;
    setDeleting(false);
    setDeleted(true);
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
              className="text-red-500"
              disabled={deleting}
            >
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