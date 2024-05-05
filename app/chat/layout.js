'use client'

import ChatInput from "@/components/chat-input";
import ChatContacts from "@/components/ChatContacts";
import { useOurStore } from "@/state-store/Store";

export default function ChatLayout({children}) {
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay)
    return(
        <div className="flex flex-row w-full">
            <ChatContacts/>
            <div className={`w-full flex flex-col items-center relative mt-16 bg-wave ${chatContactDisplay?'hidden md:block':'block'}`}>  
            {children}
            <div className="bottom-0 w-full p-4 rounded-t-3xl">
            <ChatInput/>
            </div>
        </div>
        </div>
    )
}