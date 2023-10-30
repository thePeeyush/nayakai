import ChatInput from "@/components/chat-input";

export default function ChatLayout({children}) {
    return(
        <div className="w-full flex flex-col items-center bg-gradient-to-tl from-violet-100 via-blue-50 to-cyan-100 relative">  
            {children}
            <div className="bottom-0 w-full p-4 rounded-t-3xl">
            <ChatInput/>
            </div>
        </div>
    )
}