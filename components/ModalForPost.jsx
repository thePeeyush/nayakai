'use client'
import React from 'react'
import CreatePost from './CreatePost'
import { useOurStore } from '../store/states'


const ModalForPost = () => {
    const resetPost = useOurStore((state) => state.resetPost);
    return (
        <>
            <dialog id="createPostModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={resetPost} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <CreatePost/>
                </div>
            </dialog>
        </>
    )
}

export default ModalForPost

export async function toggleCreatePostModal() {
const modal = document.getElementById('createPostModal');
  if(modal.open){
    modal.close();
  }else{
    modal.showModal();
  }
}