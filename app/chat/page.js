"use client"
import LoadingChat from "@/components/LoadingChat";
import MessageLeft from "@/components/message-ai";
import MessageRight from "@/components/message-user";
import { useOurStore } from "@/state-store/Store";
import { useEffect, useRef } from "react";

export default function Page() {
    const chat = useOurStore((state)=>state.chat);
    const loadingChat = useOurStore((state)=>state.loadingChat);
    const DivRef  = useRef(null);

    useEffect(()=>{
      DivRef.current.scrollTop = DivRef.current.scrollHeight;
    },[chat])

    
return (
    <div className="w-full h-full overflow-y-scroll scroll-auto chatRoot px-2" ref={DivRef}>
       <div className="max-w-4xl mx-auto my-20 transition-transform flex flex-col gap-8">
       <MessageLeft text={"Hello, I am your legal advisor, please tell me how I can help you."}/>
       {
        chat.map((chat)=>{
          return(chat.isBot === true ? <MessageLeft text={chat.text}/> : <MessageRight text={chat.text} />)
        })
       }
       {loadingChat && <LoadingChat/>}
       </div>
    </div>
  );
}