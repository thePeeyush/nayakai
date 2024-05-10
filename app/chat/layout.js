'use client'

import ChatInput from "@/components/chat-input";
import ChatContacts from "@/components/ChatContacts";
import { useOurStore } from "@/state-store/Store";

export default function ChatLayout({children}) {
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay)
    return(
        <div className="flex flex-row w-full">
            {children}
        </div>
    )
}