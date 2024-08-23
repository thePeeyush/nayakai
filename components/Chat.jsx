'use client'

import LoadingChat from "@/components/LoadingChat";
import MessageAi from "@/components/message-ai";
import MessageUser from "@/components/message-user";
import { useOurStore } from "@/store/states";
import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";
import Image from "next/image";


export default function Chat({className}) {
    const chat = useOurStore((state)=>state.chat);
    const loadingChat = useOurStore((state)=>state.loadingChat);
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay);
    const DivRef  = useRef(null);

    useEffect(()=>{
      DivRef.current.scrollTop = DivRef.current.scrollHeight;
    },[chat])
    
return (
    <div className={cn(`w-full h-full overflow-y-scroll scroll-auto chatRoot ${chatContactDisplay?'hidde':'block'}`,className)} ref={DivRef}>
       <div className="w-full mx-auto my- transition-transform flex flex-col gap-8">
       <Image src="/lawyer.svg" alt="ai lawyer" width={100} height={100} className="w-full h-full rounded-3xl max-w-[450px]" />
       <MessageAi text={"Hello, I am your legal advisor, please tell me how I can help you."}/>
       {
        chat.map((chat)=>{
          return(chat.isBot === true ? <MessageAi text={chat.text} sources={chat.sources}/> : <MessageUser text={chat.text} imageURL={chat.imageURL}/>)
        })
       }
       {loadingChat && <LoadingChat/>}
       </div>
    </div>
  );
}