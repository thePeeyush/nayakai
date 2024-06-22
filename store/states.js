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

        sortBy:null,
        setSort: (order)=>set(()=>({sortBy:order})),

        chatContactDisplay:true,
        setChatContactDisplay: (bool)=>set(()=>({chatContactDisplay:bool})),

        post: {
            text:"",
            media:[],
            preview:[],
            tags:[],
            uploading:false,
            posting:false,
            haveProfile:true,
            postToComment: {},
        },
        setPost: (post)=>set(()=>({post:post})),
        resetPost: ()=>set(()=>({post:{text:"",media:[],preview:[],tags:[],uploading:false,posting:false,haveProfile:true,postToComment: {}}})),

    })
)