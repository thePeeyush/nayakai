
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Chat from "@/components/Chat";
import ChatInput from "../../components/chat-input";
import ChatContacts from "../../components/ChatContacts";
import { io } from "socket.io-client";

export default async function Page () {
   const session = await auth()
   if (!session) { 
    redirect('/api/auth/signin')
   }

   const socket = io( "http://localhost:5000" );

   socket.on("connect", () => {
    console.log("connected");
   })

   socket.on("message", (data) => {
    console.log(data)
   })

  return (
    <div className="flex flex-row w-full">
      <ChatContacts/>
      <div className="flex flex-col items-center w-full">
      <Chat/>
      <ChatInput/>
      </div>
    </div>
  )
}