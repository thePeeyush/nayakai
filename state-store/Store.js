import { create } from "zustand";

export const useOurStore = create(
    (set)=>({
        chat : [],
        loadingChat : false,
        addChat : ({text,isBot}) => set((state)=>({chat:[...state.chat,{text:text,isBot:isBot}]})),
        resetChat: ()=>set(()=>({chat:[]})),
        setLoading : (bool)=>set(()=>({loadingChat:bool})),

        language:"English",
        changeLanguage: (text)=>set(()=>({language:text})),

        navToggle:false,
        toggleNav: ()=>set((state)=>({navToggle:!state.navToggle})),

        sortBy:null,
        setSort: (order)=>set(()=>({sortBy:order})),

    })
)