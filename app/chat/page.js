"use client"
import LoadingChat from "@/components/LoadingChat";
import MessageLeft from "@/components/message-left";
import MessageRight from "@/components/message-right";
import { useChatStore } from "@/state-store/chatStore";
import { useEffect, useRef } from "react";

export default function Page() {
    const chat = useChatStore((state)=>state.chat);
    const loadingChat = useChatStore((state)=>state.loadingChat);
    const DivRef  = useRef(null);

    useEffect(()=>{
      DivRef.current.scrollTop = DivRef.current.scrollHeight;
    },[chat])

    
return (
    <div className="w-full h-full overflow-y-scroll scroll-auto chatRoot px-2" ref={DivRef}>
       <div className="max-w-4xl mx-auto my-20 transition-transform">
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