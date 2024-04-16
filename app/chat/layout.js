import ChatInput from "@/components/chat-input";

export default function ChatLayout({children}) {
    return(
        <div className="w-full flex flex-col items-center relative mt-16 bg-wave ">  
            {children}
            <div className="bottom-0 w-full p-4 rounded-t-3xl">
            <ChatInput/>
            </div>
        </div>
    )
}