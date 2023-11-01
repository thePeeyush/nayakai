import { create } from "zustand";

export const useChatStore = create(
    (set)=>({
        chat : [],
        loadingChat : false,
        addChat : ({text,isBot}) => set((state)=>({chat:[...state.chat,{text:text,isBot:isBot}]})),
        resetChat: ()=>set(()=>({chat:[]})),
        setLoading : (bool)=>set(()=>({loadingChat:bool}))
    })
)