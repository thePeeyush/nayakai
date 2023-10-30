import { create } from "zustand";

export const useChatStore = create(
    (set)=>({
        chat : [],
        addChat : ({text,isBot}) => set((state)=>({chat:[...state.chat,{text:text,isBot:isBot}]})),
        resetChat: ()=>set((state)=>({chat:[]}))
    })
)