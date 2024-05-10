'use client'

import React from 'react'
import PeerCard from "./PeerCard";
import { useOurStore } from '@/state-store/Store';


const ChatContacts = () => {
    const chatContactDisplay = useOurStore(s=>s.chatContactDisplay)
  return (
    <div className={`mt-16 min-w-[100vw] md:min-w-[20rem] p-2 overflow-y-scroll track-hide border-r ${chatContactDisplay?'block':'hidden md:block'}`}>
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