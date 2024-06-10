'use client'

import LoadingChat from "@/components/LoadingChat";
import MessageAi from "@/components/message-ai";
import MessageUser from "@/components/message-user";
import { useOurStore } from "@/store/states";
import { useEffect, useRef } from "react";


export default function Chat() {
    const chat = useOurStore((state)=>state.chat);
    const loadingChat = useOurStore((state)=>state.loadingChat);
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay);
    const DivRef  = useRef(null);

    useEffect(()=>{
      DivRef.current.scrollTop = DivRef.current.scrollHeight;
    },[chat])
    
return (
    <div className={`w-full h-full overflow-y-scroll scroll-auto chatRoot px-2 ${chatContactDisplay?'hidden':'block'}`} ref={DivRef}>
       <div className="max-w-4xl mx-auto my-20 transition-transform flex flex-col gap-8">
       <MessageAi text={"Hello, I am your legal advisor, please tell me how I can help you."}/>
       {
        chat.map((chat)=>{
          return(chat.isBot === true ? <MessageAi text={chat.text}/> : <MessageUser text={chat.text} />)
        })
       }
       {loadingChat && <LoadingChat/>}
       </div>
    </div>
  );
}