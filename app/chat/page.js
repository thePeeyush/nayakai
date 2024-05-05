
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Chat from "@/components/Chat";

export default async function Page () {
   const session = await auth()
   if (!session) { 
    redirect('/api/auth/signin')
   }
  return (
    <Chat/>
  )
}