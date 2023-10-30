"use client"
import MessageLeft from "@/components/message-left";
import MessageRight from "@/components/message-right";
import { useChatStore } from "@/state-store/chatStore";

export default function Page() {
    const chat = useChatStore((state)=>state.chat);   
return (
    <div className="w-full h-full overflow-y-scroll chatRoot">
       <div className="max-w-4xl mx-auto my-20">
       <MessageLeft text={"Namaste main hu aapka legal advisor, kripya batayen me apki kaise madad kar sakta hu"}/>
       {/* <MessageRight text={"main hu nanha balak"}/>
       <MessageLeft text={"kuch nhi balak apki sahayta ke liye uplabdha hai 1098 toll free no for child helpline"}/>
       <MessageRight text={"ha kya"}/>
       <MessageLeft text={"are bhai ha main ekdam sahi keh raha hu"}/>
       <MessageRight text={"aap bahut achhe hai hame sari jankari dete hai"}/>
       <MessageLeft text={"main aapki seva me 24/7 uplabhda hu"}/>
       <MessageRight text={"koi dikkat to nhi hai"}/>
       <MessageRight text={"kyo ai"}/>
       <MessageLeft text={"nahi mujhe koi dikkat nhi hai aapko hai to mujhe bataiye"}/>
       <MessageRight text={"bye"}/>
       <MessageLeft text={"bye, main apki sahata ki liye hamesha aapke sath hu. "}/> */}
       {
        chat.map((chat)=>{
          return(chat.isBot === true ? <MessageLeft text={chat.text}/> : <MessageRight text={chat.text} />)
        })
       }
       </div>
    </div>
  );
}