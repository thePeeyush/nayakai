"use client"

import { BsMic } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';
import { useState } from 'react';
import { useOurStore } from '@/store/states';
import { RiChatNewLine } from 'react-icons/ri';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GrNewWindow } from "react-icons/gr";
import Image from 'next/image';
import { cn } from '../utils/cn';
import uploadMedia from '../utils/uploadMedia';
import Link from 'next/link';


export default function ChatInput({ className }) {

  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const {addChat, setLoading, setConversationID, conversationID, resetChat} = useOurStore(state => state);

  const handleSubmit = async () => {
    if (text != "") {
      addChat({ text, isBot: false, imageURL });
      setLoading(true);
      setText("");
      setImageURL(null);
      const response = await getAnswer(text);
      if (response.status === "OK") {
        const { message , conversation_id, sources} = response.data;
        setConversationID(conversation_id);
        if(response.data.user_messages_remaining === 0) {
          setConversationID(null);
        }
        setLoading(false);
        addChat({ text: message, isBot: true , sources});
      }
    }
  }

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const src = URL.createObjectURL(file);
    setUploadingImage(true);
    setImageURL(src);
    const { url } = await uploadMedia(file);
    setImageURL(url);
    setUploadingImage(false);
  }

  const handleDeleteImage = (e) => {
    e.stopPropagation();
    setImageURL(null);
  }


  const getAnswer = async (text) => {
    console.log(text);
    const url = 'https://copilot5.p.rapidapi.com/copilot';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'e30eeb7046msh0e269dd30c0aabfp10baf5jsn6cc47664a3cb',
        'x-rapidapi-host': 'copilot5.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: "Remember you are a Indian legal advisor, " + "Query :" +text,
        conversation_id: conversationID,
        tone: 'BALANCED',
        markdown: false,
        photo_url: imageURL
      })
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return JSON.parse(result);
    } catch (error) {
      console.error(error);
      return {
        status: "ERROR",
        data: null
      }
    }
  }

  return (
    <div className={cn('flex flex-row justify-center items-end p-4 rounded-[15px] max-w-5xl mx-auto border border-base-300 w-10/12 mb-4 relative', className)}>
      {
        imageURL
          ? <div className='cursor-pointer w-16 h-8 rounded-md relative outline outline-1 outline-base-300 flex bg-base-300'>
            {imageURL && <button className="btn btn-xs max-w-6 rounded-md rounded-r-none h-8 btn-ghost" onClick={(e) => handleDeleteImage(e)}>✕</button>}
            <Link href={imageURL} target="_blank" >
              <Image src={imageURL || ""} alt='image' width={100} height={100} className={`w-8 h-8 rounded-md object-cover ${uploadingImage ? "opacity-50" : "opacity-100"}`} />
            </Link>
            {uploadingImage && <span className="loading loading-ring loading-md absolute top-1 right-1"></span>}
          </div>
          : <div className=" text-xl text-netral-content cursor-pointer">
            <MdOutlineAddPhotoAlternate /><input className='w-8 h-8 rounded-full top-2.5 left-1.5 opacity-0 absolute' type="file" accept=".jpg, .jpeg, .png .gif, .webp, image/*" onChange={e => uploadImage(e)} />
          </div>
      }

      <input className='w-full min-h-min outline-none px-4 bg-transparent' value={text} onChange={(e) => { setText(e.target.value) }} onKeyDown={(e) => { e.key === "Enter" && handleSubmit() }} placeholder='Ask me anything...' />
      {text !== "" ? <button className="send text-xl cursor-pointer outline-none" onClick={handleSubmit} ><BiSend /></button> : <GrNewWindow className=" text-xl cursor-pointer" onClick={resetChat} />}
    </div>
  )
}

