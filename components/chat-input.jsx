"use client"

import { BsMic } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';
import { useState } from 'react';
import { useOurStore } from '@/store/states';
import { RiChatNewLine } from 'react-icons/ri';


export default function ChatInput() {

  const [text,setText] = useState("")

  const addChat = useOurStore((state)=>state.addChat);
  const resetChat = useOurStore((state)=>state.resetChat);
  const setLoading = useOurStore((state)=>state.setLoading);

  const handleSubmit = async () =>{
    if(text != ""){
    addChat({text,isBot:false})
    setText("")
    setLoading(true);
    const response = await getAnswer(text);
    if(response.message === "OK"){
      const answer = response.result.content;
    setLoading(false);
    addChat({text:answer,isBot:true})
    }
    }
  }

  const getAnswer = async(text) =>{
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({prompt:text}),
    });
    return response.json()
  }
  
  return (
    <div className='flex flex-row justify-center items-end p-4 rounded-[15px] max-w-5xl mx-auto border border-base-300 w-10/12 mb-4'>
        {/* <div className="mic text-xl text-netral-content cursor-pointer"><BsMic/></div> */}
        <input className='w-full min-h-min outline-none px-4' value={text} onChange={(e)=>{setText(e.target.value)}} onKeyDown={(e)=>{e.key === "Enter" && handleSubmit()}} placeholder='Ask me anything...'/>
        {text !== "" ? <button className="send text-xl cursor-pointer outline-none" onClick={handleSubmit} ><BiSend/></button> : <RiChatNewLine className=" text-xl cursor-pointer" onClick={resetChat}/>}
    </div>
  )
}

