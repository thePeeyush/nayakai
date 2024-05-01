import ChatInput from "@/components/chat-input";
import ContactCard from "@/components/ContactCard";
import PeerCard from "@/components/PeerCard";

export default function ChatLayout({children}) {
    return(
        <div className="flex flex-row w-full">
            <div className="mt-16 min-w-[20rem] p-2 overflow-y-scroll track-hide">
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
                <PeerCard/>
            </div>
            <div className="w-full flex flex-col items-center relative mt-16 bg-wave ">  
            {children}
            <div className="bottom-0 w-full p-4 rounded-t-3xl">
            <ChatInput/>
            </div>
        </div>
        </div>
    )
}