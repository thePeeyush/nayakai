import { create } from "zustand";

const chatStore = create((set)=>({
    chats:{},
    addChat:()=>set((state)=>({chats:state.chat()}))
}))


const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))