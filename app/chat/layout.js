'use client'

import ChatInput from "@/components/chat-input";
import ChatContacts from "@/components/ChatContacts";
import { useOurStore } from "@/store/states";

export default function ChatLayout({children}) {
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay)
    return(
        <div className="flex flex-row w-full">
            {children}
        </div>
    )
}