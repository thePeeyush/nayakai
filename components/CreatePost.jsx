'use client'
import React from 'react';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import uploadMedia from '../utils/uploadMedia';

const CreatePost = () => {
    const [text, setText] = useState("");
    const [media, setMedia] = useState([]);
    const [preview, setPreview] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [tags, setTags] = useState([]);
    const [unploading, setUnploading] = useState(false);
    const [posting, setPosting] = useState(false);

    const addTags = (e) => {
        setTags([...tags, e.target.value]);
    }


    const addPreview = (file) => {
        const url = URL.createObjectURL(file);
        setPreview([...preview, { url, filetype: file.type }]);
    }

    const uploadPost = async (e) => {
        e.preventDefault();
        if (text === "" && media.length === 0) {
            return;
        }
        setSubmit(true);
        try {
            const res = await fetch('/api/createPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: text,
                    media: media,
                }),
            });
            if (!res.ok) {
                throw new Error(`Something went wrong: ${res.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const uploadFile = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        addPreview(file);
        setUnploading(true);
        const result = await uploadMedia(file);
        setMedia([...media, result]);
        setUnploading(false);
    }

    if (submit) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-lg">Your post has been created. Thank you!</p>
            </div>
        )
    }
    else return (
        <form onSubmit={e => uploadPost(e)} className="flex flex-col gap-5 mt-4 rounded-lg mx-auto max-w-3xl ">
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Describe your thougts here...' className={` bg-transparent outline-none border-none min-w-72 w-full min-h-40`} type="text" />
            <div className="carousel rounded-md shadow-md outline outline-2 relative">
                {preview.length > 0 && preview.map((element, index) => {
                    return (
                        <div key={index} className="carousel-item relative">
                            {element.filetype.includes('image') && <img className="w-72 h-72 object-cover" src={element.url} alt="image" />}
                            {element.filetype.includes('video') && <video className="w-72 h-72 object-cover" src={element.url} alt="video" />}
                            <div className={`absolute bottom-5 left-5 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-xs `} >{element.filetype.includes('image') ? 'Image' : 'Video'}</div>

                        </div>
                    )
                }
                )}
                <div className={`absolute bottom-5 right-5 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-xs ${unploading ? 'block' : 'hidden'} `} >Uploading</div>
            </div>
            <div className="flex justify-between items-center">
                <div className='relative'>
                    <BiImageAdd className='text-3xl w-8 h-8' />
                    <input type="file" onChange={e => uploadFile(e)} className=' opacity-0 absolute top-0 w-8 h-8' />
                </div>
                <button className='btn min-w-40' type='submit' disabled={unploading || posting}>{posting ? 'Posting...' : 'Post'}</button>
            </div>
        </form>
    )
}

export default CreatePost