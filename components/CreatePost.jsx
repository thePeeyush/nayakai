'use client'
import React from 'react';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import uploadMedia from '../utils/uploadMedia';
import Link from 'next/link';
import getUrl from '../utils/getUrl';
import { toggleCreatePostModal } from './ModalForPost';
import { useForm } from 'react-hook-form';
import MiniPostCard from './MiniPostCard';
import { useOurStore } from '../store/states';
import { useRouter } from 'next/navigation';

const CreatePost = () => {
    const { post, setPost, resetPost, setPostToComment,haveProfile, setHaveProfile, setPostPosting, setPostMedia, setPostText, setPostPreview, setPostUploading, setPostTags } = useOurStore((state) => state);
    const { text, media, preview, tags, uploading, posting, postToComment } = post;
    const router = useRouter();

    const addTags = (e) => {
        setPostTags([...tags, e.target.value]);
        e.target.value = "";
    }
    const uploadPost = async () => {
        setPostPosting(true);
        try {
            const url = `${getUrl()}/api/createPost`;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: text,
                    media: media,
                    level: postToComment?.level+1,// always +1 for reply
                    postID: postToComment?.postID
                }),
            });
            if (res.status === 201) {
                resetPost();
                toggleCreatePostModal();
                router.refresh();
            }
            if (res.status === 404 ) {
                setHaveProfile(false);
                setPostPosting(false);
            }
            if (!res.ok) {
                throw new Error(`Something went wrong: ${res.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const uploadFile = async (e) => {
        e.preventDefault();
        setPostUploading(true);
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setPostPreview({ url: url, filetype: file.type });
        const result = await uploadMedia(file);
        setPostMedia(result);
        setPostUploading(false);
    }
    const { handleSubmit, register, formState: { errors } } = useForm();

    if (!haveProfile) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-lg">You need to create a profile first </p>
                <Link href={`${getUrl()}/profile/create`} onClick={()=>toggleCreatePostModal()} className='btn mx-2' >Create Profile</Link>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(uploadPost)} className="flex flex-col gap-5 mt-4 rounded-lg mx-auto max-w-3xl ">
            {postToComment?.postID && <MiniPostCard post={postToComment} />}
            <textarea {...register("content", { required: true })} value={text} onChange={(e) => setPostText(e.target.value)} placeholder='Describe your thougts here...' className={` bg-transparent outline-none border-none min-w-72 w-full min-h-40`} type="text" />
            {errors.content && <p className='text-red-500 text-xs bg-red-50 p-2 w-full rounded-sm' >👆 Text Content is required</p>}
            <div className="carousel rounded-md shadow-md outline outline-2 relative">
                {preview?.length > 0 && preview.map((element, index) => {
                    return (
                        <div key={index} className="carousel-item relative">
                            {element.filetype.includes('image') && <img className="w-72 h-72 object-cover" src={element.url} alt="image" />}
                            {element.filetype.includes('video') && <video className="w-72 h-72 object-cover" src={element.url} alt="video" />}
                            <div className={`absolute bottom-5 left-5 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-xs `} >{element.filetype.includes('image') ? 'Image' : 'Video'}</div>
                        </div>
                    )
                }
                )}
                <div className={`absolute bottom-5 right-5 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-xs ${uploading ? 'block' : 'hidden'} `} >Uploading</div>
            </div>
            <div className="flex justify-between items-center">
                <div className='relative'>
                    <BiImageAdd className='text-3xl w-8 h-8' />
                    <input type="file" {...register("media", { required: false })} onChange={e => uploadFile(e)} className=' opacity-0 absolute top-0 w-8 h-8' />
                </div>
                {postToComment?.postID ? (
                    <button className='btn min-w-40' type='submit' disabled={uploading || posting}>{posting ? 'Commenting...' : 'Comment'}</button>
                ) : (
                    <button className='btn min-w-40' type='submit' disabled={uploading || posting}>{posting ? 'Posting...' : 'Post'}</button>
                )}
            </div>
        </form>
    )
}

export default CreatePost