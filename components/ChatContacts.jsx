'use client'

import React from 'react'
import PeerCard from "./PeerCard";
import { useOurStore } from '@/store/states';


const ChatContacts = () => {
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay)
  return (
    <div className={`pt-16 lg:pt-2  min-w-[100vw] md:min-w-[20rem] p-2 overflow-y-scroll track-hide border-r border-base-200 ${chatContactDisplay?'block':'hidden md:block'}`}>
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
  )
}

export default ChatContacts