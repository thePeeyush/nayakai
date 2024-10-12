import Chat from "@/components/Chat";
import ChatInput from "../../components/chat-input";
import ChatContacts from "../../components/ChatContacts";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export default async function Page () {
   const session = await auth()
   if (!session) { 
    redirect('/api/auth/signin')
   }
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