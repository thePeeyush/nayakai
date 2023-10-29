import ChatInput from "@/components/chat-input";

export default function ChatLayout({children}) {
    return(
        <div className="bg-gradient-to-tl from-green-100 via-white to-orange-100 w-full flex flex-col items-center">  
            {children}
            <div className="bottom-0 w-full p-4 rounded-t-3xl">
            <ChatInput/>
            </div>
        </div>
    )
}